const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  //エントリーポイントの指定
  output: {
    path: path.resolve(__dirname, './dist'),
    //出力先の指定（絶対パスで指定する）
    //__dirnameプロジェクトのある階層
    // filename: 'index.js',
    //出力するファイルネームの変更
  },
  module: {
    rules: [
      {
        test: /\.css/,
        //ファイル名を検知するためのもの、ドットをエスケープしている
        use: [
          {
            loader: 'style-loader',
            //cssをDOMに出力
          },
          {
            loader: 'css-loader',
            //cssをjsにいれる　
            //ローダーは下から適応される
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ]
}
