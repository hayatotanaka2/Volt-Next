/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Node.js ネイティブモジュール対応の追加
    config.resolve.fallback = {
      async_hooks: false, // async_hooks を無効化
    };

    config.module.rules.push({
      test: /\.m?js$/,
      resolve: {
        fullySpecified: false, // 再度のエラー回避
      },
    });

    return config;
  },
  reactStrictMode: true,
};

export default nextConfig;
