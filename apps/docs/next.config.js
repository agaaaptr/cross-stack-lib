const withMDX = require('@next/mdx')();

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
                require(require.resolve('tailwindcss'))(require.resolve('./tailwind.config.js')),
                require(require.resolve('autoprefixer')),
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
