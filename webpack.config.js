const path = require('path');

module.exports = {
  entry: {
    'popup/bundle': './src/index.js',
    'content_scripts/bundle': './src/content_scripts/content.js'
  },
  output: {
    path: path.join(__dirname, './'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
