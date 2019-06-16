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
    {
      loader: 'css-loader',
      options: {
        modules: true, // 👈 You must enable modules to make it work
        importLoaders: 1,
        localIdentName: '[local]-[hash:base64:5]',
      }
    },
    'postcss-loader'
  ]
},
// ...
```

### Usage with [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)

```js
// ...
{
  test: /\.css$/,
  // 👇 Put the loader in the front
  // Use '@nyancss/css-modules-loader/preact' for Preact
  use: ['@nyancss/css-modules-loader/react'].concat(
    ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[local]-[hash:base64:5]'
          }
        },
        'postcss-loader'
      ]
    })
  )
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
