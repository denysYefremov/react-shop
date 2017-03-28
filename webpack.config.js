var webpack = require('webpack'),
  path = require('path'),
  OpenBrowserPlugin = require('open-browser-webpack-plugin'),
  StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map', //#eval
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/index'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: [
      'app',
      'node_modules'
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/',
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    new StyleLintPlugin({
      'files': ['**/*.s?(a|le|c)ss'],
      'syntax': 'less',
      'failOnError': true
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'app')
      },
      {
        test: /\.(c|le)ss$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.(png|jpg|gif|mp4)$/,
        loader: 'file-loader?name=static/[name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader?name=static/fonts/[name].[ext]'
      }
    ]
  }
};
