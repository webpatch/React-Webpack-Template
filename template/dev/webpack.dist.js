const webpack = require('webpack');
const path = require('path');
const HtmlWebpackAssetPlugin = require('html-asset-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const helper = require('./helper');
const cfg = require('../app.config.js');

const extractCSS = new ExtractTextPlugin({
  filename: 'css/[name].[contenthash:5].css',
  allChunks: true,
});

module.exports = {
  context: path.resolve(__dirname, '../'),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: helper.createDistEntry(cfg.html),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: './',
    filename: 'js/[name].[chunkhash:5].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
      DEBUG: false,
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    ...helper.createHtmlPlugins(cfg.html),
    new HtmlWebpackAssetPlugin(),
    extractCSS,
    new CopyWebpackPlugin([
      { from: 'static/', to: 'static/' },
    ].concat(cfg.copyFile)),
    new UglifyJsPlugin({
      parallel: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/, // 通过正则匹配js,jsx文件
        loaders: [
          {
            loader: "thread-loader",
            options: {
              workers: 2,
              workerParallelJobs: 50,
              workerNodeArgs: ['--max-old-space-size=1024'],
              poolTimeout: 2000,
              poolParallelJobs: 50,
              name: "my-pool"
            }
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: false
            }
          }
        ],
        exclude: /node_modules/, // 跳过 node_modules 目录
        include: path.resolve(__dirname, '../src'),
      },
      { test: /\.(jpg|gif|png|svg|ico)$/, loader: 'file-loader?name=images/[name].[ext]' },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, '../src/css'),  // 非src/css下的scss开启局部样式模式
        use: extractCSS.extract({
          use: [
            'css-loader?minimize&modules&&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'postcss-loader',
            'sass-loader',
          ],
          publicPath: '../',
        }),
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, '../src/css'),
        use: extractCSS.extract({
          use: ['css-loader?minimize', 'postcss-loader', 'sass-loader'],
          publicPath: '../',
        }),
      },
    ],
  },
};
