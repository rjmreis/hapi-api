// Load modules

const Code = require('code');
const Lab = require('lab');

const Glue = require('glue');
const manifest = require('../config/manifest.json');

// Test shortcuts

const lab = exports.lab = Lab.script();

// Tests
Glue.compose(manifest, { relativeTo: process.cwd() }, (err, server) => {
  server.start(() => { });

  lab.describe("Routes", () => {

    lab.it('Known route should return http status 200', done => {
      server.inject('/api', response => {
        Code.expect(response.statusCode).to.equal(200);
        done();
      });
    });
    
    lab.it('Restricted route should return http status 401 for anonymous user', done => {
      server.inject('/api/restricted', response => {
        Code.expect(response.statusCode).to.equal(401);
        done();
      });
    });
    
    lab.it('Restricted route should return http status 200 for authenticated user', done => {
      var options = {
        method : 'GET',
        url : '/api/restricted',
        headers : {
          'Authorization' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFudGhvbnkgVmFsaWQgVXNlciIsImlhdCI6MTQyNTQ3MzUzNX0.KA68l60mjiC8EXaC2odnjFwdIDxE__iDu5RwLdN1F2A',
          'Content-Type' : 'application/json; charset=utf-8'
        }
      };
      server.inject(options, response => {
        Code.expect(response.statusCode).to.equal(200);
        done();
      });
    });

    lab.it('Unknown route should return http status 404', done => {
      server.inject('/api/unkownroute', response => {
        Code.expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});