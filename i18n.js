const NextI18Next = require("next-i18next").default;

const localeSubpathVariations = {
  none: {},
  foreign: {
    ru: "ru",
    en: "en"
  },
  all: {
    lv: "lv",
    ru: "ru",
    en: "en"
  }
};

module.exports = new NextI18Next({
  defaultLanguage: "lv",
  otherLanguages: ["ru", "en"],
  localeSubpaths: localeSubpathVariations.foreign,
  detection: {
    lookupCookie: "next-i18next",
    order: ["cookie", "querystring", "localStorage", "path", "subdomain"],
    caches: ["cookie"]
  }
});
