const withMDX = require("@next/mdx")()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["tsx", "mdx"],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
}

module.exports = withMDX(nextConfig)
