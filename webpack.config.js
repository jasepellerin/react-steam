const path = require('path')

module.exports = {
  entry: './source/scripts/index.jsx',
  output: {
    path: path.resolve(__dirname, 'temp/scripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      }
    ]
  }
}
