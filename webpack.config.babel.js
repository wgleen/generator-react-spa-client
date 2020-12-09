import webpack from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

export const root = __dirname

export const PATHS = {
  root,
  public: `${root}/public`,
  src: {
    root: `${root}/src`,
    components: `${root}/src/components`,
    reducks: `${root}/src/reducks`,
    integration: `${root}/src/integration`,
    lib: `${root}/src/lib`
  },
  dist: {
    root: `${root}/dist`,
    assets: `${root}/dist/assets`
  }
}

export const CDN_PATH = '/assets'

export const development = {
  mode: 'development',
  devtool: 'eval-source-map',
  optimization: {
    minimize: false
  },
  entry: `${PATHS.src.root}/index.js`,
  output: {
    filename: '[name].js',
    path: PATHS.dist.assets,
    publicPath: '/'
  },
  devServer: {
    disableHostCheck: true,
    contentBase: PATHS.dist.assets,
    historyApiFallback: {
      index: '/index.html'
    },
    hot: true,
    compress: true,
    port: 4000,
    clientLogLevel: 'info'
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src.root}/index.html`,
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

export const production = {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true
      })
    ]
  },
  entry: [`${PATHS.src.root}/index.js`],
  output: {
    filename: '[name].[fullhash].js',
    path: PATHS.dist.assets,
    publicPath: CDN_PATH,
    sourceMapFilename: '[name].[fullhash].map'
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src.root}/index.html`,
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
}

export const isDev = process.env.NODE_ENV === 'development'

export const envConfig = isDev ? development : production

export default merge({}, envConfig, {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      DEBUG: true
    })
  ]
})
