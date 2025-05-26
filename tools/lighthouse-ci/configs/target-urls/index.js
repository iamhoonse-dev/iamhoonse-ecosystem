const { WEB_URLS } = require("./web");
const { PORTFOLIO_BASE_URLS } = require("./portfolio");

/**
 * URLs for Lighthouse CI
 */
const mergedURLs = [];

/*
  Merge all URLs from different applications into a single array.
 */
mergedURLs.push(...WEB_URLS, ...PORTFOLIO_BASE_URLS);

/*
  export merged URLs for Lighthouse CI.
 */
module.exports = mergedURLs;
