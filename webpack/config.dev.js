const config = require('./config.shared.js');

module.exports = {
  ...config,
  mode: 'development',
  devtool: 'source-map',
};
