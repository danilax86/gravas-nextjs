import Button from "../button/button";
import { Item, Details } from "./style";
import { withTranslation } from "../../i18n";

const Contact = ({ icon, href, contact, buttonText, t }) => (
  <Item>
    <Details>
      <span className={`icon-${icon}`}></span>
      <a className="contact-detail" href={`${href}${contact}`}>
        {contact}
      </a>
    </Details>
    <a
      className="buttonLink"
      target="_blank"
      rel="noopener"
      href={`${href}${contact}`}
    >
      <Button
        type="button"
        buttonStyle="btn--primary--outline"
        children={t(buttonText)}
      ></Button>
    </a>
  </Item>
);

export default withTranslation("contacts")(Contact);
