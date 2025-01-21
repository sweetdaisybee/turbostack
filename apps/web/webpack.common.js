import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin"
import DotenvWebpackPlugin from "dotenv-webpack";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

/**
 * @type {import("webpack").Configuration}
 */
const webpackCommonConfig = {
  target: "web",
  experiments: {
    outputModule: true
  },
  entry: path.join(import.meta.dirname, "src", "index.tsx"),
  resolve: {
    extensions: [
      ".tsx",
      ".ts",
      ".js",
      ".jsx",
      ".json",
      ".css",
      ".wasm"
    ],
    aliasFields: ["browser"],
    alias: {
      "@components": ["./components/index.js"],
      "@views": ["./views/index.js"],
    },
    extensionAlias: {
      ".jsx": [".tsx", ".jsx"],
      ".js": [".ts", ".js"]
    },
    plugins: [
      new TsconfigPathsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)?$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new DotenvWebpackPlugin({
      path: path.join(import.meta.dirname, ".env")
    }),
    new HtmlWebpackPlugin({
      template: path.join(import.meta.dirname, "public", "index.html"),
      inject: "body",
      scriptLoading: "module"
    })
  ]
};

export default webpackCommonConfig;
