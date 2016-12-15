// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://goo.gl/qPbSyX

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  module: {
    loaders: [
      { test: /\.jsx?$/i, exclude: /(node_modules)/, loader: 'babel' },
      { test: /\.json$/i, loaders: ['json?sourceMap'] },
      { test: /\.scss$/i, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] },
      { test: /\.css$/i, loaders: ['style', 'css?sourceMap'] },
      { test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['url?limit=10000', 'img?progressive=true'] }
    ]
  }
}
