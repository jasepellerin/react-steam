const path = require('path')

module.exports = {
  entry: './source/scripts/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      }
    ]
  }
}
