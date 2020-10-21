const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const cwd = process.cwd();
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: [path.join(cwd, 'index.js')],
  output: {
    publicPath: '/',
    path: path.join(cwd, 'dist', 'app'),
    filename: 'app.js'
  },
  //this fixes the issue but is far from ideal as in order to be correct one line should be added for every linked project bringing transitive dependencies
  //resolve: {
  //  modules: [
  //    'node_modules',
  //    'node_modules/bundler/node_modules'
  //  ],
  //},
  devtool: 'source-map',
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: [path.join(cwd)],
            use: [
              {
                loader: require.resolve('babel-loader'),
                options: {
                  configFile: path.join(cwd, 'babel.config.js')
                }
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin()
  ]
};





