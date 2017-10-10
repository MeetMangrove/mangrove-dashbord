webpackJsonp([0],{

/***/ 139:
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

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(292);


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_app__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_kit_lib_apollo__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_kit_lib_redux__ = __webpack_require__(484);
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

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_routes_App__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_kit_config__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_utils_LocalStorageManager__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_global_css__ = __webpack_require__(481);
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

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layout__ = __webpack_require__(390);


// import './main.css'



var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Layout__["a" /* default */], null);
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom_Switch__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom_Switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom_Switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_containers_Login_Login__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_containers_Logout_Logout__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_containers_Register_Register__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_containers_Home_Home__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_containers_Error_NotFound__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_containers_Ressource_RessourceList__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_containers_Ressource_RessourceEdit__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_src_containers_Bookclub_Search__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_src_utils_PrivateRoute__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_src_utils_PublicRoute__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_src_components_Layout_PrivateLayout__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_src_components_Layout_EmptyLayout__ = __webpack_require__(480);



// Routes













// Layout





var Layout = function Layout() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router_dom_Switch___default.a,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_src_utils_PublicRoute__["a" /* default */], { layout: __WEBPACK_IMPORTED_MODULE_12_src_components_Layout_PrivateLayout__["a" /* default */], path: '/register', component: __WEBPACK_IMPORTED_MODULE_4_src_containers_Register_Register__["a" /* default */], exact: true }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_src_utils_PublicRoute__["a" /* default */], { layout: __WEBPACK_IMPORTED_MODULE_12_src_components_Layout_PrivateLayout__["a" /* default */], path: '/login', component: __WEBPACK_IMPORTED_MODULE_2_src_containers_Login_Login__["a" /* default */], exact: true }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_src_utils_PublicRoute__["a" /* default */], { layout: __WEBPACK_IMPORTED_MODULE_13_src_components_Layout_EmptyLayout__["a" /* default */], path: '/logout', component: __WEBPACK_IMPORTED_MODULE_3_src_containers_Logout_Logout__["a" /* default */], exact: true }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_src_utils_PrivateRoute__["a" /* default */], { layout: __WEBPACK_IMPORTED_MODULE_12_src_components_Layout_PrivateLayout__["a" /* default */], path: '/', component: __WEBPACK_IMPORTED_MODULE_5_src_containers_Home_Home__["a" /* default */], exact: true }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_src_utils_PrivateRoute__["a" /* default */], { layout: __WEBPACK_IMPORTED_MODULE_12_src_components_Layout_PrivateLayout__["a" /* default */], path: '/link', component: __WEBPACK_IMPORTED_MODULE_7_src_containers_Ressource_RessourceList__["a" /* default */], exact: true }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_src_utils_PrivateRoute__["a" /* default */], { layout: __WEBPACK_IMPORTED_MODULE_12_src_components_Layout_PrivateLayout__["a" /* default */], path: '/link/edit', component: __WEBPACK_IMPORTED_MODULE_8_src_containers_Ressource_RessourceEdit__["a" /* default */], exact: true }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_src_utils_PrivateRoute__["a" /* default */], { layout: __WEBPACK_IMPORTED_MODULE_12_src_components_Layout_PrivateLayout__["a" /* default */], path: '/link/edit/:id', component: __WEBPACK_IMPORTED_MODULE_8_src_containers_Ressource_RessourceEdit__["a" /* default */], exact: true }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_src_utils_PrivateRoute__["a" /* default */], {
        layout: __WEBPACK_IMPORTED_MODULE_12_src_components_Layout_PrivateLayout__["a" /* default */],
        path: '/bookclub/search',
        component: __WEBPACK_IMPORTED_MODULE_9_src_containers_Bookclub_Search__["a" /* default */],
        exact: true
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_src_utils_PublicRoute__["a" /* default */], { layout: __WEBPACK_IMPORTED_MODULE_13_src_components_Layout_EmptyLayout__["a" /* default */], component: __WEBPACK_IMPORTED_MODULE_6_src_containers_Error_NotFound__["a" /* default */] })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_utils_LocalStorageManager__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_components_Login_Login__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_graphql_Auth_Mutation_SigninUser_gql__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_graphql_Auth_Mutation_SigninUser_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_src_graphql_Auth_Mutation_SigninUser_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_graphql_Auth_Query_isLoggedIn_gql__ = __webpack_require__(82);
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
        _this.props.history.push('/link');
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

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_css__ = __webpack_require__(396);
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
        { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('column', 'is-half', 'is-offset-one-quarter') },
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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'columns' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'column is-10 is-offset-1 ' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'control has-icons-left is-large' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                  className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('input', 'is-large', __WEBPACK_IMPORTED_MODULE_4__login_css___default.a.inputLogin),
                  name: 'email',
                  placeholder: 'email',
                  type: 'text',
                  ref: function ref(email) {
                    _this3.emailInput = email;
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'icon is-medium is-left' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-envelope' })
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'columns' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'column is-10 is-offset-1 ' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'control has-icons-left is-large' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                  className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('input', 'is-large', __WEBPACK_IMPORTED_MODULE_4__login_css___default.a.inputLogin),
                  placeholder: 'password',
                  type: 'password',
                  ref: function ref(password) {
                    _this3.passwordInput = password;
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'icon is-medium is-left' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-envelope' })
                )
              )
            )
          ),
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

/***/ 396:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"login":"login-1qRkAiIsDBs7k_EoeiTzzT","btnLogin":"btnLogin-2lr4sD0U6PBSH5itQKG-X7","bar":"bar-1juZBG43GPT_aKia-Pi3F3","loader":"loader-f2tGLoWi7tXzFVt3tQw4p","slide":"slide-2o3IIlW5dpBSbt9wfBHEAa","btnLoginWrapper":"btnLoginWrapper-32sqyiqIOawBwI2EmG_IFf","forgotPassword":"forgotPassword-3j4Laeja7jnXZ6rLUM8QNJ","titleLogin":"titleLogin-2S_HBWNsqI8apL-eztPcDW","inputLogin":"inputLogin-1U_pDKzFG1m209uIrFLTcx"};

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_utils_LocalStorageManager__ = __webpack_require__(58);
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

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_utils_LocalStorageManager__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_graphql_Auth_Mutation_CreateUser_gql__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_graphql_Auth_Mutation_CreateUser_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_src_graphql_Auth_Mutation_CreateUser_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_graphql_Auth_Mutation_SigninUser_gql__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_graphql_Auth_Mutation_SigninUser_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_src_graphql_Auth_Mutation_SigninUser_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_graphql_Auth_Query_isLoggedIn_gql__ = __webpack_require__(82);
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
          _this.props.history.push('/link');
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

/***/ 399:
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

/***/ 400:
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

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_components_Icons_Rick__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__NotFound_css__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__NotFound_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var NotFound = function (_Component) {
  _inherits(NotFound, _Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      var location = this.props.location;

      console.log(location.pathname);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_helmet___default.a, { title: 'Page not Found' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'bd-example' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            { className: 'hero is-medium is-warning is-bold' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'hero-body' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'container' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'columns' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'column' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      { className: 'title' },
                      location.path,
                      ' Not Found'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      { className: 'subtitle' },
                      '\uD83D\uDE45\u200D\uD83D\uDE45\uD83D\uDE45\uD83D\uDE45'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'column' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_src_components_Icons_Rick__["a" /* default */], null)
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return NotFound;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

NotFound.propTypes = {
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
NotFound.defaultProps = {
  location: {}
};


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["e" /* withRouter */])(NotFound));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rick; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Rick_css__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Rick_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Rick_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Rick = function (_Component) {
  _inherits(Rick, _Component);

  function Rick() {
    _classCallCheck(this, Rick);

    return _possibleConstructorReturn(this, (Rick.__proto__ || Object.getPrototypeOf(Rick)).apply(this, arguments));
  }

  _createClass(Rick, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          className = _props.className;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        _defineProperty({
          width: width || '278',
          height: height || '412',
          className: className || '',
          viewBox: '0 0 278 412'
        }, 'className', __WEBPACK_IMPORTED_MODULE_3__Rick_css___default.a.rick),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'g',
          { fill: '#A7D5E9', id: __WEBPACK_IMPORTED_MODULE_3__Rick_css___default.a.HAIR },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
            id: __WEBPACK_IMPORTED_MODULE_3__Rick_css___default.a.hair_y,
            d: 'M129.966 112.273l-42.593-10.497-8.697-46.657L75.77 2.28l40.124 34.495L147.592 72.1M119.8 179.04l-32.79 17.826-42.66-18.843L0 152.916l50.773-4.365 46.634.63'
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
            id: __WEBPACK_IMPORTED_MODULE_3__Rick_css___default.a.hair_y,
            d: 'M131.765 183.62l-15.433 35.643-42.016.727-46.558-5.238 34.25-21.98 37.28-30.454'
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
            id: __WEBPACK_IMPORTED_MODULE_3__Rick_css___default.a.hair_z,
            d: 'M137.984 185.114l.527 36.46-35.68 16.815-41.87 13.46 19.29-39.53 21.73-32.93m54.04-64.84L134.73 76.2 163 38.076 199.728 0l-2.29 100.14'
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
            id: __WEBPACK_IMPORTED_MODULE_3__Rick_css___default.a.hair_y,
            d: 'M189.636 126.98l3.088-40.14 39.58-10.61 45.815-5.564-50.82 70.516m-125.77.65l-5.57-41.72-43.59-13.164-50.09-8.286 59.1 75.79'
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ellipse', { cx: '141.909', cy: '164.279', rx: '75.171', ry: '97' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
            id: __WEBPACK_IMPORTED_MODULE_3__Rick_css___default.a.hair_y,
            d: 'M148.856 170.087l34.746 26.78 41.915-22.263 43.14-30.64-51.98-9.898-47.38-2.79'
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
            id: __WEBPACK_IMPORTED_MODULE_3__Rick_css___default.a.hair_y,
            d: 'M145.677 173.994l15.747 36.366 42.87.743 47.502-5.345-34.945-22.425-38.03-31.073'
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
            id: __WEBPACK_IMPORTED_MODULE_3__Rick_css___default.a.hair_x,
            d: 'M146.91 168.13l-.536 37.06 36.274 17.093 42.564 13.683-19.61-40.18-22.088-33.468'
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          fill: '#DBD0C8',
          d: 'M165.68 281.61c0 14.348-8.957 21.037-20.003 21.037s-20-6.69-20-21.037 8.954-20.33 20-20.33 20.002 5.983 20.002 20.33z'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          fill: '#FFF',
          stroke: '#6D6E71',
          d: 'M42.49 411.9s18.18-73.992 33.28-93.253c10.966-13.99 50.666-36.356 50.666-36.356s13.955 4.98 18.82 4.95c4.78-.02 19.442-5.06 19.442-5.06s37.27 17.5 47.376 32.7c12.617 18.97 29.952 96.63 29.952 96.63l-199.536.4z'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          fill: '#DBFEFE',
          stroke: '#6D6E71',
          d: 'M177.348 411.763l-63.984.23 13.074-129.7s13.948 2.472 18.812 2.45c4.78-.02 19.45-2.57 19.45-2.57l12.648 129.59z'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { fill: '#FFF', d: 'M125.786 284.335L76.32 376.62l30.96 35.312 12.91-.122.162-.83' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          fill: 'none',
          stroke: '#6D6E71',
          d: 'M125.786 284.335L76.32 376.62l30.96 35.312 12.91-.122.162-.83z'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { fill: '#FFF', d: 'M165.703 284.335l48.464 92.178-30.958 35.273-12.92-.14-.16-.826' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          fill: 'none',
          stroke: '#6D6E71',
          d: 'M165.703 284.335l48.464 92.178-30.958 35.273-12.92-.14-.16-.826zm-83.547 101.21l-6.34 24.37m128.42-22.085l6.44 24.45'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ellipse', { cx: '75.77', cy: '206.586', fill: '#D4CABF', rx: '12.5', ry: '15.432' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ellipse', { cx: '207.761', cy: '199.646', fill: '#D4CABF', rx: '12.5', ry: '15.432' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          fill: '#DBD0C8',
          d: 'M205.73 173.435c0 69.013-28.2 101.188-62.984 101.188-34.785 0-62.983-32.175-62.983-101.188s28.2-97.792 62.983-97.792c34.785 0 62.983 28.78 62.983 97.792z'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('circle', { cx: '111.681', cy: '152.26', r: '26.96', fill: '#FFF' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('circle', { cx: '172.637', cy: '152.806', r: '26.96', fill: '#FFF' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('circle', { cx: '172.637', cy: '163.428', r: '3.518' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('circle', { cx: '111.681', cy: '162.319', r: '3.518' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('circle', { cx: '111.681', cy: '163.428', r: '3.518' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          fill: '#D4CABF',
          d: 'M138.642 152.26c0 14.89-53.92 14.89-53.92 0s12.07-26.96 26.96-26.96 26.96 12.07 26.96 26.96zm60.955-.546c0 14.89-53.92 14.89-53.92 0s12.07-26.96 26.96-26.96 26.96 12.07 26.96 26.96z'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          fill: '#A7D5E9',
          id: __WEBPACK_IMPORTED_MODULE_3__Rick_css___default.a.eyebrow,
          d: 'M189.81 115.056a3.5 3.5 0 0 1-3.5 3.5l-81.27 3.003c-1.932 0-3.5-1.57-3.5-3.5 0-1.94 1.568-3.5 3.5-3.5l81.27-3.01c1.934 0 3.5 4.57 3.5 6.5v-3.01z'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          fill: '#e5ffd4',
          id: __WEBPACK_IMPORTED_MODULE_3__Rick_css___default.a.drool,
          d: 'M139.757 227.495c10.5 6 8 17.717 18 23.717.5-3.5-.5-8.5.5-12s4.5-6 5-10.5c-6.5-3-14.5-.498-21.5-1.498'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          fill: '#231F20',
          d: 'M121.41 104.77c13.445 1.28 28.06 2.906 41.165-1.277.765-.244.438-1.45-.332-1.205-12.978 4.142-27.51 2.502-40.834 1.232-.81-.077-.8 1.174 0 1.25zm10.314-5.32c7.48.975 14.65-.44 22.05-1.34.79-.097.8-1.348 0-1.25-7.398.898-14.58 2.313-22.05 1.34-.798-.104-.787 1.147 0 1.25zm-32.468 88.796c9.563 3.323 20.47 5.553 29.148-1.063.632-.482.01-1.568-.63-1.08-8.435 6.43-18.926 4.156-28.186.938-.763-.26-1.088.95-.332 1.21zm60.334-1.666c2.85.607 5.224 2.34 8.043 3.065 2.42.623 5.143.665 7.62.79 5.89.298 11.06-3.293 15.818-6.252.69-.424.06-1.506-.63-1.08-4.78 2.978-9.35 5.954-15.18 6.082-3.19.07-6.94-.36-9.85-1.605-1.93-.825-3.39-1.76-5.47-2.206-.784-.168-1.12 1.037-.33 1.205zm-26.69-7.914c0 5.56.245 11.116.952 16.633.595 4.64 1.373 11.41 5.578 14.35 4.398 3.07 8.467-3.45 9.62-6.71 2.79-7.91 1.81-17.06 1.768-25.28-.004-.81-1.254-.81-1.25 0 .032 6.16.26 12.29-.392 18.44-.406 3.83-1.24 8.11-3.84 11.1-2.205 2.53-5.21 2.16-6.978-.45-2.97-4.39-3.306-11.01-3.75-16.08-.35-4-.456-8.01-.457-12.02 0-.81-1.25-.81-1.25 0zm-28.643 51.42c12.44-.092 24.793-1.736 37.226-2.004 12.624-.27 25.157 1.896 37.774 2.004.807.007.806-1.243 0-1.25-11.976-.103-23.852-1.916-35.828-2.02-13.09-.11-26.09 1.922-39.18 2.02-.81.006-.81 1.256 0 1.25zm78.405-4.836c1.955.87 4.606 2.086 5.27 4.324.73 2.455-3.574 3.622-5.12 4.034-.778.207-.447 1.413.332 1.205 2.437-.648 5.953-1.815 6.09-4.836.133-2.918-3.795-4.853-5.94-5.807-.73-.323-1.367.754-.632 1.08zm-80.43-1.078c-2.42 1.077-5.725 2.794-5.94 5.806-.21 2.958 3.947 4.265 6.09 4.836.78.208 1.11-.998.333-1.205-1.766-.48-5.592-1.5-5.12-4.04.406-2.2 3.493-3.54 5.27-4.33.734-.33.097-1.41-.632-1.08z'
        })
      );
    }
  }]);

  return Rick;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Rick.propTypes = {
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
Rick.defaultProps = {
  width: '278',
  height: '412',
  className: ''
};


/***/ }),

/***/ 414:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rick":"rick-3eCHsUNgirJ-Rg2nifo7EA","drool":"drool-3TQ-P8vvk4W-pcZ3As6lW1","drool-animation":"drool-animation-3aDWB_sCnTXxOD-w0Rl9dO","eyebrow":"eyebrow-3IMQGCpiIsj8HO40hzVRB8","hair_1":"hair_1-2lB5RqhsX0r-k85EynGuSj","twitch":"twitch-IBGtYyPM4pXvTK4jcia7l","hair_x":"hair_x-UO4FQzoZNrIH4ZugFcL0u","hair-animation":"hair-animation-1GhLfr93Z0A8XDPCEEbyvj","hair_y":"hair_y-1ylK7wPU_OV1SVqaIx7RWN","light_twitch":"light_twitch-1TVncFPxKPgeoQEXFI3bun","HAIR":"HAIR-2qj3OvuzL6h51e1zcftzNw"};

/***/ }),

/***/ 415:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_konami__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_konami___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_konami__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_components_Block_Block__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_graphql_Link_Query_getAllLinks_gql__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_graphql_Link_Query_getAllLinks_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_src_graphql_Link_Query_getAllLinks_gql__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var RessourceListContainer = function (_Component) {
  _inherits(RessourceListContainer, _Component);

  function RessourceListContainer(props) {
    _classCallCheck(this, RessourceListContainer);

    var _this = _possibleConstructorReturn(this, (RessourceListContainer.__proto__ || Object.getPrototypeOf(RessourceListContainer)).call(this, props));

    _this.state = {
      rickroll: false
    };

    _this.handleEasterEgg = _this.handleEasterEgg.bind(_this);
    return _this;
  }

  _createClass(RessourceListContainer, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (this.props.location.search === '?refresh') {
        console.log('h');
        this.props.linkMisc.refetch();
        this.props.linkSocial.refetch();
        this.props.linkRetreat.refetch();
      }
    }
  }, {
    key: 'handleEasterEgg',
    value: function handleEasterEgg() {
      this.setState({ rickroll: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var rickroll = this.state.rickroll;
      var _props = this.props,
          linkMisc = _props.linkMisc,
          linkSocial = _props.linkSocial,
          linkRetreat = _props.linkRetreat;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_konami___default.a, { easterEgg: this.handleEasterEgg }),
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'tile is-ancestor' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'tile is-parent' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'article',
              { className: 'tile is-child' },
              !linkMisc.loading && linkMisc.allLinks.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'columns' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'column' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_src_components_Block_Block__["a" /* default */], { links: linkMisc.allLinks, titleBlock: 'Misc:' })
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'tile is-parent' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'article',
              { className: 'tile is-child' },
              !linkRetreat.loading && linkRetreat.allLinks.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'columns' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'column' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_src_components_Block_Block__["a" /* default */], { links: linkRetreat.allLinks, titleBlock: 'Retreat' })
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'tile is-parent' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'article',
              { className: 'tile is-child' },
              !linkSocial.loading && linkSocial.allLinks.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'columns' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'column' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_src_components_Block_Block__["a" /* default */], { links: linkSocial.allLinks, titleBlock: 'Social' })
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          { className: 'section' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],
              { to: '/link/edit', className: 'has-text-centered has-text-grey-light' },
              'Add a link in this page?'
            )
          )
        )
      );
    }
  }]);

  return RessourceListContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

RessourceListContainer.propTypes = {
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  linkMisc: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  linkRetreat: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  linkSocial: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
RessourceListContainer.defaultProps = {
  data: {},
  location: {},
  linkMisc: {},
  linkSocial: {},
  linkRetreat: {}
};


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_6_src_graphql_Link_Query_getAllLinks_gql___default.a, { name: 'linkMisc', options: { variables: { type: 'Misc' } } })(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_6_src_graphql_Link_Query_getAllLinks_gql___default.a, { name: 'linkRetreat', options: { variables: { type: 'Retreat' } } })(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_6_src_graphql_Link_Query_getAllLinks_gql___default.a, { name: 'linkSocial', options: { variables: { type: 'Social' } } })(Object(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["e" /* withRouter */])(RessourceListContainer)))));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Block; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_components_Block_BlockHeader__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_Block_BlockContent__ = __webpack_require__(421);
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
      var _props = this.props,
          links = _props.links,
          titleBlock = _props.titleBlock;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_src_components_Block_BlockHeader__["a" /* default */], { titleBlock: titleBlock }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_src_components_Block_BlockContent__["a" /* default */], { links: links })
      );
    }
  }]);

  return Block;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Block.propTypes = {
  links: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
  titleBlock: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
Block.defaultProps = {
  links: [],
  titleBlock: 'Links'
};


/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BlockHeader_css__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BlockHeader_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__BlockHeader_css__);
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
    key: 'render',
    value: function render() {
      var titleBlock = this.props.titleBlock;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3__BlockHeader_css___default.a.blockHeader },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_3__BlockHeader_css___default.a.whiteBlockHeader },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__BlockHeader_css___default.a.titleBlockHeader) },
            titleBlock
          )
        )
      );
    }
  }]);

  return BlockHeader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

BlockHeader.propTypes = {
  titleBlock: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
BlockHeader.defaultProps = {
  titleBlock: 'Links'
};


/***/ }),

/***/ 420:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"titleBlockHeader":"titleBlockHeader-1VJblAcxwx6TtAqxK3836N","whiteBlockHeader":"whiteBlockHeader-2IvujLUGEYLgn-wDFF78Z5"};

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_Icons_TwitterLogo__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_components_Icons_FacebookLogo__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_components_Icons_SlackLogo__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_components_Icons_SnapchatLogo__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_components_Icons_DriveLogo__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_components_Icons_TrelloLogo__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__BlockContent_css__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__BlockContent_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__BlockContent_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// import { Link } from 'react-router-dom'











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
        { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__BlockContent_css___default.a.listContentWrapper) },
        links && links.map(function (link) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: link.id, className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__BlockContent_css___default.a.listContentItemWrapper) },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__BlockContent_css___default.a.listContentItemContent, 'content') },
              link.icon === 'Slack' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_src_components_Icons_SlackLogo__["a" /* default */], { className: __WEBPACK_IMPORTED_MODULE_9__BlockContent_css___default.a.listContentItemLogo, width: '29', height: '29' }),
              link.icon === 'Facebook' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_src_components_Icons_FacebookLogo__["a" /* default */], { className: __WEBPACK_IMPORTED_MODULE_9__BlockContent_css___default.a.listContentItemLogo, width: '29', height: '29' }),
              link.icon === 'Trello' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_src_components_Icons_TrelloLogo__["a" /* default */], { className: __WEBPACK_IMPORTED_MODULE_9__BlockContent_css___default.a.listContentItemLogo, width: '29', height: '29' }),
              link.icon === 'Twitter' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_src_components_Icons_TwitterLogo__["a" /* default */], { className: __WEBPACK_IMPORTED_MODULE_9__BlockContent_css___default.a.listContentItemLogo, width: '28', height: '23' }),
              link.icon === 'Snapchat' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_src_components_Icons_SnapchatLogo__["a" /* default */], { className: __WEBPACK_IMPORTED_MODULE_9__BlockContent_css___default.a.listContentItemLogo, width: '29', height: '29' }),
              link.icon === 'Drive' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_src_components_Icons_DriveLogo__["a" /* default */], { className: __WEBPACK_IMPORTED_MODULE_9__BlockContent_css___default.a.listContentItemLogo, width: '29', height: '29' }),
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

/***/ 422:
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
          width: width || '28',
          height: height || '23',
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
  width: '28',
  height: '23',
  className: ''
};


/***/ }),

/***/ 423:
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

/***/ 424:
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

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnapchatLogo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var SnapchatLogo = function (_Component) {
  _inherits(SnapchatLogo, _Component);

  function SnapchatLogo() {
    _classCallCheck(this, SnapchatLogo);

    return _possibleConstructorReturn(this, (SnapchatLogo.__proto__ || Object.getPrototypeOf(SnapchatLogo)).apply(this, arguments));
  }

  _createClass(SnapchatLogo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          className = _props.className;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        {
          width: width || '300',
          height: height || '300',
          className: className || '',
          viewBox: '0 0 300 300'
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          d: 'M251.517 1C277.737 1 299 22.259 299 48.487v203.03c0 26.22-21.263 47.483-47.483 47.483H48.487C22.263 299 1 277.737 1 251.517V48.487C1 22.26 22.263 1 48.487 1h203.03z',
          fill: '#fffc00'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          d: 'M151.095 252.332c-.564 0-1.114-.018-1.67-.044-.353.03-.72.044-1.088.044-12.932 0-21.232-5.866-29.261-11.543-5.542-3.916-10.774-7.614-16.936-8.64a54.6 54.6 0 0 0-8.89-.748c-5.215 0-9.323.804-12.326 1.39-1.822.358-3.396.664-4.593.664-1.25 0-2.6-.27-3.19-2.281-.512-1.744-.88-3.427-1.238-5.062-.917-4.195-1.569-6.779-3.326-7.05-20.511-3.168-26.385-7.49-27.692-10.555a3.907 3.907 0 0 1-.315-1.31 2.305 2.305 0 0 1 1.932-2.41c31.53-5.191 45.669-37.42 46.259-38.789.013-.035.03-.074.048-.109 1.932-3.912 2.308-7.308 1.128-10.092-2.164-5.096-9.222-7.338-13.895-8.82-1.14-.363-2.224-.703-3.08-1.044-9.324-3.685-10.097-7.465-9.73-9.393.625-3.287 5.013-5.577 8.566-5.577.97 0 1.827.175 2.549.512 4.195 1.962 7.972 2.958 11.237 2.958 4.506 0 6.472-1.892 6.713-2.141-.118-2.133-.258-4.362-.402-6.665-.94-14.904-2.107-33.432 2.613-44.004 14.135-31.692 44.11-34.157 52.96-34.157.227 0 3.88-.04 3.88-.04h.525c8.868 0 38.912 2.466 53.056 34.18 4.716 10.576 3.549 29.117 2.609 44.012l-.04.651a682.032 682.032 0 0 0-.362 6.018c.227.232 2.037 1.972 6.119 2.129h.004c3.108-.118 6.674-1.11 10.59-2.941 1.145-.538 2.422-.652 3.287-.652 1.329 0 2.67.258 3.785.721l.07.031c3.164 1.123 5.24 3.34 5.284 5.66.044 2.185-1.626 5.468-9.803 8.698-.848.336-1.932.677-3.082 1.044-4.676 1.482-11.73 3.724-13.894 8.82-1.18 2.784-.804 6.176 1.128 10.088.017.04.035.074.052.113.586 1.368 14.712 33.589 46.26 38.786a2.314 2.314 0 0 1 1.93 2.408 3.897 3.897 0 0 1-.323 1.32c-1.302 3.042-7.167 7.36-27.683 10.529-1.679.257-2.33 2.443-3.33 7.023-.363 1.665-.73 3.304-1.238 5.027-.437 1.494-1.368 2.194-2.937 2.194h-.253c-1.088 0-2.631-.197-4.59-.582-3.474-.677-7.368-1.302-12.325-1.302-2.893 0-5.887.249-8.898.747-6.154 1.027-11.381 4.716-16.915 8.628-8.042 5.69-16.342 11.556-29.279 11.556',
          fill: '#fff'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          d: 'M151.872 49.738c8.396 0 37.317 2.255 50.945 32.81 4.488 10.057 3.339 28.283 2.417 42.924a618.285 618.285 0 0 0-.402 6.727l-.053.922.62.69c.246.276 2.58 2.715 7.767 2.916l.088.004.083-.004c3.43-.131 7.295-1.193 11.495-3.16.612-.289 1.438-.429 2.307-.429.993 0 2.046.184 2.916.551l.13.053c2.2.769 3.755 2.224 3.781 3.54.014.747-.546 3.422-8.343 6.503-.765.302-1.77.621-2.933.988-5.074 1.613-12.74 4.043-15.323 10.118-1.451 3.431-1.058 7.474 1.184 12.02.922 2.146 15.402 34.781 48.007 40.153a1.524 1.524 0 0 1-.135.524c-.55 1.303-4.065 5.796-25.918 9.165-3.422.53-4.257 4.362-5.232 8.82-.345 1.591-.708 3.2-1.197 4.865-.149.503-.175.533-.717.533h-.258c-.966 0-2.443-.2-4.148-.533-3.099-.608-7.342-1.35-12.766-1.35-3.025 0-6.146.266-9.275.782-6.687 1.114-12.129 4.96-17.89 9.03-7.73 5.472-15.73 11.123-27.928 11.123-.528 0-1.049-.018-1.573-.044l-.136-.004-.14.009c-.297.026-.598.039-.908.039-12.199 0-20.197-5.651-27.929-11.12-5.76-4.073-11.202-7.919-17.885-9.033a57.257 57.257 0 0 0-9.274-.783c-5.424 0-9.668.827-12.771 1.434-1.705.337-3.178.62-4.148.62-.787 0-.804-.043-.97-.616-.49-1.665-.853-3.317-1.198-4.908-.975-4.458-1.818-8.313-5.232-8.842-21.857-3.374-25.367-7.876-25.922-9.174a1.548 1.548 0 0 1-.131-.533c32.6-5.371 47.085-38.003 48.007-40.157 2.238-4.546 2.636-8.584 1.18-12.015-2.578-6.08-10.244-8.51-15.323-10.123-1.163-.367-2.168-.686-2.929-.988-6.59-2.605-8.614-5.223-8.308-6.813.345-1.832 3.523-3.694 6.294-3.694.62 0 1.167.096 1.569.289 4.501 2.106 8.614 3.177 12.216 3.177 5.664 0 8.19-2.635 8.457-2.937l.616-.686-.052-.918c-.114-2.15-.258-4.397-.402-6.718-.923-14.646-2.072-32.858 2.417-42.92 13.575-30.441 42.351-32.788 50.848-32.788.21 0 3.903-.035 3.903-.035.157-.004.323-.004.502-.004m0-4.62h-.555s-3.57.035-3.855.035c-9.195 0-40.363 2.565-55.065 35.529-4.948 11.093-3.764 29.93-2.81 45.066.113 1.783.23 3.636.331 5.428-.76.42-2.15.944-4.335.944-2.92 0-6.368-.918-10.254-2.74-1.031-.481-2.22-.726-3.531-.726-4.55 0-9.992 2.994-10.835 7.452-.612 3.213.826 7.898 11.15 11.976.93.371 2.05.725 3.234 1.097 4.265 1.355 10.712 3.4 12.465 7.522.904 2.137.542 4.886-1.075 8.164-.035.074-.07.149-.101.227-.568 1.32-14.213 32.426-44.51 37.413a4.626 4.626 0 0 0-3.864 4.821c.039.704.205 1.399.49 2.076 2.276 5.315 11.865 9.213 29.33 11.923.586.787 1.194 3.575 1.565 5.276.363 1.678.739 3.404 1.276 5.231.525 1.792 1.893 3.934 5.407 3.934 1.42 0 3.099-.328 5.035-.708 2.91-.568 6.897-1.346 11.884-1.346 2.766 0 5.634.24 8.518.716 5.634.94 10.424 4.327 15.966 8.243 7.942 5.617 16.936 11.972 30.604 11.972.375 0 .751-.01 1.127-.04.442.022 1.019.04 1.63.04 13.672 0 22.667-6.355 30.6-11.967 5.554-3.925 10.34-7.308 15.974-8.248a52.481 52.481 0 0 1 8.519-.716c4.76 0 8.522.603 11.879 1.258 2.107.416 3.798.625 5.035.625h.258c2.596 0 4.427-1.372 5.153-3.859.529-1.788.905-3.47 1.276-5.175.372-1.696.975-4.471 1.556-5.258 17.47-2.71 27.059-6.6 29.331-11.892a6.21 6.21 0 0 0 .499-2.09 4.62 4.62 0 0 0-3.864-4.816c-30.31-4.996-43.947-36.097-44.51-37.417a2.559 2.559 0 0 0-.106-.223c-1.617-3.282-1.975-6.027-1.07-8.164 1.748-4.122 8.195-6.167 12.46-7.518 1.194-.38 2.312-.738 3.235-1.101 7.557-2.985 11.346-6.648 11.267-10.892-.065-3.335-2.662-6.307-6.787-7.78l-.014-.004c-1.385-.577-3.033-.892-4.646-.892-1.105 0-2.74.149-4.27.866-3.592 1.682-6.822 2.6-9.606 2.723-1.85-.083-3.055-.551-3.746-.931.087-1.534.188-3.117.288-4.769l.04-.642c.957-15.145 2.141-34-2.806-45.097-14.712-32.98-45.945-35.546-55.167-35.546',
          fill: '#030303'
        })
      );
    }
  }]);

  return SnapchatLogo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

SnapchatLogo.propTypes = {
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
SnapchatLogo.defaultProps = {
  width: '300',
  height: '300',
  className: ''
};


/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriveLogo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var DriveLogo = function (_Component) {
  _inherits(DriveLogo, _Component);

  function DriveLogo() {
    _classCallCheck(this, DriveLogo);

    return _possibleConstructorReturn(this, (DriveLogo.__proto__ || Object.getPrototypeOf(DriveLogo)).apply(this, arguments));
  }

  _createClass(DriveLogo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          className = _props.className;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        {
          width: width || '139',
          height: height || '120.4',
          className: className || '',
          viewBox: '0 0 139 120.4'
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'radialGradient',
          {
            id: 'a',
            cx: '-254.82',
            cy: '705.836',
            gradientTransform: 'scale(3.2644) rotate(30 1174.792 966.99)',
            gradientUnits: 'userSpaceOnUse',
            r: '82.978'
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('stop', { offset: '0', stopColor: '#4387fd' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('stop', { offset: '.65', stopColor: '#3078f0' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('stop', { offset: '.91', stopColor: '#2b72ea' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('stop', { offset: '1', stopColor: '#286ee6' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'radialGradient',
          {
            id: 'b',
            cx: '-254.817',
            cy: '705.837',
            gradientTransform: 'scale(3.2644) rotate(30 1174.792 966.99)',
            gradientUnits: 'userSpaceOnUse',
            r: '82.973'
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('stop', { offset: '0', stopColor: '#ffd24d' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('stop', { offset: '1', stopColor: '#f6c338' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M24.2 120.4L0 78.5 45.3 0l24.2 41.9z', fill: '#0da960' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M24.2 120.4l24.2-41.9H139l-24.2 41.9z', fill: 'url(#a)' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M139 78.5H90.6L45.3 0h48.4z', fill: 'url(#b)' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M69.5 78.5H48.4l10.5-18.3-34.7 60.2z', fill: '#2d6fdd' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M90.6 78.5H139L80.1 60.2z', fill: '#e5b93c' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M58.9 60.2l10.6-18.3L45.3 0z', fill: '#0c9b57' })
      );
    }
  }]);

  return DriveLogo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

DriveLogo.propTypes = {
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
DriveLogo.defaultProps = {
  width: '139',
  height: '120.4',
  className: ''
};


/***/ }),

/***/ 427:
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

/***/ 428:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"listContentItemLogo":"listContentItemLogo-1VYC0oeATQQ8qN1_4Zb6Q","listContentItemWrapper":"listContentItemWrapper-1NmT5wj9u2OcWajoEihgFS","listContentItemContent":"listContentItemContent-2XfBFhQGi6YD1Fduj0obOI"};

/***/ }),

/***/ 429:
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

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_graphql_Link_Mutation_CreateLink_gql__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_graphql_Link_Mutation_CreateLink_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_src_graphql_Link_Mutation_CreateLink_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_graphql_Link_Query_getEnumTypeLink_gql__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_graphql_Link_Query_getEnumTypeLink_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_src_graphql_Link_Query_getEnumTypeLink_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_graphql_Link_Query_getEnumIconLink_gql__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_graphql_Link_Query_getEnumIconLink_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_src_graphql_Link_Query_getEnumIconLink_gql__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var RessourceEditContainer = function (_Component) {
  _inherits(RessourceEditContainer, _Component);

  function RessourceEditContainer(props) {
    _classCallCheck(this, RessourceEditContainer);

    var _this = _possibleConstructorReturn(this, (RessourceEditContainer.__proto__ || Object.getPrototypeOf(RessourceEditContainer)).call(this, props));

    _this.handleSubmitRessource = _this.handleSubmitRessource.bind(_this);
    return _this;
  }

  _createClass(RessourceEditContainer, [{
    key: 'handleSubmitRessource',
    value: function handleSubmitRessource(e) {
      var _this2 = this;

      e.preventDefault();

      var link = {
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
      }).then(function (linkId) {
        _this2.props.history.push('/link?refresh');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          enumTypeLink = _props.enumTypeLink,
          enumIconLink = _props.enumIconLink;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'title' },
          'New Ressources'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { className: 'subtitle' },
          'Add'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'form',
          { onSubmit: this.handleSubmitRessource },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'columns' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'column is-half is-offset-3' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'field' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'label',
                  { className: 'label' },
                  'Title'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'control' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                    className: 'input is-medium',
                    type: 'text',
                    name: 'title',
                    ref: function ref(title) {
                      _this3.titleInput = title;
                    },
                    placeholder: 'Title of your link'
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'field' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'label',
                  { className: 'label' },
                  'Url'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'control' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                    ref: function ref(url) {
                      _this3.urlInput = url;
                    },
                    className: 'input is-medium',
                    type: 'text',
                    name: 'title',
                    placeholder: 'Url'
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'field' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'label',
                  { className: 'label' },
                  'Description'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'control' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', {
                    ref: function ref(description) {
                      _this3.descriptionInput = description;
                    },
                    className: 'textarea is-medium',
                    placeholder: 'Description ressources'
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'field' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'label',
                  { className: 'label' },
                  'Link\'s Category'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'control' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'select' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'select',
                      {
                        name: 'category',
                        ref: function ref(category) {
                          _this3.categoryInput = category;
                        },
                        className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(enumIconLink.loading ? ('is-medium', 'is-loading') : 'is-medium')
                      },
                      !enumTypeLink.loading && enumTypeLink.__type.enumValues.map(function (type) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { key: type.name, value: type.name },
                          type.name
                        );
                      }),
                      enumTypeLink.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'option',
                        null,
                        'Loading type...'
                      )
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'field' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'label',
                  { className: 'label' },
                  'Link\'s Icon'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'control' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'select' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'select',
                      {
                        ref: function ref(icon) {
                          _this3.iconInput = icon;
                        },
                        name: 'icon',
                        className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(enumIconLink.loading ? ('is-medium', 'is-loading') : 'is-medium')
                      },
                      !enumIconLink.loading && enumIconLink.__type.enumValues.map(function (type) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { key: type.name, value: type.name },
                          type.name
                        );
                      }),
                      enumIconLink.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'option',
                        null,
                        'Loading type...'
                      )
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'field is-grouped' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'control' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { className: 'button is-primary' },
                    'Submit'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'control' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */],
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
  }]);

  return RessourceEditContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

RessourceEditContainer.propTypes = {
  history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  link: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  createLink: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  enumTypeLink: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  enumIconLink: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  mathc: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
RessourceEditContainer.defaultProps = {
  history: {},
  link: {},
  createLink: function createLink() {},
  enumTypeLink: {},
  enumIconLink: {},
  match: {}
};


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_5_src_graphql_Link_Mutation_CreateLink_gql___default.a, { name: 'createLink' })(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_6_src_graphql_Link_Query_getEnumTypeLink_gql___default.a, { name: 'enumTypeLink' })(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_7_src_graphql_Link_Query_getEnumIconLink_gql___default.a, { name: 'enumIconLink' })(Object(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["e" /* withRouter */])(RessourceEditContainer)))));

/***/ }),

/***/ 431:
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

/***/ 432:
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

/***/ 433:
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

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookclubSearchContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var BookclubSearchContainer = function (_Component) {
  _inherits(BookclubSearchContainer, _Component);

  function BookclubSearchContainer(props) {
    _classCallCheck(this, BookclubSearchContainer);

    var _this = _possibleConstructorReturn(this, (BookclubSearchContainer.__proto__ || Object.getPrototypeOf(BookclubSearchContainer)).call(this, props));

    _this.state = {
      isSearchLoading: false,
      query: '',
      results: []
    };

    _this.handleSearchInput = _this.handleSearchInput.bind(_this);
    return _this;
  }

  _createClass(BookclubSearchContainer, [{
    key: 'handleSearchInput',
    value: function handleSearchInput(e) {
      e.preventDefault();
      this.setState({ query: this.inputSearch.value });
      this.searchApiBook();
    }
  }, {
    key: 'searchApiBook',
    value: function searchApiBook() {
      var _this2 = this;

      var isSearchLoading = this.state.isSearchLoading;

      if (!isSearchLoading) {
        this.setState({ isSearchLoading: true, results: [] });

        var query = this.state.query;

        window.fetch('https://www.googleapis.com/books/v1/volumes?q=intitle:' + encodeURIComponent(query) + '&printType=books&orderBy=newest&maxResults=39').then(function (data) {
          return data.json();
        }).then(function (res) {
          _this2.setState({ isSearchLoading: false, results: res.items || [] });
          console.log(_this2.state);
        }).catch(function (res) {
          _this2.setState({ isSearchLoading: false, results: [] });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          isSearchLoading = _state.isSearchLoading,
          results = _state.results;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'field' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              className: isSearchLoading ? __WEBPACK_IMPORTED_MODULE_3_classnames___default()('control', 'is-large', 'is-loading') : __WEBPACK_IMPORTED_MODULE_3_classnames___default()('control', 'is-large')
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'form',
              { onSubmit: this.handleSearchInput },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()('input', 'is-large'),
                type: 'text',
                ref: function ref(input) {
                  _this3.inputSearch = input;
                },
                placeholder: 'Search Book'
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { type: 'submit', className: 'button is-primary' },
                'Search'
              )
            )
          )
        ),
        !isSearchLoading && results && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns' },
          results.length && results.map(function (key, result) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'column' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'card' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'card-image' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'figure',
                    { className: 'image is-4by3' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
                      src: 'https://books.google.com/books/content/images/frontcover/' + result.id + '?fife=w300-rw',
                      alt: 'Book image'
                    })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'card-content' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'media' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'media-content' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        { className: 'title is-4' },
                        result.volumeInfo.title
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        { className: 'subtitle is-6' },
                        result.volumeInfo.authors.map(function (author) {
                          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            null,
                            author
                          );
                        })
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'content' },
                    result.volumeInfo.description,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'time',
                      { dateTime: '2016-1-1' },
                      result.volumeInfo.publishedDate
                    )
                  )
                )
              )
            );
          })
        )
      );
    }
  }]);

  return BookclubSearchContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

BookclubSearchContainer.propTypes = {
  search: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
BookclubSearchContainer.defaultProps = {
  search: {}
};

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_graphql_Auth_Query_isLoggedIn_gql__ = __webpack_require__(82);
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
          data = _props.data,
          component = _props.component,
          layout = _props.layout,
          rest = _objectWithoutProperties(_props, ['data', 'component', 'layout']);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        !data.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], _extends({}, rest, {
          render: function render(props) {
            return _this2.redirectisNotAuthenticated(layout, props, component);
          }
        }))
      );
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


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_src_graphql_Auth_Query_isLoggedIn_gql___default.a)(PrivateRoute));

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(15);
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(layout, props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(component, props));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          component = _props.component,
          layout = _props.layout,
          rest = _objectWithoutProperties(_props, ['component', 'layout']);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], _extends({}, rest, { render: function render(props) {
            return _this2.redirectisAuthenticated(layout, props, component);
          } }))
      );
    }
  }]);

  return PublicRoute;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

PublicRoute.propTypes = {
  component: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  layout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};
PublicRoute.defaultProps = {};


/* harmony default export */ __webpack_exports__["a"] = (PublicRoute);

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateLayout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_components_Header_Header__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_components_Footer_Footer__ = __webpack_require__(441);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









// import css from './PrivateLayout.css'

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
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_helmet___default.a, { title: 'Mangrove Dashboard' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_src_components_Header_Header__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('section', 'container') },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('') },
            this.props.children
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_src_components_Footer_Footer__["a" /* default */], null)
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

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_Icons_MangroveLogo__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header_css__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Header_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {
      showMenu: false
    };
    _this.toggleMenu = _this.toggleMenu.bind(_this);
    _this.closeMenu = _this.closeMenu.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'closeMenu',
    value: function closeMenu() {
      this.setState({ showMenu: false });
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      var showMenu = this.state.showMenu;

      this.setState({ showMenu: !showMenu });
    }
  }, {
    key: 'render',
    value: function render() {
      var showMenu = this.state.showMenu;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'header',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'nav',
            { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__Header_css___default.a.header, 'navbar') },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'navbar-brand' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
                { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__Header_css___default.a.logoLink, 'navbar-item'), to: '/' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_src_components_Icons_MangroveLogo__["a" /* default */], { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__Header_css___default.a.logo), width: '37' }),
                'Mangrove Dashboard'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                  className: showMenu ? __WEBPACK_IMPORTED_MODULE_2_classnames___default()('navbar-burger', 'burger', __WEBPACK_IMPORTED_MODULE_5__Header_css___default.a.burgerMenu, 'is-active') : __WEBPACK_IMPORTED_MODULE_2_classnames___default()('navbar-burger', 'burger', __WEBPACK_IMPORTED_MODULE_5__Header_css___default.a.burgerMenu),
                  onClick: this.toggleMenu
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null)
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              {
                className: showMenu ? __WEBPACK_IMPORTED_MODULE_2_classnames___default()('navbar-menu', 'is-active') : __WEBPACK_IMPORTED_MODULE_2_classnames___default()('navbar-menu')
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'navbar-start' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'navbar-item' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
                    { className: __WEBPACK_IMPORTED_MODULE_5__Header_css___default.a.headerLink, onClick: this.closeMenu, to: '/link' },
                    'Ressources'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'navbar-item' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
                    { className: __WEBPACK_IMPORTED_MODULE_5__Header_css___default.a.headerLink, onClick: this.closeMenu, to: '/bookclub/search' },
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
                    { className: __WEBPACK_IMPORTED_MODULE_5__Header_css___default.a.headerLink, onClick: this.closeMenu, to: '/register' },
                    'Register'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'navbar-item' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
                    { className: __WEBPACK_IMPORTED_MODULE_5__Header_css___default.a.headerLink, onClick: this.closeMenu, to: '/login' },
                    'Login'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'navbar-item' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
                    { className: __WEBPACK_IMPORTED_MODULE_5__Header_css___default.a.headerLink, onClick: this.closeMenu, to: '/logout' },
                    'Logout'
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

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ 439:
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

/***/ 440:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"header-2zG4F7jLvGK6KP6LE87cJC","headerLink":"headerLink-2B_CfzPCUcvE9Qe2Q0uaVO","logoLink":"logoLink-2TvZGbsgxMY3a28K7cmiL_","logo":"logo-1R6EsLBT0JSYnuTx7vyhgQ","burgerMenu":"burgerMenu-l9DSCn53fCHZxfN8xAwYv"};

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(442);



// import css from './Footer.css'

var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'footer',
    { className: 'footer' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'container' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'content has-text-centered' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Made with',
          ' ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { role: 'img', 'aria-label': 'wine' },
            '\uD83C\uDF77'
          ),
          ' ',
          'in Paris - \xA9 ',
          Object(__WEBPACK_IMPORTED_MODULE_1_moment__["a" /* default */])().format('YYYY'),
          '.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: 'icon', href: 'https://github.com/jgthms/bulma' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-github' })
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ 480:
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

/***/ 481:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createClient */
/* unused harmony export getNetworkInterface */
/* harmony export (immutable) */ __webpack_exports__["a"] = browserClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_apollo__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_kit_config__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_kit_lib_env__ = __webpack_require__(483);
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

/***/ 483:
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

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createNewStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_seamless_immutable__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_seamless_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_seamless_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_kit_config__ = __webpack_require__(91);
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

/***/ 58:
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

/***/ 82:
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

/***/ 91:
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

/***/ })

},[291]);
//# sourceMappingURL=browser.js.map