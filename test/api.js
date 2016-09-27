const Glue = require('glue');
const manifest = require('../config/manifest.json');

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const before = lab.before;
const expect = Code.expect;

describe('API', () => {
  var server;

  before((done) => {

    Glue.compose(manifest, { relativeTo: process.cwd() }, (err, hapi) => {
      server = hapi;
      server.start(() => { });
    });
    done();

  });

  it('Known route should return http status 200', done => {
    server.inject('/api', response => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Restricted route should return http status 401 for anonymous user', done => {
    server.inject('/api/restricted', response => {
      expect(response.statusCode).to.equal(401);
      done();
    });
  });

  it('Restricted route should return http status 200 for authenticated user', done => {
    var options = {
      method: 'GET',
      url: '/api/restricted',
      headers: {
        'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFudGhvbnkgVmFsaWQgVXNlciIsImlhdCI6MTQyNTQ3MzUzNX0.KA68l60mjiC8EXaC2odnjFwdIDxE__iDu5RwLdN1F2A',
        'Content-Type': 'application/json; charset=utf-8'
      }
    };
    server.inject(options, response => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Unknown route should return http status 404', done => {
    server.inject('/api/unkownroute', response => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

});
