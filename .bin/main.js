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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var open__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! open */ \"open\");\n/* harmony import */ var open__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(open__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var commander__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! commander */ \"commander\");\n/* harmony import */ var commander__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(commander__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_prompt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/prompt */ \"./src/prompt/index.js\");\n/* harmony import */ var _src_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/options */ \"./src/options/index.js\");\n/* harmony import */ var _src_configs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/configs */ \"./src/configs/index.js\");\n/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/utils */ \"./src/utils/index.js\");\n\n\n// #!/usr/bin/env node\n\n\n\n\n\n\nObject(_src_options__WEBPACK_IMPORTED_MODULE_5__[\"configureOptions\"])();\n\nvar main = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var path, sitesChosen, BASE, QUERY;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!commander__WEBPACK_IMPORTED_MODULE_3__[\"program\"].editCache) {\n              _context.next = 6;\n              break;\n            }\n\n            path = Object(_src_configs__WEBPACK_IMPORTED_MODULE_6__[\"cachePath\"])();\n            console.info(path);\n            _context.next = 5;\n            return open__WEBPACK_IMPORTED_MODULE_2___default()(path);\n\n          case 5:\n            return _context.abrupt(\"return\");\n\n          case 6:\n            if (!commander__WEBPACK_IMPORTED_MODULE_3__[\"program\"].cachePath) {\n              _context.next = 9;\n              break;\n            }\n\n            console.info(Object(_src_configs__WEBPACK_IMPORTED_MODULE_6__[\"cachePath\"])());\n            return _context.abrupt(\"return\");\n\n          case 9:\n            if (!commander__WEBPACK_IMPORTED_MODULE_3__[\"program\"].clean) {\n              _context.next = 13;\n              break;\n            }\n\n            Object(_src_configs__WEBPACK_IMPORTED_MODULE_6__[\"clean\"])();\n            console.info('Ok');\n            return _context.abrupt(\"return\");\n\n          case 13:\n            _context.next = 15;\n            return Object(_src_prompt__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(commander__WEBPACK_IMPORTED_MODULE_3__[\"program\"]);\n\n          case 15:\n            sitesChosen = _context.sent;\n            BASE = Object(_src_configs__WEBPACK_IMPORTED_MODULE_6__[\"urlBase\"])();\n            QUERY = Object(_src_utils__WEBPACK_IMPORTED_MODULE_7__[\"urlQuery\"])( // terms('javascript paradigm'),\n            Object(_src_configs__WEBPACK_IMPORTED_MODULE_6__[\"terms\"])(Object(_src_configs__WEBPACK_IMPORTED_MODULE_6__[\"getProgramTerms\"])() || Object(_src_configs__WEBPACK_IMPORTED_MODULE_6__[\"getDefaultTerms\"])()), Object(_src_configs__WEBPACK_IMPORTED_MODULE_6__[\"inurl\"])(sitesChosen)); // console.log(BASE + QUERY);\n\n            _context.next = 20;\n            return open__WEBPACK_IMPORTED_MODULE_2___default()(BASE + QUERY);\n\n          case 20:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function main() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmain();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, author, repository, bugs, homepage, description, keywords, license, main, bin, sideEffects, scripts, dependencies, devDependencies, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"searchon\\\",\\\"version\\\":\\\"1.0.0\\\",\\\"author\\\":{\\\"name\\\":\\\"Raul Abreu Leite\\\",\\\"email\\\":\\\"raul.abreu.leite@gmail.com\\\"},\\\"repository\\\":{\\\"type\\\":\\\"git\\\",\\\"url\\\":\\\"https://github.com/rauleite/searchon.git\\\"},\\\"bugs\\\":{\\\"url\\\":\\\"https://github.com/rauleite/searchon/issues\\\"},\\\"homepage\\\":\\\"https://github.com/rauleite/searchon#readme\\\",\\\"description\\\":\\\"CLI for developer friendly Discussions Search (Mac, Linux, Windows)\\\",\\\"keywords\\\":[\\\"Google\\\",\\\"Search\\\",\\\"CLI\\\"],\\\"license\\\":\\\"MIT\\\",\\\"main\\\":\\\"./.bin/main.js\\\",\\\"bin\\\":{\\\"searchon\\\":\\\"./.bin/main.js\\\"},\\\"sideEffects\\\":false,\\\"scripts\\\":{\\\"dev\\\":\\\"yarn build --watch\\\",\\\"start\\\":\\\"node ./.bin/main.js\\\",\\\"build\\\":\\\"cross-env NODE_OPTIONS=--max_old_space_size=2048 webpack\\\",\\\"build:prod\\\":\\\"webpack --config=webpack.prod.js\\\"},\\\"dependencies\\\":{\\\"chalk\\\":\\\"^4.1.0\\\",\\\"commander\\\":\\\"^6.0.0\\\",\\\"conf\\\":\\\"^7.1.2\\\",\\\"cross-env\\\":\\\"^7.0.2\\\",\\\"inquirer\\\":\\\"^7.3.3\\\",\\\"open\\\":\\\"^7.1.0\\\"},\\\"devDependencies\\\":{\\\"@babel/core\\\":\\\"^7.11.1\\\",\\\"@babel/plugin-transform-runtime\\\":\\\"^7.11.0\\\",\\\"@babel/preset-env\\\":\\\"^7.11.0\\\",\\\"babel-loader\\\":\\\"^8.1.0\\\",\\\"clean-webpack-plugin\\\":\\\"^3.0.0\\\",\\\"eslint\\\":\\\"7.2.0\\\",\\\"eslint-config-airbnb\\\":\\\"^18.2.0\\\",\\\"eslint-config-airbnb-base\\\":\\\"14.2.0\\\",\\\"eslint-plugin-import\\\":\\\"^2.21.2\\\",\\\"terser-webpack-plugin\\\":\\\"^4.1.0\\\",\\\"webpack\\\":\\\"^4.44.1\\\",\\\"webpack-cli\\\":\\\"^3.3.12\\\",\\\"webpack-merge\\\":\\\"^5.1.1\\\",\\\"webpack-node-externals\\\":\\\"^2.5.1\\\"}}\");\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./src/configs/index.js":
/*!******************************!*\
  !*** ./src/configs/index.js ***!
  \******************************/
/*! exports provided: configsStore, cachePath, clean, setProgramTerms, urlBase, terms, inurl, setDefaultTerms, getProgramTerms, getDefaultTerms, programHasTerms, termsValidate, termsErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configsStore\", function() { return configsStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cachePath\", function() { return cachePath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clean\", function() { return clean; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setProgramTerms\", function() { return setProgramTerms; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"urlBase\", function() { return urlBase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"terms\", function() { return terms; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inurl\", function() { return inurl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setDefaultTerms\", function() { return setDefaultTerms; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProgramTerms\", function() { return getProgramTerms; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDefaultTerms\", function() { return getDefaultTerms; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"programHasTerms\", function() { return programHasTerms; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"termsValidate\", function() { return termsValidate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"termsErrorMessage\", function() { return termsErrorMessage; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sites */ \"./src/sites/index.js\");\n\n\n\n\nvar configsConstants = {\n  TERMS: '',\n  GROUP: ''\n};\nvar configsStore = _store__WEBPACK_IMPORTED_MODULE_1__[\"configsStore\"];\nvar cachePath = function cachePath() {\n  return _store__WEBPACK_IMPORTED_MODULE_1__[\"conf\"].path;\n};\nvar clean = function clean() {\n  return _store__WEBPACK_IMPORTED_MODULE_1__[\"conf\"].clear();\n};\nvar setProgramTerms = function setProgramTerms(terms) {\n  configsConstants.TERMS = terms;\n};\n\nvar setConfigsStore = function setConfigsStore(_ref) {\n  var _ref$property = _ref.property,\n      property = _ref$property === void 0 ? '' : _ref$property,\n      value = _ref.value;\n  return Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"setItemStore\"])({\n    itemName: 'configs',\n    property: property,\n    value: value,\n    conf: _store__WEBPACK_IMPORTED_MODULE_1__[\"conf\"]\n  });\n};\n\nvar urlBase = function urlBase() {\n  return configsStore.urlBase;\n};\nvar terms = function terms(text) {\n  return configsStore.terms.replace('$', text);\n};\nvar inurl = function inurl(sitesName) {\n  var sitesMap = Object(_sites__WEBPACK_IMPORTED_MODULE_3__[\"sitesMapByName\"])(sitesName);\n  var inurls = sitesMap.map(function (_ref2) {\n    var _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 2),\n        key = _ref3[0],\n        site = _ref3[1];\n\n    return configsStore.inurl.replace('$', site.url);\n  });\n  return inurls.join(' OR ');\n};\nvar setDefaultTerms = function setDefaultTerms(urlTerms) {\n  setConfigsStore({\n    value: urlTerms,\n    property: 'defaultTerms'\n  });\n};\nvar getProgramTerms = function getProgramTerms() {\n  return configsConstants.TERMS;\n};\nvar getDefaultTerms = function getDefaultTerms() {\n  return (// configsConstants.TERMS || conf.get('configs.defaultTerms')\n    configsStore.defaultTerms\n  );\n};\nvar programHasTerms = function programHasTerms() {\n  return !!configsConstants.TERMS;\n};\nvar termsValidate = function termsValidate(termsText) {\n  return termsText.length < 3;\n};\nvar termsErrorMessage = 'The term must having at least three strings.';\n\n//# sourceURL=webpack:///./src/configs/index.js?");

/***/ }),

/***/ "./src/groups/defaultGroups.js":
/*!*************************************!*\
  !*** ./src/groups/defaultGroups.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar defaultGroups = {\n  sites: {\n    name: 'sites',\n    \"default\": false,\n    checked: false\n  },\n  communities: {\n    name: 'communities',\n    \"default\": true,\n    checked: true\n  },\n  blog: {\n    name: 'blog',\n    \"default\": false,\n    checked: false\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (defaultGroups);\n\n//# sourceURL=webpack:///./src/groups/defaultGroups.js?");

/***/ }),

/***/ "./src/groups/index.js":
/*!*****************************!*\
  !*** ./src/groups/index.js ***!
  \*****************************/
/*! exports provided: groupsName, groupsList, setGroupStore, setDefaultGroups, configureGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"groupsName\", function() { return groupsName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"groupsList\", function() { return groupsList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setGroupStore\", function() { return setGroupStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setDefaultGroups\", function() { return setDefaultGroups; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configureGroups\", function() { return configureGroups; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\n\nvar groupsName = Object.keys(_store__WEBPACK_IMPORTED_MODULE_1__[\"groupsStore\"]);\nvar groupsList = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"objectToList\"])(_store__WEBPACK_IMPORTED_MODULE_1__[\"groupsStore\"]);\nvar setGroupStore = function setGroupStore(_ref) {\n  var _ref$property = _ref.property,\n      property = _ref$property === void 0 ? '' : _ref$property,\n      value = _ref.value;\n  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"setItemStore\"])({\n    itemName: 'groups',\n    property: property,\n    value: value,\n    conf: _store__WEBPACK_IMPORTED_MODULE_1__[\"conf\"]\n  });\n};\n/**\n * Factory Method: accept a object that have a 'name' property (obj.name)\n * @param {[string]}\n * @return void\n */\n\nvar setDefaultGroups = function setDefaultGroups(groups) {\n  var propertiesToSave = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"setPropertiesToDefaultFromListNames\"])({\n    listName: groups,\n    // listObj: groupsList,\n    objStore: _store__WEBPACK_IMPORTED_MODULE_1__[\"groupsStore\"],\n    properties: ['default', 'checked']\n  });\n  setGroupStore({\n    value: propertiesToSave\n  });\n};\n/**\n * If argument group exist on group storage\n * @param {object} program commander package instance\n */\n\nvar existsArgumentGroups = function existsArgumentGroups(groups) {\n  return groupsName.some(function (group) {\n    return groups.some(function (groupsArgument) {\n      return group === groupsArgument;\n    });\n  });\n};\n\nvar groupValidation = function groupValidation(groups) {\n  if (!existsArgumentGroups(groups)) {\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"exitWithError\"])(\"Oops, please insert a valid group: \".concat(groupsName, \".\"));\n  }\n};\n/**\n * Validates groups and set default if necessray\n * @param {object} program commander package instance\n * @return {[string]} Valid groups\n */\n// eslint-disable-next-line import/prefer-default-export\n\n\nvar configureGroups = function configureGroups(groups) {\n  groupValidation(groups);\n};\n\n//# sourceURL=webpack:///./src/groups/index.js?");

/***/ }),

/***/ "./src/options/customOptions.js":
/*!**************************************!*\
  !*** ./src/options/customOptions.js ***!
  \**************************************/
/*! exports provided: multipleOptional, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multipleOptional\", function() { return multipleOptional; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\n/**\n * Factory Method: handles all custom types functions\n * @param {{value, previous, types, callback }} object\n */\n\nvar customOptions = function customOptions(_ref) {\n  var value = _ref.value,\n      previous = _ref.previous,\n      types = _ref.types,\n      callback = _ref.callback;\n\n  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isArrayEmpty\"])(types)) {\n    return value;\n  }\n\n  var tempValue = value; // Call all custom function in the 'custom' property\n\n  types.forEach(function (type, index) {\n    tempValue = type(tempValue, previous);\n\n    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"lastArrayElement\"])(types, index)) {\n      if (callback) {\n        callback(tempValue);\n      }\n    }\n  });\n  return tempValue;\n};\n/**\n * If this can take more than one arguments\n * @param {string} value argument(s)\n * @return {[string]} treated value\n */\n\n\nvar multipleOptional = function multipleOptional(value) {\n  var argumentToArray = function argumentToArray(str, separator) {\n    if (str.includes(separator)) {\n      return str.split(separator);\n    }\n\n    return [str];\n  };\n\n  return argumentToArray(value, ',');\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (customOptions);\n\n//# sourceURL=webpack:///./src/options/customOptions.js?");

/***/ }),

/***/ "./src/options/defaultOptions.js":
/*!***************************************!*\
  !*** ./src/options/defaultOptions.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _customOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customOptions */ \"./src/options/customOptions.js\");\n/* harmony import */ var _groups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../groups */ \"./src/groups/index.js\");\n\n // import store from '../store';\n\nvar options = {\n  GROUP: {\n    flag1: '-g',\n    flag2: '--group <group1,group2>',\n    option: 'group',\n    comments: \"Avaible: \".concat(_groups__WEBPACK_IMPORTED_MODULE_1__[\"groupsName\"]),\n    custom: function custom(value, previous) {\n      return Object(_customOptions__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        value: value,\n        previous: previous,\n        types: [_customOptions__WEBPACK_IMPORTED_MODULE_0__[\"multipleOptional\"]],\n        callback: function callback(v) {}\n      });\n    },\n    initValue: undefined\n  },\n  DEFAULT: {\n    flag1: '-d',\n    flag2: '--defaults',\n    option: 'defaults',\n    comments: 'search on all defaults groups and sites',\n    custom: undefined,\n    initValue: undefined\n  },\n  EDIT_CACHE: {\n    flag1: '',\n    flag2: '--edit-cache',\n    option: 'edit-cache',\n    comments: 'Open and edit cache file',\n    custom: undefined,\n    initValue: undefined\n  },\n  PATH: {\n    flag1: '',\n    flag2: '--cache-path',\n    option: 'path',\n    comments: 'shows the cache path',\n    custom: undefined,\n    initValue: undefined\n  },\n  CLEAN: {\n    flag1: '',\n    flag2: '--clean',\n    option: 'clean',\n    comments: 'clean the cache file',\n    custom: undefined,\n    initValue: undefined\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (options);\n\n//# sourceURL=webpack:///./src/options/defaultOptions.js?");

/***/ }),

/***/ "./src/options/index.js":
/*!******************************!*\
  !*** ./src/options/index.js ***!
  \******************************/
/*! exports provided: configureOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configureOptions\", function() { return configureOptions; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inquirer */ \"inquirer\");\n/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inquirer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var commander__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! commander */ \"commander\");\n/* harmony import */ var commander__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(commander__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ \"./package.json\", 1);\n/* harmony import */ var _defaultOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultOptions */ \"./src/options/defaultOptions.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n\n\n\n\n\n\n\n\nvar decorated = function decorated(text) {\n  return new inquirer__WEBPACK_IMPORTED_MODULE_1___default.a.Separator(text).line;\n}; // eslint-disable-next-line import/prefer-default-export\n\n\nvar configureOptions = function configureOptions() {\n  Object.entries(_defaultOptions__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).forEach(function (_ref) {\n    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),\n        key = _ref2[0],\n        opt = _ref2[1];\n\n    var separator = opt.flag1 && opt.flag2 ? ', ' : '';\n    commander__WEBPACK_IMPORTED_MODULE_2__[\"program\"].option(\"\".concat(opt.flag1).concat(separator).concat(opt.flag2), opt.comments, opt.custom, opt.initValue);\n  });\n  commander__WEBPACK_IMPORTED_MODULE_2__[\"program\"].version(_package_json__WEBPACK_IMPORTED_MODULE_3__.version, '-v, --version', 'current version').name(_package_json__WEBPACK_IMPORTED_MODULE_3__.name).usage(decorated('[--options param1[,param2]] [\"search terms\"]')).description(decorated(\"  \".concat(_package_json__WEBPACK_IMPORTED_MODULE_3__.description))).arguments('[terms] [oneArg]').action(function (terms, oneArg) {\n    // Only one argument\n    if (oneArg) {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"exitWithError\"])(\"There must be only one search term. Try to surround it with quotes: \\\"\".concat(terms, \" \").concat(oneArg, \"\\\"\"));\n      return;\n    }\n\n    if (terms) {\n      Object(_configs__WEBPACK_IMPORTED_MODULE_6__[\"setProgramTerms\"])(terms);\n      Object(_configs__WEBPACK_IMPORTED_MODULE_6__[\"setDefaultTerms\"])(terms);\n    }\n  }).on('--help', function () {\n    console.info('');\n    console.info('Examples:');\n    console.info('Search wizard:');\n    console.info(decorated(\"  $ \".concat(_package_json__WEBPACK_IMPORTED_MODULE_3__.name)));\n    console.info('Search based on the multiple groups:');\n    console.info(decorated(\"  $ \".concat(_package_json__WEBPACK_IMPORTED_MODULE_3__.name, \" -g myGroup,otherGroup \\\"deno vs nodejs\\\"\")));\n    console.info('Tip: If you know what you\\'re doing, you can create groups and sites by editing the cache file. (Warning: risk of corrupting it)');\n    console.info(decorated(\"  $ \".concat(_package_json__WEBPACK_IMPORTED_MODULE_3__.name, \" --cache-path\")));\n    console.info(decorated(\"  $ \".concat(_package_json__WEBPACK_IMPORTED_MODULE_3__.name, \" --edit-cache\"))); // open(store.path, { wait: true });\n  }).parse(process.argv);\n}; // export default configureOptions;\n\n//# sourceURL=webpack:///./src/options/index.js?");

/***/ }),

/***/ "./src/prompt/cachesPrompt.js":
/*!************************************!*\
  !*** ./src/prompt/cachesPrompt.js ***!
  \************************************/
/*! exports provided: handlePromptGroup, handlePromptSites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handlePromptGroup\", function() { return handlePromptGroup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handlePromptSites\", function() { return handlePromptSites; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _promptGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./promptGroup */ \"./src/prompt/promptGroup.js\");\n/* harmony import */ var _promptSites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promptSites */ \"./src/prompt/promptSites.js\");\n/* harmony import */ var _groups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../groups */ \"./src/groups/index.js\");\n/* harmony import */ var _sites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sites */ \"./src/sites/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\n\n\n\n\n\n // eslint-disable-next-line import/prefer-default-export\n\nvar handlePromptGroup = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(program) {\n    var groupsNameProgram, shouldGroupsBeSaving;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            groupsNameProgram = [];\n            shouldGroupsBeSaving = false;\n\n            if (!Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"hasOption\"])(program.group)) {\n              _context.next = 7;\n              break;\n            }\n\n            groupsNameProgram = program.group;\n            shouldGroupsBeSaving = true;\n            _context.next = 15;\n            break;\n\n          case 7:\n            if (!Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"hasOption\"])(program.defaults)) {\n              _context.next = 11;\n              break;\n            }\n\n            groupsNameProgram = _groups__WEBPACK_IMPORTED_MODULE_4__[\"groupsName\"];\n            _context.next = 15;\n            break;\n\n          case 11:\n            _context.next = 13;\n            return Object(_promptGroup__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n          case 13:\n            groupsNameProgram = _context.sent.groupsName;\n            shouldGroupsBeSaving = true;\n\n          case 15:\n            if (shouldGroupsBeSaving) {\n              Object(_groups__WEBPACK_IMPORTED_MODULE_4__[\"setDefaultGroups\"])(groupsNameProgram);\n            }\n\n            return _context.abrupt(\"return\", groupsNameProgram);\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function handlePromptGroup(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar handlePromptSites = /*#__PURE__*/function () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(program, groupsNameProgram) {\n    var sitesNameProgram;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            sitesNameProgram = [];\n\n            if (!Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"hasOption\"])(program.defaults)) {\n              _context2.next = 5;\n              break;\n            }\n\n            sitesNameProgram = _sites__WEBPACK_IMPORTED_MODULE_5__[\"sitesName\"];\n            _context2.next = 8;\n            break;\n\n          case 5:\n            _context2.next = 7;\n            return Object(_promptSites__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(groupsNameProgram);\n\n          case 7:\n            sitesNameProgram = _context2.sent.sitesName;\n\n          case 8:\n            Object(_sites__WEBPACK_IMPORTED_MODULE_5__[\"setDefaultSites\"])(sitesNameProgram);\n            return _context2.abrupt(\"return\", sitesNameProgram);\n\n          case 10:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function handlePromptSites(_x2, _x3) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/prompt/cachesPrompt.js?");

/***/ }),

/***/ "./src/prompt/index.js":
/*!*****************************!*\
  !*** ./src/prompt/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _promptTerms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./promptTerms */ \"./src/prompt/promptTerms.js\");\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _cachesPrompt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cachesPrompt */ \"./src/prompt/cachesPrompt.js\");\n\n\n\n\n\n\n\nvar prompt = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(program) {\n    var _hasOptionsConflicts, hasConflicts, optionsConflicts, inputTerms, groupsNameProgram, sitesKey;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _hasOptionsConflicts = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"hasOptionsConflicts\"])(program), hasConflicts = _hasOptionsConflicts.hasConflicts, optionsConflicts = _hasOptionsConflicts.optionsConflicts;\n\n            if (!hasConflicts) {\n              _context.next = 4;\n              break;\n            }\n\n            Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"exitWithError\"])(\"You cannot use those two options combined: \".concat(optionsConflicts.join(', ')));\n            return _context.abrupt(\"return\");\n\n          case 4:\n            inputTerms = Object(_configs__WEBPACK_IMPORTED_MODULE_3__[\"getProgramTerms\"])();\n\n            if (inputTerms) {\n              _context.next = 9;\n              break;\n            }\n\n            _context.next = 8;\n            return Object(_promptTerms__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n          case 8:\n            inputTerms = _context.sent.inputTerms;\n\n          case 9:\n            if (!Object(_configs__WEBPACK_IMPORTED_MODULE_3__[\"termsValidate\"])(inputTerms)) {\n              _context.next = 12;\n              break;\n            }\n\n            Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"exitWithError\"])(_configs__WEBPACK_IMPORTED_MODULE_3__[\"termsErrorMessage\"]);\n            return _context.abrupt(\"return\");\n\n          case 12:\n            Object(_configs__WEBPACK_IMPORTED_MODULE_3__[\"setProgramTerms\"])(inputTerms);\n            Object(_configs__WEBPACK_IMPORTED_MODULE_3__[\"setDefaultTerms\"])(inputTerms);\n            _context.next = 16;\n            return Object(_cachesPrompt__WEBPACK_IMPORTED_MODULE_5__[\"handlePromptGroup\"])(program);\n\n          case 16:\n            groupsNameProgram = _context.sent;\n            _context.next = 19;\n            return Object(_cachesPrompt__WEBPACK_IMPORTED_MODULE_5__[\"handlePromptSites\"])(program, groupsNameProgram);\n\n          case 19:\n            sitesKey = _context.sent;\n            return _context.abrupt(\"return\", sitesKey);\n\n          case 21:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function prompt(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (prompt);\n\n//# sourceURL=webpack:///./src/prompt/index.js?");

/***/ }),

/***/ "./src/prompt/promptGroup.js":
/*!***********************************!*\
  !*** ./src/prompt/promptGroup.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inquirer */ \"inquirer\");\n/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inquirer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _groups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../groups */ \"./src/groups/index.js\");\n\n\n\n\n\nvar promptGroup = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt(\"return\", inquirer__WEBPACK_IMPORTED_MODULE_2___default.a.prompt([{\n              type: 'checkbox',\n              message: 'Select groups to search',\n              name: 'groupsName',\n              choices: _groups__WEBPACK_IMPORTED_MODULE_3__[\"groupsList\"],\n              validate: function validate(answer) {\n                if (answer.length < 1) {\n                  return 'You must choose at least one site.';\n                }\n\n                return true;\n              }\n            }]));\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function promptGroup() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (promptGroup);\n\n//# sourceURL=webpack:///./src/prompt/promptGroup.js?");

/***/ }),

/***/ "./src/prompt/promptSites.js":
/*!***********************************!*\
  !*** ./src/prompt/promptSites.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inquirer */ \"inquirer\");\n/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inquirer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _groups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../groups */ \"./src/groups/index.js\");\n/* harmony import */ var _sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sites */ \"./src/sites/index.js\");\n\n\n\n\n\n\nvar promptSites = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(groups) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            Object(_groups__WEBPACK_IMPORTED_MODULE_3__[\"configureGroups\"])(groups);\n            return _context.abrupt(\"return\", inquirer__WEBPACK_IMPORTED_MODULE_2___default.a.prompt([{\n              type: 'checkbox',\n              message: 'Select sites to search',\n              name: 'sitesName',\n              choices: Object(_sites__WEBPACK_IMPORTED_MODULE_4__[\"sitesFromGroups\"])(groups),\n              validate: function validate(answer) {\n                if (answer.length < 1) {\n                  return 'You must choose at least one site.';\n                }\n\n                return true;\n              }\n            }]));\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function promptSites(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (promptSites);\n\n//# sourceURL=webpack:///./src/prompt/promptSites.js?");

/***/ }),

/***/ "./src/prompt/promptTerms.js":
/*!***********************************!*\
  !*** ./src/prompt/promptTerms.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inquirer */ \"inquirer\");\n/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inquirer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n\n\n\n // import { groupsList } from '../groups';\n\nvar promptTerms = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt(\"return\", inquirer__WEBPACK_IMPORTED_MODULE_2___default.a.prompt([{\n              type: 'input',\n              message: 'Type the search terms',\n              name: 'inputTerms',\n              \"default\": function _default() {\n                return Object(_configs__WEBPACK_IMPORTED_MODULE_3__[\"getDefaultTerms\"])();\n              },\n              // choices: groupsList,\n              validate: function validate(answer) {\n                if (Object(_configs__WEBPACK_IMPORTED_MODULE_3__[\"termsValidate\"])(answer)) {\n                  return _configs__WEBPACK_IMPORTED_MODULE_3__[\"termsErrorMessage\"];\n                }\n\n                return true;\n              }\n            }]));\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function promptTerms() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (promptTerms);\n\n//# sourceURL=webpack:///./src/prompt/promptTerms.js?");

/***/ }),

/***/ "./src/sites/defaultSites.js":
/*!***********************************!*\
  !*** ./src/sites/defaultSites.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar defaltSites = {\n  stackoverflow: {\n    name: 'Stack Overflow',\n    url: 'https://stackoverflow.com/questions/',\n    checked: true,\n    \"default\": true,\n    // groups: [groups.communities],\n    groups: ['communities'] // initValue: [],\n\n  },\n  stackexchange: {\n    name: 'Stackexchange',\n    url: 'https://www.stackexchange.com',\n    checked: true,\n    \"default\": true,\n    groups: ['communities'] // groups: [groups.communities],\n\n  },\n  reddit: {\n    name: 'Reddit',\n    url: 'https://www.reddit.com/',\n    checked: true,\n    \"default\": true,\n    groups: ['communities'] // groups: [groups.communities],\n\n  },\n  quora: {\n    name: 'Quora',\n    url: 'https://www.quora.com/',\n    checked: true,\n    \"default\": true,\n    groups: ['communities'] // groups: [groups.communities],\n\n  },\n  devto: {\n    name: 'Dev.to – Community',\n    url: 'https://dev.to',\n    checked: false,\n    \"default\": false,\n    groups: ['communities', 'sites', 'blog'] // groups: [groups.communities],\n\n  },\n  hackernews: {\n    name: 'Hacker News',\n    url: 'https://news.ycombinator.com/',\n    checked: false,\n    \"default\": false,\n    groups: ['communities'] // groups: [groups.communities],\n\n  },\n  hackernoon: {\n    name: 'Hackernoon',\n    url: 'https://hackernoon.com',\n    checked: false,\n    \"default\": false,\n    groups: ['communities'] // groups: [groups.communities],\n\n  },\n  freecodecamp: {\n    name: 'freeCodeCamp',\n    url: 'https://www.freecodecamp.org/forum/',\n    checked: false,\n    \"default\": false,\n    groups: ['communities'] // groups: [groups.communities],\n\n  },\n  sitepoint: {\n    name: 'Site Point – Community',\n    url: 'https://www.sitepoint.com/',\n    checked: false,\n    \"default\": false,\n    groups: ['sites'] // groups: [groups.communities],\n\n  },\n  spectrum: {\n    name: 'Spectrum',\n    url: 'https://www.spectrum.chat/',\n    checked: false,\n    \"default\": false,\n    groups: ['communities'] // groups: [groups.communities],\n\n  },\n  codeproject: {\n    name: 'CodeProject',\n    url: 'https://www.codeproject.com/',\n    checked: false,\n    \"default\": false,\n    groups: ['communities'] // groups: [groups.communities],\n\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (defaltSites);\n\n//# sourceURL=webpack:///./src/sites/defaultSites.js?");

/***/ }),

/***/ "./src/sites/index.js":
/*!****************************!*\
  !*** ./src/sites/index.js ***!
  \****************************/
/*! exports provided: sitesName, sitesMap, setSitesStore, setDefaultSites, sitesMapByName, sitesMapByKey, sitesFromGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sitesName\", function() { return sitesName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sitesMap\", function() { return sitesMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSitesStore\", function() { return setSitesStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setDefaultSites\", function() { return setDefaultSites; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sitesMapByName\", function() { return sitesMapByName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sitesMapByKey\", function() { return sitesMapByKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sitesFromGroups\", function() { return sitesFromGroups; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _require = __webpack_require__(/*! ../store */ \"./src/store/index.js\"),\n    sitesStore = _require.sitesStore,\n    conf = _require.conf;\n\nvar _require2 = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\"),\n    objectToList = _require2.objectToList,\n    setPropertiesToDefaultFromListNames = _require2.setPropertiesToDefaultFromListNames,\n    setItemStore = _require2.setItemStore;\n\nvar sitesName = Object.entries(sitesStore).map(function (_ref) {\n  var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),\n      key = _ref2[0],\n      site = _ref2[1];\n\n  return site.name;\n});\nvar sitesMap = Object.entries(sitesStore);\nvar sitesList = objectToList(sitesStore);\nvar setSitesStore = function setSitesStore(_ref3) {\n  var _ref3$property = _ref3.property,\n      property = _ref3$property === void 0 ? '' : _ref3$property,\n      value = _ref3.value;\n  return setItemStore({\n    itemName: 'sites',\n    property: property,\n    value: value,\n    conf: conf\n  });\n};\n/**\n * Save as bulk operation. All sites objects.\n * @param {[string]} sites\n */\n\nvar setDefaultSites = function setDefaultSites(sites) {\n  setSitesStore({\n    value: setPropertiesToDefaultFromListNames({\n      listName: sites,\n      objStore: sitesStore,\n      properties: ['default', 'checked']\n    })\n  });\n};\nvar sitesMapByName = function sitesMapByName(names) {\n  return sitesMap.filter(function (_ref4) {\n    var _ref5 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, 2),\n        key = _ref5[0],\n        map = _ref5[1];\n\n    return names.some(function (name) {\n      return name === map.name;\n    });\n  });\n};\nvar sitesMapByKey = function sitesMapByKey(sitesKey) {\n  return Object.entries(sitesStore).filter(function (_ref6) {\n    var _ref7 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref6, 1),\n        keyStore = _ref7[0];\n\n    return sitesKey.some(function (siteKey) {\n      return siteKey === keyStore;\n    });\n  });\n};\n/**\n * Filter sites based on groups\n * @param {object} program commander package instance\n * @return {[object]} Sites List\n */\n\nvar sitesFromGroups = function sitesFromGroups(groups) {\n  return sitesList.filter(function (site) {\n    return groups.some(function (group) {\n      return site.groups.includes(group);\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/sites/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: conf, groupsStore, sitesStore, configsStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"groupsStore\", function() { return groupsStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sitesStore\", function() { return sitesStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configsStore\", function() { return configsStore; });\n/* harmony import */ var conf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! conf */ \"conf\");\n/* harmony import */ var conf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(conf__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sites_defaultSites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sites/defaultSites */ \"./src/sites/defaultSites.js\");\n/* harmony import */ var _groups_defaultGroups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../groups/defaultGroups */ \"./src/groups/defaultGroups.js\");\n/* harmony import */ var _utils_configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/configs */ \"./src/utils/configs.js\");\n/* harmony import */ var _instructions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instructions */ \"./src/store/instructions.js\");\n\n\n\n\n\nvar conf = new conf__WEBPACK_IMPORTED_MODULE_0___default.a({\n  defaults: {\n    instructions: _instructions__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    configs: _utils_configs__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    groups: _groups_defaultGroups__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    sites: _sites_defaultSites__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\nvar store = conf.store;\nvar groupsStore = store.groups;\nvar sitesStore = store.sites;\nvar configsStore = store.configs;\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/store/instructions.js":
/*!***********************************!*\
  !*** ./src/store/instructions.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar instructions = ['### BACKUP ### BACKUP ### BACKUP ###', 'PLease, BACKUP this file.', 'If you know what you\\'re doing, you can create groups and sites', '----------------------------------------', 'CACHE FILES – INSTRUCTIONS', '----------------------------------------', 'The new literal object must have all properties.', 'The default types vary.', 'Please look at the properties below as an example.'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (instructions);\n\n//# sourceURL=webpack:///./src/store/instructions.js?");

/***/ }),

/***/ "./src/utils/configs.js":
/*!******************************!*\
  !*** ./src/utils/configs.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar configs = {\n  defaultGroups: ['communities'],\n  urlBase: 'https://www.google.com/search?q=',\n  terms: 'intext:($)',\n  inurl: 'inurl:\"$\"'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (configs);\n\n//# sourceURL=webpack:///./src/utils/configs.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: lastArrayElement, isArrayEmpty, objectToList, exitWithError, listMatches, setItemStore, getItemStore, setMachedAsDefault, setPropertiesToDefaultFromListNames, hasOption, hasOptionsConflicts, urlQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lastArrayElement\", function() { return lastArrayElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArrayEmpty\", function() { return isArrayEmpty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"objectToList\", function() { return objectToList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exitWithError\", function() { return exitWithError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listMatches\", function() { return listMatches; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setItemStore\", function() { return setItemStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getItemStore\", function() { return getItemStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setMachedAsDefault\", function() { return setMachedAsDefault; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPropertiesToDefaultFromListNames\", function() { return setPropertiesToDefaultFromListNames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasOption\", function() { return hasOption; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasOptionsConflicts\", function() { return hasOptionsConflicts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"urlQuery\", function() { return urlQuery; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ \"querystring\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar lastArrayElement = function lastArrayElement(arr, index) {\n  return arr && arr.length - 1 === index;\n};\nvar isArrayEmpty = function isArrayEmpty(arr) {\n  return arr && arr.length <= 0;\n};\nvar objectToList = function objectToList(object) {\n  return Object.entries(object).map(function (_ref) {\n    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),\n        key = _ref2[0],\n        innerObject = _ref2[1];\n\n    return innerObject;\n  });\n};\nvar exitWithError = function exitWithError(text) {\n  console.error('Error:', text);\n  process.exit(1);\n};\nvar listMatches = function listMatches(list, maches) {\n  return list.find(function (item) {\n    return item === maches;\n  });\n};\n\nvar getOrSetQuery = function getOrSetQuery(itemName, property) {\n  var dot = property ? '.' : '';\n  return \"\".concat(itemName).concat(dot).concat(property);\n};\n\nvar setItemStore = function setItemStore(_ref3) {\n  var itemName = _ref3.itemName,\n      _ref3$property = _ref3.property,\n      property = _ref3$property === void 0 ? '' : _ref3$property,\n      value = _ref3.value,\n      conf = _ref3.conf;\n  var query = getOrSetQuery(itemName, property);\n  conf.set(query, value);\n};\nvar getItemStore = function getItemStore(_ref4) {\n  var itemName = _ref4.itemName,\n      _ref4$property = _ref4.property,\n      property = _ref4$property === void 0 ? '' : _ref4$property,\n      conf = _ref4.conf;\n  var query = getOrSetQuery(itemName, property);\n  conf.get(query);\n};\n\nvar setPropertiesValues = function setPropertiesValues(_ref5) {\n  var value = _ref5.value,\n      obj = _ref5.obj,\n      properties = _ref5.properties;\n  var objTemp = obj;\n  properties.forEach(function (property) {\n    objTemp[property] = value;\n  });\n  return objTemp;\n};\n/**\n * @param {{[string], object, object }}\n * @return object\n */\n\n\nvar setMachedAsDefault = function setMachedAsDefault(_ref6) {\n  var list = _ref6.list,\n      obj = _ref6.obj,\n      properties = _ref6.properties;\n\n  var setProperties = function setProperties(value) {\n    return setPropertiesValues({\n      value: value,\n      obj: obj,\n      properties: properties\n    });\n  };\n\n  var objTemp = {};\n\n  if (listMatches(list, obj.name)) {\n    objTemp = setProperties(true);\n  } else {\n    objTemp = setProperties(false);\n  }\n\n  return objTemp;\n};\n/**\n * Gets list of strings, Storage objects that matches obj.name, and properties to set\n *\n * @param {{listName: [string], objStore: {}, properties: [string]}\n * @return {{}} same object but with its properties set to save\n */\n\nvar setPropertiesToDefaultFromListNames = function setPropertiesToDefaultFromListNames(_ref7) {\n  var listName = _ref7.listName,\n      objStore = _ref7.objStore,\n      _ref7$properties = _ref7.properties,\n      properties = _ref7$properties === void 0 ? ['default'] : _ref7$properties;\n  var propertiesToSave = {};\n  Object.entries(objStore).forEach(function (_ref8) {\n    var _ref9 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref8, 2),\n        key = _ref9[0],\n        item = _ref9[1];\n\n    propertiesToSave[key] = setMachedAsDefault({\n      list: listName,\n      obj: item,\n      properties: properties\n    });\n  });\n  return propertiesToSave;\n};\nvar hasOption = function hasOption(option) {\n  return !!option;\n};\nvar hasOptionsConflicts = function hasOptionsConflicts(program) {\n  var conflicts = [['defaults', 'group']];\n  var options = Object.keys(program);\n  var optionsConflicts = []; // Encontra algum item (outro array) de conflicts...\n\n  var hasConflicts = conflicts.some( // Que todos elementos batam...\n  function (items) {\n    // re-initalizing for keep only the last\n    optionsConflicts = [];\n    return items.every( // Com algum elemento de options\n    function (item) {\n      // temp: keep only the matched\n      var found = options.find(function (opt) {\n        return item === opt;\n      });\n      optionsConflicts.push(found);\n      return !!found;\n    });\n  });\n  return {\n    hasConflicts: hasConflicts,\n    optionsConflicts: optionsConflicts\n  };\n};\nvar urlQuery = function urlQuery(terms, inurl) {\n  return querystring__WEBPACK_IMPORTED_MODULE_1___default.a.escape(\"\".concat(terms, \" \").concat(inurl));\n};\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "commander":
/*!****************************!*\
  !*** external "commander" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"commander\");\n\n//# sourceURL=webpack:///external_%22commander%22?");

/***/ }),

/***/ "conf":
/*!***********************!*\
  !*** external "conf" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"conf\");\n\n//# sourceURL=webpack:///external_%22conf%22?");

/***/ }),

/***/ "inquirer":
/*!***************************!*\
  !*** external "inquirer" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"inquirer\");\n\n//# sourceURL=webpack:///external_%22inquirer%22?");

/***/ }),

/***/ "open":
/*!***********************!*\
  !*** external "open" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"open\");\n\n//# sourceURL=webpack:///external_%22open%22?");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"querystring\");\n\n//# sourceURL=webpack:///external_%22querystring%22?");

/***/ })

/******/ });