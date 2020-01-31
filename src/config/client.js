let config = {
  api: {
    protocol: 'http',
    host: 'localhost',
    port: 8080,
    prefix: 'api',
  },
};

config.endpoint =
  config.api.protocol +
  '://' +
  config.api.host +
  ':' +
  config.api.port +
  '/' +
  config.api.prefix +
  '/';

module.exports = config;
module.exports.api = config.api;
module.exports.endpoint = config.endpoint;
