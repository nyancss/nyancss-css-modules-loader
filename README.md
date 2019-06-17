# @nyancss/css-modules-loader

Nyan CSS webpack loader that converts CSS Modules (provided by css-loader) into React/Preact components (more framework integrations are coming soon).

For the introduction into Nyan CSS and other docs, see [the main repo](https://github.com/nyancss/nyancss). Read further for instruction on setting up the loader.

## Installation

Install the loader, and [@nyancss/react](https://github.com/nyancss/nyancss-react) for usage with React/Preact:

```bash
npm install --save-dev @nyancss/css-modules-loader @nyancss/react
# or using yarn
yarn add --dev @nyancss/css-modules-loader @nyancss/react
```

## Configuration

### Basic confuguration

```js
// ...
{
  test: /\.css$/,
  use: [
    'style-loader',
    '@nyancss/css-modules-loader/react', // 👈 Add the loader
    // Use '@nyancss/css-modules-loader/preact' for Preact
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
    '@nyancss/css-modules-loader/react', // 👈 The loader **before** the plugin
    { loader: MiniCssExtractPlugin.loader }, // 👈 mini-css-extract-plugin
    { loader: 'css-loader', options: { modules: true } }
  ]
},
// ...
```

## Related packages

- [@nyancss/css-modules](https://github.com/nyancss/nyancss-css-modules) - the package used to convert CSS Modules to Nyan CSS.
- [@nyancss/react](https://github.com/nyancss/nyancss-react) - the package used to convert Nyan CSS to React/Preact components.

## Changelog

See [the changelog](./CHANGELOG.md).

## License

[MIT © Sasha Koss](https://kossnocorp.mit-license.org/)
