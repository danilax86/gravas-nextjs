require("dotenv").config();
const next = require("next");
const express = require("express");
const fetch = require("cross-fetch/polyfill").fetch;
const ApolloClient = require("apollo-boost").ApolloClient;
const createHttpLink = require("apollo-link-http").createHttpLink;
const InMemoryCache = require("apollo-cache-inmemory").InMemoryCache;
const nextI18NextMiddleware = require("next-i18next/middleware").default;
const stripe = require("stripe")("sk_test_6fpgT5dOkU1OlplbP81h21Cl00rd3i0g5q");
const nextI18next = require("./i18n");
const moment = require("moment");
const createPDF = require("./gift-card-pdf");
const sendGiftCardEmail = require("./mails/gift-card");
const redirects = require("./redirects");

const STORE_GIFT_CARD = require("./graphql/mutations/storeGiftCard");
const GET_PRODUCTS_BY_ID = require("./graphql/queries/getProductsById");
const HANDLE_GIFT_CARD_PAYMENT_SUCCESS = require("./graphql/mutations/handleGiftCardPaymentSuccess");

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

const apollo = new ApolloClient({
  link: createHttpLink({
    uri: process.env["HASURA_ENDPOINT"],
    fetch
  }),
  cache: new InMemoryCache()
});

(async () => {
  await app.prepare();
  const server = express();

  server.use(require("body-parser").json());

  server.use(nextI18NextMiddleware(nextI18next));

  // Purchase endpoint
  server.post("/charge", async (req, res) => {
    try {
      // total is taken from shopping cart items in Checkout step
      const { items, total, theme, note, locale } = req.body;
      const products = await getProductsById(items.map(item => item.id));
      const verifiedTotal = calculateTotal(products, items);

      /** Throw generic error if verifiedTotal does not match the total */
      if (verifiedTotal !== total) {
        throw new Error(
          `Totals did not match, Expected: ${verifiedTotal}, Got: ${total}`
        );
      }

      /** Persist gift card */
      const giftCard = (await storeGiftCard(req.body, products)).data
        .insert_gift_cards.returning[0];

      /** Throw error if could not create gift card */
      if (!giftCard.reference) {
        throw new Error("payment.failed_to_create_gift_card");
      }

      /** Make charge */
      let stripeResponse = await stripe.charges.create({
        amount: verifiedTotal * 100,
        currency: "eur",
        description: `Gravas gift card No #${giftCard.reference}`,
        source: req.body.token
      });

      /** Throw error if payment does not go through */
      if (stripeResponse.status != "succeeded") {
        throw new Error("payment.payment_failed");
      }

      /** Update gift card with stripe ref and set paid to true */
      handleGiftCardPaymentSuccess(giftCard, stripeResponse);

      /** Generate PDF and send emial to the user */
      await createPDF({
        id: giftCard.reference,
        theme,
        note,
        items,
        validUntil: giftCard.valid_until,
        products
      });

      /** Send gift card in an email*/
      sendGiftCardEmail(giftCard, locale, stripeResponse.receipt_url);

      res
        .send({
          reference: giftCard.reference
        })
        .status(200)
        .end();
    } catch (error) {
      console.error(error);
      res
        .send({ error: "Sorry, something went wrong" })
        .status(500)
        .end();
    }
  });

  redirects.forEach(({ from, to, type = 301, method = "get" }) => {
    server[method](from, (req, res) => {
      res.redirect(type, to);
    });
  });

  server.get("*", (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`Listening on port ${port}`);
})();

const getProductsById = async productIds => {
  const response = await apollo.query({
    query: GET_PRODUCTS_BY_ID,
    variables: {
      productIds
    }
  });

  return response.data.products;
};

const calculateTotal = (products, items) => {
  return items.reduce((carry, item) => {
    const product = products.find(({ id }) => id === item.id);
    return carry + calculatePrice(item.persons || item.price, product);
  }, 0);
};

const calculatePrice = (units, product) => {
  switch (product.price_type.name) {
    case "absolute":
      return product.prices.find(price => price.persons === units).amount;
    case "per_person":
      return product.prices[0].amount * units;
    case "value":
      return units;
  }
};

const storeGiftCard = async (data, products) => {
  const { theme, contacts, note, items, token } = data;

  return await apollo.mutate({
    mutation: STORE_GIFT_CARD,
    variables: {
      design: theme,
      email: contacts.email,
      name: contacts.name || null,
      phone: contacts.phone || null,
      note: note || " ",
      payment: {
        data: {
          reference: token,
          amount: 100
        }
      },
      valid_until: moment()
        .add(8, "months")
        .format("YYYY-MM-DD HH:mm:ss"),
      items: {
        data: items.map(item => {
          const product = products.find(({ id }) => id === item.id);
          return {
            name: product.name,
            price: calculatePrice(item.persons || item.price, product),
            price_type: product.price_type.name,
            type: product.type.name,
            data: item.persons || item.price
          };
        })
      }
    }
  });
};

const handleGiftCardPaymentSuccess = async (giftCard, stripeResponse) => {
  const { id: stripe_ref } = stripeResponse;

  await apollo.mutate({
    mutation: HANDLE_GIFT_CARD_PAYMENT_SUCCESS,
    variables: {
      id: giftCard.id,
      stripe_ref
    }
  });

  giftCard.stripe_ref = stripe_ref;

  return giftCard;
};
