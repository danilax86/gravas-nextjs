import { Step, StepTitle } from "./style.js";

export default ({ children, title }) => (
  <Step>
    <StepTitle>{title}</StepTitle>
    {children}
  </Step>
);
