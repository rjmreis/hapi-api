[![Build Status](https://secure.travis-ci.org/rjmreis/hapi-api.svg)](http://travis-ci.org/rjmreis/hapi-api)
[![Dependencies Status](https://david-dm.org/rjmreis/hapi-api.svg)](https://david-dm.org/rjmreis/hapi-api)
[![DevDependencies Status](https://david-dm.org/rjmreis/hapi-api/dev-status.svg)](https://david-dm.org/rjmreis/hapi-api#info=devDependencies)

# hapi-api
Lean hapi API Boilerplate with an opinionated view on project structure.

## The Goal
To provide a base guidance to structure a hapi project with server routes, jwt authentication and tests, following best practises.

## Core Stack

- **Node.js** - [http://nodejs.org/](http://nodejs.org/)
- **Hapi** - [http://hapijs.com/](http://hapijs.com/)

### Quick Start

Clone project and install dependencies:
```bash
$ git clone https://github.com/rjmreis/hapi-api.git
$ cd hapi-api
$ npm install
```

Start the server:
```bash
$ npm start
```

Run tests:
```bash
$ npm test
```

### Plugins

- **glue** - Server composer for hapi.js.
https://github.com/hapijs/glue
- **glob** - Match files using the patterns the shell uses.
https://github.com/isaacs/node-glob
- **hapi-auth-jwt2** - Secure Hapi.js authentication plugin using JSON Web Tokens (JWT) in Headers, Query or Cookies.
https://github.com/dwyl/hapi-auth-jwt2
- **plugo** - Dynamically expose modules to hapi plugins from a given path
https://github.com/rjmreis/plugo
- **blipp** - Simple hapi plugin to display the routes table at startup.
https://github.com/danielb2/blipp
- **good** - Hapi process monitor. It listens for events emitted by Hapi Server instances and allows custom reporters to be registered that output subscribed events.
https://github.com/hapijs/good
- **good-console** - Console reporting for Good process monitor.
https://github.com/hapijs/good-console
- **lab** - Node test utility.
https://github.com/hapijs/lab
- **code** - BDD assertion library.
https://github.com/hapijs/code

## Project Structure
```
.
├── server.js         * Server definition (uses the Glue plugin to read a manifest)
├── routes.js         * REST routes
├── auth.js           * Auth strategies
├── package.json
├── config/
|   └── manifest.js   * Configuration manifest for server
├── controllers/
|   ├── handlers/
|   |   └── home.js   * Sample handler
|   └── index.js      * Registers all the files inside the handlers folder
└── test/
    └── routes.js     * Sample routes test
```

## Credits
Big thanks for the guidance of the following projects.

- [hapi-plugins.com](https://github.com/hapijs-edge/hapi-plugins.com)
- [hapi-ninja](https://github.com/poeticninja/hapi-ninja)

## License
The MIT License (MIT)

Copyright (c) 2015 Ricardo Reis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.