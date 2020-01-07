// for custom advanced behaviour of Next.js

const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({});

// create service worker

const withOffline = require("next-offline");

const nextConfig = {};

module.exports = withOffline(nextConfig);
