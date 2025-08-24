/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  // appDir is now default in Next.js 14+
  experimental: {
    // Enable server components external packages if needed
    serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs'],
  },
  images: {
    domains: ['localhost'],
    // Configure image optimization
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'src/styles'),
      path.join(__dirname, 'app'),
      path.join(__dirname, 'components'),
    ],
    prependData: `
      @use 'sass:math';
      @use 'sass:color';
      @import 'variables';
      @import 'mixins';
    `,
  },
  webpack: (config, { isServer, dev }) => {
    // Handle SCSS modules
    config.module.rules.push({
      test: /\.module\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: dev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
              exportLocalsConvention: 'camelCaseOnly',
            },
            importLoaders: 2,
            sourceMap: dev,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: dev,
            postcssOptions: {
              plugins: [
                'postcss-flexbugs-fixes',
                [
                  'postcss-preset-env',
                  {
                    autoprefixer: {
                      flexbox: 'no-2009',
                    },
                    stage: 3,
                  },
                ],
              ],
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: dev,
            sassOptions: {
              outputStyle: 'compressed',
            },
          },
        },
      ],
    });

    // Handle global SCSS
    config.module.rules.push({
      test: /\.scss$/,
      exclude: /\.module\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            sourceMap: dev,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: dev,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: dev,
          },
        },
      ],
    });

    // Handle TypeScript path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      // App aliases
      '@app': path.resolve(__dirname, 'app'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@public': path.resolve(__dirname, 'public'),
      // Feature-based aliases
      '@auth': path.resolve(__dirname, 'app/(auth)'),
      '@dashboard': path.resolve(__dirname, 'app/(dashboard)'),
      '@api': path.resolve(__dirname, 'src/app/api'),
    };

    // Handle static files
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp|ico|woff2?|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    });

    // Handle environment variables
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },
  // Configure page extensions to support index/page.tsx structure
  pageExtensions: ['page.tsx', 'page.tsx', 'page.jsx', 'page.js'],
  // Enable static exports for better compatibility
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Configure rewrites for API routes
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ];
  },
  // Configure redirects
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },
  // Configure headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  // Configure build output
  output: 'standalone',
  // Configure production browser source maps
  productionBrowserSourceMaps: false,
  // Configure webpack bundle analyzer
  webpack5: true,
  // Configure static export
  trailingSlash: true,
  // Configure images
  images: {
    // Configure image optimization
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Configure domains for external images
    domains: [
      'localhost',
      'ojingeo-hotel.vercel.app',
      'images.unsplash.com',
      'source.unsplash.com',
      'lh3.googleusercontent.com',
    ],
  },
  // Configure TypeScript
  typescript: {
    // Enable TypeScript type checking during build
    ignoreBuildErrors: false,
  },
  // Configure ESLint
  eslint: {
    // Enable ESLint during builds
    ignoreDuringBuilds: false,
  },
  // Configure static export
  output: 'standalone',
  // Configure i18n for internationalization
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  // Configure compression
  compress: true,
  // Configure powered by header
  poweredByHeader: false,
  // Configure react strict mode
  reactStrictMode: true,
  // Configure static page generation timeout
  staticPageGenerationTimeout: 1000,
  // Configure webpack dev middleware
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

// Add bundle analyzer in development
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);