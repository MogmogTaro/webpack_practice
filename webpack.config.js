const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: './src/javascripts/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'javascripts/main.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
          }
        ]
      },
      {
        test: /\.jpg|\.png/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // cssを外部スタイルシートとして読み込めるようにするプラグイン
    new MiniCssExtractPlugin({
      filename: './stylesheets/main.css'
    }),
    // 自動でindex.htmlHTMLを生成
    new HtmlWebpackPlugin({
      template: './src/templete/index.pug',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templete/access.pug',
      filename: 'access.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templete/members/taro.pug',
      filename: 'members/taro.html'
    }),
    new CleanWebpackPlugin()
  ]
}
