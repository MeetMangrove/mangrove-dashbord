webpackJsonp([0],{

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(212);


/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_app__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_kit_lib_apollo__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_kit_lib_redux__ = __webpack_require__(347);
// Browser entry point, for Webpack.  We'll grab the browser-flavoured
// versions of React mounting, routing etc to hook into the DOM

// ----------------------
// IMPORTS

/* NPM */

// Enable async/await and generators, cross-browser


// Patch global.`fetch` so that Apollo calls to GraphQL work


// React parts



// Browser routing


// Apollo Provider. This HOC will 'wrap' our React component chain
// and handle injecting data down to any listening component


/* ReactQL */

// Root component.  This is our 'entrypoint' into the app.  If you're using
// the ReactQL starter kit for the first time, `src/app.js` is where
// you can start editing to add your own code.  Note:  This first is imported
// first, since it sets up our app's settings


// Grab the shared Apollo Client


// Custom redux store creator.  This will allow us to create a store 'outside'
// of Apollo, so we can apply our own reducers and make use of the Redux dev
// tools in the browser


// ----------------------

// Create a new browser Apollo client
var client = Object(__WEBPACK_IMPORTED_MODULE_7_kit_lib_apollo__["a" /* browserClient */])();

// Create a new Redux store
var store = Object(__WEBPACK_IMPORTED_MODULE_8_kit_lib_redux__["a" /* default */])(client);

// Create the 'root' entry point into the app.  If we have React hot loading
// (i.e. if we're in development), then we'll wrap the whole thing in an
// <AppContainer>.  Otherwise, we'll jump straight to the browser router
function doRender() {
  __WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.hydrate(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Root, null), document.getElementById('main'));
}

// The <Root> component.  We'll run this as a self-contained function since
// we're using a bunch of temporary vars that we can safely discard.
//
// If we have hot reloading enabled (i.e. if we're in development), then
// we'll wrap the whole thing in <AppContainer> so that our views can respond
// to code changes as needed
var Root = function () {
  // Wrap the component hierarchy in <BrowserRouter>, so that our children
  // can respond to route changes
  var Chain = function Chain() {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5_react_apollo__["ApolloProvider"],
      { store: store, client: client },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["a" /* BrowserRouter */],
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_src_app__["a" /* default */], null)
      )
    );
  };

  // React hot reloading -- only enabled in development.  This branch will
  // be shook from production, so we can run a `require` statement here
  // without fear that it'll inflate the bundle size
  if (false) {
    // <AppContainer> will respond to our Hot Module Reload (HMR) changes
    // back from WebPack, and handle re-rendering the chain as needed
    var AppContainer = require('react-hot-loader').AppContainer;

    // Start our 'listener' at the root component, so that any changes that
    // occur in the hierarchy can be captured
    module.hot.accept('src/app', function () {
      // Refresh the entry point of our app, to get the changes.

      // eslint-disable-next-line
      require('src/app').default;

      // Re-render the hierarchy
      doRender();
    });

    return function () {
      return React.createElement(
        AppContainer,
        null,
        React.createElement(Chain, null)
      );
    };
  }
  return Chain;
}();

doRender();

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageManager; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocalStorageManager = function () {
  function LocalStorageManager() {
    _classCallCheck(this, LocalStorageManager);
  }

  _createClass(LocalStorageManager, null, [{
    key: 'setUserToken',
    value: function setUserToken(userToken) {
      localStorage.setItem('localStorageUserToken', JSON.stringify(userToken));
    }
  }, {
    key: 'removeUserToken',
    value: function removeUserToken() {
      localStorage.removeItem('localStorageUserToken');
    }
  }, {
    key: 'getUserToken',
    value: function getUserToken() {
      return JSON.parse(localStorage.getItem('localStorageUserToken'));
    }
  }, {
    key: 'clearLocalStorage',
    value: function clearLocalStorage() {
      localStorage.clear();
    }
  }]);

  return LocalStorageManager;
}();



/***/ }),

/***/ 30:
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

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_routes_App__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_kit_config__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_utils_LocalStorageManager__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_global_css__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_global_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__framework_global_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







__WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].setGraphQLEndpoint('https://api.graph.cool/simple/v1/cj78t448l01n00132a5m3q928/');

if (true) {
  __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].setApolloNetworkOptions({
    credentials: 'include'
  });

  __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].addApolloMiddleware(function (req, next) {
    var jwt = __WEBPACK_IMPORTED_MODULE_2_src_utils_LocalStorageManager__["a" /* default */].getUserToken();
    req.options.headers = _extends({}, req.options.headers, {
      authorization: 'Bearer ' + jwt || null
    });
    next();
  });
}
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_src_routes_App__["a" /* default */]);

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layout__ = __webpack_require__(303);


// import './main.css'



var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Layout__["a" /* default */], null);
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom_Switch__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom_Switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom_Switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_containers_Login_Login__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_containers_Logout_Logout__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_containers_Register_Register__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_containers_Home_Home__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_containers_Ressources_RessourcesList__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_utils_PrivateRoute__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_utils_PublicRoute__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_src_components_Layout_PrivateLayout__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_src_components_Layout_EmptyLayout__ = __webpack_require__(343);



// Routes






// Layout





var Layout = function Layout() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router_dom_Switch___default.a,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_src_utils_PublicRoute__["a" /* default */], { layout: __WEBPACK_IMPORTED_MODULE_9_src_components_Layout_PrivateLayout__["a" /* default */], path: '/register', component: __WEBPACK_IMPORTED_MODULE_4_src_containers_Register_Register__["a" /* default */], exact: true }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_src_utils_PublicRoute__["a" /* default */], { layout: __WEBPACK_IMPORTED_MODULE_9_src_components_Layout_PrivateLayout__["a" /* default */], path: '/login', component: __WEBPACK_IMPORTED_MODULE_2_src_containers_Login_Login__["a" /* default */], exact: true }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_src_utils_PublicRoute__["a" /* default */], { layout: __WEBPACK_IMPORTED_MODULE_10_src_components_Layout_EmptyLayout__["a" /* default */], path: '/logout', component: __WEBPACK_IMPORTED_MODULE_3_src_containers_Logout_Logout__["a" /* default */], exact: true }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_src_utils_PrivateRoute__["a" /* default */], { layout: __WEBPACK_IMPORTED_MODULE_9_src_components_Layout_PrivateLayout__["a" /* default */], path: '/', component: __WEBPACK_IMPORTED_MODULE_5_src_containers_Home_Home__["a" /* default */], exact: true }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_src_utils_PrivateRoute__["a" /* default */], { layout: __WEBPACK_IMPORTED_MODULE_9_src_components_Layout_PrivateLayout__["a" /* default */], path: '/links', component: __WEBPACK_IMPORTED_MODULE_6_src_containers_Ressources_RessourcesList__["a" /* default */], exact: true })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_utils_LocalStorageManager__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_components_Login_Login__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_graphql_Auth_Mutation_SigninUser_gql__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_graphql_Auth_Mutation_SigninUser_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_src_graphql_Auth_Mutation_SigninUser_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_graphql_Auth_Query_isLoggedIn_gql__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_graphql_Auth_Query_isLoggedIn_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_src_graphql_Auth_Query_isLoggedIn_gql__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.loginUser = function (email, password) {
      _this.props.signinUser({ variables: { email: email, password: password } }).then(function (response) {
        __WEBPACK_IMPORTED_MODULE_4_src_utils_LocalStorageManager__["a" /* default */].setUserToken(response.data.signinUser.token);
        _this.props.history.push('/');
      }).catch(function (e) {
        console.error(e);
      });
    };

    _this.loginUser = _this.loginUser.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      if (this.props.data.loading) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          'Loading'
        );
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_src_components_Login_Login__["a" /* default */], { requestLogin: this.loginUser });
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Login.propTypes = {
  history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  signinUser: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
Login.defaultProps = {
  history: {},
  signinUser: function signinUser() {},
  data: {}
};


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_6_src_graphql_Auth_Mutation_SigninUser_gql___default.a, { name: 'signinUser' })(Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_7_src_graphql_Auth_Query_isLoggedIn_gql___default.a, { options: { fetchPolicy: 'network-only' } })(Object(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["e" /* withRouter */])(Login))));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_css__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__login_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      isLoginLoading: false
    };

    _this.handleClickLogin = _this.handleClickLogin.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'handleClickLogin',
    value: function handleClickLogin(e) {
      var _this2 = this;

      e.preventDefault();

      var email = this.emailInput.value;
      var password = this.passwordInput.value;

      if (email !== '' && password !== '') {
        this.setState({ isLoginLoading: true });
        setTimeout(function () {
          _this2.props.requestLogin(email, password);
        }, 300);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var isLoginLoading = this.state.isLoginLoading;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'form',
          { onSubmit: this.handleClickLogin },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            { className: __WEBPACK_IMPORTED_MODULE_4__login_css___default.a.titleLogin },
            'You',
            "'",
            're a Mangrove member? Log in here:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            className: __WEBPACK_IMPORTED_MODULE_4__login_css___default.a.inputLogin,
            name: 'email',
            placeholder: 'email',
            type: 'text',
            ref: function ref(email) {
              _this3.emailInput = email;
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            className: __WEBPACK_IMPORTED_MODULE_4__login_css___default.a.inputLogin,
            placeholder: 'password',
            type: 'password',
            ref: function ref(password) {
              _this3.passwordInput = password;
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_4__login_css___default.a.btnLoginWrapper },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              {
                className: isLoginLoading ? __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__login_css___default.a.btnLogin, __WEBPACK_IMPORTED_MODULE_4__login_css___default.a.alignCenter, __WEBPACK_IMPORTED_MODULE_4__login_css___default.a.bar) : __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__login_css___default.a.btnLogin, __WEBPACK_IMPORTED_MODULE_4__login_css___default.a.alignCenter),
                size: 'lg'
              },
              !isLoginLoading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                'Log in'
              ),
              isLoginLoading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_4__login_css___default.a.loader })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_4__login_css___default.a.forgotPassword },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],
            { to: '/login/forgot-password' },
            'Forgot password ?'
          )
        )
      );
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Login.propTypes = {
  requestLogin: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
Login.defaultProps = {
  requestLogin: function requestLogin() {}
};


/***/ }),

/***/ 309:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"login":"login-1qRkAiIsDBs7k_EoeiTzzT","btnLogin":"btnLogin-2lr4sD0U6PBSH5itQKG-X7","bar":"bar-1juZBG43GPT_aKia-Pi3F3","loader":"loader-f2tGLoWi7tXzFVt3tQw4p","slide":"slide-2o3IIlW5dpBSbt9wfBHEAa","btnLoginWrapper":"btnLoginWrapper-32sqyiqIOawBwI2EmG_IFf","forgotPassword":"forgotPassword-3j4Laeja7jnXZ6rLUM8QNJ","titleLogin":"titleLogin-2S_HBWNsqI8apL-eztPcDW","inputLogin":"inputLogin-1U_pDKzFG1m209uIrFLTcx","input-login":"input-login-18FyfAUfcHGW34BJtGlU31","input-group-login":"input-group-login-2eP6vIGWtZxIeILD_v_7KG"};

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_utils_LocalStorageManager__ = __webpack_require__(29);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Logout = function (_Component) {
  _inherits(Logout, _Component);

  function Logout() {
    _classCallCheck(this, Logout);

    return _possibleConstructorReturn(this, (Logout.__proto__ || Object.getPrototypeOf(Logout)).apply(this, arguments));
  }

  _createClass(Logout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      __WEBPACK_IMPORTED_MODULE_3_src_utils_LocalStorageManager__["a" /* default */].removeUserToken();
      __WEBPACK_IMPORTED_MODULE_3_src_utils_LocalStorageManager__["a" /* default */].clearLocalStorage();
      this.props.history.push('/login');
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null);
    }
  }]);

  return Logout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Logout.propTypes = {
  history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
Logout.defaultProps = {
  history: {}
};


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["e" /* withRouter */])(Logout));

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_utils_LocalStorageManager__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_graphql_Auth_Mutation_CreateUser_gql__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_graphql_Auth_Mutation_CreateUser_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_src_graphql_Auth_Mutation_CreateUser_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_graphql_Auth_Mutation_SigninUser_gql__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_graphql_Auth_Mutation_SigninUser_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_src_graphql_Auth_Mutation_SigninUser_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_graphql_Auth_Query_isLoggedIn_gql__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_graphql_Auth_Query_isLoggedIn_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_src_graphql_Auth_Query_isLoggedIn_gql__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Register = function (_Component) {
  _inherits(Register, _Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.registerUser = function () {
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password;


      _this.props.createUser({ variables: { email: email, password: password } }).then(function () {
        _this.props.signinUser({ variables: { email: email, password: password } }).then(function (r) {
          __WEBPACK_IMPORTED_MODULE_4_src_utils_LocalStorageManager__["a" /* default */].setUserToken(r.data.signinUser.token);
          _this.props.history.push('/');
        }).catch(function (e) {
          console.error(e);
          _this.props.history.push('/');
        });
      }).catch(function (e) {
        console.error(e);
        _this.props.history.push('/');
      });
    };

    _this.state = {
      email: '',
      password: ''
    };
    return _this;
  }

  _createClass(Register, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.data.loading) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          'Loading'
        );
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'w-100 pa4 flex justify-center' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { maxWidth: 400 }, className: '' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            className: 'w-100 pa3 mv2',
            value: this.state.email,
            placeholder: 'Email',
            onChange: function onChange(e) {
              return _this2.setState({ email: e.target.value });
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            className: 'w-100 pa3 mv2',
            type: 'password',
            value: this.state.password,
            placeholder: 'Password',
            onChange: function onChange(e) {
              return _this2.setState({ password: e.target.value });
            }
          }),
          ' ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'pa3 bg-black-10 bn dim ttu pointer', onClick: this.registerUser },
            'Log in'
          )
        )
      );
    }
  }]);

  return Register;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Register.propTypes = {
  history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  createUser: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  signinUser: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
Register.defaultProps = {
  history: {},
  createUser: function createUser() {},
  signinUser: function signinUser() {},
  data: {}
};


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_5_src_graphql_Auth_Mutation_CreateUser_gql___default.a, { name: 'createUser' })(Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_7_src_graphql_Auth_Query_isLoggedIn_gql___default.a, { options: { fetchPolicy: 'network-only' } })(Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_6_src_graphql_Auth_Mutation_SigninUser_gql___default.a, { name: 'signinUser' })(Object(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["e" /* withRouter */])(Register)))));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),

/***/ 312:
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

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var HomeContainer = function (_Component) {
  _inherits(HomeContainer, _Component);

  function HomeContainer() {
    _classCallCheck(this, HomeContainer);

    return _possibleConstructorReturn(this, (HomeContainer.__proto__ || Object.getPrototypeOf(HomeContainer)).apply(this, arguments));
  }

  _createClass(HomeContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'Hello Home'
      );
    }
  }]);

  return HomeContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

HomeContainer.propTypes = {};
HomeContainer.defaultProps = {};


/* harmony default export */ __webpack_exports__["a"] = (HomeContainer);

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BlockHeader_css__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BlockHeader_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__BlockHeader_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


// import { Link } from 'react-router-dom'



var BlockHeader = function (_Component) {
  _inherits(BlockHeader, _Component);

  function BlockHeader() {
    _classCallCheck(this, BlockHeader);

    return _possibleConstructorReturn(this, (BlockHeader.__proto__ || Object.getPrototypeOf(BlockHeader)).apply(this, arguments));
  }

  _createClass(BlockHeader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__BlockHeader_css___default.a.blockHeader },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__BlockHeader_css___default.a.whiteBlockHeader },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__BlockHeader_css___default.a.titleBlockHeader },
            'Links'
          )
        )
      );
    }
  }]);

  return BlockHeader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_Icons_TwitterLogo__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_components_Icons_FacebookLogo__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_components_Icons_SlackLogo__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_components_Icons_TrelloLogo__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__BlockContent_css__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__BlockContent_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__BlockContent_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// import { Link } from 'react-router-dom'





// import SnapChatLogo from 'src/components/Icons/SnapchatLogo'
// import DriveLogo from 'src/components/Icons/DriveLogo'




var BlockContent = function (_Component) {
  _inherits(BlockContent, _Component);

  function BlockContent() {
    _classCallCheck(this, BlockContent);

    return _possibleConstructorReturn(this, (BlockContent.__proto__ || Object.getPrototypeOf(BlockContent)).apply(this, arguments));
  }

  _createClass(BlockContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var links = this.props.links;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_7__BlockContent_css___default.a.listContentWrapper, __WEBPACK_IMPORTED_MODULE_7__BlockContent_css___default.a.whiteBlockContent, 'column') },
        links && links.map(function (link) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_7__BlockContent_css___default.a.listContentItemWrapper },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { key: link.id, className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_7__BlockContent_css___default.a.listContentItemContent) },
              link.icon === 'Slack' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_src_components_Icons_SlackLogo__["a" /* default */], { className: __WEBPACK_IMPORTED_MODULE_7__BlockContent_css___default.a.listContentItemLogo, width: '29', height: '29' }),
              link.icon === 'Facebook' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_src_components_Icons_FacebookLogo__["a" /* default */], { className: __WEBPACK_IMPORTED_MODULE_7__BlockContent_css___default.a.listContentItemLogo, width: '29', height: '29' }),
              link.icon === 'Trello' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_src_components_Icons_TrelloLogo__["a" /* default */], { className: __WEBPACK_IMPORTED_MODULE_7__BlockContent_css___default.a.listContentItemLogo, width: '29', height: '29' }),
              link.icon === 'Twitter' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_src_components_Icons_TwitterLogo__["a" /* default */], { className: __WEBPACK_IMPORTED_MODULE_7__BlockContent_css___default.a.listContentItemLogo, width: '29', height: '29' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: link.url },
                link.title
              )
            )
          );
        })
      );
    }
  }]);

  return BlockContent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

BlockContent.propTypes = {
  links: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array
};
BlockContent.defaultProps = {
  links: []
};


/***/ }),

/***/ 316:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"whiteBlockContent":"whiteBlockContent-PEzJ0_nwMzxZKeDE7R2wv","listContentItemLogo":"listContentItemLogo-1VYC0oeATQQ8qN1_4Zb6Q","listContentWrapper":"listContentWrapper-3-9dI8pQxg8g565sCrq47x","listContentItemContent":"listContentItemContent-2XfBFhQGi6YD1Fduj0obOI","listContentItemWrapper":"listContentItemWrapper-1NmT5wj9u2OcWajoEihgFS"};

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_graphql_Auth_Query_isLoggedIn_gql__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_graphql_Auth_Query_isLoggedIn_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_src_graphql_Auth_Query_isLoggedIn_gql__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var PrivateRoute = function (_Component) {
  _inherits(PrivateRoute, _Component);

  function PrivateRoute() {
    _classCallCheck(this, PrivateRoute);

    return _possibleConstructorReturn(this, (PrivateRoute.__proto__ || Object.getPrototypeOf(PrivateRoute)).apply(this, arguments));
  }

  _createClass(PrivateRoute, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'redirectisNotAuthenticated',
    value: function redirectisNotAuthenticated(layout, props, component) {
      var data = this.props.data;

      if (data.user) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(layout, props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(component, props));
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Redirect */], { to: { pathname: '/login', state: { from: props.location } } });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          component = _props.component,
          layout = _props.layout,
          rest = _objectWithoutProperties(_props, ['component', 'layout']);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], _extends({}, rest, {
        render: function render(props) {
          return _this2.redirectisNotAuthenticated(layout, props, component);
        }
      }));
    }
  }]);

  return PrivateRoute;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

PrivateRoute.propTypes = {
  component: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  layout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};
PrivateRoute.defaultProps = {
  data: {
    user: {}
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_src_graphql_Auth_Query_isLoggedIn_gql___default.a, { options: { fetchPolicy: 'network-only' } })(PrivateRoute));

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_graphql_Auth_Query_isLoggedIn_gql__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_graphql_Auth_Query_isLoggedIn_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_src_graphql_Auth_Query_isLoggedIn_gql__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var PublicRoute = function (_Component) {
  _inherits(PublicRoute, _Component);

  function PublicRoute() {
    _classCallCheck(this, PublicRoute);

    return _possibleConstructorReturn(this, (PublicRoute.__proto__ || Object.getPrototypeOf(PublicRoute)).apply(this, arguments));
  }

  _createClass(PublicRoute, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'redirectisAuthenticated',
    value: function redirectisAuthenticated(layout, props, component) {
      var data = this.props.data;

      if (!data.user) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(layout, props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(component, props));
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Redirect */], { to: { pathname: '/', state: { from: props.location } } });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          component = _props.component,
          layout = _props.layout,
          rest = _objectWithoutProperties(_props, ['component', 'layout']);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], _extends({}, rest, { render: function render(props) {
          return _this2.redirectisAuthenticated(layout, props, component);
        } }));
    }
  }]);

  return PublicRoute;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

PublicRoute.propTypes = {
  component: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  layout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};
PublicRoute.defaultProps = {
  data: {
    user: {}
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_src_graphql_Auth_Query_isLoggedIn_gql___default.a, { options: { fetchPolicy: 'network-only' } })(PublicRoute));

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateLayout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_Header_Header__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_components_Footer_Footer__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PrivateLayout_css__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PrivateLayout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__PrivateLayout_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var PrivateLayout = function (_Component) {
  _inherits(PrivateLayout, _Component);

  function PrivateLayout() {
    _classCallCheck(this, PrivateLayout);

    return _possibleConstructorReturn(this, (PrivateLayout.__proto__ || Object.getPrototypeOf(PrivateLayout)).apply(this, arguments));
  }

  _createClass(PrivateLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'fill' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_src_components_Header_Header__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__PrivateLayout_css___default.a.wrapper, __WEBPACK_IMPORTED_MODULE_5__PrivateLayout_css___default.a.wrapperPrivate, 'container') },
          this.props.children
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_src_components_Footer_Footer__["a" /* default */], null)
      );
    }
  }]);

  return PrivateLayout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

PrivateLayout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
PrivateLayout.defaultProps = {};


/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_Icons_MangroveLogo__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_css__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Header_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'header',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'nav',
            { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.header, 'navbar') },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'navbar-brand' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
                { className: 'navbar-item', to: '/' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_src_components_Icons_MangroveLogo__["a" /* default */], null),
                'Mangrove Dashboard'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'navbar-burger burger', 'data-target': 'navMenubd-example' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null)
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { id: 'navMenubd-example', className: 'navbar-menu' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'navbar-start' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'navbar-item' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
                    { to: '/links' },
                    'Ressources'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'navbar-item' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
                    { to: '/bookclub' },
                    'Bookclub'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'navbar-end' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'navbar-item' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
                    { to: '/register' },
                    'Register'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'navbar-item' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
                    { to: '/login' },
                    'Login'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MangroveLogo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var MangroveLogo = function (_Component) {
  _inherits(MangroveLogo, _Component);

  function MangroveLogo() {
    _classCallCheck(this, MangroveLogo);

    return _possibleConstructorReturn(this, (MangroveLogo.__proto__ || Object.getPrototypeOf(MangroveLogo)).apply(this, arguments));
  }

  _createClass(MangroveLogo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          className = _props.className;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        {
          width: width || '53',
          height: height || '22',
          className: className || '',
          viewBox: '0 0 53 22'
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          d: 'M.43.099c1.011 9.796 8.598 17.856 18.723 20.533V.1H.431zm33.119 0v20.62c10.284-2.591 18.02-10.72 19.04-20.62h-19.04zm-12.59 0v20.948c1.435.28 2.91.46 4.422.518h.068V.099h-4.49zm6.295 0v21.466h.385c1.4-.055 2.77-.213 4.105-.459V.1h-4.49z',
          fillRule: 'nonzero',
          fill: '#FFF'
        })
      );
    }
  }]);

  return MangroveLogo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

MangroveLogo.propTypes = {
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
MangroveLogo.defaultProps = {
  width: '53',
  height: '22',
  className: ''
};


/***/ }),

/***/ 339:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"header-2zG4F7jLvGK6KP6LE87cJC"};

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);



// import css from './Footer.css'

var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'footer',
    { className: 'footer' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'container credits-footer is-centered' },
      'Made with',
      ' ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { role: 'img', 'aria-label': 'wine' },
        '\uD83C\uDF77'
      ),
      ' ',
      'in Paris - \xA9 ',
      __WEBPACK_IMPORTED_MODULE_1_moment___default()().format('YYYY')
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"fill":"fill-3pStqcZNEWxV4no3aWSUDK"};

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyLayout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var EmptyLayout = function (_Component) {
  _inherits(EmptyLayout, _Component);

  function EmptyLayout() {
    _classCallCheck(this, EmptyLayout);

    return _possibleConstructorReturn(this, (EmptyLayout.__proto__ || Object.getPrototypeOf(EmptyLayout)).apply(this, arguments));
  }

  _createClass(EmptyLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return EmptyLayout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

EmptyLayout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
EmptyLayout.defaultProps = {};


/***/ }),

/***/ 344:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createClient */
/* unused harmony export getNetworkInterface */
/* harmony export (immutable) */ __webpack_exports__["a"] = browserClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_apollo__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_kit_config__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_kit_lib_env__ = __webpack_require__(346);
// ----------------------
// IMPORTS

/* NPM */

// Apollo client library


/* ReactQL */

// Configuration


// Get environment, to figure out where we're running the GraphQL server


// ----------------------

// Helper function to create a new Apollo client, by merging in
// passed options alongside any set by `config.setApolloOptions` and defaults
function createClient() {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return new __WEBPACK_IMPORTED_MODULE_0_react_apollo__["ApolloClient"](Object.assign({
    reduxRootSelector: function reduxRootSelector(state) {
      return state.apollo;
    }
  }, __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].apolloClientOptions, opt));
}

// Wrap `createNetworkInterface` to attach middleware
function getNetworkInterface(uri) {
  var networkInterface = Object(__WEBPACK_IMPORTED_MODULE_0_react_apollo__["createNetworkInterface"])({
    uri: uri,
    opts: __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].apolloNetworkOptions
  });

  // Attach middleware
  networkInterface.use(__WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].apolloMiddleware.map(function (f) {
    return { applyMiddleware: f };
  }));
  networkInterface.useAfter(__WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].apolloAfterware.map(function (f) {
    return { applyAfterware: f };
  }));

  return networkInterface;
}

// Creates a new browser client
function browserClient() {
  // If we have an internal GraphQL server, we need to append it with a
  // call to `getServerURL()` to add the correct host (in dev + production)
  var uri = __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].graphQLServer ? '' + Object(__WEBPACK_IMPORTED_MODULE_2_kit_lib_env__["a" /* getServerURL */])() + __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].graphQLEndpoint : __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].graphQLEndpoint;

  return createClient({
    networkInterface: getNetworkInterface(uri)
  });
}

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getServerURL;
/* eslint-disable import/prefer-default-export */

// Environment-aware functions

// Get the protocol://host:port of where the current server would bind
function getServerURL() {
  var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "localhost";
  var port = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "8081";
  var allowSSL = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  // Check for SSL
  if (allowSSL && null) {
    var _stub = 'https://' + (host || "localhost");

    // If we're on port 443, that's 'regular' SSL so no need to specify port
    if (null === '443') return _stub;
    return _stub + ':' + null;
  }

  // Plain HTTP
  var stub = 'http://' + (host || "localhost");

  // If we're on port 80, that's 'regular' HTTP so no need to specify port
  if (port === '80') return stub;
  return stub + ':' + port;
}

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createNewStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_seamless_immutable__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_seamless_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_seamless_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_kit_config__ = __webpack_require__(56);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable no-underscore-dangle */

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


// ----------------------

// Detect if we're both in the browser, AND we have dehydrated state
var hasState = !!(!false && window.__STATE__);

// Helper function that 'unwinds' the `config.reducers` Map, and provides
// the `reducer` function or `initialState` (wrapped in `seamless-immutable`)
// depending on what we asked for
function unwind() {
  var reducer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  // Unwind `config.reducers`.  If we're looking for the `reducer`, we'll
  // wrap this in a `defaultReducer` function that properly handles the Redux
  // 'undefined' sentinel value, or calls 'real' reducer if it's not undefined.
  //
  // If we're not looking for reducers, it'll pull out the `initialState`
  // variable instead, which we'll further process below
  var r = Object.assign.apply(Object, [{}].concat(_toConsumableArray([].concat([].concat(_toConsumableArray(__WEBPACK_IMPORTED_MODULE_3_kit_config__["a" /* default */].reducers)).map(function (arr) {
    return _defineProperty({}, arr[0], reducer ? function defaultReducer(state, action) {
      // If `state` === undefined, this is Redux sending a sentinel value
      // to check our set-up.  So we'll send back a plain object to prove
      // that we're properly handling our reducer
      if (typeof state === 'undefined') return {};

      // Otherwise, call our real reducer with the {state, action}
      return arr[1].reducer(state, action);
    } : arr[1].initialState);
  })))));

  // If this is a reducer, return at this point
  if (reducer) return r;

  // If not, we're looking for the state -- so let's map it and wrap the
  // object in `seamless-immutable`, to avoid side-effects with Redux
  return Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.keys(r).map(function (key) {
    return _defineProperty({}, key, __WEBPACK_IMPORTED_MODULE_2_seamless_immutable___default()(hasState && window.__STATE__[key] || r[key]));
  }))));
}

function createNewStore(apolloClient) {
  var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(
  // By default, we'll use just the apollo reducer.  We can easily add our
  // own here, for global store management outside of Apollo
  Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(_extends({
    apollo: apolloClient.reducer()
  }, unwind())),
  // Initial server state, provided by the server.
  _extends({
    apollo: hasState && window.__STATE__.apollo || {}
  }, unwind(false)), Object(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(apolloClient.middleware(), __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a),
  // Enable Redux Devtools on the browser, for easy state debugging
  // eslint-disable-next-line no-underscore-dangle
  !false && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
    return f;
  }));

  return store;
}

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_konami__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_konami___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_konami__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_components_Block_Block__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_graphql_Link_Query_getAllLinks_gql__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_graphql_Link_Query_getAllLinks_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_src_graphql_Link_Query_getAllLinks_gql__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var RessourcesListContainer = function (_Component) {
  _inherits(RessourcesListContainer, _Component);

  function RessourcesListContainer(props) {
    _classCallCheck(this, RessourcesListContainer);

    var _this = _possibleConstructorReturn(this, (RessourcesListContainer.__proto__ || Object.getPrototypeOf(RessourcesListContainer)).call(this, props));

    _this.state = {
      rickroll: false
    };

    _this.handleEasterEgg = _this.handleEasterEgg.bind(_this);
    return _this;
  }

  _createClass(RessourcesListContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'handleEasterEgg',
    value: function handleEasterEgg() {
      this.setState({ rickroll: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var rickroll = this.state.rickroll;
      var _props$data = this.props.data,
          allLinks = _props$data.allLinks,
          loading = _props$data.loading;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_konami___default.a, { easterEgg: this.handleEasterEgg }),
        rickroll && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'whiteContainer' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { role: 'img', 'aria-label': 'fire' },
            '\uD83D\uDD25'
          ),
          'Konami code !!'
        ),
        !loading && allLinks && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'column' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_src_components_Block_Block__["a" /* default */], { links: allLinks })
          )
        )
      );
    }
  }]);

  return RessourcesListContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

RessourcesListContainer.propTypes = {
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
RessourcesListContainer.defaultProps = {
  data: {}
};


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_5_src_graphql_Link_Query_getAllLinks_gql___default.a)(RessourcesListContainer));

/***/ }),

/***/ 351:
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"allLinks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"Misc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"createdAt_ASC"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"description"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"url"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"icon"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"title"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":125}};
    doc.loc.source = {"body":"query {\n  allLinks(filter: { type: Misc }, orderBy: createdAt_ASC) {\n    id\n    description\n    url\n    icon\n    title\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterLogo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TwitterLogo = function (_Component) {
  _inherits(TwitterLogo, _Component);

  function TwitterLogo() {
    _classCallCheck(this, TwitterLogo);

    return _possibleConstructorReturn(this, (TwitterLogo.__proto__ || Object.getPrototypeOf(TwitterLogo)).apply(this, arguments));
  }

  _createClass(TwitterLogo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          className = _props.className;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        {
          width: width || '300.00006',
          height: height || '244.18703',
          className: className || '',
          viewBox: '0 0 300.00006 244.18703'
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          d: 'M94.719 243.187c112.46 0 173.956-93.168 173.956-173.956 0-2.647-.054-5.28-.173-7.903A124.323 124.323 0 0 0 299 29.668c-10.955 4.87-22.744 8.147-35.11 9.625 12.623-7.569 22.314-19.543 26.885-33.817a122.61 122.61 0 0 1-38.824 14.84C240.794 8.433 224.911 1 207.322 1c-33.763 0-61.144 27.38-61.144 61.132 0 4.798.537 9.465 1.586 13.94C96.948 73.517 51.89 49.188 21.738 12.194a60.978 60.978 0 0 0-8.278 30.73c0 21.212 10.793 39.938 27.207 50.893a60.69 60.69 0 0 1-27.69-7.647c-.01.257-.01.507-.01.781 0 29.61 21.076 54.332 49.052 59.934a61.22 61.22 0 0 1-16.122 2.152c-3.934 0-7.766-.387-11.49-1.103C42.19 172.227 64.76 189.904 91.52 190.4c-20.925 16.402-47.287 26.17-75.937 26.17-4.929 0-9.798-.28-14.584-.846 27.059 17.344 59.19 27.464 93.722 27.464',
          fill: '#1da1f2'
        })
      );
    }
  }]);

  return TwitterLogo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

TwitterLogo.propTypes = {
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
TwitterLogo.defaultProps = {
  width: '300.00006',
  height: '244.18703',
  className: ''
};


/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookLogo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var FacebookLogo = function (_Component) {
  _inherits(FacebookLogo, _Component);

  function FacebookLogo() {
    _classCallCheck(this, FacebookLogo);

    return _possibleConstructorReturn(this, (FacebookLogo.__proto__ || Object.getPrototypeOf(FacebookLogo)).apply(this, arguments));
  }

  _createClass(FacebookLogo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          className = _props.className;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        {
          width: width || '266.893',
          height: height || '266.895',
          className: className || '',
          viewBox: '0 0 266.893 266.895'
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          fill: '#3C5A99',
          d: 'M248.082 262.307c7.854 0 14.223-6.369 14.223-14.225V18.812c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857 0-14.224 6.367-14.224 14.224v229.27c0 7.855 6.366 14.225 14.224 14.225h229.27z'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          fill: '#FFF',
          d: 'M182.409 262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261 3.127-18.935 19.275-18.935l20.596-.009V45.045c-3.562-.474-15.788-1.533-30.012-1.533-29.695 0-50.025 18.126-50.025 51.413v28.684h-33.585v38.895h33.585v99.803h40.166z'
        })
      );
    }
  }]);

  return FacebookLogo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

FacebookLogo.propTypes = {
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
FacebookLogo.defaultProps = {
  width: '266.893',
  height: '266.895',
  className: ''
};


/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlackLogo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var SlackLogo = function (_Component) {
  _inherits(SlackLogo, _Component);

  function SlackLogo() {
    _classCallCheck(this, SlackLogo);

    return _possibleConstructorReturn(this, (SlackLogo.__proto__ || Object.getPrototypeOf(SlackLogo)).apply(this, arguments));
  }

  _createClass(SlackLogo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          className = _props.className;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        {
          width: width || '256',
          height: height || '256',
          className: className || '',
          viewBox: '0 0 256 256'
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          d: 'M165.964 15.838c-3.89-11.975-16.752-18.528-28.725-14.636-11.975 3.89-18.528 16.752-14.636 28.725l58.947 181.365c4.048 11.187 16.132 17.473 27.732 14.135 12.1-3.483 19.475-16.334 15.614-28.217L165.964 15.838',
          fill: '#DFA22F'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          d: 'M74.626 45.516C70.734 33.542 57.873 26.989 45.9 30.879 33.924 34.77 27.37 47.631 31.263 59.606l58.948 181.366c4.047 11.186 16.132 17.473 27.732 14.132 12.099-3.481 19.474-16.332 15.613-28.217L74.626 45.516',
          fill: '#3CB187'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          d: 'M240.162 166.045c11.975-3.89 18.526-16.75 14.636-28.726-3.89-11.973-16.752-18.527-28.725-14.636L44.708 181.632c-11.187 4.046-17.473 16.13-14.135 27.73 3.483 12.099 16.334 19.475 28.217 15.614l181.372-58.93',
          fill: '#CE1E5B'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          d: 'M82.508 217.27l43.347-14.084-14.086-43.352-43.35 14.09 14.089 43.347',
          fill: '#392538'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          d: 'M173.847 187.591c16.388-5.323 31.62-10.273 43.348-14.084l-14.088-43.36-43.35 14.09 14.09 43.354',
          fill: '#BB242A'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          d: 'M210.484 74.706c11.974-3.89 18.527-16.751 14.637-28.727-3.89-11.973-16.752-18.526-28.727-14.636L15.028 90.293C3.842 94.337-2.445 106.422.896 118.022c3.481 12.098 16.332 19.474 28.217 15.613l181.371-58.93',
          fill: '#72C5CD'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          d: 'M52.822 125.933c11.805-3.836 27.025-8.782 43.354-14.086-5.323-16.39-10.273-31.622-14.084-43.352l-43.36 14.092 14.09 43.346',
          fill: '#248C73'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          d: 'M144.16 96.256l43.356-14.088a546179.21 546179.21 0 0 0-14.089-43.36L130.07 52.9l14.09 43.356',
          fill: '#62803A'
        })
      );
    }
  }]);

  return SlackLogo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

SlackLogo.propTypes = {
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
SlackLogo.defaultProps = {
  width: '53',
  height: '22',
  className: ''
};


/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrelloLogo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TrelloLogo = function (_Component) {
  _inherits(TrelloLogo, _Component);

  function TrelloLogo() {
    _classCallCheck(this, TrelloLogo);

    return _possibleConstructorReturn(this, (TrelloLogo.__proto__ || Object.getPrototypeOf(TrelloLogo)).apply(this, arguments));
  }

  _createClass(TrelloLogo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          className = _props.className;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        {
          width: width || '200',
          height: height || '200',
          className: className || '',
          viewBox: '0 0 200 200'
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'g',
          { fill: 'none', fillRule: 'evenodd' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', { fill: '#0079BF', width: '200', height: '200', rx: '25' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', { fill: '#FFF', x: '113', y: '26', width: '61', height: '87.5', rx: '12' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', { fill: '#FFF', x: '26', y: '26', width: '61', height: '137.5', rx: '12' })
        )
      );
    }
  }]);

  return TrelloLogo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

TrelloLogo.propTypes = {
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
TrelloLogo.defaultProps = {
  width: '200',
  height: '200',
  className: ''
};


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Block; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_components_Block_BlockHeader__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_Block_BlockContent__ = __webpack_require__(315);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Block = function (_Component) {
  _inherits(Block, _Component);

  function Block() {
    _classCallCheck(this, Block);

    return _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).apply(this, arguments));
  }

  _createClass(Block, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var links = this.props.links;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_src_components_Block_BlockHeader__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_src_components_Block_BlockContent__["a" /* default */], { links: links })
      );
    }
  }]);

  return Block;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Block.propTypes = {
  links: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array
};
Block.defaultProps = {
  links: []
};


/***/ }),

/***/ 359:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"titleBlockHeader":"titleBlockHeader-1VJblAcxwx6TtAqxK3836N","whiteBlockHeader":"whiteBlockHeader-2IvujLUGEYLgn-wDFF78Z5"};

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Simple class to act as a singleton for app-wide configuration.

// We'll start with a common config that can be extended separately by the
// server/client, to provide environment-specific functionality
var Common = function () {
  function Common() {
    _classCallCheck(this, Common);

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


  _createClass(Common, [{
    key: 'addReducer',
    value: function addReducer(key, reducer) {
      var initialState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (typeof reducer !== 'function') {
        throw new Error('Can\'t add reducer for \'' + key + '\' - reducer must be a function');
      }
      this.reducers.set(key, {
        reducer: reducer,
        initialState: initialState
      });
    }

    /* GRAPHQL */

    // Enables internal GraphQL server.  Default GraphQL and GraphiQL endpoints
    // can be overridden

  }, {
    key: 'enableGraphQLServer',
    value: function enableGraphQLServer() {
      var endpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/graphql';
      var graphiQL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.graphQLServer = true;
      this.graphQLEndpoint = endpoint;
      this.graphiQL = graphiQL;
    }

    // Set an external GraphQL URI for use with Apollo

  }, {
    key: 'setGraphQLEndpoint',
    value: function setGraphQLEndpoint(uri) {
      var graphiQL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.graphQLEndpoint = uri;
      this.graphiQL = graphiQL;
    }

    // Register Apollo middleware function

  }, {
    key: 'addApolloMiddleware',
    value: function addApolloMiddleware(middlewareFunc) {
      this.apolloMiddleware.push(middlewareFunc);
    }

    // Register Apollo afterware function

  }, {
    key: 'addApolloAfterware',
    value: function addApolloAfterware(afterwareFunc) {
      this.apolloAfterware.push(afterwareFunc);
    }

    // Apollo Client options.  These will be merged in with the `createClient`
    // default options defined in `kit/lib/apollo.js`

  }, {
    key: 'setApolloClientOptions',
    value: function setApolloClientOptions() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.apolloClientOptions = opt;
    }

    // Apollo Network options.  These will be merged in with the `createNetworkInterface`
    // default options defined in `kit/lib/apollo.js`

  }, {
    key: 'setApolloNetworkOptions',
    value: function setApolloNetworkOptions() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.apolloNetworkOptions = opt;
    }
  }]);

  return Common;
}();

// Placeholder for the class we'll attach


var Config = void 0;

// Server Config extensions.  This is wrapped in a `SERVER` block to avoid
// adding unnecessary functionality to the client bundle.  Every byte counts!
if (false) {
  Config = function (_Common) {
    _inherits(ServerConfig, _Common);

    function ServerConfig() {
      _classCallCheck(this, ServerConfig);

      // Create a set for routes -- to retrieve based on insertion order
      var _this = _possibleConstructorReturn(this, (ServerConfig.__proto__ || Object.getPrototypeOf(ServerConfig)).call(this));

      _this.routes = new Set();

      // Koa application function. But default, this is null
      _this.koaAppFunc = null;

      // Flag for setting whether plain HTTP should be disabled
      _this.enableHTTP = true;

      // Force SSL. Rewrites all non-SSL queries to SSL.  False, by default.
      _this.enableForceSSL = false;

      // Options for enabling SSL. By default, this is null. If SSL is enabled
      // in userland, this would instead hold an object of options
      _this.sslOptions = null;

      // Custom middleware -- again, based on insertion order
      _this.middleware = new Set();

      // GraphQL schema (if we're using an internal server)
      _this.graphQLSchema = null;

      // Attach a GraphiQL IDE endpoint to our server?  By default - no.  If
      // this === true, this will default to `/graphql`.  If it's a string, it'll
      // default to the string value
      _this.graphiQL = false;

      // Enable body parsing by default.  Leave `koa-bodyparser` opts as default
      _this.enableBodyParser = true;
      _this.bodyParserOptions = {};

      // CORS options for `koa-cors`
      _this.corsOptions = {};
      return _this;
    }

    /* WEB SERVER / SSR */

    // Get access to Koa's `app` instance, for adding custom instantiation
    // or doing something that's not covered by other functions


    _createClass(ServerConfig, [{
      key: 'getKoaApp',
      value: function getKoaApp(func) {
        this.koaAppFunc = func;
      }

      // Enable SSL. Normally, you'd use an upstream proxy like Nginx to handle
      // SSL. But if you want to run a 'bare' Koa HTTPS web server, you can pass
      // in the certificate details here and it'll respond to SSL requests

    }, {
      key: 'enableSSL',
      value: function enableSSL(opt) {
        // At a minimum, we should have `key` and `cert` -- check for those
        if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) !== 'object' || !opt.key || !opt.cert) {
          throw new Error('Cannot enable SSL. Missing `key` and/or `cert`');
        }
        this.sslOptions = opt;
      }

      // Force SSL. Rewrites all non-SSL queries to SSL. Any options here are
      // passed to `koa-sslify`, the SSL enforcement middleware

    }, {
      key: 'forceSSL',
      value: function forceSSL() {
        var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this.enableForceSSL = opt;
      }

      // Disable plain HTTP.  Note this should only be used if you've also set
      // `enableSSL()` and you don't want dual-HTTP+SSL config

    }, {
      key: 'disableHTTP',
      value: function disableHTTP() {
        this.enableHTTP = false;
      }

      // Disable the optional `koa-bodyparser`, to prevent POST data being sent to
      // each request.  By default, body parsing is enabled.

    }, {
      key: 'disableBodyParser',
      value: function disableBodyParser() {
        this.enableBodyParser = false;
      }
    }, {
      key: 'setBodyParserOptions',
      value: function setBodyParserOptions() {
        var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this.bodyParserOptions = opt;
      }

      // 404 handler for the server.  By default, `kit/entry/server.js` will
      // simply return a 404 status code without modifying the HTML render.  By
      // setting a handler here, this will be returned instead

    }, {
      key: 'set404Handler',
      value: function set404Handler(func) {
        if (typeof func !== 'function') {
          throw new Error('404 handler must be a function');
        }
        this.handler404 = func;
      }

      // Error handler.  If this isn't defined, the server will simply return a
      // 'There was an error. Please try again later.' message, and log the output
      // to the console.  Override that behaviour by passing a (e, ctx, next) -> {} func

    }, {
      key: 'setErrorHandler',
      value: function setErrorHandler(func) {
        if (typeof func !== 'function') {
          throw new Error('Error handler must be a function');
        }
        this.errorHandler = func;
      }

      // Add custom middleware.  This should be an async func, for use with Koa

    }, {
      key: 'addMiddleware',
      value: function addMiddleware(middlewareFunc) {
        this.middleware.add(middlewareFunc);
      }

      // Adds a custom server route to attach to our Koa router

    }, {
      key: 'addRoute',
      value: function addRoute(method, route) {
        for (var _len = arguments.length, handlers = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          handlers[_key - 2] = arguments[_key];
        }

        this.routes.add({
          method: method,
          route: route,
          handlers: handlers
        });
      }

      // Adds custom GET route

    }, {
      key: 'addGetRoute',
      value: function addGetRoute(route) {
        for (var _len2 = arguments.length, handlers = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          handlers[_key2 - 1] = arguments[_key2];
        }

        this.addRoute.apply(this, ['get', route].concat(handlers));
      }

      // Adds custom POST route

    }, {
      key: 'addPostRoute',
      value: function addPostRoute(route) {
        for (var _len3 = arguments.length, handlers = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          handlers[_key3 - 1] = arguments[_key3];
        }

        this.addRoute.apply(this, ['post', route].concat(handlers));
      }

      // Adds custom PUT route

    }, {
      key: 'addPutRoute',
      value: function addPutRoute(route) {
        for (var _len4 = arguments.length, handlers = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          handlers[_key4 - 1] = arguments[_key4];
        }

        this.addRoute.apply(this, ['put', route].concat(handlers));
      }

      // Adds custom PATCH route

    }, {
      key: 'addPatchRoute',
      value: function addPatchRoute(route) {
        for (var _len5 = arguments.length, handlers = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
          handlers[_key5 - 1] = arguments[_key5];
        }

        this.addRoute.apply(this, ['patch', route].concat(handlers));
      }

      // Adds custom DELETE route

    }, {
      key: 'addDeleteRoute',
      value: function addDeleteRoute(route) {
        for (var _len6 = arguments.length, handlers = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          handlers[_key6 - 1] = arguments[_key6];
        }

        this.addRoute.apply(this, ['delete', route].concat(handlers));
      }

      // Set the GraphQL schema. This should only be called on the server, otherwise
      // the bundle size passed by the `schema` object will be unnecessarily inflated

    }, {
      key: 'setGraphQLSchema',
      value: function setGraphQLSchema(schema) {
        this.graphQLSchema = schema;
      }

      // CORS options, for `koa-cors` instantiation

    }, {
      key: 'setCORSOptions',
      value: function setCORSOptions() {
        var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this.corsOptions = opt;
      }
    }]);

    return ServerConfig;
  }(Common);
} else {
  // For the client config, we'll extend `Common` by default -- but if we need
  // anything unique to the browser in the future, we'd add it here...
  Config = function (_Common2) {
    _inherits(ClientConfig, _Common2);

    function ClientConfig() {
      _classCallCheck(this, ClientConfig);

      return _possibleConstructorReturn(this, (ClientConfig.__proto__ || Object.getPrototypeOf(ClientConfig)).apply(this, arguments));
    }

    return ClientConfig;
  }(Common);
}

// Since there's only one `Config` instance globally, we'll create the new
// instance here and export it.  This will then provide any subsequent imports
// with the same object, so we can add settings to a common config
/* harmony default export */ __webpack_exports__["a"] = (new Config());

/***/ }),

/***/ 90:
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

/***/ })

},[211]);
//# sourceMappingURL=browser.js.map