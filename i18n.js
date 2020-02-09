const NextI18Next = require("next-i18next").default;

const localeSubpathVariations = {
  none: {},
  foreign: {
    ru: "ru"
  },
  all: {
    lv: "lv",
    ru: "ru"
  }
};

module.exports = new NextI18Next({
  defaultLanguage: "lv",
  otherLanguages: ["ru"],
  localeSubpaths: localeSubpathVariations.foreign
});
