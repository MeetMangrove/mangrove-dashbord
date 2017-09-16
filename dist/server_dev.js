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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 5 */
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
/* 8 */
/***/ (function(module, exports) {

module.exports = require("chalk");

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
function getServerURL(host = "localhost", port = "8081", allowSSL = true) {
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

module.exports = require("isomorphic-fetch");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chalk = __webpack_require__(8);

var _chalk2 = _interopRequireDefault(_chalk);

var _console = __webpack_require__(15);

var _server = __webpack_require__(18);

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Get manifest values


/* Local */

// Import console messages
const css = '/assets/css/style.css';

// Extend the server base
/* eslint-disable no-console */

// Production server entry point.  Spawns the server on default HOST:PORT

// ----------------------
// IMPORTS

/* NPM */

// Chalk terminal library

const scripts = ['vendor.js', 'browser.js'].map(key => `/${key}`);

// Spawn the development server.
// Runs inside an immediate `async` block, to await listening on ports
(async () => {
  const { app, router, listen } = _server2.default;

  // Create proxy to tunnel requests to the browser `webpack-dev-server`
  router.get('/*', (0, _server.createReactHandler)(css, scripts));

  // Connect the development routes to the server
  app.use((0, _server.staticMiddleware)()).use(router.routes()).use(router.allowedMethods());

  // Spawn the server
  listen();

  // Log to the terminal that we're ready for action
  (0, _console.logServerStarted)({
    type: 'server-side rendering',
    chalk: _chalk2.default.bgYellow.black
  });
})();

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

var _chalk = __webpack_require__(8);

var _chalk2 = _interopRequireDefault(_chalk);

var _ip = __webpack_require__(17);

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
  let message = _chalk2.default.green(`Running ${(opt.chalk || _chalk2.default.bold)(opt.type)} in ${_chalk2.default.bold("development")} mode\n\n`);
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

module.exports = require("ip");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staticMiddleware = staticMiddleware;
exports.createReactHandler = createReactHandler;

var _stream = __webpack_require__(19);

var _http = __webpack_require__(20);

var _http2 = _interopRequireDefault(_http);

var _https = __webpack_require__(21);

var _https2 = _interopRequireDefault(_https);

__webpack_require__(10);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(22);

var _server2 = _interopRequireDefault(_server);

var _koa = __webpack_require__(23);

var _koa2 = _interopRequireDefault(_koa);

var _reactApollo = __webpack_require__(3);

var _koaSslify = __webpack_require__(24);

var _koaSslify2 = _interopRequireDefault(_koaSslify);

var _kcors = __webpack_require__(25);

var _kcors2 = _interopRequireDefault(_kcors);

var _koaSend = __webpack_require__(26);

var _koaSend2 = _interopRequireDefault(_koaSend);

var _koaHelmet = __webpack_require__(27);

var _koaHelmet2 = _interopRequireDefault(_koaHelmet);

var _koaRouter = __webpack_require__(28);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _microseconds = __webpack_require__(29);

var _microseconds2 = _interopRequireDefault(_microseconds);

var _reactRouter = __webpack_require__(30);

var _reactHelmet = __webpack_require__(11);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _apolloServerKoa = __webpack_require__(31);

var _apolloLocalQuery = __webpack_require__(32);

var _apolloLocalQuery2 = _interopRequireDefault(_apolloLocalQuery);

var _graphql = __webpack_require__(33);

var graphql = _interopRequireWildcard(_graphql);

var _app = __webpack_require__(34);

var _app2 = _interopRequireDefault(_app);

var _redux = __webpack_require__(78);

var _redux2 = _interopRequireDefault(_redux);

var _ssr = __webpack_require__(82);

var _ssr2 = _interopRequireDefault(_ssr);

var _apollo = __webpack_require__(83);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

var _paths = __webpack_require__(84);

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
        return await (0, _koaSend2.default)(ctx, ctx.path,  false ? {
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
  app.use(__webpack_require__(86)(
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
    servers.push(_http2.default.createServer(app.callback()).listen("8081"));
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
/* 19 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("koa-sslify");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("kcors");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("koa-send");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("koa-helmet");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("microseconds");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("apollo-server-koa");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("apollo-local-query");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _App = __webpack_require__(35);

var _App2 = _interopRequireDefault(_App);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

var _LocalStorageManager = __webpack_require__(5);

var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

__webpack_require__(77);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_config2.default.setGraphQLEndpoint('https://api.graph.cool/simple/v1/cj78t448l01n00132a5m3q928/');

if (false) {
  _config2.default.setApolloNetworkOptions({
    credentials: 'include'
  });

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(36);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = () => _react2.default.createElement(_Layout2.default, null);

// import './main.css'

exports.default = App;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Switch = __webpack_require__(37);

var _Switch2 = _interopRequireDefault(_Switch);

var _Login = __webpack_require__(38);

var _Login2 = _interopRequireDefault(_Login);

var _Logout = __webpack_require__(41);

var _Logout2 = _interopRequireDefault(_Logout);

var _Register = __webpack_require__(42);

var _Register2 = _interopRequireDefault(_Register);

var _Home = __webpack_require__(44);

var _Home2 = _interopRequireDefault(_Home);

var _NotFound = __webpack_require__(45);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _RessourceList = __webpack_require__(49);

var _RessourceList2 = _interopRequireDefault(_RessourceList);

var _RessourceEdit = __webpack_require__(63);

var _RessourceEdit2 = _interopRequireDefault(_RessourceEdit);

var _Search = __webpack_require__(67);

var _Search2 = _interopRequireDefault(_Search);

var _PrivateRoute = __webpack_require__(68);

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

var _PublicRoute = __webpack_require__(69);

var _PublicRoute2 = _interopRequireDefault(_PublicRoute);

var _PrivateLayout = __webpack_require__(70);

var _PrivateLayout2 = _interopRequireDefault(_PrivateLayout);

var _EmptyLayout = __webpack_require__(76);

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
    _react2.default.createElement(_PrivateRoute2.default, { layout: _PrivateLayout2.default, path: '/', component: _Home2.default, exact: true }),
    _react2.default.createElement(_PrivateRoute2.default, { layout: _PrivateLayout2.default, path: '/link', component: _RessourceList2.default, exact: true }),
    _react2.default.createElement(_PrivateRoute2.default, { layout: _PrivateLayout2.default, path: '/link/edit', component: _RessourceEdit2.default, exact: true }),
    _react2.default.createElement(_PrivateRoute2.default, { layout: _PrivateLayout2.default, path: '/link/edit/:id', component: _RessourceEdit2.default, exact: true }),
    _react2.default.createElement(_PrivateRoute2.default, {
      layout: _PrivateLayout2.default,
      path: '/bookclub/search',
      component: _Search2.default,
      exact: true
    }),
    _react2.default.createElement(_PublicRoute2.default, { layout: _EmptyLayout2.default, component: _NotFound2.default })
  )
);

exports.default = Layout;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Switch");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(2);

var _reactApollo = __webpack_require__(3);

var _LocalStorageManager = __webpack_require__(5);

var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

var _Login = __webpack_require__(39);

var _Login2 = _interopRequireDefault(_Login);

var _SigninUser = __webpack_require__(12);

var _SigninUser2 = _interopRequireDefault(_SigninUser);

var _isLoggedIn = __webpack_require__(7);

var _isLoggedIn2 = _interopRequireDefault(_isLoggedIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Login = class Login extends _react.Component {

  constructor(props) {
    super(props);

    this.loginUser = (email, password) => {
      this.props.signinUser({ variables: { email, password } }).then(response => {
        _LocalStorageManager2.default.setUserToken(response.data.signinUser.token);
        this.props.history.push('/link');
      }).catch(e => {
        console.error(e);
      });
    };

    this.loginUser = this.loginUser.bind(this);
  }

  render() {
    return _react2.default.createElement(_Login2.default, { requestLogin: this.loginUser });
  }
};
Login.propTypes = {
  history: _propTypes2.default.object,
  signinUser: _propTypes2.default.func,
  data: _propTypes2.default.object
};
Login.defaultProps = {
  history: {},
  signinUser: () => {},
  data: {}
};
exports.default = (0, _reactApollo.graphql)(_SigninUser2.default, { name: 'signinUser' })((0, _reactApollo.graphql)(_isLoggedIn2.default, { options: { fetchPolicy: 'network-only' } })((0, _reactRouterDom.withRouter)(Login)));

/***/ }),
/* 39 */
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

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterDom = __webpack_require__(2);

var _login = __webpack_require__(40);

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Login = class Login extends _react.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoginLoading: false
    };

    this.handleClickLogin = this.handleClickLogin.bind(this);
  }

  handleClickLogin(e) {
    e.preventDefault();

    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    if (email !== '' && password !== '') {
      this.setState({ isLoginLoading: true });
      setTimeout(() => {
        this.props.requestLogin(email, password);
      }, 300);
    }
  }

  render() {
    const { isLoginLoading } = this.state;
    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('column', 'is-half', 'is-offset-one-quarter') },
      _react2.default.createElement(
        'form',
        { onSubmit: this.handleClickLogin },
        _react2.default.createElement(
          'h3',
          { className: _login2.default.titleLogin },
          'You',
          "'",
          're a Mangrove member? Log in here:'
        ),
        _react2.default.createElement(
          'div',
          { className: 'columns' },
          _react2.default.createElement(
            'div',
            { className: 'column is-10 is-offset-1 ' },
            _react2.default.createElement(
              'div',
              { className: 'control has-icons-left is-large' },
              _react2.default.createElement('input', {
                className: (0, _classnames2.default)('input', 'is-large', _login2.default.inputLogin),
                name: 'email',
                placeholder: 'email',
                type: 'text',
                ref: email => {
                  this.emailInput = email;
                }
              }),
              _react2.default.createElement(
                'span',
                { className: 'icon is-medium is-left' },
                _react2.default.createElement('i', { className: 'fa fa-envelope' })
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'columns' },
          _react2.default.createElement(
            'div',
            { className: 'column is-10 is-offset-1 ' },
            _react2.default.createElement(
              'div',
              { className: 'control has-icons-left is-large' },
              _react2.default.createElement('input', {
                className: (0, _classnames2.default)('input', 'is-large', _login2.default.inputLogin),
                placeholder: 'password',
                type: 'password',
                ref: password => {
                  this.passwordInput = password;
                }
              }),
              _react2.default.createElement(
                'span',
                { className: 'icon is-medium is-left' },
                _react2.default.createElement('i', { className: 'fa fa-envelope' })
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _login2.default.btnLoginWrapper },
          _react2.default.createElement(
            'button',
            {
              className: isLoginLoading ? (0, _classnames2.default)(_login2.default.btnLogin, _login2.default.alignCenter, _login2.default.bar) : (0, _classnames2.default)(_login2.default.btnLogin, _login2.default.alignCenter),
              size: 'lg'
            },
            !isLoginLoading && _react2.default.createElement(
              'span',
              null,
              'Log in'
            ),
            isLoginLoading && _react2.default.createElement('div', { className: _login2.default.loader })
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: _login2.default.forgotPassword },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/login/forgot-password' },
          'Forgot password ?'
        )
      )
    );
  }
};
Login.propTypes = {
  requestLogin: _propTypes2.default.func
};
Login.defaultProps = {
  requestLogin: () => {}
};
exports.default = Login;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = {
	"login": "login-1qRkAiIsDBs7k_EoeiTzzT",
	"btnLogin": "btnLogin-2lr4sD0U6PBSH5itQKG-X7",
	"bar": "bar-1juZBG43GPT_aKia-Pi3F3",
	"loader": "loader-f2tGLoWi7tXzFVt3tQw4p",
	"slide": "slide-2o3IIlW5dpBSbt9wfBHEAa",
	"btnLoginWrapper": "btnLoginWrapper-32sqyiqIOawBwI2EmG_IFf",
	"forgotPassword": "forgotPassword-3j4Laeja7jnXZ6rLUM8QNJ",
	"titleLogin": "titleLogin-2S_HBWNsqI8apL-eztPcDW",
	"inputLogin": "inputLogin-1U_pDKzFG1m209uIrFLTcx"
};

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

var _reactRouterDom = __webpack_require__(2);

var _LocalStorageManager = __webpack_require__(5);

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

var _reactRouterDom = __webpack_require__(2);

var _reactApollo = __webpack_require__(3);

var _LocalStorageManager = __webpack_require__(5);

var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

var _CreateUser = __webpack_require__(43);

var _CreateUser2 = _interopRequireDefault(_CreateUser);

var _SigninUser = __webpack_require__(12);

var _SigninUser2 = _interopRequireDefault(_SigninUser);

var _isLoggedIn = __webpack_require__(7);

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
          this.props.history.push('/link');
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
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let HomeContainer = class HomeContainer extends _react.Component {

  render() {
    return _react2.default.createElement(
      'div',
      null,
      'Hello Home'
    );
  }
};
HomeContainer.propTypes = {};
HomeContainer.defaultProps = {};
exports.default = HomeContainer;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(2);

var _reactHelmet = __webpack_require__(11);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Rick = __webpack_require__(46);

var _Rick2 = _interopRequireDefault(_Rick);

__webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let NotFound = class NotFound extends _react.Component {

  render() {
    const { location } = this.props;
    console.log(location.pathname);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reactHelmet2.default, { title: 'Page not Found' }),
      _react2.default.createElement(
        'div',
        { className: 'bd-example' },
        _react2.default.createElement(
          'section',
          { className: 'hero is-medium is-warning is-bold' },
          _react2.default.createElement(
            'div',
            { className: 'hero-body' },
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement(
                'div',
                { className: 'columns' },
                _react2.default.createElement(
                  'div',
                  { className: 'column' },
                  _react2.default.createElement(
                    'p',
                    { className: 'title' },
                    location.path,
                    ' Not Found'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'subtitle' },
                    '\uD83D\uDE45\u200D\uD83D\uDE45\uD83D\uDE45\uD83D\uDE45'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'column' },
                  _react2.default.createElement(_Rick2.default, null)
                )
              )
            )
          )
        )
      )
    );
  }
};
NotFound.propTypes = {
  location: _propTypes2.default.object
};
NotFound.defaultProps = {
  location: {}
};
exports.default = (0, _reactRouterDom.withRouter)(NotFound);

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

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _Rick = __webpack_require__(47);

var _Rick2 = _interopRequireDefault(_Rick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Rick = class Rick extends _react.Component {

  render() {
    const { width, height, className } = this.props;
    return _react2.default.createElement(
      'svg',
      {
        width: width || '278',
        height: height || '412',
        className: className || '',
        viewBox: '0 0 278 412',
        className: _Rick2.default.rick
      },
      _react2.default.createElement(
        'g',
        { fill: '#A7D5E9', id: _Rick2.default.HAIR },
        _react2.default.createElement('path', {
          id: _Rick2.default.hair_y,
          d: 'M129.966 112.273l-42.593-10.497-8.697-46.657L75.77 2.28l40.124 34.495L147.592 72.1M119.8 179.04l-32.79 17.826-42.66-18.843L0 152.916l50.773-4.365 46.634.63'
        }),
        _react2.default.createElement('path', {
          id: _Rick2.default.hair_y,
          d: 'M131.765 183.62l-15.433 35.643-42.016.727-46.558-5.238 34.25-21.98 37.28-30.454'
        }),
        _react2.default.createElement('path', {
          id: _Rick2.default.hair_z,
          d: 'M137.984 185.114l.527 36.46-35.68 16.815-41.87 13.46 19.29-39.53 21.73-32.93m54.04-64.84L134.73 76.2 163 38.076 199.728 0l-2.29 100.14'
        }),
        _react2.default.createElement('path', {
          id: _Rick2.default.hair_y,
          d: 'M189.636 126.98l3.088-40.14 39.58-10.61 45.815-5.564-50.82 70.516m-125.77.65l-5.57-41.72-43.59-13.164-50.09-8.286 59.1 75.79'
        }),
        _react2.default.createElement('ellipse', { cx: '141.909', cy: '164.279', rx: '75.171', ry: '97' }),
        _react2.default.createElement('path', {
          id: _Rick2.default.hair_y,
          d: 'M148.856 170.087l34.746 26.78 41.915-22.263 43.14-30.64-51.98-9.898-47.38-2.79'
        }),
        _react2.default.createElement('path', {
          id: _Rick2.default.hair_y,
          d: 'M145.677 173.994l15.747 36.366 42.87.743 47.502-5.345-34.945-22.425-38.03-31.073'
        }),
        _react2.default.createElement('path', {
          id: _Rick2.default.hair_x,
          d: 'M146.91 168.13l-.536 37.06 36.274 17.093 42.564 13.683-19.61-40.18-22.088-33.468'
        })
      ),
      _react2.default.createElement('path', {
        fill: '#DBD0C8',
        d: 'M165.68 281.61c0 14.348-8.957 21.037-20.003 21.037s-20-6.69-20-21.037 8.954-20.33 20-20.33 20.002 5.983 20.002 20.33z'
      }),
      _react2.default.createElement('path', {
        fill: '#FFF',
        stroke: '#6D6E71',
        d: 'M42.49 411.9s18.18-73.992 33.28-93.253c10.966-13.99 50.666-36.356 50.666-36.356s13.955 4.98 18.82 4.95c4.78-.02 19.442-5.06 19.442-5.06s37.27 17.5 47.376 32.7c12.617 18.97 29.952 96.63 29.952 96.63l-199.536.4z'
      }),
      _react2.default.createElement('path', {
        fill: '#DBFEFE',
        stroke: '#6D6E71',
        d: 'M177.348 411.763l-63.984.23 13.074-129.7s13.948 2.472 18.812 2.45c4.78-.02 19.45-2.57 19.45-2.57l12.648 129.59z'
      }),
      _react2.default.createElement('path', { fill: '#FFF', d: 'M125.786 284.335L76.32 376.62l30.96 35.312 12.91-.122.162-.83' }),
      _react2.default.createElement('path', {
        fill: 'none',
        stroke: '#6D6E71',
        d: 'M125.786 284.335L76.32 376.62l30.96 35.312 12.91-.122.162-.83z'
      }),
      _react2.default.createElement('path', { fill: '#FFF', d: 'M165.703 284.335l48.464 92.178-30.958 35.273-12.92-.14-.16-.826' }),
      _react2.default.createElement('path', {
        fill: 'none',
        stroke: '#6D6E71',
        d: 'M165.703 284.335l48.464 92.178-30.958 35.273-12.92-.14-.16-.826zm-83.547 101.21l-6.34 24.37m128.42-22.085l6.44 24.45'
      }),
      _react2.default.createElement('ellipse', { cx: '75.77', cy: '206.586', fill: '#D4CABF', rx: '12.5', ry: '15.432' }),
      _react2.default.createElement('ellipse', { cx: '207.761', cy: '199.646', fill: '#D4CABF', rx: '12.5', ry: '15.432' }),
      _react2.default.createElement('path', {
        fill: '#DBD0C8',
        d: 'M205.73 173.435c0 69.013-28.2 101.188-62.984 101.188-34.785 0-62.983-32.175-62.983-101.188s28.2-97.792 62.983-97.792c34.785 0 62.983 28.78 62.983 97.792z'
      }),
      _react2.default.createElement('circle', { cx: '111.681', cy: '152.26', r: '26.96', fill: '#FFF' }),
      _react2.default.createElement('circle', { cx: '172.637', cy: '152.806', r: '26.96', fill: '#FFF' }),
      _react2.default.createElement('circle', { cx: '172.637', cy: '163.428', r: '3.518' }),
      _react2.default.createElement('circle', { cx: '111.681', cy: '162.319', r: '3.518' }),
      _react2.default.createElement('circle', { cx: '111.681', cy: '163.428', r: '3.518' }),
      _react2.default.createElement('path', {
        fill: '#D4CABF',
        d: 'M138.642 152.26c0 14.89-53.92 14.89-53.92 0s12.07-26.96 26.96-26.96 26.96 12.07 26.96 26.96zm60.955-.546c0 14.89-53.92 14.89-53.92 0s12.07-26.96 26.96-26.96 26.96 12.07 26.96 26.96z'
      }),
      _react2.default.createElement('path', {
        fill: '#A7D5E9',
        id: _Rick2.default.eyebrow,
        d: 'M189.81 115.056a3.5 3.5 0 0 1-3.5 3.5l-81.27 3.003c-1.932 0-3.5-1.57-3.5-3.5 0-1.94 1.568-3.5 3.5-3.5l81.27-3.01c1.934 0 3.5 4.57 3.5 6.5v-3.01z'
      }),
      _react2.default.createElement('path', {
        fill: '#e5ffd4',
        id: _Rick2.default.drool,
        d: 'M139.757 227.495c10.5 6 8 17.717 18 23.717.5-3.5-.5-8.5.5-12s4.5-6 5-10.5c-6.5-3-14.5-.498-21.5-1.498'
      }),
      _react2.default.createElement('path', {
        fill: '#231F20',
        d: 'M121.41 104.77c13.445 1.28 28.06 2.906 41.165-1.277.765-.244.438-1.45-.332-1.205-12.978 4.142-27.51 2.502-40.834 1.232-.81-.077-.8 1.174 0 1.25zm10.314-5.32c7.48.975 14.65-.44 22.05-1.34.79-.097.8-1.348 0-1.25-7.398.898-14.58 2.313-22.05 1.34-.798-.104-.787 1.147 0 1.25zm-32.468 88.796c9.563 3.323 20.47 5.553 29.148-1.063.632-.482.01-1.568-.63-1.08-8.435 6.43-18.926 4.156-28.186.938-.763-.26-1.088.95-.332 1.21zm60.334-1.666c2.85.607 5.224 2.34 8.043 3.065 2.42.623 5.143.665 7.62.79 5.89.298 11.06-3.293 15.818-6.252.69-.424.06-1.506-.63-1.08-4.78 2.978-9.35 5.954-15.18 6.082-3.19.07-6.94-.36-9.85-1.605-1.93-.825-3.39-1.76-5.47-2.206-.784-.168-1.12 1.037-.33 1.205zm-26.69-7.914c0 5.56.245 11.116.952 16.633.595 4.64 1.373 11.41 5.578 14.35 4.398 3.07 8.467-3.45 9.62-6.71 2.79-7.91 1.81-17.06 1.768-25.28-.004-.81-1.254-.81-1.25 0 .032 6.16.26 12.29-.392 18.44-.406 3.83-1.24 8.11-3.84 11.1-2.205 2.53-5.21 2.16-6.978-.45-2.97-4.39-3.306-11.01-3.75-16.08-.35-4-.456-8.01-.457-12.02 0-.81-1.25-.81-1.25 0zm-28.643 51.42c12.44-.092 24.793-1.736 37.226-2.004 12.624-.27 25.157 1.896 37.774 2.004.807.007.806-1.243 0-1.25-11.976-.103-23.852-1.916-35.828-2.02-13.09-.11-26.09 1.922-39.18 2.02-.81.006-.81 1.256 0 1.25zm78.405-4.836c1.955.87 4.606 2.086 5.27 4.324.73 2.455-3.574 3.622-5.12 4.034-.778.207-.447 1.413.332 1.205 2.437-.648 5.953-1.815 6.09-4.836.133-2.918-3.795-4.853-5.94-5.807-.73-.323-1.367.754-.632 1.08zm-80.43-1.078c-2.42 1.077-5.725 2.794-5.94 5.806-.21 2.958 3.947 4.265 6.09 4.836.78.208 1.11-.998.333-1.205-1.766-.48-5.592-1.5-5.12-4.04.406-2.2 3.493-3.54 5.27-4.33.734-.33.097-1.41-.632-1.08z'
      })
    );
  }
};
Rick.propTypes = {
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  className: _propTypes2.default.string
};
Rick.defaultProps = {
  width: '278',
  height: '412',
  className: ''
};
exports.default = Rick;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {
	"rick": "rick-3eCHsUNgirJ-Rg2nifo7EA",
	"drool": "drool-3TQ-P8vvk4W-pcZ3As6lW1",
	"drool-animation": "drool-animation-3aDWB_sCnTXxOD-w0Rl9dO",
	"eyebrow": "eyebrow-3IMQGCpiIsj8HO40hzVRB8",
	"hair_1": "hair_1-2lB5RqhsX0r-k85EynGuSj",
	"twitch": "twitch-IBGtYyPM4pXvTK4jcia7l",
	"hair_x": "hair_x-UO4FQzoZNrIH4ZugFcL0u",
	"hair-animation": "hair-animation-1GhLfr93Z0A8XDPCEEbyvj",
	"hair_y": "hair_y-1ylK7wPU_OV1SVqaIx7RWN",
	"light_twitch": "light_twitch-1TVncFPxKPgeoQEXFI3bun",
	"HAIR": "HAIR-2qj3OvuzL6h51e1zcftzNw"
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(2);

var _reactKonami = __webpack_require__(50);

var _reactKonami2 = _interopRequireDefault(_reactKonami);

var _Block = __webpack_require__(51);

var _Block2 = _interopRequireDefault(_Block);

var _getAllLinks = __webpack_require__(62);

var _getAllLinks2 = _interopRequireDefault(_getAllLinks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let RessourceListContainer = class RessourceListContainer extends _react.Component {

  constructor(props) {
    super(props);

    this.state = {
      rickroll: false
    };

    this.handleEasterEgg = this.handleEasterEgg.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (this.props.location.search === '?refresh') {
      console.log('h');
      this.props.linkMisc.refetch();
      this.props.linkSocial.refetch();
      this.props.linkRetreat.refetch();
    }
  }

  handleEasterEgg() {
    this.setState({ rickroll: true });
  }

  render() {
    const { rickroll } = this.state;

    const { linkMisc, linkSocial, linkRetreat } = this.props;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reactKonami2.default, { easterEgg: this.handleEasterEgg }),
      rickroll && _react2.default.createElement(
        'div',
        { className: 'whiteContainer' },
        _react2.default.createElement(
          'span',
          { role: 'img', 'aria-label': 'fire' },
          '\uD83D\uDD25'
        ),
        'Konami code !!'
      ),
      _react2.default.createElement(
        'div',
        { className: 'tile is-ancestor' },
        _react2.default.createElement(
          'div',
          { className: 'tile is-parent' },
          _react2.default.createElement(
            'article',
            { className: 'tile is-child' },
            !linkMisc.loading && linkMisc.allLinks.length > 0 && _react2.default.createElement(
              'div',
              { className: 'columns' },
              _react2.default.createElement(
                'div',
                { className: 'column' },
                _react2.default.createElement(_Block2.default, { links: linkMisc.allLinks, titleBlock: 'Retreat' })
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'tile is-parent' },
          _react2.default.createElement(
            'article',
            { className: 'tile is-child' },
            !linkRetreat.loading && linkRetreat.allLinks.length > 0 && _react2.default.createElement(
              'div',
              { className: 'columns' },
              _react2.default.createElement(
                'div',
                { className: 'column' },
                _react2.default.createElement(_Block2.default, { links: linkRetreat.allLinks, titleBlock: 'Retreat' })
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'tile is-parent' },
          _react2.default.createElement(
            'article',
            { className: 'tile is-child' },
            !linkSocial.loading && linkSocial.allLinks.length > 0 && _react2.default.createElement(
              'div',
              { className: 'columns' },
              _react2.default.createElement(
                'div',
                { className: 'column' },
                _react2.default.createElement(_Block2.default, { links: linkSocial.allLinks, titleBlock: 'Social' })
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'section',
        { className: 'section' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/link/edit', className: 'has-text-centered has-text-grey-light' },
            'Add a link in this page?'
          )
        )
      )
    );
  }
};
RessourceListContainer.propTypes = {
  data: _propTypes2.default.object,
  location: _propTypes2.default.object,
  linkMisc: _propTypes2.default.object,
  linkRetreat: _propTypes2.default.object,
  linkSocial: _propTypes2.default.object
};
RessourceListContainer.defaultProps = {
  data: {},
  location: {},
  linkMisc: {},
  linkSocial: {},
  linkRetreat: {}
};
exports.default = (0, _reactApollo.graphql)(_getAllLinks2.default, { name: 'linkMisc', options: { variables: { type: 'Misc' } } })((0, _reactApollo.graphql)(_getAllLinks2.default, { name: 'linkRetreat', options: { variables: { type: 'Retreat' } } })((0, _reactApollo.graphql)(_getAllLinks2.default, { name: 'linkSocial', options: { variables: { type: 'Social' } } })((0, _reactRouterDom.withRouter)(RessourceListContainer))));

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("react-konami");

/***/ }),
/* 51 */
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

var _BlockHeader = __webpack_require__(52);

var _BlockHeader2 = _interopRequireDefault(_BlockHeader);

var _BlockContent = __webpack_require__(54);

var _BlockContent2 = _interopRequireDefault(_BlockContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Block = class Block extends _react.Component {

  componentDidMount() {}

  render() {
    const { links, titleBlock } = this.props;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_BlockHeader2.default, { titleBlock: titleBlock }),
      _react2.default.createElement(_BlockContent2.default, { links: links })
    );
  }
};
Block.propTypes = {
  links: _propTypes2.default.array,
  titleBlock: _propTypes2.default.string
};
Block.defaultProps = {
  links: [],
  titleBlock: 'Links'
};
exports.default = Block;

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

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _BlockHeader = __webpack_require__(53);

var _BlockHeader2 = _interopRequireDefault(_BlockHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Link } from 'react-router-dom'
let BlockHeader = class BlockHeader extends _react.Component {

  render() {
    const { titleBlock } = this.props;
    return _react2.default.createElement(
      'div',
      { className: _BlockHeader2.default.blockHeader },
      _react2.default.createElement(
        'div',
        { className: _BlockHeader2.default.whiteBlockHeader },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(_BlockHeader2.default.titleBlockHeader) },
          titleBlock
        )
      )
    );
  }
};
BlockHeader.propTypes = {
  titleBlock: _propTypes2.default.string
};
BlockHeader.defaultProps = {
  titleBlock: 'Links'
};
exports.default = BlockHeader;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = {
	"titleBlockHeader": "titleBlockHeader-1VJblAcxwx6TtAqxK3836N",
	"whiteBlockHeader": "whiteBlockHeader-2IvujLUGEYLgn-wDFF78Z5"
};

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

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _TwitterLogo = __webpack_require__(55);

var _TwitterLogo2 = _interopRequireDefault(_TwitterLogo);

var _FacebookLogo = __webpack_require__(56);

var _FacebookLogo2 = _interopRequireDefault(_FacebookLogo);

var _SlackLogo = __webpack_require__(57);

var _SlackLogo2 = _interopRequireDefault(_SlackLogo);

var _SnapchatLogo = __webpack_require__(58);

var _SnapchatLogo2 = _interopRequireDefault(_SnapchatLogo);

var _DriveLogo = __webpack_require__(59);

var _DriveLogo2 = _interopRequireDefault(_DriveLogo);

var _TrelloLogo = __webpack_require__(60);

var _TrelloLogo2 = _interopRequireDefault(_TrelloLogo);

var _BlockContent = __webpack_require__(61);

var _BlockContent2 = _interopRequireDefault(_BlockContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Link } from 'react-router-dom'
let BlockContent = class BlockContent extends _react.Component {

  componentDidMount() {}

  render() {
    const { links } = this.props;

    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_BlockContent2.default.listContentWrapper) },
      links && links.map(link => _react2.default.createElement(
        'div',
        { key: link.id, className: (0, _classnames2.default)(_BlockContent2.default.listContentItemWrapper) },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(_BlockContent2.default.listContentItemContent, 'content') },
          link.icon === 'Slack' && _react2.default.createElement(_SlackLogo2.default, { className: _BlockContent2.default.listContentItemLogo, width: '29', height: '29' }),
          link.icon === 'Facebook' && _react2.default.createElement(_FacebookLogo2.default, { className: _BlockContent2.default.listContentItemLogo, width: '29', height: '29' }),
          link.icon === 'Trello' && _react2.default.createElement(_TrelloLogo2.default, { className: _BlockContent2.default.listContentItemLogo, width: '29', height: '29' }),
          link.icon === 'Twitter' && _react2.default.createElement(_TwitterLogo2.default, { className: _BlockContent2.default.listContentItemLogo, width: '28', height: '23' }),
          link.icon === 'Snapchat' && _react2.default.createElement(_SnapchatLogo2.default, { className: _BlockContent2.default.listContentItemLogo, width: '29', height: '29' }),
          link.icon === 'Drive' && _react2.default.createElement(_DriveLogo2.default, { className: _BlockContent2.default.listContentItemLogo, width: '29', height: '29' }),
          _react2.default.createElement(
            'a',
            { href: link.url },
            link.title
          )
        )
      ))
    );
  }
};
BlockContent.propTypes = {
  links: _propTypes2.default.array
};
BlockContent.defaultProps = {
  links: []
};
exports.default = BlockContent;

/***/ }),
/* 55 */
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

let TwitterLogo = class TwitterLogo extends _react.Component {

  render() {
    const { width, height, className } = this.props;
    return _react2.default.createElement(
      'svg',
      {
        width: width || '28',
        height: height || '23',
        className: className || '',
        viewBox: '0 0 300.00006 244.18703'
      },
      _react2.default.createElement('path', {
        d: 'M94.719 243.187c112.46 0 173.956-93.168 173.956-173.956 0-2.647-.054-5.28-.173-7.903A124.323 124.323 0 0 0 299 29.668c-10.955 4.87-22.744 8.147-35.11 9.625 12.623-7.569 22.314-19.543 26.885-33.817a122.61 122.61 0 0 1-38.824 14.84C240.794 8.433 224.911 1 207.322 1c-33.763 0-61.144 27.38-61.144 61.132 0 4.798.537 9.465 1.586 13.94C96.948 73.517 51.89 49.188 21.738 12.194a60.978 60.978 0 0 0-8.278 30.73c0 21.212 10.793 39.938 27.207 50.893a60.69 60.69 0 0 1-27.69-7.647c-.01.257-.01.507-.01.781 0 29.61 21.076 54.332 49.052 59.934a61.22 61.22 0 0 1-16.122 2.152c-3.934 0-7.766-.387-11.49-1.103C42.19 172.227 64.76 189.904 91.52 190.4c-20.925 16.402-47.287 26.17-75.937 26.17-4.929 0-9.798-.28-14.584-.846 27.059 17.344 59.19 27.464 93.722 27.464',
        fill: '#1da1f2'
      })
    );
  }
};
TwitterLogo.propTypes = {
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  className: _propTypes2.default.string
};
TwitterLogo.defaultProps = {
  width: '28',
  height: '23',
  className: ''
};
exports.default = TwitterLogo;

/***/ }),
/* 56 */
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

let FacebookLogo = class FacebookLogo extends _react.Component {

  render() {
    const { width, height, className } = this.props;
    return _react2.default.createElement(
      'svg',
      {
        width: width || '266.893',
        height: height || '266.895',
        className: className || '',
        viewBox: '0 0 266.893 266.895'
      },
      _react2.default.createElement('path', {
        fill: '#3C5A99',
        d: 'M248.082 262.307c7.854 0 14.223-6.369 14.223-14.225V18.812c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857 0-14.224 6.367-14.224 14.224v229.27c0 7.855 6.366 14.225 14.224 14.225h229.27z'
      }),
      _react2.default.createElement('path', {
        fill: '#FFF',
        d: 'M182.409 262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261 3.127-18.935 19.275-18.935l20.596-.009V45.045c-3.562-.474-15.788-1.533-30.012-1.533-29.695 0-50.025 18.126-50.025 51.413v28.684h-33.585v38.895h33.585v99.803h40.166z'
      })
    );
  }
};
FacebookLogo.propTypes = {
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  className: _propTypes2.default.string
};
FacebookLogo.defaultProps = {
  width: '266.893',
  height: '266.895',
  className: ''
};
exports.default = FacebookLogo;

/***/ }),
/* 57 */
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

let SlackLogo = class SlackLogo extends _react.Component {

  render() {
    const { width, height, className } = this.props;
    return _react2.default.createElement(
      'svg',
      {
        width: width || '256',
        height: height || '256',
        className: className || '',
        viewBox: '0 0 256 256'
      },
      _react2.default.createElement('path', {
        d: 'M165.964 15.838c-3.89-11.975-16.752-18.528-28.725-14.636-11.975 3.89-18.528 16.752-14.636 28.725l58.947 181.365c4.048 11.187 16.132 17.473 27.732 14.135 12.1-3.483 19.475-16.334 15.614-28.217L165.964 15.838',
        fill: '#DFA22F'
      }),
      _react2.default.createElement('path', {
        d: 'M74.626 45.516C70.734 33.542 57.873 26.989 45.9 30.879 33.924 34.77 27.37 47.631 31.263 59.606l58.948 181.366c4.047 11.186 16.132 17.473 27.732 14.132 12.099-3.481 19.474-16.332 15.613-28.217L74.626 45.516',
        fill: '#3CB187'
      }),
      _react2.default.createElement('path', {
        d: 'M240.162 166.045c11.975-3.89 18.526-16.75 14.636-28.726-3.89-11.973-16.752-18.527-28.725-14.636L44.708 181.632c-11.187 4.046-17.473 16.13-14.135 27.73 3.483 12.099 16.334 19.475 28.217 15.614l181.372-58.93',
        fill: '#CE1E5B'
      }),
      _react2.default.createElement('path', {
        d: 'M82.508 217.27l43.347-14.084-14.086-43.352-43.35 14.09 14.089 43.347',
        fill: '#392538'
      }),
      _react2.default.createElement('path', {
        d: 'M173.847 187.591c16.388-5.323 31.62-10.273 43.348-14.084l-14.088-43.36-43.35 14.09 14.09 43.354',
        fill: '#BB242A'
      }),
      _react2.default.createElement('path', {
        d: 'M210.484 74.706c11.974-3.89 18.527-16.751 14.637-28.727-3.89-11.973-16.752-18.526-28.727-14.636L15.028 90.293C3.842 94.337-2.445 106.422.896 118.022c3.481 12.098 16.332 19.474 28.217 15.613l181.371-58.93',
        fill: '#72C5CD'
      }),
      _react2.default.createElement('path', {
        d: 'M52.822 125.933c11.805-3.836 27.025-8.782 43.354-14.086-5.323-16.39-10.273-31.622-14.084-43.352l-43.36 14.092 14.09 43.346',
        fill: '#248C73'
      }),
      _react2.default.createElement('path', {
        d: 'M144.16 96.256l43.356-14.088a546179.21 546179.21 0 0 0-14.089-43.36L130.07 52.9l14.09 43.356',
        fill: '#62803A'
      })
    );
  }
};
SlackLogo.propTypes = {
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  className: _propTypes2.default.string
};
SlackLogo.defaultProps = {
  width: '53',
  height: '22',
  className: ''
};
exports.default = SlackLogo;

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

let SnapchatLogo = class SnapchatLogo extends _react.Component {

  render() {
    const { width, height, className } = this.props;
    return _react2.default.createElement(
      'svg',
      {
        width: width || '300',
        height: height || '300',
        className: className || '',
        viewBox: '0 0 300 300'
      },
      _react2.default.createElement('path', {
        d: 'M251.517 1C277.737 1 299 22.259 299 48.487v203.03c0 26.22-21.263 47.483-47.483 47.483H48.487C22.263 299 1 277.737 1 251.517V48.487C1 22.26 22.263 1 48.487 1h203.03z',
        fill: '#fffc00'
      }),
      _react2.default.createElement('path', {
        d: 'M151.095 252.332c-.564 0-1.114-.018-1.67-.044-.353.03-.72.044-1.088.044-12.932 0-21.232-5.866-29.261-11.543-5.542-3.916-10.774-7.614-16.936-8.64a54.6 54.6 0 0 0-8.89-.748c-5.215 0-9.323.804-12.326 1.39-1.822.358-3.396.664-4.593.664-1.25 0-2.6-.27-3.19-2.281-.512-1.744-.88-3.427-1.238-5.062-.917-4.195-1.569-6.779-3.326-7.05-20.511-3.168-26.385-7.49-27.692-10.555a3.907 3.907 0 0 1-.315-1.31 2.305 2.305 0 0 1 1.932-2.41c31.53-5.191 45.669-37.42 46.259-38.789.013-.035.03-.074.048-.109 1.932-3.912 2.308-7.308 1.128-10.092-2.164-5.096-9.222-7.338-13.895-8.82-1.14-.363-2.224-.703-3.08-1.044-9.324-3.685-10.097-7.465-9.73-9.393.625-3.287 5.013-5.577 8.566-5.577.97 0 1.827.175 2.549.512 4.195 1.962 7.972 2.958 11.237 2.958 4.506 0 6.472-1.892 6.713-2.141-.118-2.133-.258-4.362-.402-6.665-.94-14.904-2.107-33.432 2.613-44.004 14.135-31.692 44.11-34.157 52.96-34.157.227 0 3.88-.04 3.88-.04h.525c8.868 0 38.912 2.466 53.056 34.18 4.716 10.576 3.549 29.117 2.609 44.012l-.04.651a682.032 682.032 0 0 0-.362 6.018c.227.232 2.037 1.972 6.119 2.129h.004c3.108-.118 6.674-1.11 10.59-2.941 1.145-.538 2.422-.652 3.287-.652 1.329 0 2.67.258 3.785.721l.07.031c3.164 1.123 5.24 3.34 5.284 5.66.044 2.185-1.626 5.468-9.803 8.698-.848.336-1.932.677-3.082 1.044-4.676 1.482-11.73 3.724-13.894 8.82-1.18 2.784-.804 6.176 1.128 10.088.017.04.035.074.052.113.586 1.368 14.712 33.589 46.26 38.786a2.314 2.314 0 0 1 1.93 2.408 3.897 3.897 0 0 1-.323 1.32c-1.302 3.042-7.167 7.36-27.683 10.529-1.679.257-2.33 2.443-3.33 7.023-.363 1.665-.73 3.304-1.238 5.027-.437 1.494-1.368 2.194-2.937 2.194h-.253c-1.088 0-2.631-.197-4.59-.582-3.474-.677-7.368-1.302-12.325-1.302-2.893 0-5.887.249-8.898.747-6.154 1.027-11.381 4.716-16.915 8.628-8.042 5.69-16.342 11.556-29.279 11.556',
        fill: '#fff'
      }),
      _react2.default.createElement('path', {
        d: 'M151.872 49.738c8.396 0 37.317 2.255 50.945 32.81 4.488 10.057 3.339 28.283 2.417 42.924a618.285 618.285 0 0 0-.402 6.727l-.053.922.62.69c.246.276 2.58 2.715 7.767 2.916l.088.004.083-.004c3.43-.131 7.295-1.193 11.495-3.16.612-.289 1.438-.429 2.307-.429.993 0 2.046.184 2.916.551l.13.053c2.2.769 3.755 2.224 3.781 3.54.014.747-.546 3.422-8.343 6.503-.765.302-1.77.621-2.933.988-5.074 1.613-12.74 4.043-15.323 10.118-1.451 3.431-1.058 7.474 1.184 12.02.922 2.146 15.402 34.781 48.007 40.153a1.524 1.524 0 0 1-.135.524c-.55 1.303-4.065 5.796-25.918 9.165-3.422.53-4.257 4.362-5.232 8.82-.345 1.591-.708 3.2-1.197 4.865-.149.503-.175.533-.717.533h-.258c-.966 0-2.443-.2-4.148-.533-3.099-.608-7.342-1.35-12.766-1.35-3.025 0-6.146.266-9.275.782-6.687 1.114-12.129 4.96-17.89 9.03-7.73 5.472-15.73 11.123-27.928 11.123-.528 0-1.049-.018-1.573-.044l-.136-.004-.14.009c-.297.026-.598.039-.908.039-12.199 0-20.197-5.651-27.929-11.12-5.76-4.073-11.202-7.919-17.885-9.033a57.257 57.257 0 0 0-9.274-.783c-5.424 0-9.668.827-12.771 1.434-1.705.337-3.178.62-4.148.62-.787 0-.804-.043-.97-.616-.49-1.665-.853-3.317-1.198-4.908-.975-4.458-1.818-8.313-5.232-8.842-21.857-3.374-25.367-7.876-25.922-9.174a1.548 1.548 0 0 1-.131-.533c32.6-5.371 47.085-38.003 48.007-40.157 2.238-4.546 2.636-8.584 1.18-12.015-2.578-6.08-10.244-8.51-15.323-10.123-1.163-.367-2.168-.686-2.929-.988-6.59-2.605-8.614-5.223-8.308-6.813.345-1.832 3.523-3.694 6.294-3.694.62 0 1.167.096 1.569.289 4.501 2.106 8.614 3.177 12.216 3.177 5.664 0 8.19-2.635 8.457-2.937l.616-.686-.052-.918c-.114-2.15-.258-4.397-.402-6.718-.923-14.646-2.072-32.858 2.417-42.92 13.575-30.441 42.351-32.788 50.848-32.788.21 0 3.903-.035 3.903-.035.157-.004.323-.004.502-.004m0-4.62h-.555s-3.57.035-3.855.035c-9.195 0-40.363 2.565-55.065 35.529-4.948 11.093-3.764 29.93-2.81 45.066.113 1.783.23 3.636.331 5.428-.76.42-2.15.944-4.335.944-2.92 0-6.368-.918-10.254-2.74-1.031-.481-2.22-.726-3.531-.726-4.55 0-9.992 2.994-10.835 7.452-.612 3.213.826 7.898 11.15 11.976.93.371 2.05.725 3.234 1.097 4.265 1.355 10.712 3.4 12.465 7.522.904 2.137.542 4.886-1.075 8.164-.035.074-.07.149-.101.227-.568 1.32-14.213 32.426-44.51 37.413a4.626 4.626 0 0 0-3.864 4.821c.039.704.205 1.399.49 2.076 2.276 5.315 11.865 9.213 29.33 11.923.586.787 1.194 3.575 1.565 5.276.363 1.678.739 3.404 1.276 5.231.525 1.792 1.893 3.934 5.407 3.934 1.42 0 3.099-.328 5.035-.708 2.91-.568 6.897-1.346 11.884-1.346 2.766 0 5.634.24 8.518.716 5.634.94 10.424 4.327 15.966 8.243 7.942 5.617 16.936 11.972 30.604 11.972.375 0 .751-.01 1.127-.04.442.022 1.019.04 1.63.04 13.672 0 22.667-6.355 30.6-11.967 5.554-3.925 10.34-7.308 15.974-8.248a52.481 52.481 0 0 1 8.519-.716c4.76 0 8.522.603 11.879 1.258 2.107.416 3.798.625 5.035.625h.258c2.596 0 4.427-1.372 5.153-3.859.529-1.788.905-3.47 1.276-5.175.372-1.696.975-4.471 1.556-5.258 17.47-2.71 27.059-6.6 29.331-11.892a6.21 6.21 0 0 0 .499-2.09 4.62 4.62 0 0 0-3.864-4.816c-30.31-4.996-43.947-36.097-44.51-37.417a2.559 2.559 0 0 0-.106-.223c-1.617-3.282-1.975-6.027-1.07-8.164 1.748-4.122 8.195-6.167 12.46-7.518 1.194-.38 2.312-.738 3.235-1.101 7.557-2.985 11.346-6.648 11.267-10.892-.065-3.335-2.662-6.307-6.787-7.78l-.014-.004c-1.385-.577-3.033-.892-4.646-.892-1.105 0-2.74.149-4.27.866-3.592 1.682-6.822 2.6-9.606 2.723-1.85-.083-3.055-.551-3.746-.931.087-1.534.188-3.117.288-4.769l.04-.642c.957-15.145 2.141-34-2.806-45.097-14.712-32.98-45.945-35.546-55.167-35.546',
        fill: '#030303'
      })
    );
  }
};
SnapchatLogo.propTypes = {
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  className: _propTypes2.default.string
};
SnapchatLogo.defaultProps = {
  width: '300',
  height: '300',
  className: ''
};
exports.default = SnapchatLogo;

/***/ }),
/* 59 */
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

let DriveLogo = class DriveLogo extends _react.Component {

  render() {
    const { width, height, className } = this.props;
    return _react2.default.createElement(
      'svg',
      {
        width: width || '139',
        height: height || '120.4',
        className: className || '',
        viewBox: '0 0 139 120.4'
      },
      _react2.default.createElement(
        'radialGradient',
        {
          id: 'a',
          cx: '-254.82',
          cy: '705.836',
          gradientTransform: 'scale(3.2644) rotate(30 1174.792 966.99)',
          gradientUnits: 'userSpaceOnUse',
          r: '82.978'
        },
        _react2.default.createElement('stop', { offset: '0', stopColor: '#4387fd' }),
        _react2.default.createElement('stop', { offset: '.65', stopColor: '#3078f0' }),
        _react2.default.createElement('stop', { offset: '.91', stopColor: '#2b72ea' }),
        _react2.default.createElement('stop', { offset: '1', stopColor: '#286ee6' })
      ),
      _react2.default.createElement(
        'radialGradient',
        {
          id: 'b',
          cx: '-254.817',
          cy: '705.837',
          gradientTransform: 'scale(3.2644) rotate(30 1174.792 966.99)',
          gradientUnits: 'userSpaceOnUse',
          r: '82.973'
        },
        _react2.default.createElement('stop', { offset: '0', stopColor: '#ffd24d' }),
        _react2.default.createElement('stop', { offset: '1', stopColor: '#f6c338' })
      ),
      _react2.default.createElement('path', { d: 'M24.2 120.4L0 78.5 45.3 0l24.2 41.9z', fill: '#0da960' }),
      _react2.default.createElement('path', { d: 'M24.2 120.4l24.2-41.9H139l-24.2 41.9z', fill: 'url(#a)' }),
      _react2.default.createElement('path', { d: 'M139 78.5H90.6L45.3 0h48.4z', fill: 'url(#b)' }),
      _react2.default.createElement('path', { d: 'M69.5 78.5H48.4l10.5-18.3-34.7 60.2z', fill: '#2d6fdd' }),
      _react2.default.createElement('path', { d: 'M90.6 78.5H139L80.1 60.2z', fill: '#e5b93c' }),
      _react2.default.createElement('path', { d: 'M58.9 60.2l10.6-18.3L45.3 0z', fill: '#0c9b57' })
    );
  }
};
DriveLogo.propTypes = {
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  className: _propTypes2.default.string
};
DriveLogo.defaultProps = {
  width: '139',
  height: '120.4',
  className: ''
};
exports.default = DriveLogo;

/***/ }),
/* 60 */
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

let TrelloLogo = class TrelloLogo extends _react.Component {

  render() {
    const { width, height, className } = this.props;
    return _react2.default.createElement(
      'svg',
      {
        width: width || '200',
        height: height || '200',
        className: className || '',
        viewBox: '0 0 200 200'
      },
      _react2.default.createElement(
        'g',
        { fill: 'none', fillRule: 'evenodd' },
        _react2.default.createElement('rect', { fill: '#0079BF', width: '200', height: '200', rx: '25' }),
        _react2.default.createElement('rect', { fill: '#FFF', x: '113', y: '26', width: '61', height: '87.5', rx: '12' }),
        _react2.default.createElement('rect', { fill: '#FFF', x: '26', y: '26', width: '61', height: '137.5', rx: '12' })
      )
    );
  }
};
TrelloLogo.propTypes = {
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  className: _propTypes2.default.string
};
TrelloLogo.defaultProps = {
  width: '200',
  height: '200',
  className: ''
};
exports.default = TrelloLogo;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = {
	"listContentItemLogo": "listContentItemLogo-1VYC0oeATQQ8qN1_4Zb6Q",
	"listContentItemWrapper": "listContentItemWrapper-1NmT5wj9u2OcWajoEihgFS",
	"listContentItemContent": "listContentItemContent-2XfBFhQGi6YD1Fduj0obOI"
};

/***/ }),
/* 62 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TypeLink"}}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"allLinks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"position_ASC"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"title"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"description"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"url"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"icon"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"position"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":156}};
    doc.loc.source = {"body":"query($type: TypeLink!) {\n  allLinks(filter: { type: $type }, orderBy: position_ASC) {\n    id\n    title\n    description\n    url\n    icon\n    position\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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

var _reactApollo = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(2);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _CreateLink = __webpack_require__(64);

var _CreateLink2 = _interopRequireDefault(_CreateLink);

var _getEnumTypeLink = __webpack_require__(65);

var _getEnumTypeLink2 = _interopRequireDefault(_getEnumTypeLink);

var _getEnumIconLink = __webpack_require__(66);

var _getEnumIconLink2 = _interopRequireDefault(_getEnumIconLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let RessourceEditContainer = class RessourceEditContainer extends _react.Component {

  constructor(props) {
    super(props);

    this.handleSubmitRessource = this.handleSubmitRessource.bind(this);
  }

  handleSubmitRessource(e) {
    e.preventDefault();

    const link = {
      title: this.titleInput.value,
      url: this.urlInput.value,
      description: this.descriptionInput.value,
      type: this.categoryInput.value,
      icon: this.iconInput.value
    };

    this.props.createLink({
      variables: {
        title: link.title,
        url: link.url,
        description: link.description,
        type: link.type,
        icon: link.icon
      }
    }).then(linkId => {
      this.props.history.push('/link?refresh');
    });
  }

  render() {
    const { enumTypeLink, enumIconLink } = this.props;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        { className: 'title' },
        'New Ressources'
      ),
      _react2.default.createElement(
        'h2',
        { className: 'subtitle' },
        'Add'
      ),
      _react2.default.createElement('hr', null),
      _react2.default.createElement(
        'form',
        { onSubmit: this.handleSubmitRessource },
        _react2.default.createElement(
          'div',
          { className: 'columns' },
          _react2.default.createElement(
            'div',
            { className: 'column is-half is-offset-3' },
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'label',
                { className: 'label' },
                'Title'
              ),
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement('input', {
                  className: 'input is-medium',
                  type: 'text',
                  name: 'title',
                  ref: title => {
                    this.titleInput = title;
                  },
                  placeholder: 'Title of your link'
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'label',
                { className: 'label' },
                'Url'
              ),
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement('input', {
                  ref: url => {
                    this.urlInput = url;
                  },
                  className: 'input is-medium',
                  type: 'text',
                  name: 'title',
                  placeholder: 'Url'
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'label',
                { className: 'label' },
                'Description'
              ),
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement('textarea', {
                  ref: description => {
                    this.descriptionInput = description;
                  },
                  className: 'textarea is-medium',
                  placeholder: 'Description ressources'
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'label',
                { className: 'label' },
                'Link\'s Category'
              ),
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement(
                  'div',
                  { className: 'select' },
                  _react2.default.createElement(
                    'select',
                    {
                      name: 'category',
                      ref: category => {
                        this.categoryInput = category;
                      },
                      className: (0, _classnames2.default)(enumIconLink.loading ? ('is-medium', 'is-loading') : 'is-medium')
                    },
                    !enumTypeLink.loading && enumTypeLink.__type.enumValues.map(type => _react2.default.createElement(
                      'option',
                      { key: type.name, value: type.name },
                      type.name
                    )),
                    enumTypeLink.loading && _react2.default.createElement(
                      'option',
                      null,
                      'Loading type...'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'label',
                { className: 'label' },
                'Link\'s Icon'
              ),
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement(
                  'div',
                  { className: 'select' },
                  _react2.default.createElement(
                    'select',
                    {
                      ref: icon => {
                        this.iconInput = icon;
                      },
                      name: 'icon',
                      className: (0, _classnames2.default)(enumIconLink.loading ? ('is-medium', 'is-loading') : 'is-medium')
                    },
                    !enumIconLink.loading && enumIconLink.__type.enumValues.map(type => _react2.default.createElement(
                      'option',
                      { key: type.name, value: type.name },
                      type.name
                    )),
                    enumIconLink.loading && _react2.default.createElement(
                      'option',
                      null,
                      'Loading type...'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'field is-grouped' },
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement(
                  'button',
                  { className: 'button is-primary' },
                  'Submit'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { className: 'button is-link', to: '/link' },
                  'Cancel'
                )
              )
            )
          )
        )
      )
    );
  }
};
RessourceEditContainer.propTypes = {
  history: _propTypes2.default.object,
  link: _propTypes2.default.object,
  createLink: _propTypes2.default.func,
  enumTypeLink: _propTypes2.default.object,
  enumIconLink: _propTypes2.default.object,
  mathc: _propTypes2.default.object
};
RessourceEditContainer.defaultProps = {
  history: {},
  link: {},
  createLink: () => {},
  enumTypeLink: {},
  enumIconLink: {},
  match: {}
};
exports.default = (0, _reactApollo.graphql)(_CreateLink2.default, { name: 'createLink' })((0, _reactApollo.graphql)(_getEnumTypeLink2.default, { name: 'enumTypeLink' })((0, _reactApollo.graphql)(_getEnumIconLink2.default, { name: 'enumIconLink' })((0, _reactRouterDom.withRouter)(RessourceEditContainer))));

/***/ }),
/* 64 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"icon"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Icons"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TypeLink"}}},"defaultValue":null},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"createLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"icon"},"value":{"kind":"Variable","name":{"kind":"Name","value":"icon"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":205}};
    doc.loc.source = {"body":"mutation($title: String!, $description: String, $icon: Icons!, $type: TypeLink!, $url: String!) {\n  createLink(title: $title, description: $description, icon: $icon, type: $type, url: $url) {\n    id\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
/* 65 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"__type"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"TypeLink"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"name"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"enumValues"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"name"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}]}}],"loc":{"start":0,"end":86}};
    doc.loc.source = {"body":"query {\n  __type(name: \"TypeLink\") {\n    name\n    enumValues {\n      name\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
/* 66 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"__type"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"Icons"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"name"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"enumValues"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"name"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}]}}],"loc":{"start":0,"end":83}};
    doc.loc.source = {"body":"query {\n  __type(name: \"Icons\") {\n    name\n    enumValues {\n      name\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
/* 67 */
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

__webpack_require__(10);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let BookclubSearchContainer = class BookclubSearchContainer extends _react.Component {

  constructor(props) {
    super(props);

    this.state = {
      isSearchLoading: false,
      query: '',
      results: []
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput(e) {
    e.preventDefault();
    this.setState({ query: this.inputSearch.value });
    this.searchApiBook();
  }

  searchApiBook() {
    const { isSearchLoading } = this.state;
    if (!isSearchLoading) {
      this.setState({ isSearchLoading: true, results: [] });

      const { query } = this.state;
      window.fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(query)}&printType=books&orderBy=newest&maxResults=39`).then(data => data.json()).then(res => {
        this.setState({ isSearchLoading: false, results: res.items || [] });
        console.log(this.state);
      }).catch(res => {
        this.setState({ isSearchLoading: false, results: [] });
      });
    }
  }

  render() {
    const { isSearchLoading, results } = this.state;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'field' },
        _react2.default.createElement(
          'div',
          {
            className: isSearchLoading ? (0, _classnames2.default)('control', 'is-large', 'is-loading') : (0, _classnames2.default)('control', 'is-large')
          },
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSearchInput },
            _react2.default.createElement('input', {
              className: (0, _classnames2.default)('input', 'is-large'),
              type: 'text',
              ref: input => {
                this.inputSearch = input;
              },
              placeholder: 'Search Book'
            }),
            _react2.default.createElement(
              'button',
              { type: 'submit', className: 'button is-primary' },
              'Search'
            )
          )
        )
      ),
      !isSearchLoading && results && _react2.default.createElement(
        'div',
        { className: 'columns' },
        results.length && results.map(result => _react2.default.createElement(
          'div',
          { className: 'column' },
          _react2.default.createElement(
            'div',
            { className: 'card' },
            _react2.default.createElement(
              'div',
              { className: 'card-image' },
              _react2.default.createElement(
                'figure',
                { className: 'image is-4by3' },
                _react2.default.createElement('img', {
                  src: `https://books.google.com/books/content/images/frontcover/${result.id}?fife=w300-rw`,
                  alt: 'Book image'
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-content' },
              _react2.default.createElement(
                'div',
                { className: 'media' },
                _react2.default.createElement(
                  'div',
                  { className: 'media-content' },
                  _react2.default.createElement(
                    'p',
                    { className: 'title is-4' },
                    result.volumeInfo.title
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'subtitle is-6' },
                    result.volumeInfo.authors.map(author => _react2.default.createElement(
                      'span',
                      null,
                      author
                    ))
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'content' },
                result.volumeInfo.description,
                _react2.default.createElement(
                  'time',
                  { dateTime: '2016-1-1' },
                  result.volumeInfo.publishedDate
                )
              )
            )
          )
        ))
      )
    );
  }
};
BookclubSearchContainer.propTypes = {
  search: _propTypes2.default.object
};
BookclubSearchContainer.defaultProps = {
  search: {}
};
exports.default = BookclubSearchContainer;

/***/ }),
/* 68 */
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

var _reactRouterDom = __webpack_require__(2);

var _reactApollo = __webpack_require__(3);

var _isLoggedIn = __webpack_require__(7);

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
          { data, component, layout } = _props,
          rest = _objectWithoutProperties(_props, ['data', 'component', 'layout']);

    return _react2.default.createElement(
      'div',
      null,
      !data.loading && _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
        render: props => this.redirectisNotAuthenticated(layout, props, component)
      }))
    );
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
exports.default = (0, _reactApollo.graphql)(_isLoggedIn2.default)(PrivateRoute);

/***/ }),
/* 69 */
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

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

let PublicRoute = class PublicRoute extends _react.Component {

  componentDidMount() {}

  redirectisAuthenticated(layout, props, component) {
    return _react2.default.createElement(layout, props, _react2.default.createElement(component, props));
  }

  render() {
    const _props = this.props,
          { component, layout } = _props,
          rest = _objectWithoutProperties(_props, ['component', 'layout']);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: props => this.redirectisAuthenticated(layout, props, component) }))
    );
  }
};
PublicRoute.propTypes = {
  component: _propTypes2.default.func.isRequired,
  layout: _propTypes2.default.func.isRequired
};
PublicRoute.defaultProps = {};
exports.default = PublicRoute;

/***/ }),
/* 70 */
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

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _Header = __webpack_require__(71);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(74);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import css from './PrivateLayout.css'

let PrivateLayout = class PrivateLayout extends _react.Component {

  componentDidMount() {}

  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Header2.default, null),
      _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('section', 'container') },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('') },
          this.props.children
        )
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _MangroveLogo = __webpack_require__(72);

var _MangroveLogo2 = _interopRequireDefault(_MangroveLogo);

var _reactApollo = __webpack_require__(3);

var _Header = __webpack_require__(73);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Header = class Header extends _react.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  closeMenu() {
    this.setState({ showMenu: false });
  }

  toggleMenu() {
    const { showMenu } = this.state;
    this.setState({ showMenu: !showMenu });
  }

  render() {
    const { showMenu } = this.state;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'nav',
          { className: (0, _classnames2.default)(_Header2.default.header, 'navbar') },
          _react2.default.createElement(
            'div',
            { className: 'navbar-brand' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: (0, _classnames2.default)(_Header2.default.logoLink, 'navbar-item'), to: '/' },
              _react2.default.createElement(_MangroveLogo2.default, { className: (0, _classnames2.default)(_Header2.default.logo), width: '37' }),
              'Mangrove Dashboard'
            ),
            _react2.default.createElement(
              'div',
              {
                className: showMenu ? (0, _classnames2.default)('navbar-burger', 'burger', _Header2.default.burgerMenu, 'is-active') : (0, _classnames2.default)('navbar-burger', 'burger', _Header2.default.burgerMenu),
                onClick: this.toggleMenu
              },
              _react2.default.createElement('span', null),
              _react2.default.createElement('span', null),
              _react2.default.createElement('span', null)
            )
          ),
          _react2.default.createElement(
            'div',
            {
              className: showMenu ? (0, _classnames2.default)('navbar-menu', 'is-active') : (0, _classnames2.default)('navbar-menu')
            },
            _react2.default.createElement(
              'div',
              { className: 'navbar-start' },
              _react2.default.createElement(
                'div',
                { className: 'navbar-item' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { className: _Header2.default.headerLink, onClick: this.closeMenu, to: '/link' },
                  'Ressources'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'navbar-item' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { className: _Header2.default.headerLink, onClick: this.closeMenu, to: '/bookclub' },
                  'Bookclub'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'navbar-end' },
              _react2.default.createElement(
                'div',
                { className: 'navbar-item' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { className: _Header2.default.headerLink, onClick: this.closeMenu, to: '/register' },
                  'Register'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'navbar-item' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { className: _Header2.default.headerLink, onClick: this.closeMenu, to: '/login' },
                  'Login'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'navbar-item' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { className: _Header2.default.headerLink, onClick: this.closeMenu, to: '/logout' },
                  'Logout'
                )
              )
            )
          )
        )
      )
    );
  }
};
exports.default = Header;

/***/ }),
/* 72 */
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
/* 73 */
/***/ (function(module, exports) {

module.exports = {
	"header": "header-2zG4F7jLvGK6KP6LE87cJC",
	"headerLink": "headerLink-2B_CfzPCUcvE9Qe2Q0uaVO",
	"logoLink": "logoLink-2TvZGbsgxMY3a28K7cmiL_",
	"logo": "logo-1R6EsLBT0JSYnuTx7vyhgQ",
	"burgerMenu": "burgerMenu-l9DSCn53fCHZxfN8xAwYv"
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(75);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import css from './Footer.css'

const Footer = () => _react2.default.createElement(
  'footer',
  { className: 'footer' },
  _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(
      'div',
      { className: 'content has-text-centered' },
      _react2.default.createElement(
        'p',
        null,
        'Made with',
        ' ',
        _react2.default.createElement(
          'span',
          { role: 'img', 'aria-label': 'wine' },
          '\uD83C\uDF77'
        ),
        ' ',
        'in Paris - \xA9 ',
        (0, _moment2.default)().format('YYYY'),
        '.'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { className: 'icon', href: 'https://github.com/jgthms/bulma' },
          _react2.default.createElement('i', { className: 'fa fa-github' })
        )
      )
    )
  )
);

exports.default = Footer;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 76 */
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
/* 77 */
/***/ (function(module, exports) {



/***/ }),
/* 78 */
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

var _redux = __webpack_require__(79);

var _reduxThunk = __webpack_require__(80);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _seamlessImmutable = __webpack_require__(81);

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
/* 79 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("seamless-immutable");

/***/ }),
/* 82 */
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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClient = createClient;
exports.getNetworkInterface = getNetworkInterface;
exports.browserClient = browserClient;

var _reactApollo = __webpack_require__(3);

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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----------------------
// IMPORTS

const path = __webpack_require__(85);

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
/* 85 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ })
/******/ ]);
//# sourceMappingURL=server_dev.js.map