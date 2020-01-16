import React, { useState, useEffect } from "react";
import { withTranslation } from "../../i18n";
import { withApollo } from "../../lib/apollo";
import { Elements, StripeProvider } from "react-stripe-elements";
import Snackbar from "@material-ui/core/Snackbar";
import styled from "@emotion/styled";

// Style
import Layout from "../../components/Layout";
import Container from "../../components/gift-card-flow/container/style";
import Main from "../../components/gift-card-flow/main/style";
import Content from "../../components/gift-card-flow/content/style";
import Stepper from "../../components/gift-card-flow/stepper/Stepper";

//Comps
import DesignStep from "../../components/gift-card-flow/design-step/DesignStep";
import SelectProductsStep from "../../components/gift-card-flow/select-products-step";
import EnterNoteStep from "../../components/gift-card-flow/enter-note-step";
import EnterContactsStep from "../../components/gift-card-flow/enter-contacts-step";
import CheckoutStep from "../../components/gift-card-flow/checkout-step";
import ReceiptStep from "../../components/gift-card-flow/receipt-step";
import ShoppingCart from "../../components/gift-card-flow/shopping-cart/ShoppingCart";
import Controls from "../../components/gift-card-flow/controls/Controls";

//Consts
import STEPS from "../../constants/steps";
import emailRegex from "../../constants/emailRegex";

const Headline = styled.h1`
  margin: 1rem 0;
  font-size: 1.5rem;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  color: ${p => p.theme.colors.primaryDark};
`;

const PurchasePage = ({ t }) => {
  const [snackbarText, setSnackbarText] = useState("");
  const [stepper, setStepper] = useState(STEPS);
  const [activeStep, setActiveStep] = useState(STEPS[0]);
  const [isClient, setIsClient] = useState(false);
  const [theme, setTheme] = useState(null);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  const [note, setNote] = useState();
  const [contacts, setContacts] = useState({});
  const [reference, setReference] = useState(null);

  useEffect(() => {
    // Complete select products step
    const selectProductsStep = getStep("select_products");
    completeStep(selectProductsStep, !!shoppingCartItems.length);

    // Complete enter contacts step
    const enterContactsStep = getStep("enter_contacts");
    completeStep(
      enterContactsStep,
      contacts.email && emailRegex.test(contacts.email)
    );

    setIsClient(true);

    shoppingCartItems.length === 0 &&
      activeStep.key !== "design" &&
      setActiveStep(getStep("select_products"));
  }, [shoppingCartItems, contacts]);

  const handleBack = stepper => {
    const prevStep = getAdjacentStep(stepper, activeStep, false);
    setActiveStep(prevStep);
  };

  const handleNext = (stepper, activeStep) => {
    const nextStep = getAdjacentStep(stepper, activeStep);
    setActiveStep(nextStep);
  };

  const getStep = key => stepper.find(step => step.key === key);

  const completeStep = (CompleteableStep, value = true) => {
    setStepper(
      stepper.map(step => {
        if (step.key === CompleteableStep.key) {
          step.complete = value;
        }
        return step;
      })
    );
  };

  const getAdjacentStep = (stepper, activeStep, next = true) => {
    return stepper[
      stepper.findIndex(step => step.key === activeStep.key) + (next ? 1 : -1)
    ];
  };

  const addProduct = (product, data) => {
    setShoppingCartItems([
      ...shoppingCartItems,
      {
        ...product,
        ...data
      }
    ]);
  };

  const removeProduct = deleteableItem => {
    setShoppingCartItems(
      shoppingCartItems.filter(item => item !== deleteableItem)
    );
  };

  return (
    <Layout>
      <Container>
        <Main>
          <Headline>{t("gift_card_flow_title")}</Headline>
          <Content>
            <Stepper steps={STEPS} activeStep={activeStep} />
            {activeStep.key === "design" && (
              <DesignStep
                handleThemeSelect={theme => {
                  setTheme(theme);
                  completeStep(activeStep);
                }}
                title={t("design_step_label")}
              />
            )}
            {activeStep.key === "select_products" && (
              <SelectProductsStep
                title={t("select_products")}
                addProduct={addProduct}
              />
            )}
            {activeStep.key === "enter_note" && (
              <EnterNoteStep title={t("enter_note")} setNote={setNote} />
            )}
            {activeStep.key === "enter_contacts" && (
              <EnterContactsStep
                title={t("enter_contacts")}
                setContacts={setContacts}
              />
            )}
            {activeStep.key === "checkout" && isClient && (
              <StripeProvider apiKey="pk_test_Uqap0sSh0JYSl7UvbuE0R8b200kZ0uCOyb">
                <Elements>
                  <CheckoutStep
                    title={t("checkout")}
                    theme={theme}
                    note={note}
                    contacts={contacts}
                    shoppingCartItems={shoppingCartItems}
                    setActiveStep={setActiveStep}
                    setReference={setReference}
                    setSnackbarText={setSnackbarText}
                  />
                </Elements>
              </StripeProvider>
            )}
            {activeStep.key === "receipt" && (
              <ReceiptStep
                title={t("receipt")}
                contactEmail={setContacts.email}
              />
            )}
          </Content>
        </Main>
        <ShoppingCart
          theme={theme}
          items={shoppingCartItems}
          note={note}
          removeProduct={removeProduct}
        />
      </Container>
      <Controls
        total={shoppingCartItems.reduce((total, item) => total + item.price, 0)}
        steps={STEPS}
        activeStep={activeStep}
        handleBack={() => handleBack(stepper)}
        handleNext={() => handleNext(stepper, activeStep)}
      />
      <Snackbar
        message={snackbarText}
        open={!!snackbarText}
        onClose={() => setSnackbarText("")}
      />
    </Layout>
  );
};

PurchasePage.getInitialProps = () => ({
  namespacesRequired: ["gift_cards"]
});

export default withApollo(withTranslation("gift_cards")(PurchasePage));
