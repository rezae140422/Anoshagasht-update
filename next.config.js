/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");
const loaderUtils = require("loader-utils");

const hashOnlyIdent = (context, _, exportName) =>
  loaderUtils
    .getHashDigest(
      Buffer.from(
        `filePath:${path
          .relative(context.rootContext, context.resourcePath)
          .replace(/\\+/g, "/")}#className:${exportName}`
      ),
      "md4",
      "base64",
      6
    )
    .replace(/[^a-zA-Z0-9-_]/g, "_")
    .replace(/^(-?\d|--)/, "_$1");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add image optimization configuration
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Strong security headers applied to all routes
  async headers() {
    const csp = [
      "default-src 'self';",
      "script-src 'self';",
      "style-src 'self' 'unsafe-inline';", // inline styles are used by Tailwind at runtime
      "img-src 'self' data: https://images.unsplash.com https://cdn.simpleicons.org;",
      "font-src 'self' data:;",
      "connect-src 'self';",
      "frame-ancestors 'none';",
      "base-uri 'self';",
      "form-action 'self';",
    ].join(' ');

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Expect-CT', value: 'enforce, max-age=86400' },
          { key: 'X-XSS-Protection', value: '0' },
          // Temporarily disabled CSP for local debugging (if CSP blocks Next.js client scripts, pages can fail to hydrate).
          // { key: 'Content-Security-Policy', value: csp },
          // Feature-Policy legacy header
          { key: 'Feature-Policy', value: "geolocation 'none'; microphone 'none'; camera 'none'" },
        ],
      },
    ];
  },
  // Update experimental settings to disable scroll restoration
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'motion',
      'framer-motion',
      '@tabler/icons-react'
    ],
    // Disable scroll restoration to prevent auto-scrolling on refresh
    scrollRestoration: false,
  },
  // Add compiler options for production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack(config, { dev }) {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === "object")
      .oneOf.filter((rule) => Array.isArray(rule.use));
    if (!dev)
      rules.forEach((rule) => {
        rule.use.forEach((moduleLoader) => {
          if (
            moduleLoader.loader?.includes("css-loader") &&
            !moduleLoader.loader?.includes("postcss-loader") &&
            moduleLoader?.options?.modules
          )
            moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
        });
      });

    return config;
  },
};

module.exports = nextConfig