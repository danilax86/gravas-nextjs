import Step from "../step";
import { withTranslation, Link } from "../../../i18n";

const ReceiptStep = ({ title, reference, t }) => {
  return (
    <Step title={title}>
      <h1>{t("thank_you_for_purchase")}</h1>
      <p>{t("your_gift_card_number_is_xxx", { reference })}</p>
      <Link href={`/`}>
        <a>{t("back_to_home")}</a>
      </Link>
    </Step>
  );
};

export default withTranslation("receipt")(ReceiptStep);
