import { merge } from "webpack-merge";
import webpackCommonConfig from "./webpack.common.js";
import path from "path";

const webpackProdConfig = merge(webpackCommonConfig,
  {
    mode: "production",
    devtool: "source-map",
    output: {
      module: true,
      clean: true,
      filename: "bundle.[contenthash].js",
      path: path.join(import.meta.dirname, "dist"),
    },
  }
)

export default webpackProdConfig;
