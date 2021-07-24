const path = require('path');

module.exports = {
  entry: {
    'alone-import': './src/alone-import.js',
    array: './src/array.js',
    class: './src/class.js',
    index: './src/index.js',
    object: './src/object.js',
    'module-export': './src/module/export.js',
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