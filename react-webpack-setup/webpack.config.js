const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: ["src", "node_modules"],
    fallback: {
      net: false,
    },
  },
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    port: 3000,
    allowedHosts: "all",
    historyApiFallback: true,
    hot: "only",
    static: {
      directory: path.join(__dirname, "public"),
      directory: path.join(__dirname, "./"),
      serveIndex: true,
    },
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        router: () => "http://localhost:8000",
        logLevel: "debug",
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [require.resolve("react-refresh/babel")].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.scss$/,
        use: [
          "styling-typing-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                namedExport: true,
                localIdentName: "[path][name]__[local]",
              },
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.ico$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new Dotenv(),
    new ReactRefreshWebpackPlugin(),
    // for copying static assets
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: "public", to: "." }, //to the build root directory
    //   ],
    // }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
  ],
  resolveLoader: {
    alias: {
      "styling-typing-loader": path.resolve(
        __dirname,
        "./styling-typing-loader.js",
      ),
    },
  },
};
