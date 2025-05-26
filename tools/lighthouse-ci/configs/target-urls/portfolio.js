/**
 * Base URL for the application named 'web'.
 */
const PORTFOLIO_BASE_URL = process.env.PORTFOLIO_BASE_URL || "http://localhost:3002";

/**
 * URLs for the application named 'web'
 * which will be used for Lighthouse CI.
 */
const PORTFOLIO_BASE_URLS = [`${PORTFOLIO_BASE_URL}/`];

/*
  export URLs for Lighthouse CI.
 */
module.exports = { PORTFOLIO_BASE_URLS };
