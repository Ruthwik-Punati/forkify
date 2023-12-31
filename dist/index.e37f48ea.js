// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iAkoQ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _resultsJs = require("./views/results.js");
var _resultsJsDefault = parcelHelpers.interopDefault(_resultsJs);
var _showRecipeJs = require("./views/showRecipe.js");
var _showRecipeJsDefault = parcelHelpers.interopDefault(_showRecipeJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarksViewJs = require("./views/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
console.log("hello");
async function controllResults(query) {
    try {
        // rendering spinner
        (0, _resultsJsDefault.default).renderSpinner();
        // getting search results
        await _modelJs.getSearchResults(query);
        // rendering results
        (0, _resultsJsDefault.default).render(_modelJs.state.pageResults);
        // rendering page buttons
        (0, _paginationViewJsDefault.default).render(_modelJs.state.page);
    } catch (err) {
        (0, _resultsJsDefault.default).renderError();
        console.log(err);
    }
}
async function controllShowRecipe() {
    try {
        // rendering spinner
        (0, _showRecipeJsDefault.default).renderSpinner();
        // getting id
        const id = window.location.hash.slice(1);
        // getting recipe data
        await _modelJs.showRecipe(id);
        // rendering recipe
        (0, _showRecipeJsDefault.default).render(_modelJs.state.recipe);
        (0, _showRecipeJsDefault.default).addHandlerServings(handlerServings);
        (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
        // updating/rendering results
        if (_modelJs.state.pageResults.length > 0) (0, _resultsJsDefault.default).render(_modelJs.state.pageResults);
    } catch (err) {
        (0, _showRecipeJsDefault.default).renderError();
        console.log(err);
    }
}
// pagination handler
const handlerPagination = function() {
    (0, _resultsJsDefault.default).render(_modelJs.state.pageResults);
    (0, _paginationViewJsDefault.default).render(_modelJs.state.page);
};
const handlerBookmarks = function() {
    (0, _showRecipeJsDefault.default).render(_modelJs.state.recipe);
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
// initializer
const init = function() {
    (0, _showRecipeJsDefault.default).addHandlerShowRecipe(controllShowRecipe);
    _modelJs.addHandlerSearch(controllResults);
    (0, _paginationViewJsDefault.default).addHandlerPagination(_modelJs.state.page, handlerPagination);
    (0, _bookmarksViewJsDefault.default).addHandlerBookmarks(handlerBookmarks);
};
init();
// hash change
const handlerServings = function() {
    console.log("ok");
    (0, _showRecipeJsDefault.default).render(_modelJs.state.recipe);
};

},{"./model.js":"Y4A21","./views/results.js":"hjEcO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/showRecipe.js":"e5sqh","./views/paginationView.js":"6z7bi","./views/bookmarksView.js":"4Lqzq"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "addHandlerSearch", ()=>addHandlerSearch);
parcelHelpers.export(exports, "getQuery", ()=>getQuery);
parcelHelpers.export(exports, "getSearchResults", ()=>getSearchResults);
parcelHelpers.export(exports, "showRecipe", ()=>showRecipe);
parcelHelpers.export(exports, "paginationResults", ()=>paginationResults);
parcelHelpers.export(exports, "changeServings", ()=>changeServings);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
parcelHelpers.export(exports, "persistBookmarks", ()=>persistBookmarks);
var _helperJs = require("./helper.js");
const state = {
    results: [],
    recipe: [],
    query: "",
    page: 1,
    pageResults: [],
    bookmarks: [],
    getItem () {
        const bookmarks = localStorage.getItem("bookmarks2");
        this.bookmarks = JSON.parse(bookmarks);
        this.bookmarks || (this.bookmarks = []);
    }
};
state.getItem();
const addHandlerSearch = function(handler) {
    document.querySelector(".search").addEventListener("submit", function(e) {
        e.preventDefault();
        const query = getQuery();
        handler(query);
    });
};
function getQuery() {
    const query = document.querySelector(".search__field").value;
    document.querySelector(".search__field").value = "";
    return query;
}
const getSearchResults = async function(query) {
    const data = await (0, _helperJs.getJson)(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`);
    const { recipes  } = data.data;
    state.results = recipes.map((recipe)=>{
        const { publisher , image_url , title , id  } = recipe;
        return {
            publisher,
            image_url,
            title,
            id
        };
    });
    paginationResults(state.page);
    console.log(state.pageResults);
};
const showRecipe = async function(idNo) {
    const data = await (0, _helperJs.getJson)(`https://forkify-api.herokuapp.com/api/v2/recipes/${idNo}`);
    console.log(data);
    const { recipe  } = data.data;
    console.log(recipe);
    state.recipe = [
        recipe
    ];
    console.log(state.bookmarks);
    if (state.bookmarks.some((b)=>b[0].id === state.recipe[0].id)) state.recipe[0].bookmarked = true;
    else state.recipe[0].bookmarked = false;
};
function paginationResults(page) {
    const start = (page - 1) * 10;
    const end = page * 10;
    state.pageResults = state.results.slice(start, end);
}
const changeServings = function(servings) {
    state.recipe[0].ingredients.forEach((ing)=>ing.quantity = ing.quantity * servings / state.recipe[0].servings);
    console.log(state.recipe);
    state.recipe[0].servings = servings;
};
const addBookmark = function() {
    state.recipe[0].bookmarked = true;
    state.bookmarks.push(state.recipe);
    console.log(state.recipe[0].bookmarked);
    console.log(state.bookmarks);
};
const deleteBookmark = function() {
    const index = state.bookmarks.findIndex((b)=>b[0].id === state.recipe[0].id);
    state.recipe[0].bookmarked = false;
    console.log(state.recipe[0].bookmarked);
    state.bookmarks.splice(index, 1);
    console.log(state.bookmarks);
};
const persistBookmarks = function() {
    localStorage.setItem("bookmarks2", JSON.stringify(state.bookmarks));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./helper.js":"lVRAz"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lVRAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJson", ()=>getJson);
const getJson = async function(url) {
    const fetchRes = await fetch(url);
    const data = await fetchRes.json();
    return data;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hjEcO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ResultsView extends (0, _viewJsDefault.default) {
    constructor(){
        super();
    }
    _parentEl = document.querySelector(".results");
    _message = "no recipes for this query!";
    _generateMarkUp(result) {
        const id = window.location.hash.slice(1);
        return ` <li class="preview">
    <a class="preview__link ${id === result.id ? "preview__link--active" : ""}" href=#${result.id}>
      <figure class="preview__fig">
        <img src=${result.image_url} alt=${result.title} />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">${result.publisher}</p>
        <div class="preview__user-generated">
          <svg>
          <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>`;
    }
}
exports.default = new ResultsView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../img/icons.svg":"cMpiy"}],"bWlJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    render(data) {
        console.log(data);
        if (!data || data.length === 0) throw Error();
        let markUp = "nothing";
        if (typeof data === "number") markUp = this._generateMarkUp();
        else markUp = data.map((data)=>this._generateMarkUp(data)).join("");
        this.clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markUp);
    }
    update(data) {
        if (!data) return;
        const newmarkUp = this._generateMarkUp(data);
        const newDOM = document.createRange().createContextualFragment(newmarkUp);
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const currElements = Array.from(this._parentEl.querySelectorAll("*"));
        // updates changed text
        newElements.forEach((newEl, i)=>{
            let curEl = currElements[i];
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") curEl.textContent = newEl.textContent;
            // updates changed attributes
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim()) Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value));
        });
    }
    clear() {
        this._parentEl.innerHTML = "";
    }
    renderSpinner() {
        const markUp = `<div class="spinner">
    <svg>
      <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
    </svg>
  </div> `;
        this.clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markUp);
    }
    renderError() {
        const markUp = `<div class="error">
    <div>
      <svg>
        <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${this._message}</p>
  </div>`;
        this.clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markUp);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../img/icons.svg":"cMpiy"}],"cMpiy":[function(require,module,exports) {
module.exports = require("af4ec29a8bd10004").getBundleURL("hWUTQ") + "icons.21bad73c.svg" + "?" + Date.now();

},{"af4ec29a8bd10004":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"e5sqh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _modelJs = require("../model.js");
class showRecipe extends (0, _viewJsDefault.default) {
    _parentEl = document.querySelector(".recipe");
    _message = "Something went wrong! Please try again!";
    _generateMarkUp(recipe) {
        return ` <figure class="recipe__fig">
    <img src=${recipe.image_url} alt=${recipe.title} class="recipe__img" />
    <h1 class="recipe__title">
      <span>${recipe.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${recipe.cooking_time}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href=${0, _iconsSvgDefault.default}></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--decrease-servings">
          <svg>
            <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
      <svg>
        <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round">
      <svg class="">
        <use href="${0, _iconsSvgDefault.default}#icon-bookmark${recipe.bookmarked ? "-fill" : ""}"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
   ${this._generateIngredientsMarkUp(recipe)}
    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">The Pioneer Woman</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>`;
    }
    _generateIngredientsMarkUp(recipe) {
        return recipe.ingredients.map((ing)=>{
            return ` <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${ing.quantity}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
       ${ing.description}
      </div>
    </li>`;
        }).join("");
    }
    addHandlerShowRecipe(handler) {
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, function(e) {
                console.log(e);
                handler();
            }));
    }
    addHandlerServings(handler) {
        this._parentEl.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--tiny");
            if (!btn) return;
            if (btn.classList.contains("btn--increase-servings")) {
                const newServings = _modelJs.state.recipe[0].servings + 1;
                if (newServings < 1) return;
                _modelJs.changeServings(newServings);
            }
            if (btn.classList.contains("btn--decrease-servings")) {
                const newServings = _modelJs.state.recipe[0].servings - 1;
                if (newServings < 1) return;
                _modelJs.changeServings(newServings);
            }
            handler();
        });
    }
}
exports.default = new showRecipe();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../img/icons.svg":"cMpiy","../model.js":"Y4A21"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _modelJs = require("../model.js");
class PaginationView extends (0, _viewDefault.default) {
    _parentEl = document.querySelector(".pagination");
    _generateMarkUp(page = _modelJs.state.page) {
        const noOfPages = Math.ceil(_modelJs.state.results.length / 10);
        console.log(noOfPages);
        if (noOfPages === 1) return "";
        if (page === 1) return `<button class="btn--inline pagination__btn--next">
        <span>Page ${page + 1}</span>
        <svg class="search__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
        </svg>
      </button>`;
        if (page === noOfPages) return ` <button class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
    </svg>
    <span>Page ${page - 1}</span>
  </button>
 `;
        if (page > 1 && page < noOfPages) return ` <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
        </svg>
        <span>Page ${page - 1}</span>
      </button>
      <button class="btn--inline pagination__btn--next">
        <span>Page ${page + 1}</span>
        <svg class="search__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
        </svg>
      </button> `;
    }
    addHandlerPagination(page, handler) {
        this._parentEl.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--inline");
            if (btn.classList.contains("pagination__btn--prev")) _modelJs.state.page = _modelJs.state.page - 1;
            if (btn.classList.contains("pagination__btn--next")) _modelJs.state.page = _modelJs.state.page + 1;
            _modelJs.paginationResults(_modelJs.state.page);
            handler();
        });
    }
}
exports.default = new PaginationView();

},{"./view":"bWlJ9","../../img/icons.svg":"cMpiy","../model.js":"Y4A21","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Lqzq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _modelJs = require("../model.js");
class Bookmarks extends (0, _viewJsDefault.default) {
    _parentEl = document.querySelector(".bookmarks__list");
    addHandlerBookmarks(handler) {
        document.querySelector(".recipe").addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--round");
            if (!btn) return;
            if (!_modelJs.state.recipe[0].bookmarked) _modelJs.addBookmark();
            else _modelJs.deleteBookmark();
            _modelJs.persistBookmarks();
            handler();
        });
    }
    _generateMarkUp(bookmark) {
        const id = window.location.hash.slice(1);
        const result = bookmark[0];
        console.log(result);
        return ` <li class="preview">
    <a class="preview__link ${id === result.id ? "preview__link--active" : ""}" href=#${result.id}>
      <figure class="preview__fig">
        <img src=${result.image_url} alt=${result.title} />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">${result.publisher}</p>
        <div class="preview__user-generated">
          <svg>
          <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>`;
    }
}
exports.default = new Bookmarks();

},{"./view.js":"bWlJ9","../../img/icons.svg":"cMpiy","../model.js":"Y4A21","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iAkoQ","aenu9"], "aenu9", "parcelRequire3a11")

//# sourceMappingURL=index.e37f48ea.js.map
