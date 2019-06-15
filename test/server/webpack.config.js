const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    react: path.resolve(__dirname, 'react.js'),
    preact: path.resolve(__dirname, 'preact.js')
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'template.html'),
      chunks: ['react'],
      filename: 'react.html'
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'template.html'),
      chunks: ['preact'],
      filename: 'preact.html'
    })
  ],

  devServer: {
    port: 2222
  }
}
