import { merge } from "webpack-merge";
import webpackCommonConfig from "./webpack.common.js";
import webpackDevServer from "webpack-dev-server";

/**
 * @type {import('webpack').Configuration}
 */
const webpackDevConfig = merge(webpackCommonConfig,
  {
    mode: "development",
    devtool: "eval",
    devServer: {
      open: false,
      host: "127.0.0.1",
      proxy: [
        {
          context: ["/api"],
          target: "http://127.0.0.1:3000"
        }
      ],
      port: 3001,
      hot: false,
      compress: true,
      allowedHosts: "all",
      liveReload: true,
      historyApiFallback: true,
      client: {
        logging: "verbose",
        overlay: true,
        progress: true,
        reconnect: 5,
        webSocketURL: "ws://0.0.0.0/ws",
        webSocketTransport: "ws"
      },
      webSocketServer: "ws"
    }
  }
);

export default webpackDevConfig;
