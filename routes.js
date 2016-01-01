exports.register = (plugin, options, next) => {

  plugin.dependency('controllers');

  var handlers = plugin.plugins.controllers.handlers;

  plugin.route([
    // Application Routes
    { method: 'GET', path: '/', config: handlers.Home.hello },
    { method: 'GET', path: '/restricted', config: handlers.Home.restricted },
    { method: 'GET', path: '/{path*}', config: handlers.Home.notFound }
  ]);

  next();
};

exports.register.attributes = {
  name: 'routes'
};