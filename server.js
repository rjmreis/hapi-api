const Glue = require('glue');
const Hapi = require('hapi');
const manifest = require('./config/manifest.json');

if (!process.env.PRODUCTION) {
  manifest.plugins['blipp'] = [{}];
  manifest.plugins['good'].reporters[0].events['ops'] = '*';
}

Glue.compose(manifest, { relativeTo: __dirname }, (err, server) => {
  if (err) {
    console.log('server.register err:', err);
  }
  server.start(() => {
    console.log('✅  Server is listening on ' + server.info.uri.toLowerCase());
  });
});