import Step from "../step";
import { withTranslation, Link } from "../../../i18n";
import styled from "@emotion/styled";
import Button from "../../../components/button/button";
import Router from "next/router";

const ReceiptBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 5rem;
  }

  h3 {
    padding: 1rem 0;
  }

  button {
    margin: 1rem 0;
  }
`;
const ReceiptStep = ({ title, contactEmail, t }) => {
  console.log(contactEmail);

  return (
    <Step title={title}>
      <ReceiptBox>
        <img src="/static/receipt-icon.png" alt="" />
        <h3>{t("thank_you_for_purchase")}</h3>
        <p>{t("gift_card_sent_to_email", { contactEmail })}</p>
        <Button
          onClick={() => Router.push("/")}
          type="button"
          buttonStyle="btn--primary--solid"
          children={t("back_to_home")}
        />
      </ReceiptBox>
    </Step>
  );
};

export default withTranslation("gift_cards")(ReceiptStep);
