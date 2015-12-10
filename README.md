# hapi-api
Lean hapi API Boilerplate with an opinionated view on project structure.

## The Goal
To provide a base guidance to structure a hapi project with server routes, jwt authentication and tests, following best practises.

## Core Stack

**Node.js** - [http://nodejs.org/](http://nodejs.org/)

**Hapi** - [http://hapijs.com/](http://hapijs.com/)

## Project Structure

	server.js        --> Server definition (uses the Glue plugin to read a manifest)
    routes.js        --> REST routes
    auth.js          --> Auth strategies
    package.json
    config/
      manifest.js    --> Configuration manifest for server
    controllers/
      handlers/
        home.js      --> Sample handler
      index.js       --> Registers all the files inside the handlers folder
    test/
      routes.js      --> Sample routes test 

## Credits
Big thanks for the guidance of the following projects.

[hapi-plugins.com](https://github.com/hapijs-edge/hapi-plugins.com)

[hapi-ninja](https://github.com/poeticninja/hapi-ninja)

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