const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const BundleTracker = require("webpack-bundle-tracker");

const isProduction = process.env.NODE_ENV === "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config = {
  context: __dirname,
  devtool: "source-map",
  entry: {
    main: "./src/index.tsx",
    ts: "./src/index.tsx",
  },
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "http://localhost:3000/frontend/dist/",
    filename: "[name].js",
  },
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new BundleTracker({ filename: "./webpack-stats.json" }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "src"),
      // 'bower_components',
    ],
    alias: {
      src: path.resolve(__dirname, "src"),
    },
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      buffer: require.resolve("buffer/"),
      stream: require.resolve("stream-browserify"),
    },
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};
