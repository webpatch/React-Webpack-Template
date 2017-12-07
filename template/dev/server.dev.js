const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const chalk = require('chalk');
const path = require('path');
const ip = require('ip').address();
const config = require('./webpack.dev');
const appConfig = require('../app.config.js');

const { port, host } = { port: appConfig.serverPort, host: ip };

try {
  const compiler = webpack(config);

  const server = new WebpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, '../'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: {
      colors: true,
      assets: false,
      source: false,
      timings: true,
      hash: false,
      version: false,
      chunkModules: false,
      chunkOrigins: true,
    },
  });

  server.listen(port, host, () => {
    const url = `http://${host}:${port}`;
    console.log(chalk.green(`Dev server listening on ${url} ...`));
    // openBrowser(`${url}/home.html`);
  });
} catch (e) {
  console.log(chalk.red(`The following error has ocurred: ${e}`));
}
