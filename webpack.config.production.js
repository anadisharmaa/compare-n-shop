const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  /**
	 * `mode` tells Webpack this configuration will be for either development or production
 	 **/
  mode: 'production',
  /**
	 * bundling process will begin here
	 **/
  entry: './src/index.js',
  /**
	 * tells webpack how to write the compiled files to disk
	 **/
  output: {
    // We want to create the JavaScript bundles under a
    // 'static' directory
    filename: 'static/bundle.[hash].js',
    // Absolute path to the desired output directory. In our
    // case a directory named 'dist'
    // '__dirname' is a Node variable that gives us the absolute
    // path to our current directory. Then with 'path.resolve' we
    // join directories
    // Webpack 4 assumes your output path will be './dist' so you
    // can just leave this
    // entry out.
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  /**
	 * `devtool` will create source maps for debugging of application.
	 **/
  devtool: 'inline-source-map',
  /**
	 * defines modules our application will include
	 **/
  module: {
    rules: [
      {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'},
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              // publicPath: '../'
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  /**
	 * simplifies creation of HTML files to serve webpack bundles.
	 * This is especially useful for webpack bundles that include
	 * a hash in the filename which changes every compilation.
	 **/
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }),
    // Create the stylesheet under 'styles' directory
    // new ExtractTextPlugin({
    //   filename: 'styles/styles.[hash].css',
    //   allChunks: true
    // })
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
