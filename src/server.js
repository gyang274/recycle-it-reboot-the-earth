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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n\ndotenv__WEBPACK_IMPORTED_MODULE_0___default.a.config({\n  path: './.env.local'\n});\n\n//# sourceURL=webpack:///./config.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./config.js\");\n/* harmony import */ var _src_components_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/users */ \"./src/components/users/index.js\");\n// index.js\n// author: yg <gyang274@github.com>\n// config process.env.<variable>\n // import express from 'express'\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\n\nvar app = express();\nvar port = process.env.PORT || 3000;\napp.use(bodyParser.json()); // client built\n\napp.use(express[\"static\"]('./dist')); // server api endpoints\n\napp.get('/api', function (req, res) {\n  res.send('Hello, API ENDPOINT!');\n});\napp.use('/api/v1/users', _src_components_users__WEBPACK_IMPORTED_MODULE_1__[\"default\"].router);\napp.listen(port, function () {\n  console.log(\"server listen at \".concat(port, \"!\"));\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/components/users/index.js":
/*!***************************************!*\
  !*** ./src/components/users/index.js ***!
  \***************************************/
/*! exports provided: router, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"router\", function() { return router; });\n/* harmony import */ var _src_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/routes */ \"./src/components/users/src/routes.js\");\n// index.js\n// author: yg <gyang274@github.com>\n// usage\n// import users from '/path/to/users'\n// // const users = require('/path/to/users')\n// app.use('/api/v1/users', users.router)\n // let routes = require('./src/routes')\n\nvar router = _src_routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].router; // module.exports = {\n//   router: routes.router\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  router: _src_routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].router\n});\n\n//# sourceURL=webpack:///./src/components/users/index.js?");

/***/ }),

/***/ "./src/components/users/src/ddriver.js":
/*!*********************************************!*\
  !*** ./src/components/users/src/ddriver.js ***!
  \*********************************************/
/*! exports provided: query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"query\", function() { return query; });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n// ddriver.js\n// author: yg <gyang274@github.com>\n// establish connection via new pg.Pool() and promisify pool.query()\n\n\nif (typeof process.env.DATABASE_URL === \"undefined\") {\n  throw \"404 - process.env.DATABASE_URL is undefined!\";\n} // 1114 is OID for timestamp in Postgres return string as is\n// pg.types.setTypeParser(1114, v => v)\n\n\nvar pool = new pg__WEBPACK_IMPORTED_MODULE_0___default.a.Pool({\n  connectionString: process.env.DATABASE_URL\n});\npool.on('connect', function () {\n  console.log('ok - connect to database ok!');\n}); // query\n// inputs\n//  @param text: String\n//  @param params: Array\n// output\n//  @return object: Object\n\nfunction query(text, params) {\n  return new Promise(function (resolve, reject) {\n    pool.query(text, params).then(function (response) {\n      resolve(response);\n    })[\"catch\"](function (error) {\n      reject(error);\n    });\n  });\n} // exports\n// module.exports = {\n//   query\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  query: query\n});\n\n//# sourceURL=webpack:///./src/components/users/src/ddriver.js?");

/***/ }),

/***/ "./src/components/users/src/models.js":
/*!********************************************!*\
  !*** ./src/components/users/src/models.js ***!
  \********************************************/
/*! exports provided: create, registration, select, authenticate, selectAll, updatePassword, updateProperty, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registration\", function() { return registration; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"select\", function() { return select; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authenticate\", function() { return authenticate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectAll\", function() { return selectAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updatePassword\", function() { return updatePassword; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateProperty\", function() { return updateProperty; });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ddriver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ddriver */ \"./src/components/users/src/ddriver.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n// models.js\n// author: yg <gyang274@github.com>\n// database operations on table users\n// users\n//  @col name: String, Primary Key\n//  @col password: String, bcrypt hashed value\n//  @col last_login: Timestamp\n//  @col created_on: Timestamp\n//  @optionalColumns properties, e.g., image, coins, score, title, stats, achievements etc.\n\n\n\nvar saltOrRounds = 10; // create\n//  @param payload: { name, password (hashed) }\n\nfunction create(payload) {\n  return new Promise(function (resolve, reject) {\n    _ddriver__WEBPACK_IMPORTED_MODULE_2__[\"default\"].query('INSERT INTO users (name, password) VALUES ($1, $2) RETURNING name', [payload.name, payload.password]).then(function (response) {\n      resolve(response);\n    })[\"catch\"](function (error) {\n      reject(error);\n    });\n  });\n} // registration\n//  @param payload: { name, password (plain) }\n\nfunction registration(payload) {\n  return new Promise(function (resolve, reject) {\n    isUserValid(payload).then(function () {\n      return bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hash(payload.password, saltOrRounds);\n    }).then(function (hashed) {\n      payload.password = hashed;\n      return create(payload);\n    }).then(function (response) {\n      resolve(response);\n    })[\"catch\"](function (error) {\n      reject(error);\n    });\n  });\n} // select\n//  @param payload: { name, password (optional) }\n\nfunction select(payload) {\n  return new Promise(function (resolve, reject) {\n    _ddriver__WEBPACK_IMPORTED_MODULE_2__[\"default\"].query('SELECT * FROM users where name = $1', [payload.name]).then(function (response) {\n      if (response.rowCount === 1) {\n        resolve(response.rows[0]);\n      } else {\n        reject('user name no found:', payload.name);\n      }\n    })[\"catch\"](function (error) {\n      reject(error);\n    });\n  });\n} // authenticate\n//  @param payload: { name, password (required) }\n\nfunction authenticate(payload) {\n  return new Promise(function (resolve, reject) {\n    select(payload).then(function (response) {\n      return verifyPassword(payload, response);\n    }).then(function (response) {\n      delete response.password;\n      resolve(response);\n    })[\"catch\"](function (error) {\n      reject(error);\n    });\n  });\n} // selectAll\n\nfunction selectAll() {\n  return new Promise(function (resolve, reject) {\n    _ddriver__WEBPACK_IMPORTED_MODULE_2__[\"default\"].query('SELECT name, last_login, created_on FROM users;').then(function (response) {\n      resolve(response.rows);\n    })[\"catch\"](function (error) {\n      reject(error);\n    });\n  });\n} // updatePassword\n//  @param payload: { name, password, }\n\nfunction updatePassword(payload) {\n  return new Promise(function (resolve, reject) {\n    isPasswordValid(payload.password).then(function () {\n      return bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hash(payload.password, saltOrRounds);\n    }).then(function (hashed) {\n      return _ddriver__WEBPACK_IMPORTED_MODULE_2__[\"default\"].query('UPDATE users SET password = $2 WHERE name = $1', [payload.name, hashed]);\n    }).then(function (response) {\n      resolve(response);\n    })[\"catch\"](function (error) {\n      reject(error);\n    });\n  });\n} // updateProperty\n//  @param payload: { name, property1, property2, ... }\n// export function updateProperty (payload) {\n//   let queryText = \"UPDATE users SET \"\n//   for (let [k, v] of Object.entries(payload)) {\n//     if (k !== 'name' && k !== 'password') {\n//       if (typeof (v) === 'number') {\n//         queryText += k + \" = \" + v + \", \"\n//       } else if (typeof (v) === 'string') {\n//         queryText += k + \" = '\" + v + \"', \"\n//       } else if (typeof (v) === 'object' && Array.isArray(v)) {\n//         // NOTE: 1D Array only!\n//         if (v.length === 0) {\n//           // queryText += k + \" = ARRAY[\" + v + \"], \"\n//           queryText += k + \" = '{\" + v + \"}', \"\n//         } else if (typeof (v[0]) === 'number') {\n//           queryText += k + \" = '{\" + v + \"}', \"\n//         } else if (typeof (v[0]) === 'string') {\n//           queryText += k + \" = '{\\\"\" + v.join('\",\"') + \"\\\"}', \"\n//         } else {\n//           throw 'updateProperty: unhandled type: 2d array.'  \n//         }     \n//       } else {\n//         throw 'updateProperty: unhandled type: object.'\n//       }\n//     }\n//   }\n//   queryText = queryText.slice(0, -2) + \" WHERE name = '\" + payload.name + \"';\"\n//   // console.log('queryText:', queryText)\n//   return new Promise(\n//     (resolve, reject) => {\n//       ddriver.query(\n//         queryText\n//       ).then(\n//         response => {\n//           resolve(response)\n//         }\n//       ).catch(\n//         error => {\n//           reject(error)\n//         }\n//       )\n//     }\n//   )\n// }\n// updateProperty\n//  @param payload: { name, property1, property2, ... }\n\nfunction updateProperty(payload) {\n  return new Promise(function (resolve, reject) {\n    var queries = [];\n\n    for (var _i = 0, _Object$entries = Object.entries(payload); _i < _Object$entries.length; _i++) {\n      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n          k = _Object$entries$_i[0],\n          v = _Object$entries$_i[1];\n\n      if (k !== 'name' && k !== 'password') {\n        queries.push(_ddriver__WEBPACK_IMPORTED_MODULE_2__[\"default\"].query(\"UPDATE users SET \".concat(k, \" = $2 WHERE name = $1\"), [payload.name, v]));\n      }\n    }\n\n    Promise.all(queries).then(function (response) {\n      resolve(response);\n    })[\"catch\"](function (error) {\n      reject(error);\n    });\n  });\n} // isUserValid\n\nfunction isUserValid(payload) {\n  return new Promise(function (resolve, reject) {\n    isNameValid(payload.name).then(function () {\n      return isPasswordValid(payload.password);\n    }).then(function (response) {\n      resolve(response);\n    })[\"catch\"](function (error) {\n      reject(error);\n    });\n  });\n} // isNameValid\n\n\nfunction isNameValid(name) {\n  var minCharacters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;\n  return new Promise(function (resolve, reject) {\n    if (typeof name !== 'string') {\n      reject('name must be a string.');\n    } else if (name.length < minCharacters) {\n      reject(\"name must have at least \".concat(minCharacters, \" characters.\"));\n    } else {\n      resolve();\n    }\n  });\n} // isEmailValid\n\n\nfunction isEmailValid(email) {\n  return new Promise(function (resolve, reject) {\n    var re = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);\n\n    if (typeof email !== 'string') {\n      reject('email must be a string.');\n    } else if (!re.test(email)) {\n      reject(\"email must match proper format: \".concat(email, \".\"));\n    } else {\n      resolve();\n    }\n  });\n} // isPasswordValid\n\n\nfunction isPasswordValid(password) {\n  var minCharacters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;\n  return new Promise(function (resolve, reject) {\n    if (typeof password !== 'string') {\n      reject('password must be a string.');\n    } else if (password.length < minCharacters) {\n      reject(\"password must have at least \".concat(minCharacters, \" characters.\"));\n    } else {\n      resolve();\n    }\n  });\n} // verifyPassword\n\n\nfunction verifyPassword(payload, user) {\n  return new Promise(function (resolve, reject) {\n    bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compare(payload.password, user.password).then(function (response) {\n      if (response) {\n        resolve(user);\n      } else {\n        reject('user password does not match.');\n      }\n    })[\"catch\"](function (error) {\n      reject(error);\n    });\n  });\n} // exports\n// module.exports = {\n//   create, \n//   registration,\n//   select, \n//   authenticate,\n//   selectAll,\n//   updatePassword,\n//   updateProperty\n// }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  create: create,\n  registration: registration,\n  select: select,\n  authenticate: authenticate,\n  selectAll: selectAll,\n  updatePassword: updatePassword,\n  updateProperty: updateProperty\n});\n\n//# sourceURL=webpack:///./src/components/users/src/models.js?");

/***/ }),

/***/ "./src/components/users/src/routes.js":
/*!********************************************!*\
  !*** ./src/components/users/src/routes.js ***!
  \********************************************/
/*! exports provided: router, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"router\", function() { return router; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views */ \"./src/components/users/src/views.js\");\n// routes.js\n// author: yg <gyang274@github.com>\n// routes within api endpoint of users, e.g. '/api/v1/users' \n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.post('/registration', _views__WEBPACK_IMPORTED_MODULE_1__[\"default\"].registration);\nrouter.post('/authenticate', _views__WEBPACK_IMPORTED_MODULE_1__[\"default\"].authenticate);\nrouter.post('/updatePassword', _views__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updatePassword);\nrouter.post('/updateProperty', _views__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateProperty); // exports\n// module.exports = {\n//   router\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  router: router\n});\n\n//# sourceURL=webpack:///./src/components/users/src/routes.js?");

/***/ }),

/***/ "./src/components/users/src/views.js":
/*!*******************************************!*\
  !*** ./src/components/users/src/views.js ***!
  \*******************************************/
/*! exports provided: registration, authenticate, updatePassword, updateProperty, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registration\", function() { return registration; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authenticate\", function() { return authenticate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updatePassword\", function() { return updatePassword; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateProperty\", function() { return updateProperty; });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ \"./src/components/users/src/models.js\");\n// views.js\n// author: yg <gyang274@github.com>\n// express api endpoints of object users\n // registration\n//  on view: registration\n// inputs\n//  @param req: post request with body { name, password }\n//  @param res: \n\nfunction registration(req, res) {\n  _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registration(req.body).then(function (response) {\n    return res.status(200).json(response);\n  })[\"catch\"](function (error) {\n    return res.status(400).json(error);\n  });\n} // authenticate\n//  on view: authenticate\n// inputs\n//  @param req: post request with body { name, password }\n//  @param res: \n\nfunction authenticate(req, res) {\n  _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].authenticate(req.body).then(function (response) {\n    return res.status(200).json(response);\n  })[\"catch\"](function (error) {\n    return res.status(400).json(error);\n  });\n} // updatePassword\n//  on view: updatePassword\n// inputs\n//  @param req: post request with body { name, password }\n//  @param res: \n\nfunction updatePassword(req, res) {\n  _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updatePassword(req.body).then(function (response) {\n    return res.status(200).json(response);\n  })[\"catch\"](function (error) {\n    return res.status(400).json(error);\n  });\n} // updateProperty\n//  on view: updateProperty\n// inputs\n//  @param req: post request with body { name, property1, property2, ... }\n//  @param res: \n\nfunction updateProperty(req, res) {\n  _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateProperty(req.body).then(function (response) {\n    return res.status(200).json(response);\n  })[\"catch\"](function (error) {\n    return res.status(400).json(error);\n  });\n} // exports\n// module.exports = {\n//   registration,\n//   authenticate,\n//   updatePassword,\n//   updateProperty\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  registration: registration,\n  authenticate: authenticate,\n  updatePassword: updatePassword,\n  updateProperty: updateProperty\n});\n\n//# sourceURL=webpack:///./src/components/users/src/views.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");\n\n//# sourceURL=webpack:///external_%22pg%22?");

/***/ })

/******/ });