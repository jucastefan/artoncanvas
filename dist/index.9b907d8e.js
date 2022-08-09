// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hf6NL":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "9cee74fd9b907d8e";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"eECwp":[function(require,module,exports) {
"use strict";
var _HomeScreen = _interopRequireDefault(require("../views/HomeScreen.js"));
var _ProductScreen = _interopRequireDefault(require("../views/ProductScreen.js"));
var _utils = require("./utils.js");
var _Error404Screen = _interopRequireDefault(require("../views/Error404Screen.js"));
var _CartScreen = _interopRequireDefault(require("../views/CartScreen.js"));
var _SignInScreen = _interopRequireDefault(require("../views/SignInScreen.js"));
var _Header = _interopRequireDefault(require("../components/Header.js"));
var _RegisterScreen = _interopRequireDefault(require("../views/RegisterScreen.js"));
var _ProfileScreen = _interopRequireDefault(require("../views/ProfileScreen.js"));
var _ShippingScreen = _interopRequireDefault(require("../views/ShippingScreen.js"));
var _PaymentScreen = _interopRequireDefault(require("../views/PaymentScreen.js"));
var _PlaceOrderScreen = _interopRequireDefault(require("../views/PlaceOrderScreen.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
// import OrderScreen from "../views/OrderScreen.js";
var routes = {
    "/": _HomeScreen.default,
    "/product/:id": _ProductScreen.default,
    // "/order/:id": OrderScreen,
    "/cart/:id": _CartScreen.default,
    "/cart": _CartScreen.default,
    "/signin": _SignInScreen.default,
    "/register": _RegisterScreen.default,
    "/profile/:id": _ProfileScreen.default,
    "/shipping": _ShippingScreen.default,
    "/payment": _PaymentScreen.default,
    "/order": _PlaceOrderScreen.default
};
var router = /*#__PURE__*/ function() {
    var _ref = _asyncToGenerator(function*() {
        _utils.showLoading();
        var request = _utils.parseRequestUrl();
        var parseUrl = (request.resource ? "/".concat(request.resource) : "/") + (request.id ? "/:id" : "") + (request.verb ? "/".concat(request.verb) : "");
        var screen = routes[parseUrl] ? routes[parseUrl] : _Error404Screen.default;
        var main = document.getElementById("main-container");
        var sign = document.getElementById("singin");
        yield _Header.default.after_render();
        sign.innerHTML = yield _Header.default.render();
        main.innerHTML = yield screen.render();
        if (screen.after_render) yield screen.after_render();
        _utils.hideLoading();
    });
    return function router1() {
        return _ref.apply(this, arguments);
    };
}();
window.addEventListener("load", router);
window.addEventListener("haschange", router);

},{"../views/HomeScreen.js":"k1A5a","../views/ProductScreen.js":"lpjn1","./utils.js":"i5Umw","../views/Error404Screen.js":"5t2yc","../views/CartScreen.js":"C8Q7b","../views/SignInScreen.js":"eHYI5","../components/Header.js":"gTR18","../views/RegisterScreen.js":"1lXez","../views/ProfileScreen.js":"hebJY","../views/ShippingScreen.js":"a2WwZ","../views/PaymentScreen.js":"isnGE","../views/PlaceOrderScreen.js":"ccJY0"}],"k1A5a":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _utils = require("../js/utils.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var HomeScreen = {
    after_render: ()=>{
        var logo = document.querySelector(".navbar-brand");
        var btnShop = document.querySelector(".cart");
        btnShop.addEventListener("click", function() {
            document.location.hash = "/cart";
            window.location.reload();
        });
        logo.addEventListener("click", function() {
            document.location.hash = "/";
            window.location.reload();
        });
    },
    render: function() {
        var _render = _asyncToGenerator(function*() {
            _utils.showLoading();
            var res = yield fetch(" https://serene-sea-96098.herokuapp.com/api/product");
            _utils.hideLoading();
            if (!res || !res.ok) return "<div>Eroare</div>";
            var products = yield res.json();
            return "\n    <div class=\"row row-cols-1 row-cols-md-3 g-5 d-flex justify-content-center align-items-center\">\n         ".concat(products.map((product)=>"\n         <div class=\"col \">\n            <div class=\"card  d-flex bg-transparent justify-content-center align-items-center shadow-lg p-3 mb-4 bg-transparent bg-gradient rounded \">\n               <a id='pp' href=\"/#/product/".concat(product.id, "\" onClick=\"window.close();window.open('/#/product/").concat(product.id, "')\">\n                 <img src=\"").concat(product.img, ".png\" id=\"prod\" class=\"card-img-top img-thumbnail img-fluid mt-5 rounded pointer\" alt=\"").concat(product.tag, "\">\n               </a>\n               <div class=\"card-body\">\n                   <h6 class=\"card-title\">\uD83C\uDFF7\uFE0FPre\u021B: ").concat(product.price, "lei</h6>\n                   <a class='text-decoration-none text-dark h4'  href=\"/#/product/").concat(product.id, "\" target=\"_top\">\n                   <p class=\"card-text\">").concat(product.name, "</p>\n                   </a>\n                   \n                </div>\n             </div>   \n           </div>\n          ")
            ).join("\n"), "     \n       </div>\n       <div class=\"p-5\"></div>\n    ");
        });
        function render() {
            return _render.apply(this, arguments);
        }
        return render;
    }()
};
var _default = HomeScreen;
exports.default = _default;

},{"../js/utils.js":"i5Umw"}],"i5Umw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.redirectUser = exports.showMessage = exports.hideLoading = exports.showLoading = exports.rerender = exports.parseRequestUrl = void 0;
var _localStorage = require("./localStorage.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var parseRequestUrl = ()=>{
    var url = document.location.hash.toLowerCase();
    var request = url.split("/");
    return {
        resource: request[1],
        id: request[2],
        verb: request[3]
    };
};
exports.parseRequestUrl = parseRequestUrl;
var rerender = /*#__PURE__*/ function() {
    var _ref = _asyncToGenerator(function*(component) {
        document.getElementById("main-container").innerHTML = yield component.render();
        yield component.after_render();
    });
    return function rerender1(_x) {
        return _ref.apply(this, arguments);
    };
}();
exports.rerender = rerender;
var showLoading = ()=>{
    document.getElementById("loading-overlay").classList.add("active");
};
exports.showLoading = showLoading;
var hideLoading = ()=>{
    document.getElementById("loading-overlay").classList.remove("active");
};
exports.hideLoading = hideLoading;
var showMessage = (message, callback)=>{
    document.getElementById("message-overlay").innerHTML = "\n  \n  <div id='message-overlay-content'>\n     <div class=\"card text-center\" style=\"width: 23rem;\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-dark\">".concat(message, "</h5>\n          <button class='btn btn-danger bg-gradient' id='message-overlay-close-button'>\xCEnchide</button>\n        </div>\n     </div>\n  </div>\n \n  ");
    document.getElementById("message-overlay").classList.add("active");
    document.getElementById("message-overlay-close-button").addEventListener("click", ()=>{
        document.getElementById("message-overlay").classList.remove("active");
        if (callback) callback();
    });
};
exports.showMessage = showMessage;
var redirectUser = ()=>{
    if (_localStorage.getCartItems().length !== 0) document.location.hash = "/shipping";
    else document.location = "/";
};
exports.redirectUser = redirectUser;

},{"./localStorage.js":"1qCbc"}],"1qCbc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cleanCart = exports.setPayment = exports.getPayment = exports.setShipping = exports.getShipping = exports.getUserInfo = exports.clearUser = exports.setuserInfo = exports.setCartItems = exports.getCartItems = void 0;
var getCartItems = ()=>{
    var cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
    return cartItems;
};
exports.getCartItems = getCartItems;
var setCartItems = (cartItems)=>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
exports.setCartItems = setCartItems;
var setuserInfo = (_ref)=>{
    var { id ="" , name ="" , email ="" , password ="" , isAdmin =false  } = _ref;
    localStorage.setItem("userInfo", JSON.stringify({
        id,
        name,
        email,
        password,
        isAdmin
    }));
};
exports.setuserInfo = setuserInfo;
var clearUser = ()=>{
    localStorage.removeItem("userInfo");
};
exports.clearUser = clearUser;
var getUserInfo = ()=>{
    return localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : {
        name: "",
        email: "",
        password: ""
    };
};
exports.getUserInfo = getUserInfo;
var getShipping = ()=>{
    var shipping = localStorage.getItem("shipping") ? JSON.parse(localStorage.getItem("shipping")) : {
        adress: "",
        city: "",
        postalCode: "",
        country: ""
    };
    return shipping;
};
exports.getShipping = getShipping;
var setShipping = (_ref2)=>{
    var { adress ="" , city ="" , postalCode ="" , country =""  } = _ref2;
    localStorage.setItem("shipping", JSON.stringify({
        adress,
        city,
        postalCode,
        country
    }));
};
exports.setShipping = setShipping;
var getPayment = ()=>{
    var payment = localStorage.getItem("payment") ? JSON.parse(localStorage.getItem("payment")) : {
        paymentMethod: "Plata la ramburs"
    };
    return payment;
};
exports.getPayment = getPayment;
var setPayment = (_ref3)=>{
    var { paymentMethod ="card"  } = _ref3;
    localStorage.setItem("payment", JSON.stringify({
        paymentMethod
    }));
};
exports.setPayment = setPayment;
var cleanCart = ()=>{
    localStorage.removeItem("cartItems");
};
exports.cleanCart = cleanCart;

},{}],"lpjn1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _api = require("../js/api.js");
var _utils = require("../js/utils.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var ProductScreen = {
    after_render: ()=>{
        var request = _utils.parseRequestUrl();
        var btnCart = document.getElementById("btn1");
        var btnShop = document.querySelector(".cart");
        var btnSignin = document.querySelector("#singin");
        btnSignin.addEventListener("click", function() {
            document.location.hash = "/signin";
            window.location.reload();
        });
        btnCart.addEventListener("click", function() {
            if (document.location.hash = "/cart/".concat(request.id)) window.location.reload();
        });
        btnShop.addEventListener("click", function() {
            document.location.hash = "/cart";
            window.location.reload();
        });
    },
    render: function() {
        var _render = _asyncToGenerator(function*() {
            var request = _utils.parseRequestUrl();
            _utils.showLoading();
            var product = yield _api.getProduct(request.id);
            var pagination = document.querySelector(".pages-container");
            if (pagination) pagination.classList.remove("hidden-pages");
            _utils.hideLoading();
            return "\n    <a type=\"button\" href='/' onClick=\"window.close();window.open('/')\" id='backtoshop' class=\"btn bg-gradient btn-danger  mb-2 text-white position-absolute top-0 start-50 translate-middle-x\"><i class=\"fas fa-arrow-circle-left p-1\"></i>Inapoi<i class=\"fas fa-store p-1\"></i></a>\n    <div class=\"row row-cols-1 row-cols-md-3 g-5 d-flex justify-content-center align-items-center mt-4 \">\n         <div class=\"col pb-md-5  \">\n            <div class=\"card  d-flex bg-transparent w-60 justify-content-center align-items-center shadow-lg p-3 mb-4 bg-transparent bg-gradient rounded\">\n              \n                 <img src=\"".concat(product.img, ".png\" class=\"card-img-top img-thumbnail  img-fluid mt-4 pointer\" alt=\"").concat(product.tag, "\">\n               \n               <div class=\"card-body\">\n                   \n                </div>\n             </div>   \n           </div>\n           <div class=\"col mb-5\">\n            <div class=\"card  d-flex  justify-content-center align-items-center shadow-lg p-3 mb-4 bg-transparent bg-gradient rounded\">\n               <div class=\"card-body \">\n                   <h1 class=\"card-text\">").concat(product.name, "</h1>\n                   <p class=\"card-text\">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>\n                   <h3 class=\"card-title\">Pre\u021B: ").concat(product.price, "lei</h3>\n                   <h6 class=\"card-title succes text-muted\">\uD83D\uDFE2\xCEn stoc</h6>\n                \n                   <a type=\"button\" id=\"btn1\" class=\"btn btn-danger bg-gradient add-cart pointer\">Adaug\u0103 \xEEn co\u0219<i class=\"fas fa-plus p-1\"></i></a>\n                </div>\n             </div>   \n           </div>      \n       </div>\n       <div class=\"p-3\"></div>            \n    ");
        });
        function render() {
            return _render.apply(this, arguments);
        }
        return render;
    }()
};
var _default = ProductScreen;
exports.default = _default;

},{"../js/api.js":"7i9bW","../js/utils.js":"i5Umw"}],"7i9bW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createOrder = exports.update = exports.register = exports.signin = exports.getProduct = void 0;
var _config = require("./config.js");
var _localStorage = require("./localStorage.js");
var _utils = require("./utils.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var getProduct = /*#__PURE__*/ function() {
    var _ref = _asyncToGenerator(function*(id) {
        try {
            var res = yield fetch("".concat(_config.apiUrl, "/api/product/").concat(id));
            var data = yield res.json();
            if (!res.ok) throw new Error("".concat(data.message, " (").concat(res.status, ")"));
            return data;
        } catch (err) {
            console.log(err);
        }
    });
    return function getProduct1(_x) {
        return _ref.apply(this, arguments);
    };
}();
exports.getProduct = getProduct;
var signin = /*#__PURE__*/ function() {
    var _ref3 = _asyncToGenerator(function*(_ref2) {
        var { email , password  } = _ref2;
        try {
            var res = yield fetch("".concat(_config.apiUrl, "/signin"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            var data = yield res.json();
            if (password === "") _utils.showMessage("⚠️Introduceți o parolă!");
            else if (email === "") _utils.showMessage("⚠️Introduceți un e-mail!");
            if (!res.ok) throw new Error("".concat(data.message, " (").concat(res.status, ")"));
            return data;
        } catch (err) {
            _utils.showMessage("⚠️Conectarea nu a reușit");
        }
    });
    return function signin1(_x2) {
        return _ref3.apply(this, arguments);
    };
}();
exports.signin = signin;
var register = /*#__PURE__*/ function() {
    var _ref5 = _asyncToGenerator(function*(_ref4) {
        var { name , email , password  } = _ref4;
        try {
            var res = yield fetch("".concat(_config.apiUrl, "/register"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            });
            var data = yield res.json();
            if (password === "") _utils.showMessage("⚠️Introduceți o parolă!");
            else if (email === "") _utils.showMessage("⚠️Introduceți un e-mail!");
            else if (name === "") _utils.showMessage("⚠️Introduceți un nume!");
            return data;
        } catch (err) {
            _utils.showMessage("⚠️Inregistrarea nu a reușit");
        }
    });
    return function register1(_x3) {
        return _ref5.apply(this, arguments);
    };
}();
exports.register = register;
var update = /*#__PURE__*/ function() {
    var _ref7 = _asyncToGenerator(function*(_ref6) {
        var { name , email , password  } = _ref6;
        try {
            var { id  } = _localStorage.getUserInfo();
            var res = yield fetch("".concat(_config.apiUrl, "/profile/").concat(id), {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            });
            var data = yield res.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    });
    return function update1(_x4) {
        return _ref7.apply(this, arguments);
    };
}();
exports.update = update;
var createOrder = /*#__PURE__*/ function() {
    var _ref8 = _asyncToGenerator(function*(order) {
        try {
            var res = yield fetch("".concat(_config.apiUrl, "/api/order"), {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(order)
            });
            var data = yield res.json();
            console.log(data);
            if (res.ok) _utils.showMessage("✌️Comanda a fost plasată!");
            return data;
        } catch (err) {
            return {
                error: err.res ? err.res.data.message : err.message
            };
        }
    });
    return function createOrder1(_x5) {
        return _ref8.apply(this, arguments);
    };
}();
exports.createOrder = createOrder;

},{"./config.js":"beA2m","./localStorage.js":"1qCbc","./utils.js":"i5Umw"}],"beA2m":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.apiUrl = void 0;
var apiUrl = " https://serene-sea-96098.herokuapp.com";
exports.apiUrl = apiUrl;

},{}],"5t2yc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var Error404Screen = {
    render: ()=>{
        return "<div>Eroare</div>";
    }
};
var _default = Error404Screen;
exports.default = _default;

},{}],"C8Q7b":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _api = require("../js/api.js");
var _localStorage = require("../js/localStorage.js");
var _utils = require("../js/utils.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var addToCart = function addToCart1(item) {
    var forceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var cartItems = _localStorage.getCartItems();
    var existItem = cartItems.find((x)=>x.product === item.product
    );
    if (existItem) {
        if (forceUpdate) cartItems = cartItems.map((x)=>x.product === existItem.product ? item : x
        );
    } else cartItems = [
        ...cartItems,
        item
    ];
    _localStorage.setCartItems(cartItems);
    if (forceUpdate) _utils.rerender(CartScreen);
};
var removeFromCart = (id)=>{
    var items = JSON.parse(localStorage.getItem("cartItems"));
    _localStorage.setCartItems(items.filter((x)=>x.product === id
    ));
    if (id === _utils.parseRequestUrl().id) {
        document.location.hash = "/cart";
        window.location.reload();
    } else _utils.rerender(CartScreen);
};
var CartScreen = {
    after_render: ()=>{
        var btnSignin = document.querySelector("#singin");
        btnSignin.addEventListener("click", function() {
            document.location.hash = "/signin";
            window.location.reload();
        });
        var qtySelects = document.getElementsByClassName("qty-select");
        Array.from(qtySelects).forEach((qtySelect)=>{
            var items = JSON.parse(localStorage.getItem("cartItems"));
            var item = items.find((x)=>x.product === qtySelect.id
            );
            qtySelect.addEventListener("change", (e)=>{
                addToCart(_objectSpread(_objectSpread({
                }, item), {
                }, {
                    qty: Number(e.target.value)
                }), true);
            });
        });
        var deleteButtons = document.getElementsByClassName("delete-button");
        Array.from(deleteButtons).forEach((deleteButton)=>{
            deleteButton.addEventListener("click", ()=>{
                removeFromCart(deleteButton.id);
            });
        });
    },
    render: function() {
        var _render = _asyncToGenerator(function*() {
            var request = _utils.parseRequestUrl();
            if (request.id) {
                var product = yield _api.getProduct(request.id);
                addToCart({
                    product: product.id,
                    name: product.name,
                    image: product.img,
                    price: product.price,
                    countInStock: product.countInStock,
                    qty: 1
                });
            }
            var cartItems = _localStorage.getCartItems();
            return "\n    <div class=\"content cart position-relative\">\n      <div class=\"cart-list mt-5\">\n        <ul class=\"cart-list-container\">\n          <li>\n            <h3>Co\u0219ul meu</h3>\n            <div id=\"prt\">\uD83C\uDFF7\uFE0FPre\u021B</div>\n          </li>\n          ".concat(cartItems.length === 0 ? "<div class=\"h2\">Co\u0219ul este gol\uD83D\uDE14</div>" : cartItems.map((item)=>"\n            <li>\n              <div class=\"cart-image\">\n                <img src=\"".concat(item.image, ".png\" alt=\"").concat(item.name, "\" />\n              </div>\n              <div class=\"cart-name\">\n                <div>\n                  <a class=\"text-decoration-none text-dark\" href=\"/#/product/").concat(item.product, "\">\n                    ").concat(item.name, "\n                  </a>\n                </div>\n                <div>\n                \uD83D\uDCE6Cantitate: \n                  <select class=\"qty-select\" id=\"").concat(item.product, "\">\n                  ").concat([
                    ...Array(item.countInStock).keys()
                ].map((x)=>item.qty === x + 1 ? "<option selected value=\"".concat(x + 1, "\">").concat(x + 1, "</option>") : "<option value=\"".concat(x + 1, "\">").concat(x + 1, "</option>")
                ), "</select>\n                  <button type=\"button\" class=\"delete-button btn bg-gradient btn-danger text-white\" id=\"").concat(item.product, "\">\n                  \uD83D\uDDD1\uFE0F\u0218terge\n                  </button>\n                </div>\n              </div>\n              <div class=\"cart-price\">\n                ").concat(item.price, "lei\n              </div>\n            </li>\n            ")
            ).join("\n"), " \n        </ul>\n      </div>\n      <a type=\"button\" id='backtoshop' href=\"/\" class=\"btn bg-gradient btn-danger mb-5 text-white position-absolute top-0 start-50 translate-middle-x\"><i class=\"fas fa-arrow-circle-left p-1\"></i>Inapoi<i class=\"fas fa-store p-1\"></i></a>\n      <div class=\"cart-action mt-5 shadow-lg p-4 mb-5 bg-transparent bg-gradient rounded\">\n          <h3>\n          \uD83D\uDCCBTotal (").concat(cartItems.reduce((a, c)=>a + c.qty
            , 0), " produse)\n             :\n             ").concat(cartItems.reduce((a, c)=>a + c.price * c.qty
            , 0), "lei\n          </h3>\n          ").concat(localStorage.getItem("userInfo") ? "<button\n                type=\"button\"\n                id=\"checkout-button\"\n                onClick=\"window.close();window.open('/#/shipping')\"\n                class=\"primary fw btn bg-gradient btn-danger text-white\"\n              >\n                Comand\u0103\n              </button>" : "<button\n                type=\"button\"\n                id=\"checkout-button\"\n                onClick=\"window.close();window.open('/#/signin')\"\n                class=\"primary fw btn bg-gradient  btn-danger text-white\"\n              >\n                Comand\u0103\n              </button>", "\n      </div>\n  \n</div>\n<div class=\"p-3\"></div>\n\n    ");
        });
        function render() {
            return _render.apply(this, arguments);
        }
        return render;
    }()
};
var _default = CartScreen;
exports.default = _default;

},{"../js/api.js":"7i9bW","../js/localStorage.js":"1qCbc","../js/utils.js":"i5Umw"}],"eHYI5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _api = require("../js/api.js");
var _localStorage = require("../js/localStorage.js");
var _utils = require("../js/utils.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var SignInScreen = {
    after_render: ()=>{
        var btnShop = document.querySelector(".cart");
        var signInForm = document.getElementById("signin-form");
        var reg = document.getElementById("reg");
        reg.addEventListener("click", function() {
            document.location.hash = "/register";
            window.location.reload();
        });
        btnShop.addEventListener("click", function() {
            document.location.hash = "/cart";
            window.location.reload();
        });
        signInForm.addEventListener("submit", /*#__PURE__*/ function() {
            var _ref = _asyncToGenerator(function*(e) {
                e.preventDefault();
                _utils.showLoading();
                var data = yield _api.signin({
                    email: document.getElementById("InputEmail").value,
                    password: document.getElementById("InputPassword").value
                });
                _utils.hideLoading();
                var email = document.getElementById("InputEmail").value;
                var password = document.getElementById("InputPassword").value;
                if (password === "") _utils.showMessage("⚠️Introduceți o parolă!");
                else if (email === "") _utils.showMessage("⚠️Introduceți un e-mail!");
                if (data.error) alert("Invalid");
                else {
                    _localStorage.setuserInfo(data);
                    _utils.redirectUser();
                    _utils.showMessage("✔️Autentificarea a reușit!");
                }
            });
            return function(_x) {
                return _ref.apply(this, arguments);
            };
        }());
    },
    render: ()=>{
        if (_localStorage.getUserInfo().name) _utils.redirectUser();
        return "\n   <div class='container container-signin shadow-lg p-5 mb-5 bg-transparent bg-gradient rounded position-relative '>\n   <h6 class='text-muted'>\uD83D\uDC4B\uD83C\uDFFBPentru a putea achzi\u021Biona un produs este necesar\u0103 autentificarea</h6>\n    <form id='signin-form'>\n      <div class=\"mb-3\">\n        <label for=\"InputEmail\" class=\"form-label\">E-mail:</label>\n        <input type=\"email\" class=\"form-control\" id=\"InputEmail\" aria-describedby=\"emailHelp\">\n      </div>\n      <div class=\"mb-3\">\n          <label for=\"InputPassword\" class=\"form-label\">Parol\u0103:</label>\n          <input type=\"password\" class=\"form-control\" id=\"InputPassword\">\n      </div>\n      \n      <button type=\"submit\" class=\"btn btn-danger  bg-gradient mb-3\">Conecteaz\u0103-te</button>\n      \n    </form>\n    <a href=\"/#/signin\" id='reg' class=\"link-danger\">\uD83D\uDE1CNu ai cont? \xCEnregistreaz\u0103-te aici!</a>\n   </div> \n   <div class=\"p-3\"></div>\n    ";
    }
};
var _default = SignInScreen;
exports.default = _default;

},{"../js/api.js":"7i9bW","../js/localStorage.js":"1qCbc","../js/utils.js":"i5Umw"}],"gTR18":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _localStorage = require("../js/localStorage.js");
var Header = {
    render: ()=>{
        var { id , name  } = _localStorage.getUserInfo();
        return "\n    ".concat(name ? "<a href=\"/#/profile/".concat(id, "\" onClick=\"window.close();window.open('/#/profile/").concat(id, "')\" id='singin'>\n    <button\n     type=\"button\"\n     class=\"btn btn-transparent pe-4\"\n     data-bs-toggle=\"modal\"\n     data-bs-target=\"#login\"\n     >\n         <span id=\"cont\">").concat(name, "</span><i class=\"fas fa-user ps-1 me-auto\"></i>\n     </button>  \n </a>") : "<a href=\"/#/signin\" onClick=\"window.close();window.open('/#/signin')\" id='singin'>\n <button\n  type=\"button\"\n  class=\"btn btn-transparent pe-4\"\n  data-bs-toggle=\"modal\"\n  data-bs-target=\"#login\"\n  >\n      <span id=\"cont\">Contul t\u0103u</span><i class=\"fas fa-sign-in-alt ps-1 me-auto\"></i>\n  </button>  \n</a>", "           \n    ");
    },
    after_render: ()=>{
    }
};
var _default = Header;
exports.default = _default;

},{"../js/localStorage.js":"1qCbc"}],"1lXez":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _api = require("../js/api.js");
var _localStorage = require("../js/localStorage.js");
var _utils = require("../js/utils.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var RegisterScreen = {
    after_render: ()=>{
        var btnShop = document.querySelector(".cart");
        var registerForm = document.getElementById("register-form");
        btnShop.addEventListener("click", function() {
            document.location.hash = "/cart";
            window.location.reload();
        });
        registerForm.addEventListener("submit", /*#__PURE__*/ function() {
            var _ref = _asyncToGenerator(function*(e) {
                e.preventDefault();
                _utils.showLoading();
                var data = yield _api.register({
                    name: document.getElementById("InputName").value,
                    email: document.getElementById("InputEmail").value,
                    password: document.getElementById("InputPassword").value
                });
                _utils.hideLoading();
                var email = document.getElementById("InputEmail").value;
                var password = document.getElementById("InputPassword").value;
                var name = document.getElementById("InputName").value;
                if (data.error) alert("Invalid");
                else {
                    _utils.showMessage("✔️Inregistrarea a reușit!");
                    _localStorage.setuserInfo(data);
                    if (password === "") _utils.showMessage("⚠️Introduceți o parolă!");
                    else if (email === "") _utils.showMessage("⚠️Introduceți un e-mail!");
                    else if (name === "") _utils.showMessage("⚠️Introduceți un nume!");
                    _utils.redirectUser();
                }
            });
            return function(_x) {
                return _ref.apply(this, arguments);
            };
        }());
    },
    render: ()=>{
        if (_localStorage.getUserInfo().name) _utils.redirectUser();
        return "\n   <div class='container container-register shadow-lg p-5 mb-5 bg-transparent bg-gradient rounded position-relative '> \n    <form id='register-form'>\n    <div class=\"mb-3\">\n        <label for=\"InputName\" class=\"form-label\">Nume:</label>\n        <input type=\"name\" class=\"form-control\" id=\"InputName\">\n      </div>\n      <div class=\"mb-3>\n        <label for=\"InputEmail\" class=\"form-label\">E-mail:</label>\n        <input type=\"email\" class=\"form-control\" id=\"InputEmail\" aria-describedby=\"emailHelp\">\n      </div>\n      <div class=\"mb-3\">\n          <label for=\"InputPassword\" class=\"form-label\">Parol\u0103:</label>\n          <input type=\"password\" class=\"form-control\" id=\"InputPassword\">\n      </div>\n      <div class=\"mb-3\">\n          <label for=\"repassword\" class=\"form-label\">Confirmare parol\u0103:</label>\n          <input type=\"password\" class=\"form-control\" id=\"repassword\">\n      </div>\n      \n      <button type=\"submit\"  class=\"btn btn-danger bg-gradient mb-3\">\xCEnregistreaz\u0103-te</button>\n    </form>\n    <a href=\"/#/signin\"  onClick=\"window.close();window.open('/#/signin')\" class=\"link-danger pointer\">\uD83D\uDC49Ai cont deja? Intr\u0103 aici!</a>\n   </div> \n    ";
    }
};
var _default = RegisterScreen;
exports.default = _default;

},{"../js/api.js":"7i9bW","../js/localStorage.js":"1qCbc","../js/utils.js":"i5Umw"}],"hebJY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _api = require("../js/api.js");
var _localStorage = require("../js/localStorage.js");
var _utils = require("../js/utils.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var ProfileScreen = {
    after_render: ()=>{
        var logout = document.getElementById("signout");
        var btnShop = document.querySelector(".cart");
        var profileForm = document.getElementById("profile-form");
        logout.addEventListener("click", function() {
            document.location.hash = "/";
            window.location.reload();
            _localStorage.clearUser();
        });
        btnShop.addEventListener("click", function() {
            document.location.hash = "/cart";
            window.location.reload();
        });
        profileForm.addEventListener("submit", /*#__PURE__*/ function() {
            var _ref = _asyncToGenerator(function*(e) {
                e.preventDefault();
                _utils.showLoading();
                var data = yield _api.update({
                    name: String(document.getElementById("InputName").value),
                    email: String(document.getElementById("InputEmail").value),
                    password: String(document.getElementById("InputPassword").value)
                });
                _utils.hideLoading();
                if (data.error) alert(data.error);
                else {
                    _localStorage.setuserInfo(data);
                    document.location.hash = "/signin";
                    _utils.redirectUser();
                    showMessage("✔️Schimbarea a fost efectuata!");
                }
            });
            return function(_x) {
                return _ref.apply(this, arguments);
            };
        }());
    },
    render: ()=>{
        var { name , email  } = _localStorage.getUserInfo();
        if (!name) document.location.hash = "/";
        return "\n   <div class='container container-register shadow-lg p-5 mb-5 bg-transparent bg-gradient rounded position-relative '> \n   <h6 class='text-muted'>\uD83D\uDC4B\uD83C\uDFFBAici po\u021Bi schimba numele, e-mailul sau parola.</h6>\n    <form id='profile-form'>\n    <div class=\"mb-3\">\n        <label for=\"InputName\" class=\"form-label\">Nume:</label>\n        <input type=\"name\" class=\"form-control\" value=\"".concat(name, "\" id=\"InputName\">\n      </div>\n      <div class=\"mb-3>\n        <label for=\"InputEmail\" class=\"form-label\">Email:</label>\n        <input type=\"email\" class=\"form-control\" id=\"InputEmail\" value=\"").concat(email, "\" aria-describedby=\"emailHelp\">\n      </div>\n      <div class=\"mb-3\">\n          <label for=\"InputPassword\" class=\"form-label\">Parol\u0103:</label>\n          <input type=\"password\" class=\"form-control\" id=\"InputPassword\">\n      </div>\n      \n      <button type=\"submit\" class=\"btn btn-danger bg-danger bg-gradient mb-3\">Schimb\u0103</button>\n      <button type=\"button\"  id='signout' class=\"btn btn-danger bg-danger bg-gradient mb-3\">Delogheaz\u0103-te</button>\n    </form>\n\n   </div> \n   <div class=\"p-3\"></div>\n    ");
    }
};
var _default = ProfileScreen;
exports.default = _default;

},{"../js/api.js":"7i9bW","../js/localStorage.js":"1qCbc","../js/utils.js":"i5Umw"}],"a2WwZ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _CheckOutSteps = _interopRequireDefault(require("../components/CheckOutSteps.js"));
var _localStorage = require("../js/localStorage.js");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var ShippingScreen = {
    after_render: ()=>{
        var btnShop = document.querySelector(".cart");
        var shoppingForm = document.getElementById("shipping-form");
        btnShop.addEventListener("click", function() {
            document.location.hash = "/cart";
            window.location.reload();
        });
        shoppingForm.addEventListener("submit", /*#__PURE__*/ function() {
            var _ref = _asyncToGenerator(function*(e) {
                e.preventDefault();
                _localStorage.setShipping({
                    adress: document.getElementById("adress").value,
                    city: document.getElementById("city").value,
                    postalCode: document.getElementById("postalcode").value,
                    country: document.getElementById("country").value
                });
                document.location.hash = "/shipping";
            });
            return function(_x) {
                return _ref.apply(this, arguments);
            };
        }());
        console.log(document.getElementById("adress").value);
    },
    render: ()=>{
        var { name  } = _localStorage.getUserInfo();
        if (!name) document.location.hash = "/";
        var { adress , city , postalCode , country  } = _localStorage.getShipping();
        return "\n    ".concat(_CheckOutSteps.default.render({
            step1: true,
            step2: true
        }), "\n   <div class='container container-shipping shadow-lg p-5 mb-5 bg-transparent bg-gradient rounded position-relative '> \n    <form id='shipping-form'>\n    <div class=\"mb-3\">\n        <label for=\"adress\" class=\"form-label\">Adres\u0103:</label>\n        <input type=\"text\" class=\"form-control\" value=\"").concat(adress, "\" id=\"adress\">\n      </div>\n      <div class=\"mb-3\">\n        <label for=\"country\" class=\"form-label\">Jude\u021B:</label>\n        <input type=\"country\" class=\"form-control\" value=\"").concat(country, "\" id=\"country\">\n      </div>\n      <div class=\"mb-3\">\n        <label for=\"city\" class=\"form-label\">Ora\u0219:</label>\n        <input type=\"text\" class=\"form-control\" value=\"").concat(city, "\" id=\"city\">\n      </div>\n      <div class=\"mb-3\">\n      <label for=\"postalcode\" class=\"form-label\">Codul po\u0219tal:</label>\n      <input type=\"text\" class=\"form-control\" value=\"").concat(postalCode, "\" id=\"postalcode\">\n    </div>\n     <button type=\"submit\" onClick=\"window.close();window.open('/#/payment')\" class=\"btn btn-danger  bg-gradient\">Continu\u0103</button>\n    </form>\n\n   </div>\n    <div class=\"p-3\"></div>\n    ");
    }
};
var _default = ShippingScreen;
exports.default = _default;

},{"../components/CheckOutSteps.js":"3OuEc","../js/localStorage.js":"1qCbc"}],"3OuEc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var CheckoutSteps = {
    render: (props)=>{
        return "\n        <div class=\"container-fluid checkout-steps \">\n          <div class=\"".concat(props.step1 ? "active" : "", "\">Logare</div>\n          <div class=\"").concat(props.step2 ? "active" : "", "\">Info</div>\n          <div class=\"").concat(props.step3 ? "active" : "", "\">Plat\u0103</div>\n          <div class=\"").concat(props.step4 ? "active" : "", "\">Comand\u0103</div>\n        </div>\n        ");
    }
};
var _default = CheckoutSteps;
exports.default = _default;

},{}],"isnGE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _CheckOutSteps = _interopRequireDefault(require("../components/CheckOutSteps.js"));
var _localStorage = require("../js/localStorage.js");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var PaymentScreen = {
    after_render: ()=>{
        var btnShop = document.querySelector(".cart");
        var shoppingForm = document.getElementById("payment-form");
        btnShop.addEventListener("click", function() {
            document.location.hash = "/cart";
            window.location.reload();
        });
        shoppingForm.addEventListener("submit", /*#__PURE__*/ function() {
            var _ref = _asyncToGenerator(function*(e) {
                e.preventDefault();
                var paymentMethod = document.querySelector("input[name='payment-method:checked']").value;
                _localStorage.setPayment({
                    paymentMethod
                });
                document.location.hash = "/placeorder";
            });
            return function(_x) {
                return _ref.apply(this, arguments);
            };
        }());
    },
    render: ()=>{
        var { name  } = _localStorage.getUserInfo();
        if (!name) document.location.hash = "/";
        return "\n    ".concat(_CheckOutSteps.default.render({
            step1: true,
            step2: true,
            step3: true
        }), "\n   <div class='container container-payment shadow-lg mt-4 p-5 mb-3 bg-transparent bg-gradient rounded position-relative  '> \n    <form id='payment-form'>\n    <ul class=\"form-items\">\n    <li>\n      <div>\n        <input type=\"radio\"\n        name=\"payment-method\"\n        id=\"card\"\n        value=\"Card\"\n        checked />\n        <label for=\"card\" >\uD83D\uDCB3Card</label>\n       </div> \n    </li>\n    <li>\n    <div>\n      <input type=\"radio\"\n      name=\"payment-method\"\n      id=\"cash\"\n      value=\"Cash\"\n       />\n      <label for=\"cash\" >\uD83D\uDCB6Plata la ramburs</label>\n     </div> \n  </li> \n  </ul>\n       <button type=\"submit\"  onClick=\"window.close();window.open('/#/order')\" class=\"btn btn-danger  bg-gradient\">Continu\u0103</button>\n    </form>\n\n   </div> \n    ");
    }
};
var _default = PaymentScreen;
exports.default = _default;

},{"../components/CheckOutSteps.js":"3OuEc","../js/localStorage.js":"1qCbc"}],"ccJY0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _localStorage = require("../js/localStorage.js");
var _CheckOutSteps = _interopRequireDefault(require("../components/CheckOutSteps.js"));
var _utils = require("../js/utils.js");
var _api = require("../js/api.js");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var convertCartToOrder = ()=>{
    var orderItems = _localStorage.getCartItems();
    if (orderItems.length === 0) document.location.hash = "/cart";
    var shipping = _localStorage.getShipping();
    if (!shipping.adress) document.location = "/shipping";
    var payment = _localStorage.getPayment();
    if (!payment.paymentMethod) document.location.hash = "/payment";
    var itemsPrice = orderItems.reduce((a, c)=>a + c.price * c.qty
    , 0);
    var shippingPrice = itemsPrice > 100 ? 0 : 10;
    var taxPrice = Math.round(0.15 * itemsPrice * 100) / 100;
    var totalPrice = itemsPrice + shippingPrice + taxPrice;
    return {
        orderItems,
        shipping,
        payment,
        shippingPrice,
        taxPrice,
        itemsPrice,
        totalPrice
    };
};
var PlaceOrderScreen = {
    after_render: function() {
        var _after_render = _asyncToGenerator(function*() {
            document.getElementById("placeorder-button").addEventListener("click", /*#__PURE__*/ _asyncToGenerator(function*() {
                var order = convertCartToOrder();
                console.log(order);
                _utils.showLoading();
                var data = yield _api.createOrder(order);
                _utils.hideLoading();
                if (data.error) _utils.showMessage(data.error);
                else _localStorage.cleanCart();
            }));
        });
        function after_render() {
            return _after_render.apply(this, arguments);
        }
        return after_render;
    }(),
    render: ()=>{
        var { orderItems , shipping , payment , itemsPrice , shippingPrice , taxPrice , totalPrice  } = convertCartToOrder();
        return "\n    <div>\n      ".concat(_CheckOutSteps.default.render({
            step1: true,
            step2: true,
            step3: true,
            step4: true
        }), "\n      <div class=\"order shadow-lg p-4 mb-5 bg-transparent bg-gradient rounded\">\n        <div class=\"order-info container\">\n          <div >\n            <h2>Adresa de plat\u0103</h2>\n            <div>\n            ").concat(String(shipping.adress), ", ").concat(shipping.city, ", ").concat(shipping.postalCode, ", \n            ").concat(shipping.country, "\n            </div>\n          </div>\n          <div>\n            <h2>Metoda de plat\u0103</h2>\n            <div class=\"h4\">\n              ").concat(payment.paymentMethod, "\n            </div>\n          </div>\n          <div>\n            <ul class=\"cart-list-container \">\n              <li>\n                <h2>Co\u0219ul t\u0103u</h2>\n                <div id=\"prt\">\uD83C\uDFF7\uFE0FPre\u021B</div>\n              </li>\n              ").concat(orderItems.map((item)=>"\n                <li>\n                  <div class=\"cart-image\">\n                    <img src=\"".concat(item.image, ".png\" alt=\"").concat(item.tag, "\" />\n                  </div>\n                  <div class=\"cart-name\">\n                    <div>\n                      <a class=\"text-decoration-none text-dark h3\" href=\"/#/product/").concat(item.product, "\">").concat(item.name, " </a>\n                    </div>\n                    <div> Cantitate: ").concat(item.qty, " </div>\n                  </div>\n                  <div class=\"cart-price\"> ").concat(item.price, "lei</div>\n                </li>\n                ")
        ).join("\n"), "\n            </ul>\n          </div>\n        </div>\n        <div class=\"order-action\">\n           <ul class=\"position-relative\">\n                <li>\n                  <h2>Sumar comand\u0103</h2>\n                 </li>\n                 <li><div>\uD83E\uDDFEProduse</div><div>").concat(itemsPrice, "lei</div></li>\n                 <li><div>\uD83D\uDE9ATax\u0103 curier</div><div>").concat(shippingPrice, "lei</div></li>\n                 <li class=\"total text-dark\"><div>Total</div><div>").concat(totalPrice, "lei</div></li> \n                 <li>\n                 <button id=\"placeorder-button\" class=\"primary fw btn btn-danger  bg-gradient position-absolute top-100 start-50 translate-middle\">\n                 Plaseaz\u0103 comanda\n                 </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"p-3\"></div>\n    ");
    }
};
var _default = PlaceOrderScreen;
exports.default = _default;

},{"../js/localStorage.js":"1qCbc","../components/CheckOutSteps.js":"3OuEc","../js/utils.js":"i5Umw","../js/api.js":"7i9bW"}]},["hf6NL","eECwp"], "eECwp", "parcelRequire208e")

//# sourceMappingURL=index.9b907d8e.js.map
