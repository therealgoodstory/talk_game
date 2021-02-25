const { resolve } = require("path");
const CopyWebpackPlugins = require("copy-webpack-plugin");

const config = {
  entry: "./client/main.js",
  mode: "development",
  output: {
    filename: "js[name].bundle.js",
    path: resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
    ],
  },
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    port: 8080,
    host: "localhost",
    index: 'index.html',
    overlay: {
      warning: false,
      errors: true
    }
  },
  plugins: [
    new CopyWebpackPlugins({
      patterns: [{ from: `${__dirname}/client/index.html`, to: "index.html" }],
    }),
  ],
};

module.exports = config;
