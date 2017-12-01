const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin")

let APP_DIR = path.resolve(__dirname, "src")
let BUILD_DIR = "build"

let config = {
  entry: path.resolve(APP_DIR, "index.js"),
  output: {
    filename: path.join(BUILD_DIR, "[name].js")
  },
  resolve: {
    modules: ["node_modules"],
    alias: {
      node_modules: path.resolve(__dirname, "node_modules")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.pug$/,
        use: [
          "html-loader", "pug-html-loader"
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: BUILD_DIR,
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin(path.join(BUILD_DIR, "*.js")),
    new webpack.ProvidePlugin({
      $: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"]
    })
  ]
}

module.exports = config
