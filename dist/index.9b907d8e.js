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
// import OrderScreen from "../views/OrderScreen.js";
const routes = {
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
const router = async ()=>{
    _utils.showLoading();
    const request = _utils.parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : "/") + (request.id ? "/:id" : "") + (request.verb ? `/${request.verb}` : "");
    const screen = routes[parseUrl] ? routes[parseUrl] : _Error404Screen.default;
    const main = document.getElementById("main-container");
    const sign = document.getElementById("singin");
    await _Header.default.after_render();
    sign.innerHTML = await _Header.default.render();
    main.innerHTML = await screen.render();
    if (screen.after_render) await screen.after_render();
    _utils.hideLoading();
};
window.addEventListener("load", router);
window.addEventListener("haschange", router);

},{"../views/HomeScreen.js":"k1A5a","../views/ProductScreen.js":"lpjn1","./utils.js":"i5Umw","../views/Error404Screen.js":"5t2yc","../views/CartScreen.js":"C8Q7b","../views/SignInScreen.js":"eHYI5","../components/Header.js":"gTR18","../views/RegisterScreen.js":"1lXez","../views/ProfileScreen.js":"hebJY","../views/ShippingScreen.js":"a2WwZ","../views/PaymentScreen.js":"isnGE","../views/PlaceOrderScreen.js":"ccJY0"}],"k1A5a":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _utils = require("../js/utils.js");
const HomeScreen = {
    after_render: ()=>{
        const logo = document.querySelector(".navbar-brand");
        const btnShop = document.querySelector(".cart");
        btnShop.addEventListener("click", function() {
            if (document.location.hash = `/cart`) window.location.reload();
        });
        logo.addEventListener("click", function() {
            if (document.location.hash = `/`) window.location.reload();
        });
    },
    render: async ()=>{
        _utils.showLoading();
        const res = await fetch("http://localhost:1998/api/product");
        _utils.hideLoading();
        if (!res || !res.ok) return `<div>Eroare</div>`;
        const products = await res.json();
        return `\n    <div class="row row-cols-1 row-cols-md-3 g-5 d-flex justify-content-center align-items-center">\n         ${products.map((product)=>`\n         <div class="col ">\n            <div class="card  d-flex bg-transparent justify-content-center align-items-center shadow-lg p-3 mb-4 bg-transparent bg-gradient rounded ">\n               <a id='pp' href="/#/product/${product.id}" onClick="window.close();window.open('/#/product/${product.id}')">\n                 <img src="./src/img/${product.img}.jpeg" id="prod" class="card-img-top img-thumbnail img-fluid mt-5 rounded pointer" alt="${product.tag}">\n               </a>\n               <div class="card-body">\n                   <h6 class="card-title">🏷️Preț: ${product.price}lei</h6>\n                   <a class='text-decoration-none text-dark h4'  href="/#/product/${product.id}" target="_top">\n                   <p class="card-text">${product.name}</p>\n                   </a>\n                   \n                </div>\n             </div>   \n           </div>\n          `
        ).join("\n")}     \n       </div>\n       <div class="p-5"></div>\n    `;
    }
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
const parseRequestUrl = ()=>{
    const url = document.location.hash.toLowerCase();
    const request = url.split("/");
    return {
        resource: request[1],
        id: request[2],
        verb: request[3]
    };
};
exports.parseRequestUrl = parseRequestUrl;
const rerender = async (component)=>{
    document.getElementById("main-container").innerHTML = await component.render();
    await component.after_render();
};
exports.rerender = rerender;
const showLoading = ()=>{
    document.getElementById("loading-overlay").classList.add("active");
};
exports.showLoading = showLoading;
const hideLoading = ()=>{
    document.getElementById("loading-overlay").classList.remove("active");
};
exports.hideLoading = hideLoading;
const showMessage = (message, callback)=>{
    document.getElementById("message-overlay").innerHTML = `\n  \n  <div id='message-overlay-content'>\n     <div class="card text-center" style="width: 23rem;">\n        <div class="card-body">\n          <h5 class="card-title text-dark">${message}</h5>\n          <button class='btn btn-danger bg-gradient' id='message-overlay-close-button'>Închide</button>\n        </div>\n     </div>\n  </div>\n \n  `;
    document.getElementById("message-overlay").classList.add("active");
    document.getElementById("message-overlay-close-button").addEventListener("click", ()=>{
        document.getElementById("message-overlay").classList.remove("active");
        if (callback) callback();
    });
};
exports.showMessage = showMessage;
const redirectUser = ()=>{
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
const getCartItems = ()=>{
    const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
    return cartItems;
};
exports.getCartItems = getCartItems;
const setCartItems = (cartItems)=>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
exports.setCartItems = setCartItems;
const setuserInfo = ({ id ="" , name ="" , email ="" , password ="" , isAdmin =false  })=>{
    localStorage.setItem("userInfo", JSON.stringify({
        id,
        name,
        email,
        password,
        isAdmin
    }));
};
exports.setuserInfo = setuserInfo;
const clearUser = ()=>{
    localStorage.removeItem("userInfo");
};
exports.clearUser = clearUser;
const getUserInfo = ()=>{
    return localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : {
        name: "",
        email: "",
        password: ""
    };
};
exports.getUserInfo = getUserInfo;
const getShipping = ()=>{
    const shipping = localStorage.getItem("shipping") ? JSON.parse(localStorage.getItem("shipping")) : {
        adress: "",
        city: "",
        postalCode: "",
        country: ""
    };
    return shipping;
};
exports.getShipping = getShipping;
const setShipping = ({ adress ="" , city ="" , postalCode ="" , country =""  })=>{
    localStorage.setItem("shipping", JSON.stringify({
        adress,
        city,
        postalCode,
        country
    }));
};
exports.setShipping = setShipping;
const getPayment = ()=>{
    const payment = localStorage.getItem("payment") ? JSON.parse(localStorage.getItem("payment")) : {
        paymentMethod: "Plata la ramburs"
    };
    return payment;
};
exports.getPayment = getPayment;
const setPayment = ({ paymentMethod ="card"  })=>{
    localStorage.setItem("payment", JSON.stringify({
        paymentMethod
    }));
};
exports.setPayment = setPayment;
const cleanCart = ()=>{
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
const ProductScreen = {
    after_render: ()=>{
        const request = _utils.parseRequestUrl();
        const btnCart = document.getElementById("btn1");
        const btnShop = document.querySelector(".cart");
        const btnSignin = document.querySelector("#singin");
        btnSignin.addEventListener("click", function() {
            if (document.location.hash = `/signin`) window.location.reload();
        });
        btnCart.addEventListener("click", function() {
            if (document.location.hash = `/cart/${request.id}`) window.location.reload();
        });
        btnShop.addEventListener("click", function() {
            if (document.location.hash = `/cart`) window.location.reload();
        });
    },
    render: async ()=>{
        const request = _utils.parseRequestUrl();
        _utils.showLoading();
        const product = await _api.getProduct(request.id);
        const pagination = document.querySelector(".pages-container");
        if (pagination) pagination.classList.remove("hidden-pages");
        _utils.hideLoading();
        return `\n    <a type="button" href='/' onClick="window.close();window.open('/')" id='backtoshop' class="btn bg-gradient btn-danger  mb-2 text-white position-absolute top-0 start-50 translate-middle-x"><i class="fas fa-arrow-circle-left p-1"></i>Inapoi<i class="fas fa-store p-1"></i></a>\n    <div class="row row-cols-1 row-cols-md-3 g-5 d-flex justify-content-center align-items-center mt-4 ">\n         <div class="col pb-md-5  ">\n            <div class="card  d-flex bg-transparent w-60 justify-content-center align-items-center shadow-lg p-3 mb-4 bg-transparent bg-gradient rounded">\n              \n                 <img src="./src/img/${product.img}.jpeg" class="card-img-top img-thumbnail  img-fluid mt-4 pointer" alt="${product.tag}">\n               \n               <div class="card-body">\n                   \n                </div>\n             </div>   \n           </div>\n           <div class="col mb-5">\n            <div class="card  d-flex  justify-content-center align-items-center shadow-lg p-3 mb-4 bg-transparent bg-gradient rounded">\n               <div class="card-body ">\n                   <h1 class="card-text">${product.name}</h1>\n                   <p class="card-text">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>\n                   <h3 class="card-title">Preț: ${product.price}lei</h3>\n                   <h6 class="card-title succes text-muted">🟢În stoc</h6>\n                \n                   <a type="button" id="btn1" class="btn btn-danger bg-gradient add-cart pointer">Adaugă în coș<i class="fas fa-plus p-1"></i></a>\n                </div>\n             </div>   \n           </div>      \n       </div>\n       <div class="p-3"></div>            \n    `;
    }
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
const getProduct = async (id)=>{
    try {
        const res = await fetch(`${_config.apiUrl}/api/product/${id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        console.log(err);
    }
};
exports.getProduct = getProduct;
const signin = async ({ email , password  })=>{
    try {
        const res = await fetch(`${_config.apiUrl}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const data = await res.json();
        if (password === "") _utils.showMessage("⚠️Introduceți o parolă!");
        else if (email === "") _utils.showMessage("⚠️Introduceți un e-mail!");
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        _utils.showMessage("⚠️Conectarea nu a reușit");
    }
};
exports.signin = signin;
const register = async ({ name , email , password  })=>{
    try {
        const res = await fetch(`${_config.apiUrl}/register`, {
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
        const data = await res.json();
        if (password === "") _utils.showMessage("⚠️Introduceți o parolă!");
        else if (email === "") _utils.showMessage("⚠️Introduceți un e-mail!");
        else if (name === "") _utils.showMessage("⚠️Introduceți un nume!");
        return data;
    } catch (err) {
        _utils.showMessage("⚠️Inregistrarea nu a reușit");
    }
};
exports.register = register;
const update = async ({ name , email , password  })=>{
    try {
        const { id  } = _localStorage.getUserInfo();
        const res = await fetch(`${_config.apiUrl}/profile/${id}`, {
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
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};
exports.update = update;
const createOrder = async (order)=>{
    try {
        const res = await fetch(`${_config.apiUrl}/api/order`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        });
        const data = await res.json();
        console.log(data);
        if (res.ok) _utils.showMessage("✌️Comanda a fost plasată!");
        return data;
    } catch (err) {
        return {
            error: err.res ? err.res.data.message : err.message
        };
    }
};
exports.createOrder = createOrder;

},{"./config.js":"beA2m","./localStorage.js":"1qCbc","./utils.js":"i5Umw"}],"beA2m":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.apiUrl = void 0;
const apiUrl = "http://localhost:1998";
exports.apiUrl = apiUrl;

},{}],"5t2yc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
const Error404Screen = {
    render: ()=>{
        return `<div>Eroare</div>`;
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
const addToCart = (item, forceUpdate = false)=>{
    let cartItems = _localStorage.getCartItems();
    const existItem = cartItems.find((x)=>x.product === item.product
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
const removeFromCart = (id)=>{
    const items = JSON.parse(localStorage.getItem("cartItems"));
    _localStorage.setCartItems(items.filter((x)=>x.product === Number(id)
    ));
    if (id === _utils.parseRequestUrl().id) {
        if (document.location.hash = `/cart`) window.location.reload();
    } else _utils.rerender(CartScreen);
};
const CartScreen = {
    after_render: ()=>{
        const btnSignin = document.querySelector("#singin");
        btnSignin.addEventListener("click", function() {
            if (document.location.hash = `/signin`) window.location.reload();
        });
        const qtySelects = document.getElementsByClassName("qty-select");
        Array.from(qtySelects).forEach((qtySelect)=>{
            const items = JSON.parse(localStorage.getItem("cartItems"));
            const item = items.find((x)=>x.product === qtySelect.id
            );
            qtySelect.addEventListener("change", (e)=>{
                addToCart({
                    ...item,
                    qty: Number(e.target.value)
                }, true);
            });
        });
        const deleteButtons = document.getElementsByClassName("delete-button");
        Array.from(deleteButtons).forEach((deleteButton)=>{
            deleteButton.addEventListener("click", ()=>{
                removeFromCart(deleteButton.id);
            });
        });
    },
    render: async ()=>{
        const request = _utils.parseRequestUrl();
        if (request.id) {
            const product = await _api.getProduct(request.id);
            addToCart({
                product: product.id,
                name: product.name,
                image: product.img,
                price: product.price,
                countInStock: product.countInStock,
                qty: 1
            });
        }
        const cartItems = _localStorage.getCartItems();
        return `\n    <div class="content cart position-relative">\n      <div class="cart-list mt-5">\n        <ul class="cart-list-container">\n          <li>\n            <h3>Coșul meu</h3>\n            <div id="prt">🏷️Preț</div>\n          </li>\n          ${cartItems.length === 0 ? `<div class="h2">Coșul este gol😔</div>` : cartItems.map((item)=>`\n            <li>\n              <div class="cart-image">\n                <img src="/src/img/${item.image}.jpeg" alt="${item.name}" />\n              </div>\n              <div class="cart-name">\n                <div>\n                  <a class="text-decoration-none text-dark" href="/#/product/${item.product}">\n                    ${item.name}\n                  </a>\n                </div>\n                <div>\n                📦Cantitate: \n                  <select class="qty-select" id="${item.product}">\n                  ${[
                ...Array(item.countInStock).keys()
            ].map((x)=>item.qty === x + 1 ? `<option selected value="${x + 1}">${x + 1}</option>` : `<option value="${x + 1}">${x + 1}</option>`
            )}</select>\n                  <button type="button" class="delete-button btn bg-gradient btn-danger text-white" id="${item.product}">\n                  🗑️Șterge\n                  </button>\n                </div>\n              </div>\n              <div class="cart-price">\n                ${item.price}lei\n              </div>\n            </li>\n            `
        ).join("\n")} \n        </ul>\n      </div>\n      <a type="button" id='backtoshop' href="/" class="btn bg-gradient btn-danger mb-5 text-white position-absolute top-0 start-50 translate-middle-x"><i class="fas fa-arrow-circle-left p-1"></i>Inapoi<i class="fas fa-store p-1"></i></a>\n      <div class="cart-action mt-5 shadow-lg p-4 mb-5 bg-transparent bg-gradient rounded">\n          <h3>\n          📋Total (${cartItems.reduce((a, c)=>a + c.qty
        , 0)} produse)\n             :\n             ${cartItems.reduce((a, c)=>a + c.price * c.qty
        , 0)}lei\n          </h3>\n          ${localStorage.getItem("userInfo") ? `<button\n                type="button"\n                id="checkout-button"\n                onClick="window.close();window.open('/#/shipping')"\n                class="primary fw btn bg-gradient btn-danger text-white"\n              >\n                Comandă\n              </button>` : `<button\n                type="button"\n                id="checkout-button"\n                onClick="window.close();window.open('/#/signin')"\n                class="primary fw btn bg-gradient  btn-danger text-white"\n              >\n                Comandă\n              </button>`}\n      </div>\n  \n</div>\n<div class="p-3"></div>\n\n    `;
    }
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
const SignInScreen = {
    after_render: ()=>{
        const btnShop = document.querySelector(".cart");
        const signInForm = document.getElementById("signin-form");
        const reg = document.getElementById("reg");
        reg.addEventListener("click", function() {
            if (document.location.hash = `/register`) window.location.reload();
        });
        btnShop.addEventListener("click", function() {
            if (document.location.hash = `/cart`) window.location.reload();
        });
        signInForm.addEventListener("submit", async (e)=>{
            e.preventDefault();
            _utils.showLoading();
            const data = await _api.signin({
                email: document.getElementById("InputEmail").value,
                password: document.getElementById("InputPassword").value
            });
            _utils.hideLoading();
            const email = document.getElementById("InputEmail").value;
            const password = document.getElementById("InputPassword").value;
            if (password === "") _utils.showMessage("⚠️Introduceți o parolă!");
            else if (email === "") _utils.showMessage("⚠️Introduceți un e-mail!");
            if (data.error) alert("Invalid");
            else {
                _localStorage.setuserInfo(data);
                _utils.redirectUser();
                _utils.showMessage("✔️Autentificarea a reușit!");
            }
        });
    },
    render: ()=>{
        if (_localStorage.getUserInfo().name) _utils.redirectUser();
        return `\n   <div class='container container-signin shadow-lg p-5 mb-5 bg-transparent bg-gradient rounded position-relative '>\n   <h6 class='text-muted'>👋🏻Pentru a putea achziționa un produs este necesară autentificarea</h6>\n    <form id='signin-form'>\n      <div class="mb-3">\n        <label for="InputEmail" class="form-label">E-mail:</label>\n        <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp">\n      </div>\n      <div class="mb-3">\n          <label for="InputPassword" class="form-label">Parolă:</label>\n          <input type="password" class="form-control" id="InputPassword">\n      </div>\n      \n      <button type="submit" class="btn btn-danger  bg-gradient mb-3">Conectează-te</button>\n      \n    </form>\n    <a href="/#/signin" id='reg' class="link-danger">😜Nu ai cont? Înregistrează-te aici!</a>\n   </div> \n   <div class="p-3"></div>\n    `;
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
const Header = {
    render: ()=>{
        const { id , name  } = _localStorage.getUserInfo();
        return `\n    ${name ? `<a href="/#/profile/${id}" onClick="window.close();window.open('/#/profile/${id}')" id='singin'>\n    <button\n     type="button"\n     class="btn btn-transparent pe-4"\n     data-bs-toggle="modal"\n     data-bs-target="#login"\n     >\n         <span id="cont">${name}</span><i class="fas fa-user ps-1 me-auto"></i>\n     </button>  \n </a>` : `<a href="/#/signin" onClick="window.close();window.open('/#/signin')" id='singin'>\n <button\n  type="button"\n  class="btn btn-transparent pe-4"\n  data-bs-toggle="modal"\n  data-bs-target="#login"\n  >\n      <span id="cont">Contul tău</span><i class="fas fa-sign-in-alt ps-1 me-auto"></i>\n  </button>  \n</a>`}           \n    `;
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
const RegisterScreen = {
    after_render: ()=>{
        const btnShop = document.querySelector(".cart");
        const registerForm = document.getElementById("register-form");
        btnShop.addEventListener("click", function() {
            if (document.location.hash = `/cart`) window.location.reload();
        });
        registerForm.addEventListener("submit", async (e)=>{
            e.preventDefault();
            _utils.showLoading();
            const data = await _api.register({
                name: document.getElementById("InputName").value,
                email: document.getElementById("InputEmail").value,
                password: document.getElementById("InputPassword").value
            });
            _utils.hideLoading();
            const email = document.getElementById("InputEmail").value;
            const password = document.getElementById("InputPassword").value;
            const name = document.getElementById("InputName").value;
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
    },
    render: ()=>{
        if (_localStorage.getUserInfo().name) _utils.redirectUser();
        return `\n   <div class='container container-register shadow-lg p-5 mb-5 bg-transparent bg-gradient rounded position-relative '> \n    <form id='register-form'>\n    <div class="mb-3">\n        <label for="InputName" class="form-label">Nume:</label>\n        <input type="name" class="form-control" id="InputName">\n      </div>\n      <div class="mb-3>\n        <label for="InputEmail" class="form-label">E-mail:</label>\n        <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp">\n      </div>\n      <div class="mb-3">\n          <label for="InputPassword" class="form-label">Parolă:</label>\n          <input type="password" class="form-control" id="InputPassword">\n      </div>\n      <div class="mb-3">\n          <label for="repassword" class="form-label">Confirmare parolă:</label>\n          <input type="password" class="form-control" id="repassword">\n      </div>\n      \n      <button type="submit"  class="btn btn-danger bg-gradient mb-3">Înregistrează-te</button>\n    </form>\n    <a href="/#/signin"  onClick="window.close();window.open('/#/signin')" class="link-danger pointer">👉Ai cont deja? Intră aici!</a>\n   </div> \n    `;
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
const ProfileScreen = {
    after_render: ()=>{
        const logout = document.getElementById("signout");
        const btnShop = document.querySelector(".cart");
        const profileForm = document.getElementById("profile-form");
        logout.addEventListener("click", function() {
            if (document.location.hash = `/`) {
                window.location.reload();
                _localStorage.clearUser();
            }
        });
        btnShop.addEventListener("click", function() {
            if (document.location.hash = `/cart`) window.location.reload();
        });
        profileForm.addEventListener("submit", async (e)=>{
            e.preventDefault();
            _utils.showLoading();
            const data = await _api.update({
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
    },
    render: ()=>{
        const { name , email  } = _localStorage.getUserInfo();
        if (!name) document.location.hash = "/";
        return `\n   <div class='container container-register shadow-lg p-5 mb-5 bg-transparent bg-gradient rounded position-relative '> \n   <h6 class='text-muted'>👋🏻Aici poți schimba numele, e-mailul sau parola.</h6>\n    <form id='profile-form'>\n    <div class="mb-3">\n        <label for="InputName" class="form-label">Nume:</label>\n        <input type="name" class="form-control" value="${name}" id="InputName">\n      </div>\n      <div class="mb-3>\n        <label for="InputEmail" class="form-label">Email:</label>\n        <input type="email" class="form-control" id="InputEmail" value="${email}" aria-describedby="emailHelp">\n      </div>\n      <div class="mb-3">\n          <label for="InputPassword" class="form-label">Parolă:</label>\n          <input type="password" class="form-control" id="InputPassword">\n      </div>\n      \n      <button type="submit" class="btn btn-danger bg-danger bg-gradient mb-3">Schimbă</button>\n      <button type="button"  id='signout' class="btn btn-danger bg-danger bg-gradient mb-3">Deloghează-te</button>\n    </form>\n\n   </div> \n   <div class="p-3"></div>\n    `;
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
const ShippingScreen = {
    after_render: ()=>{
        const btnShop = document.querySelector(".cart");
        const shoppingForm = document.getElementById("shipping-form");
        btnShop.addEventListener("click", function() {
            if (document.location.hash = `/cart`) window.location.reload();
        });
        shoppingForm.addEventListener("submit", async (e)=>{
            e.preventDefault();
            _localStorage.setShipping({
                adress: document.getElementById("adress").value,
                city: document.getElementById("city").value,
                postalCode: document.getElementById("postalcode").value,
                country: document.getElementById("country").value
            });
            document.location.hash = `/shipping`;
        });
        console.log(document.getElementById("adress").value);
    },
    render: ()=>{
        const { name  } = _localStorage.getUserInfo();
        if (!name) document.location.hash = "/";
        const { adress , city , postalCode , country  } = _localStorage.getShipping();
        return `\n    ${_CheckOutSteps.default.render({
            step1: true,
            step2: true
        })}\n   <div class='container container-shipping shadow-lg p-5 mb-5 bg-transparent bg-gradient rounded position-relative '> \n    <form id='shipping-form'>\n    <div class="mb-3">\n        <label for="adress" class="form-label">Adresă:</label>\n        <input type="text" class="form-control" value="${adress}" id="adress">\n      </div>\n      <div class="mb-3">\n        <label for="country" class="form-label">Județ:</label>\n        <input type="country" class="form-control" value="${country}" id="country">\n      </div>\n      <div class="mb-3">\n        <label for="city" class="form-label">Oraș:</label>\n        <input type="text" class="form-control" value="${city}" id="city">\n      </div>\n      <div class="mb-3">\n      <label for="postalcode" class="form-label">Codul poștal:</label>\n      <input type="text" class="form-control" value="${postalCode}" id="postalcode">\n    </div>\n     <button type="submit" onClick="window.close();window.open('/#/payment')" class="btn btn-danger  bg-gradient">Continuă</button>\n    </form>\n\n   </div>\n    <div class="p-3"></div>\n    `;
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
const CheckoutSteps = {
    render: (props)=>{
        return `\n        <div class="container-fluid checkout-steps ">\n          <div class="${props.step1 ? "active" : ""}">Logare</div>\n          <div class="${props.step2 ? "active" : ""}">Info</div>\n          <div class="${props.step3 ? "active" : ""}">Plată</div>\n          <div class="${props.step4 ? "active" : ""}">Comandă</div>\n        </div>\n        `;
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
const PaymentScreen = {
    after_render: ()=>{
        const btnShop = document.querySelector(".cart");
        const shoppingForm = document.getElementById("payment-form");
        btnShop.addEventListener("click", function() {
            if (document.location.hash = `/cart`) window.location.reload();
        });
        shoppingForm.addEventListener("submit", async (e)=>{
            e.preventDefault();
            const paymentMethod = document.querySelector("input[name='payment-method:checked']").value;
            _localStorage.setPayment({
                paymentMethod
            });
            document.location.hash = `/placeorder`;
        });
    },
    render: ()=>{
        const { name  } = _localStorage.getUserInfo();
        if (!name) document.location.hash = "/";
        return `\n    ${_CheckOutSteps.default.render({
            step1: true,
            step2: true,
            step3: true
        })}\n   <div class='container container-payment shadow-lg mt-4 p-5 mb-3 bg-transparent bg-gradient rounded position-relative  '> \n    <form id='payment-form'>\n    <ul class="form-items">\n    <li>\n      <div>\n        <input type="radio"\n        name="payment-method"\n        id="card"\n        value="Card"\n        checked />\n        <label for="card" >💳Card</label>\n       </div> \n    </li>\n    <li>\n    <div>\n      <input type="radio"\n      name="payment-method"\n      id="cash"\n      value="Cash"\n       />\n      <label for="cash" >💶Plata la ramburs</label>\n     </div> \n  </li> \n  </ul>\n       <button type="submit"  onClick="window.close();window.open('/#/order')" class="btn btn-danger  bg-gradient">Continuă</button>\n    </form>\n\n   </div> \n    `;
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
const convertCartToOrder = ()=>{
    const orderItems = _localStorage.getCartItems();
    if (orderItems.length === 0) document.location.hash = "/cart";
    const shipping = _localStorage.getShipping();
    if (!shipping.adress) document.location = "/shipping";
    const payment = _localStorage.getPayment();
    if (!payment.paymentMethod) document.location.hash = "/payment";
    const itemsPrice = orderItems.reduce((a, c)=>a + c.price * c.qty
    , 0);
    const shippingPrice = itemsPrice > 100 ? 0 : 10;
    const taxPrice = Math.round(0.15 * itemsPrice * 100) / 100;
    const totalPrice = itemsPrice + shippingPrice + taxPrice;
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
const PlaceOrderScreen = {
    after_render: async ()=>{
        document.getElementById("placeorder-button").addEventListener("click", async ()=>{
            const order = convertCartToOrder();
            console.log(order);
            _utils.showLoading();
            const data = await _api.createOrder(order);
            _utils.hideLoading();
            if (data.error) _utils.showMessage(data.error);
            else _localStorage.cleanCart(); // document.location.hash = `/order/${data.order.id}`;
        });
    },
    render: ()=>{
        const { orderItems , shipping , payment , itemsPrice , shippingPrice , taxPrice , totalPrice  } = convertCartToOrder();
        return `\n    <div>\n      ${_CheckOutSteps.default.render({
            step1: true,
            step2: true,
            step3: true,
            step4: true
        })}\n      <div class="order shadow-lg p-4 mb-5 bg-transparent bg-gradient rounded">\n        <div class="order-info container">\n          <div >\n            <h2>Adresa de plată</h2>\n            <div>\n            ${String(shipping.adress)}, ${shipping.city}, ${shipping.postalCode}, \n            ${shipping.country}\n            </div>\n          </div>\n          <div>\n            <h2>Metoda de plată</h2>\n            <div class="h4">\n              ${payment.paymentMethod}\n            </div>\n          </div>\n          <div>\n            <ul class="cart-list-container ">\n              <li>\n                <h2>Coșul tău</h2>\n                <div id="prt">🏷️Preț</div>\n              </li>\n              ${orderItems.map((item)=>`\n                <li>\n                  <div class="cart-image">\n                    <img src="./src/img/${item.image}.jpeg" alt="${item.tag}" />\n                  </div>\n                  <div class="cart-name">\n                    <div>\n                      <a class="text-decoration-none text-dark h3" href="/#/product/${item.product}">${item.name} </a>\n                    </div>\n                    <div> Cantitate: ${item.qty} </div>\n                  </div>\n                  <div class="cart-price"> ${item.price}lei</div>\n                </li>\n                `
        ).join("\n")}\n            </ul>\n          </div>\n        </div>\n        <div class="order-action">\n           <ul class="position-relative">\n                <li>\n                  <h2>Sumar comandă</h2>\n                 </li>\n                 <li><div>🧾Produse</div><div>${itemsPrice}lei</div></li>\n                 <li><div>🚚Taxă curier</div><div>${shippingPrice}lei</div></li>\n                 <li class="total text-dark"><div>Total</div><div>${totalPrice}lei</div></li> \n                 <li>\n                 <button id="placeorder-button" class="primary fw btn btn-danger  bg-gradient position-absolute top-100 start-50 translate-middle">\n                 Plasează comanda\n                 </button>\n        </div>\n      </div>\n    </div>\n    <div class="p-3"></div>\n    `;
    }
};
var _default = PlaceOrderScreen;
exports.default = _default;

},{"../js/localStorage.js":"1qCbc","../components/CheckOutSteps.js":"3OuEc","../js/utils.js":"i5Umw","../js/api.js":"7i9bW"}]},["hf6NL","eECwp"], "eECwp", "parcelRequire208e")

//# sourceMappingURL=index.9b907d8e.js.map
