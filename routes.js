const Actin = require('actin');

exports.register = (plugin, options, next) => {

  var AutoLoader = new Actin();
  plugin.dependency('controllers');

  var Controllers = AutoLoader.controllersSync({ folderName: '/controllers/handlers' });

  plugin.route([
    // Application Routes
    { method: 'GET', path: '/', config: Controllers.Home.hello },
    { method: 'GET', path: '/restricted', config: Controllers.Home.restricted },
    { method: 'GET', path: '/{path*}', config: Controllers.Home.notFound }
  ]);

  next();
};

exports.register.attributes = {
  name: 'routes'
};