const i18n = require("i18n");
const fs = require("fs");
const sgMail = require("@sendgrid/mail");

i18n.configure({
  locales: ["lv", "ru", "en"],
  directory: __dirname + "/locales"
});

const sendGiftCardMail = ({ email, reference }, locale = "lv", receiptUrl) => {
  i18n.setLocale(locale);

  sgMail.setApiKey(process.env["SENDGRID_TOKEN"]);

  const mail = {
    to: email,
    from: "davanu-karte@gravas.lv",
    subject: i18n.__("gift_card_no", { reference }),
    html: `
      <p>${i18n.__("thank_you_for_purchasing_gift_card")}</p>

      <p>${i18n.__("you_will_find_gift_card_attached")}</p>

      <a href="${receiptUrl}">${i18n.__("receipt")}</a>

      <p>${i18n.__("with_regards")}</p>

      <p>Gravas</p>
    `,
    attachments: [
      {
        content: fs
          .readFileSync(`gift-card-pdf/output/${reference}.pdf`)
          .toString("base64"),
        filename: `${i18n.__("gift_card")}.pdf`,
        type: "application/pdf",
        disposition: "attachment"
      }
    ]
  };

  sgMail.send(mail);
};

module.exports = sendGiftCardMail;
