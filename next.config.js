// for custom advanced behaviour of Next.js

const withOptimizedImages = require("next-optimized-images");
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const withOffline = require("next-offline");

const localeSubpaths = {}

const nextConfig = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
};

module.exports = withOffline(withOptimizedImages(nextConfig));
