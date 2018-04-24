const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const options = {
  debug: 'info',
  copyUnmodified: true
};

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
    }, {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      exclude: /node_modules/,
      loader: 'url-loader?limit=1024&name=/public/dist/fonts/[name].[ext]'
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
          name: '/src/fonts/[name].[ext]',
          outputPath: '/public/dist'
      }
    }]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/fonts/**/*', to: 'fonts/', flatten: true }
    ], options)
  ]
};
