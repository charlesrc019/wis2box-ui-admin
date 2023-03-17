const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  publicPath: "/admin",

  transpileDependencies: ["vuetify"],

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
  }

};
