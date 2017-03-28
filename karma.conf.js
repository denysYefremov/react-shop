var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: ['mocha'], //use the mocha test framework
    files: [
      'tests.webpack.js' //just load this file
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'] //preprocess with webpack and our sourcemap loader
    },
    reporters: ['dots'], //report results in this format
    webpack: {
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /\/node_modules\//,
            loader: 'babel',
            query: {
              presets: ['airbnb']
            }
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
      },
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },
    babelPreprocessor: {
      options: {
        presets: ['airbnb']
      }
    },
  });
};