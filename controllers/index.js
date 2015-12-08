const glob = require('glob');
const path = require('path');

var load = (options, callback) => {

  options = options || {};
  options.extension = options.extension || '.js';
  var controllers = {};

  var files = glob.sync('*' + options.extension, { cwd: options.path || __dirname });
  for (var i in files) {
    if (files[i] != path.basename(__filename)) {
      var key = path.basename(files[i], options.extension);
      key = key.charAt(0).toUpperCase() + key.slice(1);

      controllers[key] = require((options.path || __dirname) + '/' + files[i]);
    }
  }

  if (callback) {
    return callback(null, controllers);
  }

  return controllers;
};

exports.register = (plugin, options, next) => {

  load({ path: __dirname + '/handlers' }, (err, handlers) => {
    if (err) {
      throw err;
    }

    plugin.expose('handlers', handlers);
    next();
  });
};

exports.register.attributes = {
  name: 'controllers'
};