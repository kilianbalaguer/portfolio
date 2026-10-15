/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export to /out, for hosting on Cloudflare Pages
  output: "export",
  images: {
    // No server to resize images at request time with a static export
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
