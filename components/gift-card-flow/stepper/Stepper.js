import StepperContainer from "./style";
import { withTranslation } from "../../../i18n";

const Stepper = ({ t, steps, activeStep }) => {
  return (
    <StepperContainer>
      {steps.map(({ key }) => (
        <div
          key={key}
          className={`step ${activeStep.key == key ? `active` : undefined}`}
          data-label={t(`${key}_step_label`)}
        ></div>
      ))}
    </StepperContainer>
  );
};

export default withTranslation("gift_cards")(Stepper);
