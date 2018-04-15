const path = require('path');

module.exports = {
  entry: {
    array: './src/array.js',
    'array-auto-import': './src/array-auto-import.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/webpack'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
};