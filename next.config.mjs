import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['via.placeholder.com'],
  },
};

export default withMDX({
  extension: /\.mdx?$/,  // This tells Next.js to process `.mdx` files
})(nextConfig);
