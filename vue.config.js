const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  publicPath: "/admin",

  transpileDependencies: ["vuetify", "@koumoul/vjsf"],

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "fr",
      localeDir: "locales",
      enableInSFC: true,
      includeLocales: false,
      enableBridge: true
    }
  },

  configureWebpack: {
    plugins: [new NodePolyfillPlugin()]
  },

  chainWebpack: config => {
    config.resolve.alias.set('vue', '@vue/compat')
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
  }

};
