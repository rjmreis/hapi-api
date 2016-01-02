const Plugo = require('plugo');

exports.register = (plugin, options, next) => {
  plugin.dependency('auth');

  Plugo.expose({ name: 'handlers', path: __dirname + '/handlers' }, plugin, next);
};

exports.register.attributes = {
  name: 'controllers'
};