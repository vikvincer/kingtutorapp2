webpackJsonp([2],{

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!./node_modules/postcss-loader/index.js?{\"ident\":\"postcss\"}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!./src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=PT+Sans+Narrow);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  font-family: 'PT Sans Narrow', sans-serif;\n  padding: 0;\n  margin: 0; }\n\nheader {\n  background-color: #ff3e3e;\n  padding: 10px 20px;\n  position: relative; }\n  header h1 {\n    margin: 0 0 0 50px;\n    color: white;\n    display: inline-block; }\n\n#nav-icon3 {\n  position: absolute;\n  display: inline-block;\n  width: 60px;\n  height: 45px;\n  top: 15px;\n  left: 20px;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  transition: .5s ease-in-out;\n  cursor: pointer; }\n\n#nav-icon3 span {\n  display: block;\n  position: absolute;\n  height: 6px;\n  width: 70%;\n  background: #fff;\n  border-radius: 9px;\n  opacity: 1;\n  left: 0;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  transition: .25s ease-in-out; }\n\n#nav-icon3 span:nth-child(1) {\n  top: 0px; }\n\n#nav-icon3 span:nth-child(2), #nav-icon3 span:nth-child(3) {\n  top: 14px; }\n\n#nav-icon3 span:nth-child(4) {\n  top: 28px; }\n\n#nav-icon3.open span:nth-child(1) {\n  top: 18px;\n  width: 0%;\n  left: 50%; }\n\n#nav-icon3.open span:nth-child(2) {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n#nav-icon3.open span:nth-child(3) {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg); }\n\n#nav-icon3.open span:nth-child(4) {\n  top: 18px;\n  width: 0%;\n  left: 50%; }\n\nnav {\n  background: #d2d0d0;\n  height: 100%;\n  border-right: 1px #5d5b5b solid; }\n  nav ul {\n    padding: 0;\n    margin: 0; }\n    nav ul li {\n      padding: 5px;\n      list-style: none; }\n    nav ul li:nth-child(2) {\n      background-color: #f0ebeb; }\n\n.math-answer {\n  font-size: 31px;\n  display: block;\n  width: 100px;\n  margin: 5px auto 0 auto;\n  text-align: right;\n  letter-spacing: 5px; }\n\n.nav-container {\n  height: 100%;\n  position: absolute;\n  width: 300px;\n  z-index: 999; }\n\n.dashboard {\n  padding: 10px 20px; }\n  .dashboard table {\n    width: 100%; }\n    .dashboard table thead {\n      background-color: #5d5b5b;\n      color: white; }\n    .dashboard table td {\n      padding: 5px 10px; }\n\n.math-container div {\n  display: block;\n  width: 50%;\n  float: left;\n  text-align: center;\n  height: 200px;\n  font-size: 31px;\n  color: white;\n  font-weight: bold;\n  line-height: 200px; }\n\n.math-container div:nth-child(1) {\n  background-color: #f4154a; }\n\n.math-container div:nth-child(2) {\n  background-color: #1c6ce5; }\n\n.math-container div:nth-child(3) {\n  background-color: #0ab048; }\n\n.math-container div:nth-child(4) {\n  background-color: #c2b704; }\n\n.inner-container {\n  padding: 20px; }\n  .inner-container.addition .item {\n    display: block;\n    width: 100%;\n    min-width: 300px;\n    max-width: 350px;\n    margin: 0 auto;\n    position: relative; }\n    .inner-container.addition .item .item-number {\n      font-size: 24px; }\n    .inner-container.addition .item .problem {\n      position: relative;\n      width: 100px;\n      margin: 0 auto;\n      border-bottom: 2px black solid; }\n      .inner-container.addition .item .problem span {\n        font-size: 30px;\n        letter-spacing: 5px; }\n      .inner-container.addition .item .problem .topItem {\n        text-align: right;\n        display: block; }\n      .inner-container.addition .item .problem .botItem {\n        text-align: right;\n        display: block; }\n      .inner-container.addition .item .problem .operator {\n        position: absolute;\n        bottom: 0; }\n\n.next {\n  float: right;\n  font-size: 24px;\n  background-color: #0ab048;\n  border: none;\n  color: white; }\n\n.wrong {\n  color: red; }\n\n.correct {\n  color: #0ab048; }\n\n.try-again {\n  display: block;\n  background-color: #0ab048;\n  width: 150px;\n  margin: 0 auto;\n  color: white; }\n\n.carry {\n  text-align: right;\n  height: 30px;\n  position: absolute;\n  width: 100%;\n  top: -20px;\n  padding-right: 90px; }\n  .carry span {\n    font-size: 18px !important;\n    color: #5d5b5b;\n    display: block;\n    width: 20px;\n    height: 30px;\n    text-align: center;\n    float: right; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!./node_modules/postcss-loader/index.js?{\"ident\":\"postcss\"}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!./src/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--10-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--10-3!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--10-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--10-3!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/styles.scss");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map