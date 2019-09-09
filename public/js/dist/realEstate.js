(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        realEstate: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/components/realEstate.js", "vendors~realEstate" ]);
    return checkDeferredModules();
})({
    "./assets/js/components/Filter.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Filter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Joe\'\n    };\n    this.cities = this.cities.bind(this);\n    this.hometypes = this.hometypes.bind(this);\n    this.rooms = this.rooms.bind(this);\n    this.extras = this.extras.bind(this);\n  } //calls the populateForms function to populate the filter fields\n\n\n  componentWillMount() {\n    this.props.populateAction();\n  } // async test() {}\n  //populates the filter by city fields\n\n\n  cities() {\n    if (this.props.globalState.populateFormsData.cities != undefined) {\n      var {\n        cities\n      } = this.props.globalState.populateFormsData;\n      return cities.map(item => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n          key: item,\n          value: item\n        }, item);\n      });\n    }\n  } //populates the filter by home type fields\n\n\n  hometypes() {\n    if (this.props.globalState.populateFormsData.hometypes != undefined) {\n      var {\n        hometypes\n      } = this.props.globalState.populateFormsData;\n      return hometypes.map(item => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n          key: item,\n          value: item\n        }, item);\n      });\n    }\n  } //populates the filter by number of rooms fields\n\n\n  rooms() {\n    if (this.props.globalState.populateFormsData.rooms != undefined) {\n      var {\n        rooms\n      } = this.props.globalState.populateFormsData;\n      return rooms.map(item => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n          key: item,\n          value: item\n        }, item, "+ Br");\n      });\n    }\n  } //populates the filter by extra features (features like elavators and pools and gyms) fields\n\n\n  extras() {\n    if (this.props.globalState.populateFormsData.extras != undefined) {\n      var {\n        extras\n      } = this.props.globalState.populateFormsData;\n      return extras.map(item => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n          type: "checkbox",\n          key: item,\n          value: item,\n          name: item,\n          onChange: this.props.change\n        }));\n      });\n    }\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "filter"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "inside"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Filter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "city",\n      className: "title"\n    }, "City"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "city",\n      className: "filters city",\n      onChange: this.props.change\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "All"\n    }, "All"), this.cities()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "hometype",\n      className: "title"\n    }, "Home Type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "hometype",\n      className: "filters hometype",\n      onChange: this.props.change\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "All"\n    }, "All"), this.hometypes()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "rooms",\n      className: "title"\n    }, "Rooms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "rooms",\n      className: "filters rooms",\n      onChange: this.props.change\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "0"\n    }, "0+ Br"), this.rooms()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "filters price"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "title"\n    }, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "min_price",\n      className: "min_price",\n      value: this.props.globalState.min_price,\n      onChange: this.props.change\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "max_price",\n      className: "max_price",\n      value: this.props.globalState.max_price,\n      onChange: this.props.change\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "filters floor_space"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "title"\n    }, "Floor Space"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "min_floor_space",\n      className: "min_floor_space",\n      value: this.props.globalState.min_floor_space,\n      onChange: this.props.change\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "max_floor_space",\n      className: "max_floor_space",\n      value: this.props.globalState.max_floor_space,\n      onChange: this.props.change\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "filters extras"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "title"\n    }, "Extras"), this.extras())));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/Filter.js?');
    },
    "./assets/js/components/Header.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Joe\'\n    };\n  } // async test() {}\n\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "logo"\n    }, "Logo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#"\n    }, "create ads"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#"\n    }, "About us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#"\n    }, "log in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#",\n      className: "register-btn"\n    }, "Register")));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/Header.js?');
    },
    "./assets/js/components/Listings.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Listings; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Listings extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Joe\'\n    };\n    this.loopListings = this.loopListings.bind(this);\n  } // async test() {}\n\n\n  loopListings() {\n    const filteredData = this.props.globalState.filteredData; //checks if the there are actually properties in the filtered data in filteredData and\n    // if there is no property returns sorry your filter did not match any listings\n\n    if (filteredData === undefined || filteredData.length == 0) {\n      return \'Sorry your filter did not match any listing\';\n    } //if there are properties in filteredData, returns them to be rendered by the render method\n\n\n    return filteredData.map((listing, index) => {\n      if (this.props.globalState.view == \'box\') {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "col-xl-2 col-lg-3 col-md-4 col-sm-12",\n          key: index\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "listing"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "listing-img",\n          style: {\n            background: "url(\\"".concat(listing.image, "\\") no-repeat center center")\n          }\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "address"\n        }, listing.address), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "details"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "col-md-3"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "user-img"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "col-md-9"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "user-details"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "user-name"\n        }, "Nina Smith"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "listing-date"\n        }, "05/05/2019")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "listing-details"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "floor-space"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n          className: "fa fa-square-o",\n          "aria-hidden": "true"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " ", listing.floorSpace, " ft\\xB2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "rooms"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n          className: "fa fa-bed",\n          "aria-hidden": "true"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, listing.rooms, " rooms"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n          href: "#",\n          className: "view-link"\n        }, "View Listing")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "bottom-info"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "price"\n        }, "$", listing.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "location"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n          className: "fa fa-map-marker",\n          "aria-hidden": "true"\n        }), listing.city, ", ", listing.state))));\n      } else if (this.props.globalState.view == \'list\') {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "col-lg-6 col-md-6 col-sm-12",\n          key: index\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "listing"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "listing-img",\n          style: {\n            background: "url(\\"".concat(listing.image, "\\") no-repeat center center")\n          }\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "address"\n        }, listing.address), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "details"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "col-xl-3 col-lg-3 col-md-3 col-sm-3"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "user-img"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "col-xl-9 col-lg-9 col-md-9 col-sm-9"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "user-details"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "user-name"\n        }, "Nina Smith"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "listing-date"\n        }, "05/05/2019")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "listing-details"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "floor-space"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n          className: "fa fa-square-o",\n          "aria-hidden": "true"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " ", listing.floorSpace, " ft\\xB2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "rooms"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n          className: "fa fa-bed",\n          "aria-hidden": "true"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, listing.rooms, " rooms"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n          href: "#",\n          className: "view-link"\n        }, "View Listing")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "bottom-info"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "price"\n        }, "$", listing.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "location"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n          className: "fa fa-map-marker",\n          "aria-hidden": "true"\n        }), listing.city, ", ", listing.state))));\n      }\n    });\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "listings"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "search-area"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "search",\n      onChange: this.props.change\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "sortby-area"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "results"\n    }, this.props.globalState.filteredData.length, " results found"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "sort-options"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "sortby",\n      className: "sortby",\n      onChange: this.props.change\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "price-dsc"\n    }, "Lowest Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "price-asc"\n    }, "Highest Price")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "view"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fa fa-th-list",\n      name: "list",\n      "aria-hidden": "true",\n      onClick: this.props.changeView\n    }, "list"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fa fa-th",\n      name: "box",\n      "aria-hidden": "true",\n      onClick: this.props.changeView\n    }, "box")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "row"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "listings-results"\n    }, this.loopListings())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "pagination"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {\n      className: "pages"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Prev"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n      className: "active"\n    }, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Next"))));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/Listings.js?');
    },
    "./assets/js/components/realEstate.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.js */ "./assets/js/components/Header.js");\n/* harmony import */ var _Filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Filter.js */ "./assets/js/components/Filter.js");\n/* harmony import */ var _Listings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Listings.js */ "./assets/js/components/Listings.js");\n/* harmony import */ var _data_listingsData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/listingsData.js */ "./assets/js/data/listingsData.js");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Joe\',\n      listingsData: _data_listingsData_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],\n      city: \'All\',\n      hometype: \'All\',\n      rooms: 0,\n      min_price: 0,\n      max_price: 100000000,\n      min_floor_space: 0,\n      max_floor_space: 50000,\n      filteredData: _data_listingsData_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],\n      populateFormsData: \'\',\n      sortby: \'price-dsc\',\n      view: \'box\',\n      search: \'\'\n    };\n    this.change = this.change.bind(this);\n    this.filteredData = this.filteredData.bind(this);\n    this.populateForms = this.populateForms.bind(this);\n    this.changeView = this.changeView.bind(this);\n  }\n\n  test() {\n    return _asyncToGenerator(function* () {})();\n  } //onchange event handler. it assigns the value of the input fields to the corresponding\n  //field in this.state and calls filteredData()\n\n\n  change(event) {\n    var name = event.target.name;\n    var value = event.target.type === \'checkbox\' ? event.target.checked : event.target.value;\n    this.setState({\n      [name]: value\n    }, () => {\n      console.log(this.state);\n      this.filteredData();\n    });\n  } //sets the value of this.state.view to either list or box view to control the way\n  //the filtered results are displayed\n\n\n  changeView(event) {\n    this.setState({\n      view: event.target.getAttribute(\'name\')\n    });\n  } //assigns new values that matches the value of the input fields to filteredData\n  //which is then passed down as a prob to listings\n\n\n  filteredData() {\n    //filters the this.state.listingsData by this.state.min_price and max_price and\n    //this.state.min_floor_space and max_floor_space. the result is assigned\n    // to newData\n    var newData = this.state.listingsData.filter(item => {\n      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.rooms;\n    }); //checks if the user is trying to filter by city and if so further filters newData\n    // by this.state.city\n\n    if (this.state.city != \'All\') {\n      newData = newData.filter(item => {\n        return item.city == this.state.city;\n      });\n    } //checks if the user is trying to filter by home type and if so further filters newData\n    // by this.state.hometype\n\n\n    if (this.state.hometype != \'All\') {\n      newData = newData.filter(item => {\n        return item.hometype == this.state.hometype;\n      });\n    } //checks if the user is trying to filter by any of the extras fields and if so further filters newData\n    // by that field\n\n\n    this.state.populateFormsData.extras.map(extra => {\n      if (this.state[extra] == true) {\n        newData = newData.filter(item => {\n          return item.extras.includes(extra);\n        });\n      }\n    }); //checks if the user is trying to change the sorting order of the filter result and if so\n    //sorts the result according to the users preference (i still need to understand how exactly the sorting is performed)\n\n    if (this.state.sortby == \'price-dsc\') {\n      newData = newData.sort((a, b) => {\n        return a.price - b.price;\n      });\n    } else if (this.state.sortby == \'price-asc\') {\n      newData = newData.sort((a, b) => {\n        return b.price - a.price;\n      });\n    } //checks if the user is trying to use the search form to search for a property by either city,\n    //state,price,rooms,floorspace,hometype and if so further filters newData according to the search term\n\n\n    if (this.state.search != \'\') {\n      newData = newData.filter(item => {\n        var city = item.city.toLowerCase();\n        var state = item.state.toLowerCase();\n        var price = String(item.price);\n        var rooms = String(item.rooms);\n        var floorSpace = String(item.floorSpace);\n        var hometype = item.hometype.toLowerCase();\n        var searchText = this.state.search.toLowerCase();\n        var n = city.match(searchText) || state.match(searchText) || price.match(searchText) || rooms.match(searchText) || floorSpace.match(searchText) || hometype.match(searchText);\n\n        if (n != null) {\n          return true;\n        }\n      });\n    } //finally assigns the filtered data in newData to filteredData which will then be accessed\n    //through the global state by the listings component\n\n\n    this.setState({\n      filteredData: newData\n    });\n  } //this function populates the fields in the filter component with the appropriate\n  // data to be filtered by. for example lets say we have five properties which are located in only kansas and\n  //rosewood, this function makes sure that the filter by city section of the filter component contains only Kansas\n  // and rosewood as filter options thereby making our program dynamic\n\n\n  populateForms() {\n    var cities = [];\n    var hometypes = [];\n    var rooms = [];\n    var extras = [];\n    this.state.listingsData.map(item => {\n      cities.push(item.city);\n      hometypes.push(item.hometype);\n      rooms.push(item.rooms);\n      item.extras.map(item => {\n        extras.push(item);\n      });\n    });\n    cities = new Set(cities);\n    cities = [...cities];\n    cities = cities.sort();\n    hometypes = new Set(hometypes);\n    hometypes = [...hometypes];\n    hometypes = hometypes.sort();\n    rooms = new Set(rooms);\n    rooms = [...rooms];\n    rooms = rooms.sort();\n    extras = new Set(extras);\n    extras = [...extras];\n    extras = extras.sort(); //stores the filter field values in this.state to be accessed by functions in the filter component\n    //which access the values through the global state and do the actual work of populating the filter fields with the values\n\n    this.setState({\n      populateFormsData: {\n        hometypes,\n        cities,\n        rooms,\n        extras\n      }\n    }, () => {\n      console.log(this.state);\n    });\n  } //presorts the property listings according to price before mounting the component\n\n\n  componentWillMount() {\n    var listingsData = this.state.listingsData.sort((a, b) => {\n      return a.price - b.price;\n    });\n    this.setState({\n      listingsData\n    });\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "content-area"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Filter_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {\n      change: this.change,\n      globalState: this.state,\n      populateAction: this.populateForms\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Listings_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n      change: this.change,\n      globalState: this.state,\n      changeView: this.changeView\n    })));\n  }\n\n}\n\nconst app = document.getElementById(\'app\');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), app);\n\n//# sourceURL=webpack:///./assets/js/components/realEstate.js?');
    },
    "./assets/js/data/listingsData.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("var listingsData = [{\n  address: '20-34 grand ave',\n  city: 'Ridgewood',\n  state: 'NY',\n  rooms: 3,\n  price: 220000,\n  floorSpace: 2000,\n  extras: ['elavator', 'gym'],\n  hometype: 'Apartment',\n  image: '../../img/icons/mid-icon.png'\n}, {\n  address: '52 grand canyon',\n  city: 'Nevada',\n  state: 'LA',\n  rooms: 4,\n  price: 50000,\n  floorSpace: 4300,\n  extras: ['pool', 'park'],\n  hometype: 'Condor',\n  image: '../../img/icons/mid-icon.png'\n}, {\n  address: '20 central park',\n  city: 'Wolfstead',\n  state: 'TA',\n  rooms: 2,\n  price: 50000,\n  floorSpace: 3000,\n  extras: ['elavator', 'pool'],\n  hometype: 'Studio',\n  image: '../../img/icons/mid-icon.png'\n}, {\n  address: '37 Wall Street',\n  city: 'Kansas',\n  state: 'NY',\n  rooms: 3,\n  price: 2200000,\n  floorSpace: 2000,\n  extras: ['elavator', 'gym', 'pool'],\n  hometype: 'Office',\n  image: '../../img/icons/mid-icon.png'\n}, {\n  address: '44 Openhama Street',\n  city: 'West Virginia',\n  state: 'NY',\n  rooms: 4,\n  price: 20000,\n  floorSpace: 1000,\n  extras: ['elavator', 'gym', 'pool'],\n  hometype: 'Room',\n  image: '../../img/icons/mid-icon.png'\n}, {\n  address: '24 rosewood street',\n  city: 'Rosewood',\n  state: 'Texas',\n  rooms: 3,\n  price: 220000,\n  floorSpace: 2000,\n  extras: ['elavator', 'gym'],\n  hometype: 'Studio',\n  image: '../../img/icons/mid-icon.png'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (listingsData);\n\n//# sourceURL=webpack:///./assets/js/data/listingsData.js?");
    }
});