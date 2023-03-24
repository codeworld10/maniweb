module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ['http://localhost:3000/'],
  },
  webpack: (config, { isServer }) => {
    // Custom webpack configuration goes here
    return config
  },
}
