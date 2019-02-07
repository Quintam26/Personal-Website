const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './docs',
    historyApiFallback: true,
  },
  module: {
    rules: [
      //JS
      {   
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      //CSS
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { 
              sourceMap: true,
              importLoaders: 1 
            }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          }
        ]
      },
      //Images
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 5000 },
        }
      }
    ]
  }
});