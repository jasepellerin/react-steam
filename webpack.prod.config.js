const webpack = require('webpack')
const devConfig = require('./webpack.config.js')
const path = require('path')

const prodConfig = Object.create(devConfig)

prodConfig.output = {
  path: path.resolve(__dirname, 'temp/scripts'),
  filename: 'bundle.js'
}

if (prodConfig.plugins === undefined) {
  prodConfig.plugins = []
}
prodConfig.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: '"production"'
  }
}))

module.exports = prodConfig
