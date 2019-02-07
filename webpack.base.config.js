const path = `${__dirname}/build`;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path,
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(`${path}/bundle.*.js`),
    new HtmlPlugin({ template: './src/index.html' }),
    new CopyWebpackPlugin([
      // relative path is from src
      { from: './src/assets' }
    ]),
  ],
};