import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
})

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextra({
  ...nextConfig,

  // Set the output to "export" for static site generation
  output: "export",

  // set basePath to "/iamhoonse-ecosystem" to match the GitHub Pages deployment
  basePath: "/iamhoonse-ecosystem",

  // disable the default Next.js image optimization to avoid issues with GitHub Pages
  images: {
    unoptimized: true,
  }
});
