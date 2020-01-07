import { Step } from "./style.js";

export default ({ children, title }) => (
  <Step>
    <h2>{title}</h2>
    {children}
  </Step>
);
