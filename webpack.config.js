/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: { popup: './src/popup.tsx', newtab: './src/newtab.tsx' }, // index.js에서 번들링 시작
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/assets/public/popup.html',
      filename: 'popup.html',
      chunks: ['popup'],
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/public/newtab.html',
      filename: 'newtab.html',
      chunks: ['newtab'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'assets', 'public', 'icons'),
          to: 'icons',
          toType: 'dir',
          noErrorOnMissing: true,
        },
        {
          from: path.resolve(
            __dirname,
            'src',
            'assets',
            'public',
            'manifest.json'
          ),
          to: 'manifest.json',
          noErrorOnMissing: true,
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
