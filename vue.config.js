// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
  runtimeCompiler: true,
  css: {
    modules: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@img': path.resolve(__dirname, './src/assets')
      },
      extensions: ['.js', '.vue', '.json']
    }
  }
}
