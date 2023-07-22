const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  // devtool: 'source-map',
  entry: './src/js/script.js',
  output: {
    clean: true,
    path: path.resolve(__dirname, './dist'),
    filename: './js/script.js',
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)/, 
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              // sourceMap: true,
            },
          },
          {
            loader: 'sass-loader', 
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 20,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg)/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/app.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
		new CleanWebpackPlugin(),
  ],
  devServer: {
    static: path.resolve(__dirname, 'src'),
  }
}
