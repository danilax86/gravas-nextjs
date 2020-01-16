import Button from "../../button/button";
import { Footer, ControlItems, ShoppingAmount } from "./style";
import { withTranslation } from "../../../i18n";

const Controls = ({
  steps,
  activeStep,
  handleBack,
  handleNext,
  t,
  total = 0
}) => {
  const isFirstStep =
    steps.findIndex(step => step.key === activeStep.key) === 0;
  return (
    <Footer>
      <ControlItems>
        <Button
          onClick={handleBack}
          disabled={isFirstStep}
          type="button"
          buttonStyle="btn--primary--solid"
          children={t("back_button")}
        />

        <Button
          disabled={!activeStep.complete}
          onClick={handleNext}
          type="button"
          buttonStyle="btn--primary--outline"
          children={t("next_button")}
        />
      </ControlItems>

      <ShoppingAmount>€ {total}</ShoppingAmount>
    </Footer>
  );
};

export default withTranslation("gift_cards")(Controls);
