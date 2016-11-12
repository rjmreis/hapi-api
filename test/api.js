'use strict';

const Hapi = require('hapi');
const jwtPlugin = require('hapi-auth-jwt2');
const authPlugin = require('../auth');
const apiPlugin = require('../api');

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const before = lab.before;
const expect = Code.expect;

describe('API', () => {
  let server;

  before((done) => {

    const plugins = [jwtPlugin, authPlugin, apiPlugin];
    server = new Hapi.Server();
    server.connection({ port: 8000 });
    server.register(plugins, (err) => {

      if (err) {
        return done(err);
      }

      server.initialize(done);
    });

  });

  it('Known route should return http status 200', done => {
    server.inject('/', response => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Restricted route should return http status 401 for anonymous user', done => {
    server.inject('/restricted', response => {
      expect(response.statusCode).to.equal(401);
      done();
    });
  });

  it('Restricted route should return http status 200 for authenticated user', done => {
    var options = {
      method: 'GET',
      url: '/restricted',
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
    server.inject('/unkownroute', response => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

});
