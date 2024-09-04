import withMDX from '@next/mdx';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // Other Next.js configurations can go here if needed
};

export default withMDX({
  extension: /\.mdx?$/,  // This tells Next.js to process `.mdx` files
})(nextConfig);
