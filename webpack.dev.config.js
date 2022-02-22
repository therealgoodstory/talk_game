const { resolve } = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")

const config = {
  entry: "./client/main.js",
  mode: "development",
  output: {
    filename: "js[name].bundle.js",
    path: resolve(__dirname, "build"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      {
        test: /\.(ttf|ico|woff2)$/i,
        use: [
          {
            loader: 'file-loader?name=[name].[ext]&outputPath=images',
          },
        ],
      },
      // {
      //   enforce: 'pre',
      //   test: /\.(js|jsx)$/,
      //   // use: ["eslint-loader"],
      //   exclude: /node_modules/,
      // },
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    hot: true,
    static: resolve(__dirname, "dist"),
    devMiddleware: {
      index: true,
    },
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false
      },
      webSocketURL: {
        hostname: 'localhost',
        port: 8080
      },
    },
  },
  plugins: [
    new MiniCSSExtractPlugin(
     [{ filename: 'css/main.css' }]
    ),
    new CopyPlugin({
        patterns : [{from: `${__dirname}/client/index.html`, to: "index.html"}]
      }
    ),
  ],
}

module.exports = config;
