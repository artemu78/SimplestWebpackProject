const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
  new HtmlWebpackPlugin({
    template: "public/index.html",
  }),
  new BrowserSyncPlugin({
    host: 'localhost',
    port: 3000,
    server: { baseDir: ['dist'] }
  })
  ],
};
