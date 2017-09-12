const webpack = require('webpack')
const devConfig = require('./webpack.config.js')

const prodConfig = Object.create(devConfig)

if (prodConfig.plugins === undefined) {
  prodConfig.plugins = []
}
prodConfig.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: '"production"'
  }
}))

module.exports = prodConfig
