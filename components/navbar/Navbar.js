import { useState } from "react";
import ActiveLink from "../ActiveLink";
import NavItem from "../nav-item/NavItem";
import { Nav, NavItems, Divider, SelectItems } from "./style";
import { withTranslation, i18n } from "../../i18n";

const LanguageSelect = () => {
  return (
    <SelectItems>
      <span className="icon-arrow-down icon"></span>
      <select
        defaultValue={i18n.language}
        onChange={event => i18n.changeLanguage(event.target.value)}
      >
        <option value="lv">Latviešu</option>
        <option value="ru">Pусский</option>
        <option value="en">English</option>
      </select>
    </SelectItems>
  );
};

const Navbar = ({ t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Nav>
      <div className="logo-items">
        <ActiveLink activeClassName="active" href="/">
          <img className="gravas-logo" src="../../static/logo.svg" alt="" />
        </ActiveLink>

        {isMenuOpen ? (
          <span
            onClick={() => setIsMenuOpen(false)}
            className="icon-close icon"
          ></span>
        ) : (
          <span
            onClick={() => setIsMenuOpen(true)}
            className="icon-menu icon"
          ></span>
        )}
      </div>
      <NavItems isOpen={isMenuOpen}>
        <NavItem
          rel="preconnect"
          href="/pirts-rituali"
          label={t("pirts_rituali")}
        />
        <NavItem rel="preconnect" href="/viesu-maja" label={t("viesu_maja")} />
        <NavItem
          rel="preconnect"
          href="/aktiva-atputa"
          label={t("aktiva_atputa")}
        />
        <NavItem
          rel="preconnect"
          href="/davanu-karte"
          label={t("davanu_karte")}
        />
        <NavItem rel="preconnect" href="/atsauksmes" label={t("atsauksmes")} />
        <NavItem rel="preconnect" href="/kontakti" label={t("kontakti")} />

        <Divider />

        <LanguageSelect />
      </NavItems>
    </Nav>
  );
};

export default withTranslation("navbar")(Navbar);
