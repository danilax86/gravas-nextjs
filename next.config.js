// for custom advanced behaviour of Next.js

const withOptimizedImages = require("next-optimized-images");

const withOffline = require("next-offline");

const nextConfig = {};

module.exports = withOffline(withOptimizedImages(nextConfig));
