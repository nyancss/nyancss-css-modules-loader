const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    react: path.resolve(__dirname, 'react/app.js'),
    preact: path.resolve(__dirname, 'preact/app.js'),
    extract: path.resolve(__dirname, 'extract/app.js'),
    classNames: path.resolve(__dirname, 'classNames/app.js'),
    vue: path.resolve(__dirname, 'vue/app.js')
  },

  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
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
      },

      {
        test: /\/classNames\/.+\.css$/,
        use: [
          path.resolve(process.cwd(), 'lib/class-names'),
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { modules: true } }
        ]
      },

      {
        test: /\/vue\/.+\.css$/,
        use: [
          'style-loader',
          path.resolve(process.cwd(), 'lib/vue'),
          { loader: 'css-loader', options: { modules: true } }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'react/template.html'),
      chunks: ['react'],
      filename: 'react.html'
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'preact/template.html'),
      chunks: ['preact'],
      filename: 'preact.html'
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'extract/template.html'),
      chunks: ['extract'],
      filename: 'extract.html'
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'classNames/template.html'),
      chunks: ['classNames'],
      filename: 'classNames.html'
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'vue/template.html'),
      chunks: ['vue'],
      filename: 'vue.html'
    }),

    new MiniCssExtractPlugin()
  ],

  devServer: {
    port: 2222
  }
}
