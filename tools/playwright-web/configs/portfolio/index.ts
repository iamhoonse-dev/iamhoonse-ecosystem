/**
 * This is the origin of the web app.
 */
export const ORIGIN = process.env.CI
  ? "http://portfolio:3000"
  : "http://localhost:3002";
