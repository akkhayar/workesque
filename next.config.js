/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: { unoptimized: true }, // nextjs suggest images to be unoptimized because it doesn't work with static page
};

module.exports = nextConfig;
