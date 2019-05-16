const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app.js'),
  //区別しやすいようにdistディレクトリ配下に
  //ビルドした後に生成されるjsファイル名をbundleに
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  //ここの項目を書いていないサイトをそこそこみます
  //これを書かないとlocalサーバが動きません。
  devServer: {
    contentBase: __dirname + './index.html',
    port: 3000,
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
        {
         test: /\.js$/,
         exclude: /node_modules/,
         loaders: 'babel-loader',
       }
    ]
  },
  //これがないと先ほど作成したHTMLと
  //app.jsがバインドされません
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ]
};