const withMDX = require(require.resolve('@next/mdx'))();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

module.exports = withMDX(nextConfig);
