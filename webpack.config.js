const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /\/node_modules\//,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
    }, {
        test: /\.css$/,
        exclude: /\/node_modules\//,
        loader: ['style-loader', 'css-loader'],
    }]
  }
};
