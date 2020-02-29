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
  localeSubpaths: localeSubpathVariations.foreign
});
