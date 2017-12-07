const chalk = require('chalk');
const ip = require('ip').address();
const webpackConfig = require('./webpack.dist');
const server = require('pushstate-server');
const config = require('../app.config.js');

const { port, host } = { port: config.serverPort + 1, host: ip };

server.start({
  port: port,
  directory: webpackConfig.output.path,
});

const url = `http://${host}:${port}`;

console.log(chalk.green(`Dist server listening on ${url} ...`));