import { DefinePlugin, optimize, NoErrorsPlugin } from 'webpack'
import { resolve } from 'path'
const { DedupePlugin, UglifyJsPlugin, OccurrenceOrderPlugin } = optimize
import DashboardPlugin from 'webpack-dashboard/plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const exposed = [
  'NODE_ENV'
]
const exposedEnvironment = {}
exposed.forEach(i => { exposedEnvironment[i] = JSON.stringify(process.env[i]) })

const config = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      './src/index.js',
      'webpack/hot/only-dev-server'
    ]
  },
  output: {
    path: resolve(__dirname, './webroot/build'),
    publicPath: '/build/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/i, exclude: /(node_modules)/, loader: 'babel' },
      { test: /\.json$/i, loaders: ['json'] },
      { test: /\.css$/i, loader: ExtractTextPlugin.extract(['css']) },
      { test: /\.scss$/i, loader: ExtractTextPlugin.extract(['css', 'sass']) }
    ]
  },
  plugins: [
    new DedupePlugin(),
    new OccurrenceOrderPlugin(),
    new DefinePlugin({
      'process.env': exposedEnvironment
    }),
    new ExtractTextPlugin('style.css'),
    new NoErrorsPlugin()
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new UglifyJsPlugin({sourceMap: false, output: {comments: false}}))
} else {
  config.plugins.push(new DashboardPlugin())
}

export default config
