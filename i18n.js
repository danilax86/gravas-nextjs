const NextI18Next = require("next-i18next").default;

const localeSubpathVariations = {
  none: {},
  foreign: {},
  all: {
    lv: "lv"
  }
};

module.exports = new NextI18Next({
  defaultLanguage: "lv",
  otherLanguages: [],
  localeSubpaths: localeSubpathVariations.foreign
});
