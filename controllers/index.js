const Plugo = require('plugo');

exports.register = (plugin, options, next) => {
  plugin.dependency('auth');

  Plugo.expose({ path: __dirname + '/handlers' }, 'handlers', plugin, next);
};

exports.register.attributes = {
  name: 'controllers'
};