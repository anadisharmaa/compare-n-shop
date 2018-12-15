const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.DEVPORT || 3000;
const serverPort = process.env.PORT || 5000;

module.exports = {
  /**
	 * `mode` tells Webpack this configuration will be for either development or production
 	 **/
  mode: 'development',
  /**
	 * bundling process will begin here
	 **/
  entry: './src/index.js',
  /**
	 * tells webpack how to write the compiled files to disk
	 **/
  output: {
    filename: 'bundle.[hash].js',
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
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
  /**
	 * simplifies creation of HTML files to serve webpack bundles.
	 * This is especially useful for webpack bundles that include
	 * a hash in the filename which changes every compilation.
	 **/
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    })
  ],
  /**
	 * Development server configurations
	 **/
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: false,
    hot: true,
    proxy: {
      '/api': `http://localhost:${serverPort}`
    }
  }
};
