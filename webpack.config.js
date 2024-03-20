import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { createConfigHandler } from './config.js';

/**
 * @type {import('webpack').Configuration}
 */
const config =  {
  output: {
    path: resolve('dist')
  },
  devServer: {
    setupMiddlewares(middlewares, devServer) {
      devServer.app.use(...createConfigHandler());

      return middlewares;
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};

export default config;
