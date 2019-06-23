# @nyancss/css-modules-loader

Nyan CSS webpack loader that converts CSS Modules (provided by css-loader) into components (React/Preact/Vue.js/etc.).

For the introduction into Nyan CSS and other docs, see [the main repo](https://github.com/nyancss/nyancss). Read further for instruction on setting up the loader.

## Installation

### React/Preact

```bash
npm install --save-dev @nyancss/css-modules-loader @nyancss/react
# or using yarn
yarn add --dev @nyancss/css-modules-loader @nyancss/react
```

### Vue.js

```bash
npm install --save-dev @nyancss/css-modules-loader @nyancss/vue
# or using yarn
yarn add --dev @nyancss/css-modules-loader @nyancss/vue
```

### Class names

```bash
npm install --save-dev @nyancss/css-modules-loader @nyancss/class-names
# or using yarn
yarn add --dev @nyancss/css-modules-loader @nyancss/class-names
```

## Configuration

### Basic confuguration

```js
// ...
{
  test: /\.css$/,
  use: [
    'style-loader',
    '@nyancss/css-modules-loader/REPLACE_ME', // 👈 Add the loader
    // Use '@nyancss/css-modules-loader/react' for React
    // Use '@nyancss/css-modules-loader/preact' for Preact
    // Use '@nyancss/css-modules-loader/vue' for Vue
    // Use '@nyancss/css-modules-loader/class-names' for class names
    { loader: 'css-loader', options: { modules: true } }
  ]
},
// ...
```

### Usage with [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)

```js
// ...
{
  test: /\.css$/,
  use: [
    '@nyancss/css-modules-loader/REPLACE_ME', // 👈 The loader **before** the plugin
    { loader: MiniCssExtractPlugin.loader }, // 👈 mini-css-extract-plugin
    { loader: 'css-loader', options: { modules: true } }
  ]
},
// ...
```

## Related packages

- [@nyancss/css-modules](https://github.com/nyancss/nyancss-css-modules) - the package used to convert CSS Modules to Nyan CSS.
- [@nyancss/react](https://github.com/nyancss/nyancss-react) - the package used to convert Nyan CSS to React/Preact components.
- [@nyancss/vue](https://github.com/nyancss/nyancss-vue) - the package used to convert Nyan CSS to Vue.js components.
- [@nyancss/class-names](https://github.com/nyancss/nyancss-class-names) - the package used to convert Nyan CSS to class names functions.

## Changelog

See [the changelog](./CHANGELOG.md).

## License

[MIT © Sasha Koss](https://kossnocorp.mit-license.org/)
