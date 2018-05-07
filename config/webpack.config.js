const webpack = require('webpack');
const colors = require('colors');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname, "..");
const BUILD_DIR = path.resolve(ROOT_PATH, 'dist');
const CONFIG_DIR = path.resolve(ROOT_PATH, 'config');
const APP_DIR = path.resolve(ROOT_PATH, 'src');

const config = (env) => {

  const prod = env && env.prod ? true : false;

  console.log(`Building in ${prod ? 'PRODUCTION'.yellow : 'DEVELOPMENT'.cyan} mode...`);  

  return {
    devtool: (prod ? 'source-map' : 'inline-source-map'),
    devServer: {
      hot: true,
      open: true,
      port: 3000,
      historyApiFallback: true,
      openPage: '',
    },
    entry: ['babel-polyfill', APP_DIR + '/index.tsx'],
    output: {
      path: BUILD_DIR,
      filename: 'bundle.js'
    },
    plugins: [

      new webpack.HotModuleReplacementPlugin(),

      (prod ?
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          compress: { warnings: false }
        })
        :
        new webpack.DefinePlugin({})
      ),

      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(prod ? 'production' : 'development')
        }
      }),

      new HtmlWebpackPlugin(
        {
          template: path.resolve(CONFIG_DIR, 'index_template.html'),
          title: 'react-redux-typescript-starter'
        })

    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          enforce: "pre",
          loader: 'tslint',
          options: {
            configFile: path.resolve(ROOT_PATH, 'config', 'tslint.json'),
            emitErrors: true,
            failOnHint: true,
            failOnError: true
          },
          exclude: path.resolve(ROOT_PATH, 'node_modules')
        },
        {
          test: /\.(css)$/,
          use: [
            { loader: 'style' },
            { loader: 'css', options: { minimize: prod } },
            {
              loader: 'postcss',
              options: { config: { path: path.resolve(CONFIG_DIR, 'postcss.config.js') } }
            }
          ]
        },
        {
          test: /\.(sass|scss)$/,
          use: [
            { loader: 'style' },
            { loader: `css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&minimize=${prod}`},
            {
              loader: 'postcss',
              options: { config: { path: path.resolve(CONFIG_DIR, 'postcss.config.js') } }
            },
            { loader: 'sass' }
          ]
        },
        {
          test: /\.(png|jpg|svg|gif|ttf|woff|woff2|ico|eot)$/,
          loader: "url-loader?limit=1000000"
        },
        {
          test: /\.jsx?$/,
          include: APP_DIR,
          loader: 'babel-loader',
          options: { extends: path.resolve(ROOT_PATH, 'config', '.babelrc') },
          exclude: path.resolve(ROOT_PATH, 'node_modules')
        },
        {
          test: /\.tsx?$/,
          include: APP_DIR,
          use: [
            {
              loader: 'babel-loader',
              options: { extends: path.resolve(ROOT_PATH, 'config', '.babelrc') }
            },
            {
              loader: 'ts-loader',
            }
          ],
          exclude: path.resolve(ROOT_PATH, 'node_modules')
        }
      ]
    },
    resolveLoader: {
      moduleExtensions: ["-loader"]
    },
    resolve: {
      modules: [path.resolve(APP_DIR), "node_modules"],
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.sass', 'scss', 'json', 'png', 'jpg']
    }
  };
}

module.exports = config;