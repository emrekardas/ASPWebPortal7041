/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'],
  },
  // If you're using CSS modules and experiencing issues with DaisyUI:
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.css$/i,
  //     use: ['postcss-loader']
  //   });
  //   return config;
  // },
};

module.exports = nextConfig;