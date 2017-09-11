/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
let LocalStorageManager = class LocalStorageManager {
  static setUserToken(userToken) {
    localStorage.setItem('localStorageUserToken', JSON.stringify(userToken));
  }

  static removeUserToken() {
    localStorage.removeItem('localStorageUserToken');
  }

  static getUserToken() {
    return JSON.parse(localStorage.getItem('localStorageUserToken'));
  }

  static clearLocalStorage() {
    localStorage.clear();
  }
};
exports.default = LocalStorageManager;

/***/ }),
/* 5 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"email"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"profile"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}]}}],"loc":{"start":0,"end":69}};
    doc.loc.source = {"body":"query {\n  user {\n    id\n    email\n    profile {\n      id\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  
module.exports = doc;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Simple class to act as a singleton for app-wide configuration.

// We'll start with a common config that can be extended separately by the
// server/client, to provide environment-specific functionality
let Common = class Common {
  constructor() {
    // Store reducers in a `Map`, for easy key retrieval
    this.reducers = new Map();

    // Apollo (middle|after)ware
    this.apolloMiddleware = [];
    this.apolloAfterware = [];
    this.apolloNetworkOptions = {};
    this.apolloClientOptions = {};

    // GraphQL endpoint.  This needs setting via either `config.enableGraphQLServer()`
    // or `config.setGraphQLEndpoint()`
    this.graphQLEndpoint = null;

    // Set to true if we're using an internal GraphQL server
    this.graphQLServer = false;
  }

  /* REDUX */

  // Adds a new reducer.  Accepts a `key` string, a `reducer` function, and a
  // (by default empty) `initialState` object, which will ultimately become immutable
  addReducer(key, reducer, initialState = {}) {
    if (typeof reducer !== 'function') {
      throw new Error(`Can't add reducer for '${key}' - reducer must be a function`);
    }
    this.reducers.set(key, {
      reducer,
      initialState
    });
  }

  /* GRAPHQL */

  // Enables internal GraphQL server.  Default GraphQL and GraphiQL endpoints
  // can be overridden
  enableGraphQLServer(endpoint = '/graphql', graphiQL = true) {
    this.graphQLServer = true;
    this.graphQLEndpoint = endpoint;
    this.graphiQL = graphiQL;
  }

  // Set an external GraphQL URI for use with Apollo
  setGraphQLEndpoint(uri, graphiQL = true) {
    this.graphQLEndpoint = uri;
    this.graphiQL = graphiQL;
  }

  // Register Apollo middleware function
  addApolloMiddleware(middlewareFunc) {
    this.apolloMiddleware.push(middlewareFunc);
  }

  // Register Apollo afterware function
  addApolloAfterware(afterwareFunc) {
    this.apolloAfterware.push(afterwareFunc);
  }

  // Apollo Client options.  These will be merged in with the `createClient`
  // default options defined in `kit/lib/apollo.js`
  setApolloClientOptions(opt = {}) {
    this.apolloClientOptions = opt;
  }

  // Apollo Network options.  These will be merged in with the `createNetworkInterface`
  // default options defined in `kit/lib/apollo.js`
  setApolloNetworkOptions(opt = {}) {
    this.apolloNetworkOptions = opt;
  }
};

// Placeholder for the class we'll attach

let Config;

// Server Config extensions.  This is wrapped in a `SERVER` block to avoid
// adding unnecessary functionality to the client bundle.  Every byte counts!
if (true) {
  Config = class ServerConfig extends Common {
    constructor() {
      super();
      // Create a set for routes -- to retrieve based on insertion order
      this.routes = new Set();

      // Koa application function. But default, this is null
      this.koaAppFunc = null;

      // Flag for setting whether plain HTTP should be disabled
      this.enableHTTP = true;

      // Force SSL. Rewrites all non-SSL queries to SSL.  False, by default.
      this.enableForceSSL = false;

      // Options for enabling SSL. By default, this is null. If SSL is enabled
      // in userland, this would instead hold an object of options
      this.sslOptions = null;

      // Custom middleware -- again, based on insertion order
      this.middleware = new Set();

      // GraphQL schema (if we're using an internal server)
      this.graphQLSchema = null;

      // Attach a GraphiQL IDE endpoint to our server?  By default - no.  If
      // this === true, this will default to `/graphql`.  If it's a string, it'll
      // default to the string value
      this.graphiQL = false;

      // Enable body parsing by default.  Leave `koa-bodyparser` opts as default
      this.enableBodyParser = true;
      this.bodyParserOptions = {};

      // CORS options for `koa-cors`
      this.corsOptions = {};
    }

    /* WEB SERVER / SSR */

    // Get access to Koa's `app` instance, for adding custom instantiation
    // or doing something that's not covered by other functions
    getKoaApp(func) {
      this.koaAppFunc = func;
    }

    // Enable SSL. Normally, you'd use an upstream proxy like Nginx to handle
    // SSL. But if you want to run a 'bare' Koa HTTPS web server, you can pass
    // in the certificate details here and it'll respond to SSL requests
    enableSSL(opt) {
      // At a minimum, we should have `key` and `cert` -- check for those
      if (typeof opt !== 'object' || !opt.key || !opt.cert) {
        throw new Error('Cannot enable SSL. Missing `key` and/or `cert`');
      }
      this.sslOptions = opt;
    }

    // Force SSL. Rewrites all non-SSL queries to SSL. Any options here are
    // passed to `koa-sslify`, the SSL enforcement middleware
    forceSSL(opt = {}) {
      this.enableForceSSL = opt;
    }

    // Disable plain HTTP.  Note this should only be used if you've also set
    // `enableSSL()` and you don't want dual-HTTP+SSL config
    disableHTTP() {
      this.enableHTTP = false;
    }

    // Disable the optional `koa-bodyparser`, to prevent POST data being sent to
    // each request.  By default, body parsing is enabled.
    disableBodyParser() {
      this.enableBodyParser = false;
    }

    setBodyParserOptions(opt = {}) {
      this.bodyParserOptions = opt;
    }

    // 404 handler for the server.  By default, `kit/entry/server.js` will
    // simply return a 404 status code without modifying the HTML render.  By
    // setting a handler here, this will be returned instead
    set404Handler(func) {
      if (typeof func !== 'function') {
        throw new Error('404 handler must be a function');
      }
      this.handler404 = func;
    }

    // Error handler.  If this isn't defined, the server will simply return a
    // 'There was an error. Please try again later.' message, and log the output
    // to the console.  Override that behaviour by passing a (e, ctx, next) -> {} func
    setErrorHandler(func) {
      if (typeof func !== 'function') {
        throw new Error('Error handler must be a function');
      }
      this.errorHandler = func;
    }

    // Add custom middleware.  This should be an async func, for use with Koa
    addMiddleware(middlewareFunc) {
      this.middleware.add(middlewareFunc);
    }

    // Adds a custom server route to attach to our Koa router
    addRoute(method, route, ...handlers) {
      this.routes.add({
        method,
        route,
        handlers
      });
    }

    // Adds custom GET route
    addGetRoute(route, ...handlers) {
      this.addRoute('get', route, ...handlers);
    }

    // Adds custom POST route
    addPostRoute(route, ...handlers) {
      this.addRoute('post', route, ...handlers);
    }

    // Adds custom PUT route
    addPutRoute(route, ...handlers) {
      this.addRoute('put', route, ...handlers);
    }

    // Adds custom PATCH route
    addPatchRoute(route, ...handlers) {
      this.addRoute('patch', route, ...handlers);
    }

    // Adds custom DELETE route
    addDeleteRoute(route, ...handlers) {
      this.addRoute('delete', route, ...handlers);
    }

    // Set the GraphQL schema. This should only be called on the server, otherwise
    // the bundle size passed by the `schema` object will be unnecessarily inflated
    setGraphQLSchema(schema) {
      this.graphQLSchema = schema;
    }

    // CORS options, for `koa-cors` instantiation
    setCORSOptions(opt = {}) {
      this.corsOptions = opt;
    }
  };
} else {
  // For the client config, we'll extend `Common` by default -- but if we need
  // anything unique to the browser in the future, we'd add it here...
  Config = class ClientConfig extends Common {};
}

// Since there's only one `Config` instance globally, we'll create the new
// instance here and export it.  This will then provide any subsequent imports
// with the same object, so we can add settings to a common config
exports.default = new Config();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----------------------
// IMPORTS

const path = __webpack_require__(7);

// ----------------------

// Parent folder = project root
const root = path.join(__dirname, '..');

module.exports = {
  // Root project folder.  This is the current dir.
  root,

  // Kit.  ReactQL starter kit code.  You can edit these files, but be
  // aware that upgrading your starter kit could overwrite them
  kit: path.join(root, 'kit'),

  // Entry points.  This is where webpack will look for our browser.js,
  // server.js and vendor.js files to start building
  entry: path.join(root, 'kit', 'entry'),

  // Webpack configuration files
  webpack: path.join(root, 'kit', 'webpack'),

  // Views for internal use
  views: path.join(root, 'kit', 'views'),

  // Source path; where we'll put our application files
  src: path.join(root, 'src'),

  // Static files.  HTML, images, etc that can be processed by Webpack
  // before being moved into the final `dist` folder
  static: path.join(root, 'static'),

  // Dist path; where bundled assets will wind up
  dist: path.join(root, 'dist'),

  // Dist path for development; where dev assets will wind up
  distDev: path.resolve(root, 'dist', 'dev'),

  // Public.  This is where our web server will start looking to serve
  // static files from
  public: path.join(root, 'dist', 'public')
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServerURL = getServerURL;
/* eslint-disable import/prefer-default-export */

// Environment-aware functions

// Get the protocol://host:port of where the current server would bind
function getServerURL(host = "localhost", port = "4000", allowSSL = true) {
  // Check for SSL
  if (allowSSL && null) {
    const stub = `https://${host || "localhost"}`;

    // If we're on port 443, that's 'regular' SSL so no need to specify port
    if (null === '443') return stub;
    return `${stub}:${null}`;
  }

  // Plain HTTP
  const stub = `http://${host || "localhost"}`;

  // If we're on port 80, that's 'regular' HTTP so no need to specify port
  if (port === '80') return stub;
  return `${stub}:${port}`;
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"signinUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"token"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":126}};
    doc.loc.source = {"body":"mutation($email: String!, $password: String!) {\n  signinUser(email: { email: $email, password: $password }) {\n    token\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  
module.exports = doc;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _path = __webpack_require__(7);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(14);

var _paths = __webpack_require__(8);

var _paths2 = _interopRequireDefault(_paths);

var _console = __webpack_require__(15);

var _server = __webpack_require__(19);

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Read in manifest files


// Import console messages


// Needed to read manifest files
const [manifest, chunkManifest] = ['manifest', 'chunk-manifest'].map(name => JSON.parse((0, _fs.readFileSync)(_path2.default.resolve(_paths2.default.dist, `${name}.json`), 'utf8')));

// Get manifest values


// Extend the server base


/* Local */

// Import paths.  We'll use this to figure out where our public folder is
// so we can serve static files
/* eslint-disable no-console */

// Production server entry point.  Spawns the server on default HOST:PORT

// ----------------------
// IMPORTS

/* Node */

const css = manifest['browser.css'];
const scripts = ['manifest.js', 'vendor.js', 'browser.js'].map(key => manifest[key]);

// Spawn the development server.
// Runs inside an immediate `async` block, to await listening on ports
(async () => {
  const { app, router, listen } = _server2.default;

  // Connect the production routes to the server
  router.get('/*', (0, _server.createReactHandler)(css, scripts, chunkManifest));
  app.use((0, _server.staticMiddleware)()).use(router.routes()).use(router.allowedMethods());

  // Spawn the server
  listen();

  // Log to the terminal that we're ready for action
  (0, _console.logServerStarted)({
    type: 'server'
  });
})();

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logServerStarted = logServerStarted;

var _boxen = __webpack_require__(16);

var _boxen2 = _interopRequireDefault(_boxen);

var _chalk = __webpack_require__(17);

var _chalk2 = _interopRequireDefault(_chalk);

var _ip = __webpack_require__(18);

var _ip2 = _interopRequireDefault(_ip);

var _env = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// IP library, for determining the local network interface
/* eslint-disable import/prefer-default-export, no-console */

// ----------------------
// IMPORTS

/* NPM */

// Display a border around a message
function logServerStarted(opt = {}) {
  let message = _chalk2.default.green(`Running ${(opt.chalk || _chalk2.default.bold)(opt.type)} in ${_chalk2.default.bold("production")} mode\n\n`);
  message += `- ${_chalk2.default.bold('Local:           ')} ${(0, _env.getServerURL)(opt.host, opt.port, opt.allowSSL)}`;

  try {
    const url = (0, _env.getServerURL)(_ip2.default.address(), opt.port, opt.allowSSL);
    message += `\n- ${_chalk2.default.bold('On Your Network: ')} ${url}`;
  } catch (err) {
    /* ignore errors */
  }

  console.log((0, _boxen2.default)(message, {
    padding: 1,
    borderColor: 'green',
    margin: 1
  }));
}

/* ReactQL */


// Chalk library, to add colour to our console logs

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("boxen");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("ip");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staticMiddleware = staticMiddleware;
exports.createReactHandler = createReactHandler;

var _stream = __webpack_require__(20);

var _http = __webpack_require__(21);

var _http2 = _interopRequireDefault(_http);

var _https = __webpack_require__(22);

var _https2 = _interopRequireDefault(_https);

__webpack_require__(23);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(24);

var _server2 = _interopRequireDefault(_server);

var _koa = __webpack_require__(25);

var _koa2 = _interopRequireDefault(_koa);

var _reactApollo = __webpack_require__(2);

var _koaSslify = __webpack_require__(26);

var _koaSslify2 = _interopRequireDefault(_koaSslify);

var _kcors = __webpack_require__(27);

var _kcors2 = _interopRequireDefault(_kcors);

var _koaSend = __webpack_require__(28);

var _koaSend2 = _interopRequireDefault(_koaSend);

var _koaHelmet = __webpack_require__(29);

var _koaHelmet2 = _interopRequireDefault(_koaHelmet);

var _koaRouter = __webpack_require__(30);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _microseconds = __webpack_require__(31);

var _microseconds2 = _interopRequireDefault(_microseconds);

var _reactRouter = __webpack_require__(32);

var _reactHelmet = __webpack_require__(33);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _apolloServerKoa = __webpack_require__(34);

var _apolloLocalQuery = __webpack_require__(35);

var _apolloLocalQuery2 = _interopRequireDefault(_apolloLocalQuery);

var _graphql = __webpack_require__(36);

var graphql = _interopRequireWildcard(_graphql);

var _app = __webpack_require__(37);

var _app2 = _interopRequireDefault(_app);

var _redux = __webpack_require__(59);

var _redux2 = _interopRequireDefault(_redux);

var _ssr = __webpack_require__(63);

var _ssr2 = _interopRequireDefault(_ssr);

var _apollo = __webpack_require__(64);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

var _paths = __webpack_require__(8);

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Create a network layer based on settings.  This is an immediate function
// that binds either the `localInterface` function (if there's a built-in
// GraphQL) or `externalInterface` (if we're pointing outside of ReactQL)


// App settings, which we'll use to customise the server -- must be loaded
// *after* app.js has been called, so the correct settings have been set


// Initial view to send back HTML render


/* ReactQL */

// App entry point.  This must come first, because app.js will set-up the
// server config that we'll use later


// Allow local GraphQL schema querying when using a built-in GraphQL server


// <Helmet> component for retrieving <head> section, so we can set page
// title, meta info, etc along with the initial HTML


// High-precision timing, so we can debug response time to serve a request


// HTTP header hardening


// Enable cross-origin requests


// Apollo tools to connect to a GraphQL server.  We'll grab the
// `ApolloProvider` HOC component, which will inject any 'listening' React
// components with GraphQL data props.  We'll also use `getDataFromTree`
// to await data being ready before rendering back HTML to the client


// React utility to transform JSX to HTML (to send back to the client)


/* NPM */

// Patch global.`fetch` so that Apollo calls to GraphQL work


// HTTP & SSL servers.  We can use `config.enableSSL|disableHTTP()` to enable
// HTTPS and disable plain HTTP respectively, so we'll use Node's core libs
// for building both server types.
const createNeworkInterface = (() => {
  // For a local interface, we want to allow passing in the request's
  // context object, which can then feed through to our GraphQL queries to
  // extract pertinent information and manipulate the response
  function localInterface(context) {
    return _apolloLocalQuery2.default.createLocalInterface(graphql, _config2.default.graphQLSchema, {
      // Attach the request's context, which certain GraphQL queries might
      // need for accessing cookies, auth headers, etc.
      context
    });
  }

  function externalInterface() {
    return (0, _apollo.getNetworkInterface)(_config2.default.graphQLEndpoint);
  }

  return _config2.default.graphQLServer ? localInterface : externalInterface;
})();

// Static file middleware


// Import paths.  We'll use this to figure out where our public folder is
// so we can serve static files


// Grab the shared Apollo Client / network interface instantiation


// Custom redux store creator.  This will allow us to create a store 'outside'
// of Apollo, so we can apply our own reducers and make use of the Redux dev
// tools in the browser


// Import all of the GraphQL lib, for use with our Apollo client connection


// Import the Apollo GraphQL server, for Koa


// React Router HOC for figuring out the exact React hierarchy to display
// based on the URL


// Koa Router, for handling URL requests


// Static file handler


// Enforce SSL, if required


// Koa 2 web server.  Handles incoming HTTP requests, and will serve back
// the React render, or any of the static assets being compiled


// React UI
/* eslint-disable no-param-reassign, no-console */

// Server entry point, for Webpack.  This will spawn a Koa web server
// and listen for HTTP requests.  Clients will get a return render of React
// or the file they have requested
//
// Note:  No HTTP optimisation is performed here (gzip, http/2, etc).  Node.js
// will nearly always be slower than Nginx or an equivalent, dedicated proxy,
// so it's usually better to leave that stuff to a faster upstream provider

// ----------------------
// IMPORTS

/* Node */

// For pre-pending a `<!DOCTYPE html>` stream to the server response
function staticMiddleware() {
  return async function staticMiddlewareHandler(ctx, next) {
    try {
      if (ctx.path !== '/') {
        return await (0, _koaSend2.default)(ctx, ctx.path,  true ? {
          root: _paths2.default.public,
          immutable: true
        } : {
          root: _paths2.default.distDev
        });
      }
    } catch (e) {/* Errors will fall through */}
    return next();
  };
}

// Function to create a React handler, per the environment's correct
// manifest files
function createReactHandler(css = [], scripts = [], chunkManifest = {}) {
  return async function reactHandler(ctx) {
    const routeContext = {};

    // Generate the HTML from our React tree.  We're wrapping the result
    // in `react-router`'s <StaticRouter> which will pull out URL info and
    // store it in our empty `route` object
    const components = _react2.default.createElement(
      _reactRouter.StaticRouter,
      { location: ctx.request.url, context: routeContext },
      _react2.default.createElement(
        _reactApollo.ApolloProvider,
        { store: ctx.store, client: ctx.apollo },
        _react2.default.createElement(_app2.default, null)
      )
    );

    // Wait for GraphQL data to be available in our initial render,
    // before dumping HTML back to the client
    await (0, _reactApollo.getDataFromTree)(components);

    // Handle redirects
    if ([301, 302].includes(routeContext.status)) {
      // 301 = permanent redirect, 302 = temporary
      ctx.status = routeContext.status;

      // Issue the new `Location:` header
      ctx.redirect(routeContext.url);

      // Return early -- no need to set a response body
      return;
    }

    // Handle 404 Not Found
    if (routeContext.status === 404) {
      // By default, just set the status code to 404.  Or, we can use
      // `config.set404Handler()` to pass in a custom handler func that takes
      // the `ctx` and store

      if (_config2.default.handler404) {
        _config2.default.handler404(ctx);

        // Return early -- no need to set a response body, because that should
        // be taken care of by the custom 404 handler
        return;
      }

      ctx.status = routeContext.status;
    }

    // Create a HTML stream, to send back to the browser
    const htmlStream = new _stream.PassThrough();

    // Prefix the doctype, so the browser knows to expect HTML5
    htmlStream.write('<!DOCTYPE html>');

    // Create a stream of the React render. We'll pass in the
    // Helmet component to generate the <head> tag, as well as our Redux
    // store state so that the browser can continue from the server
    const reactStream = _server2.default.renderToNodeStream(_react2.default.createElement(
      _ssr2.default,
      {
        head: _reactHelmet2.default.rewind(),
        window: {
          webpackManifest: chunkManifest,
          __STATE__: ctx.store.getState()
        },
        css: css,
        scripts: scripts },
      components
    ));

    // Pipe the React stream to the HTML output
    reactStream.pipe(htmlStream);

    // Set the return type to `text/html`, and stream the response back to
    // the client
    ctx.type = 'text/html';
    ctx.body = htmlStream;
  };
}

// Build the router, based on our app's settings.  This will define which
// Koa route handlers
const router = new _koaRouter2.default().
// Set-up a general purpose /ping route to check the server is alive
get('/ping', async ctx => {
  ctx.body = 'pong';
})

// Favicon.ico.  By default, we'll serve this as a 204 No Content.
// If /favicon.ico is available as a static file, it'll try that first
.get('/favicon.ico', async ctx => {
  ctx.res.statusCode = 204;
});

// Build the app instance, which we'll use to define middleware for Koa
// as a precursor to handling routes
const app = new _koa2.default()
// Adds CORS config
.use((0, _kcors2.default)(_config2.default.corsOptions))

// Preliminary security for HTTP headers
.use((0, _koaHelmet2.default)())

// Error wrapper.  If an error manages to slip through the middleware
// chain, it will be caught and logged back here
.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    // If we have a custom error handler, use that - else simply log a
    // message and return one to the user
    if (typeof _config2.default.errorHandler === 'function') {
      _config2.default.errorHandler(e, ctx, next);
    } else {
      console.log('Error:', e.message);
      ctx.body = 'There was an error. Please try again later.';
    }
  }
})

// It's useful to see how long a request takes to respond.  Add the
// timing to a HTTP Response header
.use(async (ctx, next) => {
  const start = _microseconds2.default.now();
  await next();
  const end = _microseconds2.default.parse(_microseconds2.default.since(start));
  const total = end.microseconds + end.milliseconds * 1e3 + end.seconds * 1e6;
  ctx.set('Response-Time', `${total / 1e3}ms`);
})

// Create a new Apollo client and Redux store per request.  This will be
// stored on the `ctx` object, making it available for the React handler or
// any subsequent route/middleware
.use(async (ctx, next) => {
  // Create a new server Apollo client for this request
  ctx.apollo = (0, _apollo.createClient)({
    ssrMode: true,
    // Create a network request.  If we're running an internal server, this
    // will be a function that accepts the request's context, to feed through
    // to the GraphQL schema
    networkInterface: createNeworkInterface(ctx)
  });

  // Create a new Redux store for this request
  ctx.store = (0, _redux2.default)(ctx.apollo);

  // Pass to the next middleware in the chain: React, custom middleware, etc
  return next();
});

/* FORCE SSL */

// Middleware to re-write HTTP requests to SSL, if required.
if (_config2.default.enableForceSSL) {
  app.use((0, _koaSslify2.default)(_config2.default.enableForceSSL));
}

// Attach custom middleware
_config2.default.middleware.forEach(middlewareFunc => app.use(middlewareFunc));

// Attach an internal GraphQL server, if we need one
if (_config2.default.graphQLServer) {
  // Attach the GraphQL schema to the server, and hook it up to the endpoint
  // to listen to POST requests
  router.post(_config2.default.graphQLEndpoint, (0, _apolloServerKoa.graphqlKoa)(context => ({
    // Bind the current request context, so it's accessible within GraphQL
    context,
    // Attach the GraphQL schema
    schema: _config2.default.graphQLSchema
  })));
}

// Do we need the GraphiQL query interface?  This can be used if we have an
// internal GraphQL server, or if we're pointing to an external server.  First,
// we check if `config.graphiql` === `true` to see if we need one...

if (_config2.default.graphiQL) {
  // The GraphiQL endpoint default depends on this order of precedence:
  // explicit -> internal GraphQL server endpoint -> /graphql
  let graphiQLEndpoint;

  if (typeof _config2.default.graphiQL === 'string') {
    // Since we've explicitly passed a string, we'll use that as the endpoint
    graphiQLEndpoint = _config2.default.graphiQL;
  } else if (_config2.default.graphQLServer) {
    // If we have an internal GraphQL server, AND we haven't set a string,
    // the default GraphiQL path should be the same as the server endpoint
    graphiQLEndpoint = _config2.default.graphQLEndpoint;
  } else {
    // Since we haven't set anything, AND we don't have an internal server,
    // by default we'll use `/graphql` which will work for an external server
    graphiQLEndpoint = '/graphql';
  }

  router.get(graphiQLEndpoint, (0, _apolloServerKoa.graphiqlKoa)({
    endpointURL: _config2.default.graphQLEndpoint
  }));
}

// Attach any custom routes we may have set in userland
_config2.default.routes.forEach(route => {
  router[route.method](route.route, ...route.handlers);
});

/* BODY PARSING */

// `koa-bodyparser` is used to process POST requests.  Check that it's enabled
// (default) and apply a custom config if we need one
if (_config2.default.enableBodyParser) {
  app.use(__webpack_require__(65)(
  // Pass in any options that may have been set in userland
  _config2.default.bodyParserOptions));
}

/* CUSTOM APP INSTANTIATION */

// Pass the `app` to do anything we need with it in userland. Useful for
// custom instantiation that doesn't fit into the middleware/route functions
if (typeof _config2.default.koaAppFunc === 'function') {
  _config2.default.koaAppFunc(app);
}

// Listener function that will start http(s) server(s) based on userland
// config and available ports
const listen = () => {
  // Spawn the listeners.
  const servers = [];

  // Plain HTTP
  if (_config2.default.enableHTTP) {
    servers.push(_http2.default.createServer(app.callback()).listen("4000"));
  }

  // SSL -- only enable this if we have an `SSL_PORT` set on the environment
  if (false) {
    servers.push(_https2.default.createServer(_config2.default.sslOptions, app.callback()).listen(process.env.SSL_PORT));
  }

  return servers;
};

// Export everything we need to run the server (in dev or prod)
exports.default = {
  router,
  app,
  listen
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("koa-sslify");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("kcors");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("koa-send");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("koa-helmet");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("microseconds");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("apollo-server-koa");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("apollo-local-query");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _App = __webpack_require__(38);

var _App2 = _interopRequireDefault(_App);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

var _LocalStorageManager = __webpack_require__(4);

var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './styles.global.css'

_config2.default.setGraphQLEndpoint('https://api.graph.cool/simple/v1/cj78t448l01n00132a5m3q928/');

if (false) {
  _config2.default.setApolloNetworkOptions({
    credentials: 'include'
    //   uri: 'https://api.graph.cool/simple/v1/cj78t448l01n00132a5m3q928'
  });

  // Add Apollo request middleware to use the latest JWT token on every
  // request, so that our previously logged in state can be 'remembered'
  _config2.default.addApolloMiddleware((req, next) => {
    const jwt = _LocalStorageManager2.default.getUserToken();
    req.options.headers = _extends({}, req.options.headers, {
      authorization: `Bearer ${jwt}` || null
    });
    next();
  });
}
exports.default = _App2.default;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(39);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = () => _react2.default.createElement(_Layout2.default, null);

// import './main.css'

exports.default = App;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Switch = __webpack_require__(40);

var _Switch2 = _interopRequireDefault(_Switch);

var _Login = __webpack_require__(41);

var _Login2 = _interopRequireDefault(_Login);

var _Logout = __webpack_require__(42);

var _Logout2 = _interopRequireDefault(_Logout);

var _Register = __webpack_require__(43);

var _Register2 = _interopRequireDefault(_Register);

var _Home = __webpack_require__(45);

var _Home2 = _interopRequireDefault(_Home);

var _PrivateRoute = __webpack_require__(50);

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

var _PublicRoute = __webpack_require__(51);

var _PublicRoute2 = _interopRequireDefault(_PublicRoute);

var _PrivateLayout = __webpack_require__(52);

var _PrivateLayout2 = _interopRequireDefault(_PrivateLayout);

var _EmptyLayout = __webpack_require__(58);

var _EmptyLayout2 = _interopRequireDefault(_EmptyLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Layout


// Routes
const Layout = () => _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    _Switch2.default,
    null,
    _react2.default.createElement(_PublicRoute2.default, { layout: _PrivateLayout2.default, path: '/register', component: _Register2.default, exact: true }),
    _react2.default.createElement(_PublicRoute2.default, { layout: _PrivateLayout2.default, path: '/login', component: _Login2.default, exact: true }),
    _react2.default.createElement(_PublicRoute2.default, { layout: _EmptyLayout2.default, path: '/logout', component: _Logout2.default, exact: true }),
    _react2.default.createElement(_PrivateRoute2.default, { layout: _PrivateLayout2.default, path: '/', component: _Home2.default, exact: true })
  )
);

exports.default = Layout;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Switch");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(3);

var _reactApollo = __webpack_require__(2);

var _LocalStorageManager = __webpack_require__(4);

var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

var _SigninUser = __webpack_require__(10);

var _SigninUser2 = _interopRequireDefault(_SigninUser);

var _isLoggedIn = __webpack_require__(5);

var _isLoggedIn2 = _interopRequireDefault(_isLoggedIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Login = class Login extends _react.Component {

  constructor(props) {
    super(props);

    this.loginUser = () => {
      const { email, password } = this.state;

      this.props.signinUser({ variables: { email, password } }).then(response => {
        _LocalStorageManager2.default.setUserToken(response.data.signinUser.token);
        this.props.history.push('/');
      }).catch(e => {
        console.error(e);
      });
    };

    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    if (this.props.data.loading) {
      return _react2.default.createElement(
        'div',
        null,
        'Loading'
      );
    }

    return _react2.default.createElement(
      'div',
      { className: 'w-100 pa4 flex justify-center' },
      _react2.default.createElement(
        'div',
        { style: { maxWidth: 400 }, className: '' },
        _react2.default.createElement('input', {
          className: 'w-100 pa3 mv2',
          value: this.state.email,
          placeholder: 'Email',
          onChange: e => this.setState({ email: e.target.value })
        }),
        _react2.default.createElement('input', {
          className: 'w-100 pa3 mv2',
          type: 'password',
          value: this.state.password,
          placeholder: 'Password',
          onChange: e => this.setState({ password: e.target.value })
        }),
        _react2.default.createElement(
          'button',
          { className: 'pa3 bg-black-10 bn dim ttu pointer', onClick: this.loginUser },
          'Log in'
        )
      )
    );
  }
};
Login.propTypes = {
  history: _propTypes2.default.object,
  signinUser: _propTypes2.default.func,
  data: _propTypes2.default.object
};
Login.defaultProps = {
  history: {},
  createUser: () => {},
  signinUser: () => {},
  data: {}
};
exports.default = (0, _reactApollo.graphql)(_SigninUser2.default, { name: 'signinUser' })((0, _reactApollo.graphql)(_isLoggedIn2.default, { options: { fetchPolicy: 'network-only' } })((0, _reactRouterDom.withRouter)(Login)));

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(3);

var _LocalStorageManager = __webpack_require__(4);

var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Logout = class Logout extends _react.Component {

  componentDidMount() {
    _LocalStorageManager2.default.removeUserToken();
    _LocalStorageManager2.default.clearLocalStorage();
    this.props.history.push('/login');
  }

  render() {
    return _react2.default.createElement('div', null);
  }
};
Logout.propTypes = {
  history: _propTypes2.default.object
};
Logout.defaultProps = {
  history: {}
};
exports.default = (0, _reactRouterDom.withRouter)(Logout);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(3);

var _reactApollo = __webpack_require__(2);

var _LocalStorageManager = __webpack_require__(4);

var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

var _CreateUser = __webpack_require__(44);

var _CreateUser2 = _interopRequireDefault(_CreateUser);

var _SigninUser = __webpack_require__(10);

var _SigninUser2 = _interopRequireDefault(_SigninUser);

var _isLoggedIn = __webpack_require__(5);

var _isLoggedIn2 = _interopRequireDefault(_isLoggedIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Register = class Register extends _react.Component {

  constructor(props) {
    super(props);

    this.registerUser = () => {
      const { email, password } = this.state;

      this.props.createUser({ variables: { email, password } }).then(() => {
        this.props.signinUser({ variables: { email, password } }).then(r => {
          _LocalStorageManager2.default.setUserToken(r.data.signinUser.token);
          this.props.history.push('/');
        }).catch(e => {
          console.error(e);
          this.props.history.push('/');
        });
      }).catch(e => {
        console.error(e);
        this.props.history.push('/');
      });
    };

    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    if (this.props.data.loading) {
      return _react2.default.createElement(
        'div',
        null,
        'Loading'
      );
    }

    return _react2.default.createElement(
      'div',
      { className: 'w-100 pa4 flex justify-center' },
      _react2.default.createElement(
        'div',
        { style: { maxWidth: 400 }, className: '' },
        _react2.default.createElement('input', {
          className: 'w-100 pa3 mv2',
          value: this.state.email,
          placeholder: 'Email',
          onChange: e => this.setState({ email: e.target.value })
        }),
        _react2.default.createElement('input', {
          className: 'w-100 pa3 mv2',
          type: 'password',
          value: this.state.password,
          placeholder: 'Password',
          onChange: e => this.setState({ password: e.target.value })
        }),
        ' ',
        _react2.default.createElement(
          'button',
          { className: 'pa3 bg-black-10 bn dim ttu pointer', onClick: this.registerUser },
          'Log in'
        )
      )
    );
  }
};
Register.propTypes = {
  history: _propTypes2.default.object,
  createUser: _propTypes2.default.func,
  signinUser: _propTypes2.default.func,
  data: _propTypes2.default.object
};
Register.defaultProps = {
  history: {},
  createUser: () => {},
  signinUser: () => {},
  data: {}
};
exports.default = (0, _reactApollo.graphql)(_CreateUser2.default, { name: 'createUser' })((0, _reactApollo.graphql)(_isLoggedIn2.default, { options: { fetchPolicy: 'network-only' } })((0, _reactApollo.graphql)(_SigninUser2.default, { name: 'signinUser' })((0, _reactRouterDom.withRouter)(Register))));

/***/ }),
/* 44 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"authProvider"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":141}};
    doc.loc.source = {"body":"mutation($email: String!, $password: String!) {\n  createUser(authProvider: { email: { email: $email, password: $password } }) {\n    id\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  
module.exports = doc;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BlockHeader = __webpack_require__(46);

var _BlockHeader2 = _interopRequireDefault(_BlockHeader);

var _BlockContent = __webpack_require__(47);

var _BlockContent2 = _interopRequireDefault(_BlockContent);

var _reactKonami = __webpack_require__(49);

var _reactKonami2 = _interopRequireDefault(_reactKonami);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let HomeContainer = class HomeContainer extends _react.Component {

  constructor(props) {
    super(props);

    this.state = {
      rickroll: false
    };

    this.handleEasterEgg = this.handleEasterEgg.bind(this);
  }
  componentDidMount() {}

  handleEasterEgg() {
    this.setState({ rickroll: true });
  }

  render() {
    const { rickroll } = this.state;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reactKonami2.default, { easterEgg: this.handleEasterEgg }),
      rickroll && _react2.default.createElement(
        'div',
        { className: 'white-container' },
        _react2.default.createElement(
          'span',
          { role: 'img', 'aria-label': 'fire' },
          '\uD83D\uDD25'
        ),
        'Konami code !!'
      ),
      _react2.default.createElement(_BlockHeader2.default, null),
      _react2.default.createElement(_BlockContent2.default, null)
    );
  }
};
HomeContainer.propTypes = {};
HomeContainer.defaultProps = {};
exports.default = HomeContainer;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Link } from 'react-router-dom'

// import css from './BlockHeader.css'

let BlockHeader = class BlockHeader extends _react.Component {
  componentDidMount() {}

  render() {
    return _react2.default.createElement(
      "div",
      { className: "block-header" },
      _react2.default.createElement(
        "div",
        { className: "white-block-header" },
        _react2.default.createElement(
          "div",
          { className: "title-block-header" },
          "Books"
        )
      )
    );
  }
};
exports.default = BlockHeader;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(11);

var _BlockContent = __webpack_require__(48);

var _BlockContent2 = _interopRequireDefault(_BlockContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Link } from 'react-router-dom'
let BlockContent = class BlockContent extends _react.Component {
  componentDidMount() {}

  render() {
    return _react2.default.createElement(
      'div',
      { className: _BlockContent2.default.blockContent },
      _react2.default.createElement(
        _semanticUiReact.Grid,
        null,
        _react2.default.createElement(_semanticUiReact.Grid.Column, { mobile: 16, tablet: 8, computer: 4, lg: '12' })
      )
    );
  }
};

// import TwitterLogo from 'src/components/Icons/TwitterLogo'
// import FacebookLogo from 'src/components/Icons/FacebookLogo'
// import SlackLogo from 'src/components/Icons/SlackLogo'
// import SnapChatLogo from 'src/components/Icons/SnapchatLogo'
// import DriveLogo from 'src/components/Icons/DriveLogo'
// import TrelloLogo from 'src/components/Icons/TrelloLogo'

exports.default = BlockContent;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = {
	"whiteBlockContent": "whiteBlockContent-PEzJ0_nwMzxZKeDE7R2wv",
	"listContentItemLogo": "listContentItemLogo-1VYC0oeATQQ8qN1_4Zb6Q",
	"listContentWrapper": "listContentWrapper-3-9dI8pQxg8g565sCrq47x",
	"listContentItemContent": "listContentItemContent-2XfBFhQGi6YD1Fduj0obOI"
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("react-konami");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(3);

var _reactApollo = __webpack_require__(2);

var _isLoggedIn = __webpack_require__(5);

var _isLoggedIn2 = _interopRequireDefault(_isLoggedIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

let PrivateRoute = class PrivateRoute extends _react.Component {

  componentDidMount() {}

  redirectisNotAuthenticated(layout, props, component) {
    const { data } = this.props;
    if (data.user) {
      return _react2.default.createElement(layout, props, _react2.default.createElement(component, props));
    }
    return _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/login', state: { from: props.location } } });
  }

  render() {
    const _props = this.props,
          { component, layout } = _props,
          rest = _objectWithoutProperties(_props, ['component', 'layout']);

    return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
      render: props => this.redirectisNotAuthenticated(layout, props, component)
    }));
  }
};
PrivateRoute.propTypes = {
  component: _propTypes2.default.func.isRequired,
  data: _propTypes2.default.object,
  layout: _propTypes2.default.func.isRequired
};
PrivateRoute.defaultProps = {
  data: {
    user: {}
  }
};
exports.default = (0, _reactApollo.graphql)(_isLoggedIn2.default, { options: { fetchPolicy: 'network-only' } })(PrivateRoute);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(3);

var _reactApollo = __webpack_require__(2);

var _isLoggedIn = __webpack_require__(5);

var _isLoggedIn2 = _interopRequireDefault(_isLoggedIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

let PublicRoute = class PublicRoute extends _react.Component {

  componentDidMount() {}

  redirectisAuthenticated(layout, props, component) {
    const { data } = this.props;
    if (!data.user) {
      return _react2.default.createElement(layout, props, _react2.default.createElement(component, props));
    }
    return _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/', state: { from: props.location } } });
  }

  render() {
    const _props = this.props,
          { component, layout } = _props,
          rest = _objectWithoutProperties(_props, ['component', 'layout']);
    return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: props => this.redirectisAuthenticated(layout, props, component) }));
  }
};
PublicRoute.propTypes = {
  component: _propTypes2.default.func.isRequired,
  data: _propTypes2.default.object,
  layout: _propTypes2.default.func.isRequired
};
PublicRoute.defaultProps = {
  data: {
    user: {}
  }
};
exports.default = (0, _reactApollo.graphql)(_isLoggedIn2.default, { options: { fetchPolicy: 'network-only' } })(PublicRoute);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(11);

var _Header = __webpack_require__(53);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(55);

var _Footer2 = _interopRequireDefault(_Footer);

var _PrivateLayout = __webpack_require__(57);

var _PrivateLayout2 = _interopRequireDefault(_PrivateLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let PrivateLayout = class PrivateLayout extends _react.Component {

  componentDidMount() {}

  render() {
    return _react2.default.createElement(
      'div',
      { className: 'fill' },
      _react2.default.createElement(_Header2.default, null),
      _react2.default.createElement(
        'div',
        { className: (_PrivateLayout2.default.wrapper, _PrivateLayout2.default.wrapperPrivate) },
        this.props.children
      ),
      _react2.default.createElement(_Footer2.default, null)
    );
  }
};
PrivateLayout.propTypes = {
  children: _propTypes2.default.object.isRequired
};
PrivateLayout.defaultProps = {};
exports.default = PrivateLayout;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _MangroveLogo = __webpack_require__(54);

var _MangroveLogo2 = _interopRequireDefault(_MangroveLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import css from './Header.css'

let Header = class Header extends _react.Component {
  componentDidMount() {}

  render() {
    return _react2.default.createElement(
      'header',
      { className: 'header' },
      _react2.default.createElement(
        'nav',
        { className: 'navbar navbar-toggleable-md' },
        _react2.default.createElement(
          'button',
          {
            className: 'navbar-toggler navbar-toggler-right',
            type: 'button',
            'data-toggle': 'collapse',
            'data-target': '#navbarText',
            'aria-controls': 'navbarText',
            'aria-expanded': 'false',
            'aria-label': 'Toggle navigation'
          },
          'Hell'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: 'navbar-brand link-header', to: '/' },
          _react2.default.createElement(_MangroveLogo2.default, { className: 'logo' }),
          'Mangrove Dashboard'
        ),
        _react2.default.createElement(
          'div',
          { className: 'collapse navbar-collapse', id: 'navbarText' },
          _react2.default.createElement('ul', { className: 'navbar-nav mr-auto' }),
          _react2.default.createElement(
            'span',
            { className: 'navbar-text' },
            _react2.default.createElement(_reactRouterDom.Link, { to: '/login', className: 'link-login' })
          )
        )
      )
    );
  }
};
// import { Navbar } from 'reactstrap'

exports.default = Header;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let MangroveLogo = class MangroveLogo extends _react.Component {

  render() {
    const { width, height, className } = this.props;
    return _react2.default.createElement(
      'svg',
      {
        width: width || '53',
        height: height || '22',
        className: className || '',
        viewBox: '0 0 53 22'
      },
      _react2.default.createElement('path', {
        d: 'M.43.099c1.011 9.796 8.598 17.856 18.723 20.533V.1H.431zm33.119 0v20.62c10.284-2.591 18.02-10.72 19.04-20.62h-19.04zm-12.59 0v20.948c1.435.28 2.91.46 4.422.518h.068V.099h-4.49zm6.295 0v21.466h.385c1.4-.055 2.77-.213 4.105-.459V.1h-4.49z',
        fillRule: 'nonzero',
        fill: '#FFF'
      })
    );
  }
};
MangroveLogo.propTypes = {
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  className: _propTypes2.default.string
};
MangroveLogo.defaultProps = {
  width: '53',
  height: '22',
  className: ''
};
exports.default = MangroveLogo;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(56);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import css from './Footer.css'

const Footer = () => _react2.default.createElement(
  'footer',
  { className: 'footer' },
  _react2.default.createElement(
    'div',
    { className: 'credits-footer' },
    'Made with',
    ' ',
    _react2.default.createElement(
      'span',
      { role: 'img', 'aria-label': 'wine' },
      '\uD83C\uDF77'
    ),
    ' ',
    'in Paris - \xA9 ',
    (0, _moment2.default)().format('YYYY')
  )
);

exports.default = Footer;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = {
	"wrapperPrivate": "wrapperPrivate-3b3HHygWZsrBgnloEm2_mw",
	"whiteContainer": "whiteContainer-CqoGLz-TbC1m5XMSdih4s",
	"fill": "fill-3pStqcZNEWxV4no3aWSUDK"
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let EmptyLayout = class EmptyLayout extends _react.Component {

  componentDidMount() {}

  render() {
    return _react2.default.createElement(
      'div',
      null,
      this.props.children
    );
  }
};
EmptyLayout.propTypes = {
  children: _propTypes2.default.object.isRequired
};
EmptyLayout.defaultProps = {};
exports.default = EmptyLayout;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-underscore-dangle */

/*
Custom Redux store creation.  Along with the default Apollo store,
we can define custom reducers using `kit/config.addReducer()` which will
be available on the server and in the browser.

Store state is wrapped by `seamless-immutable` to enforce a pattern of
immutability, to prevent weird side effects.
*/

// ----------------------
// IMPORTS

/* NPM */


/* Local */


exports.default = createNewStore;

var _redux = __webpack_require__(60);

var _reduxThunk = __webpack_require__(61);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _seamlessImmutable = __webpack_require__(62);

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Detect if we're both in the browser, AND we have dehydrated state
const hasState = !!(!true && window.__STATE__);

// Helper function that 'unwinds' the `config.reducers` Map, and provides
// the `reducer` function or `initialState` (wrapped in `seamless-immutable`)
// depending on what we asked for
function unwind(reducer = true) {
  // Unwind `config.reducers`.  If we're looking for the `reducer`, we'll
  // wrap this in a `defaultReducer` function that properly handles the Redux
  // 'undefined' sentinel value, or calls 'real' reducer if it's not undefined.
  //
  // If we're not looking for reducers, it'll pull out the `initialState`
  // variable instead, which we'll further process below
  const r = Object.assign({}, ...[].concat([..._config2.default.reducers].map(arr => ({
    [arr[0]]: reducer ? function defaultReducer(state, action) {
      // If `state` === undefined, this is Redux sending a sentinel value
      // to check our set-up.  So we'll send back a plain object to prove
      // that we're properly handling our reducer
      if (typeof state === 'undefined') return {};

      // Otherwise, call our real reducer with the {state, action}
      return arr[1].reducer(state, action);
    } : arr[1].initialState
  }))));

  // If this is a reducer, return at this point
  if (reducer) return r;

  // If not, we're looking for the state -- so let's map it and wrap the
  // object in `seamless-immutable`, to avoid side-effects with Redux
  return Object.assign({}, ...Object.keys(r).map(key => ({
    [key]: (0, _seamlessImmutable2.default)(hasState && window.__STATE__[key] || r[key])
  })));
}

function createNewStore(apolloClient) {
  const store = (0, _redux.createStore)(
  // By default, we'll use just the apollo reducer.  We can easily add our
  // own here, for global store management outside of Apollo
  (0, _redux.combineReducers)(_extends({
    apollo: apolloClient.reducer()
  }, unwind())),
  // Initial server state, provided by the server.
  _extends({
    apollo: hasState && window.__STATE__.apollo || {}
  }, unwind(false)), (0, _redux.compose)((0, _redux.applyMiddleware)(apolloClient.middleware(), _reduxThunk2.default),
  // Enable Redux Devtools on the browser, for easy state debugging
  // eslint-disable-next-line no-underscore-dangle
   false ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));

  return store;
}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("seamless-immutable");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

/* eslint-disable react/no-danger, no-return-assign, no-param-reassign */

// Component to render the full HTML response in React

// ----------------------
// IMPORTS
const Html = ({ head, scripts, window, css, children }) => _react2.default.createElement(
  'html',
  { lang: 'en', prefix: 'og: http://ogp.me/ns#' },
  _react2.default.createElement(
    'head',
    null,
    _react2.default.createElement('meta', { charSet: 'utf-8' }),
    _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
    _react2.default.createElement('meta', { httpEquiv: 'Content-Language', content: 'en' }),
    _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
    head.meta.toComponent(),
    _react2.default.createElement('link', { rel: 'stylesheet', href: css }),
    head.title.toComponent()
  ),
  _react2.default.createElement(
    'body',
    null,
    _react2.default.createElement(
      'div',
      { id: 'main' },
      children
    ),
    _react2.default.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: Object.keys(window).reduce((out, key) => out += `window.${key}=${JSON.stringify(window[key])};`, '')
      } }),
    scripts.map(src => _react2.default.createElement('script', { key: src, src: src }))
  )
);

Html.propTypes = {
  head: _propTypes2.default.object.isRequired,
  window: _propTypes2.default.object.isRequired,
  scripts: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  css: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.element.isRequired
};

exports.default = Html;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClient = createClient;
exports.getNetworkInterface = getNetworkInterface;
exports.browserClient = browserClient;

var _reactApollo = __webpack_require__(2);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

var _env = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Helper function to create a new Apollo client, by merging in
// passed options alongside any set by `config.setApolloOptions` and defaults


/* ReactQL */

// Configuration
function createClient(opt = {}) {
  return new _reactApollo.ApolloClient(Object.assign({
    reduxRootSelector: state => state.apollo
  }, _config2.default.apolloClientOptions, opt));
}

// Wrap `createNetworkInterface` to attach middleware


// Get environment, to figure out where we're running the GraphQL server
// ----------------------
// IMPORTS

/* NPM */

// Apollo client library
function getNetworkInterface(uri) {
  const networkInterface = (0, _reactApollo.createNetworkInterface)({
    uri,
    opts: _config2.default.apolloNetworkOptions
  });

  // Attach middleware
  networkInterface.use(_config2.default.apolloMiddleware.map(f => ({ applyMiddleware: f })));
  networkInterface.useAfter(_config2.default.apolloAfterware.map(f => ({ applyAfterware: f })));

  return networkInterface;
}

// Creates a new browser client
function browserClient() {
  // If we have an internal GraphQL server, we need to append it with a
  // call to `getServerURL()` to add the correct host (in dev + production)
  const uri = _config2.default.graphQLServer ? `${(0, _env.getServerURL)()}${_config2.default.graphQLEndpoint}` : _config2.default.graphQLEndpoint;

  return createClient({
    networkInterface: getNetworkInterface(uri)
  });
}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ })
/******/ ]);