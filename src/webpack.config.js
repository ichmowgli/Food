'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname , 'js'),
  },
  watch: true,
  devServer: {
    port: 9000,
  },
  devtool: "source-map",

  module: {}
};
