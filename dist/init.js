/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".init.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		2: function() {
/******/ 			return {
/******/ 				"./index_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules[1].exports["ab"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules[1].exports["V"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["bb"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules[1].exports["Z"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules[1].exports["Y"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_59cb74e423758ede": function() {
/******/ 						return installedModules[1].exports["z"]();
/******/ 					},
/******/ 					"__wbg_stack_558ba5917b466edd": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["Q"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_4bb6c2a97407129a": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["i"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_49f532f06a9786ee": function(p0i32) {
/******/ 						return installedModules[1].exports["s"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_c0366b39e4f4c89a": function(p0i32) {
/******/ 						return installedModules[1].exports["h"](p0i32);
/******/ 					},
/******/ 					"__wbg_localStorage_a6fd83fc300473fc": function(p0i32) {
/******/ 						return installedModules[1].exports["v"](p0i32);
/******/ 					},
/******/ 					"__wbg_createElement_99351c8bf0efac6e": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules[1].exports["e"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_createElementNS_a7ef126eff5022c2": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules[1].exports["d"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_createTextNode_cfdcc8da0d55d336": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules[1].exports["f"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_querySelector_f7730f338b4d3d21": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules[1].exports["C"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlTextAreaElement_aa81cb6ef637ad1f": function(p0i32) {
/******/ 						return installedModules[1].exports["r"](p0i32);
/******/ 					},
/******/ 					"__wbg_value_0938d95709a8299e": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["R"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setvalue_d48345fc605b6438": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules[1].exports["P"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlButtonElement_917edcddce3c8237": function(p0i32) {
/******/ 						return installedModules[1].exports["p"](p0i32);
/******/ 					},
/******/ 					"__wbg_settype_a473e7c2eb6fc59f": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules[1].exports["N"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlInputElement_ad83b145c236a35b": function(p0i32) {
/******/ 						return installedModules[1].exports["q"](p0i32);
/******/ 					},
/******/ 					"__wbg_setchecked_8bb84df8eed13498": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["K"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_settype_91be2a6c44657ee3": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules[1].exports["M"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_value_97fba2fa96f7251f": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["S"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setvalue_6934781158d5bf65": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules[1].exports["O"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_a422088e686210b5": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules[1].exports["a"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_removeEventListener_4448b273b47328f8": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules[1].exports["F"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_namespaceURI_f4a25184afe07685": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["y"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_removeAttribute_8440a1b6ce044d52": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules[1].exports["D"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_setAttribute_e71b9086539f06a1": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules[1].exports["I"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_debug_9f067aefe2ceaadd": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules[1].exports["g"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_error_e325755affc8634b": function(p0i32) {
/******/ 						return installedModules[1].exports["k"](p0i32);
/******/ 					},
/******/ 					"__wbg_error_7bb15b842d5b0ddb": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules[1].exports["j"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_info_1b9fdabaafc8f4cb": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules[1].exports["n"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_log_f2e13ca55da8bad3": function(p0i32) {
/******/ 						return installedModules[1].exports["x"](p0i32);
/******/ 					},
/******/ 					"__wbg_log_37120b26fb738792": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules[1].exports["w"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_warn_6add4f04160cdbba": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules[1].exports["T"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_lastChild_6337475d58ebdab4": function(p0i32) {
/******/ 						return installedModules[1].exports["u"](p0i32);
/******/ 					},
/******/ 					"__wbg_setnodeValue_4a75b94edda71829": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules[1].exports["L"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_appendChild_7c45aeccd496f2a5": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_insertBefore_6e8e209ea019870f": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules[1].exports["o"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_removeChild_1e1942a296b255c1": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["E"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_951bd0c6d815d6f1": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_7c6bd521992b4022": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["B"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_is_049b1aece40b5301": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["t"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_ba07d0daa0e4677e": function() {
/******/ 						return installedModules[1].exports["A"]();
/******/ 					},
/******/ 					"__wbg_self_6baf3a3aa7b63415": function() {
/******/ 						return installedModules[1].exports["G"]();
/******/ 					},
/******/ 					"__wbg_window_63fc4027b66c265b": function() {
/******/ 						return installedModules[1].exports["U"]();
/******/ 					},
/******/ 					"__wbg_globalThis_513fb247e8e4e6d2": function() {
/******/ 						return installedModules[1].exports["l"]();
/******/ 					},
/******/ 					"__wbg_global_b87245cd886d7113": function() {
/******/ 						return installedModules[1].exports["m"]();
/******/ 					},
/******/ 					"__wbg_set_9bdd413385146137": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules[1].exports["J"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["X"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["cb"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper230": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules[1].exports["W"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"1":[2]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "init.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./static/style.scss
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./init.js


__webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 5)).then(module => {
  module.run_app();
});


/***/ })
/******/ ]);