const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

const config = {
  future: {
    webpack5: true
  },
  i18n: {
    locales: ['ru', 'uz', 'en'],
    defaultLocale: 'ru'
  },

  images: {
    domains: ['home-page-api.yumecs.uz']
  }
}

module.exports = withPlugins([withImages, withBundleAnalyzer], config)
