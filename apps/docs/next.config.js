const withMDX = require(require.resolve('@next/mdx'))();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader', // or MiniCssExtractPlugin.loader in production
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('@tailwindcss/postcss')({ config: './tailwind.config.js' }),
                require('autoprefixer'),
              ],
            },
          },
        },
      ],
    });
    return config;
  },
};

module.exports = withMDX(nextConfig);
