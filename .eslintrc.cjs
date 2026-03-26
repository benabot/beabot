const nuxtConfig = require('@nuxt/eslint-config')

module.exports = {
  ...nuxtConfig,
  root: true,
  rules: {
    ...(nuxtConfig.rules || {}),
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: [
          'index',
          'Boutoncta',
          'Footer',
          'Oeuf',
          'Petittitre',
          'default',
          'portfolio',
        ],
      },
    ],
  },
}
