const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    react: path.resolve(__dirname, 'react/app.js'),
    preact: path.resolve(__dirname, 'preact/app.js'),
    extract: path.resolve(__dirname, 'extract/app.js')
  },

  module: {
    rules: [
      {
        test: /\/react\/.+\.css$/,
        use: [
          'style-loader',
          path.resolve(process.cwd(), 'lib/react'),
          { loader: 'css-loader', options: { modules: true } }
        ]
      },

      {
        test: /\/preact\/.+\.css$/,
        use: [
          'style-loader',
          path.resolve(process.cwd(), 'lib/preact'),
          { loader: 'css-loader', options: { modules: true } }
        ]
      },

      {
        test: /\/extract\/.+\.css$/,
        use: [
          path.resolve(process.cwd(), 'lib/react'),
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { modules: true } }
        ]
      }
    ]
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
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'template.html'),
      chunks: ['extract'],
      filename: 'extract.html'
    }),

    new MiniCssExtractPlugin()
  ],

  devServer: {
    port: 2222
  }
}
