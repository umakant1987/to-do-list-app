const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const buildPath = path.resolve(__dirname, 'dist');

module.exports = {

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: ['./src/page-index/index.js']
  },
  output: {
    filename: '[name].[hash:20].js',
    path: buildPath
},

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8080
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
                // Please note we are not running postcss here
              ]
        }
    ]
},

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/page-index/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
        new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
        }),
        new OptimizeCssAssetsPlugin({})
    ]
}
};