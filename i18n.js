const NextI18Next = require("next-i18next").default;

const localeSubpathVariations = {
  none: {},
  foreign: {
    lv: "lv",
    ru: "ru"
  },
  all: {
    lv: "lv",
    en: "en",
    ru: "ru"
  }
};

module.exports = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["lv", "ru"],
  localeSubpaths: localeSubpathVariations.foreign
});
