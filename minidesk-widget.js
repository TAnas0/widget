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
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ "034f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("31c5");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "038a":
/***/ (function(module, exports) {

module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8ac48580-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SvgIcon.vue?vue&type=template&id=30190379&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{class:_vm.clazz,style:(_vm.style),attrs:{"version":"1.1","viewBox":_vm.box},domProps:{"innerHTML":_vm._s(_vm.path)},on:{"click":_vm.onClick}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SvgIcon.vue?vue&type=template&id=30190379&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SvgIcon.vue?vue&type=script&lang=js&
//
//
//
//
var icons = {};
var notLoadedIcons = [];
var defaultWidth = '';
var defaultHeight = '';
var classPrefix = 'svg';
var isStroke = false;
/* harmony default export */ var SvgIconvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      loaded: false
    };
  },
  props: {
    icon: String,
    name: String,
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    scale: String,
    dir: String,
    fill: {
      type: Boolean,
      default: function _default() {
        return !isStroke;
      }
    },
    color: String,
    original: {
      type: Boolean,
      default: false
    },
    title: String
  },
  computed: {
    clazz: function clazz() {
      var clazz = "".concat(classPrefix, "-icon");

      if (this.fill) {
        clazz += " ".concat(classPrefix, "-fill");
      }

      if (this.dir) {
        clazz += " ".concat(classPrefix, "-").concat(this.dir);
      }

      return clazz;
    },
    iconName: function iconName() {
      return this.name || this.icon;
    },
    iconData: function iconData() {
      var iconData = icons[this.iconName];

      if (iconData || this.loaded) {
        return iconData;
      }

      return null;
    },
    colors: function colors() {
      if (this.color) {
        return this.color.split(' ');
      }

      return [];
    },
    path: function path() {
      var pathData = '';

      if (this.iconData) {
        pathData = this.iconData.data;
        pathData = this.setTitle(pathData); // use original color

        if (this.original) {
          pathData = this.addOriginalColor(pathData);
        }

        if (this.colors.length > 0) {
          pathData = this.addColor(pathData);
        }
      } else {
        // if no iconData, push to notLoadedIcons
        notLoadedIcons.push({
          name: this.iconName,
          component: this
        });
      }

      return this.getValidPathData(pathData);
    },
    box: function box() {
      var width = this.width || 16;
      var height = this.width || 16;

      if (this.iconData) {
        if (this.iconData.viewBox) {
          return this.iconData.viewBox;
        }

        return "0 0 ".concat(this.iconData.width, " ").concat(this.iconData.height);
      }

      return "0 0 ".concat(parseFloat(width), " ").concat(parseFloat(height));
    },
    style: function style() {
      var digitReg = /^\d+$/;
      var scale = Number(this.scale);
      var width;
      var height; // apply scale

      if (!isNaN(scale) && this.iconData) {
        width = Number(this.iconData.width) * scale + 'px';
        height = Number(this.iconData.height) * scale + 'px';
      } else {
        width = digitReg.test(this.width) ? this.width + 'px' : this.width || defaultWidth;
        height = digitReg.test(this.height) ? this.height + 'px' : this.height || defaultWidth;
      }

      var style = {};

      if (width) {
        style.width = width;
      }

      if (height) {
        style.height = height;
      }

      return style;
    }
  },
  created: function created() {
    if (icons[this.iconName]) {
      this.loaded = true;
    }
  },
  methods: {
    addColor: function addColor(data) {
      var _this = this;

      var reg = /<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi;
      var i = 0;
      return data.replace(reg, function (match) {
        var color = _this.colors[i++] || _this.colors[_this.colors.length - 1];
        var fill = _this.fill; // if color is '_', ignore it

        if (color && color === '_') {
          return match;
        } // if color start with 'r-', reverse the fill value


        if (color && color.indexOf('r-') === 0) {
          fill = !fill;
          color = color.split('r-')[1];
        }

        var style = fill ? 'fill' : 'stroke';
        var reverseStyle = fill ? 'stroke' : 'fill';
        return match + "".concat(style, "=\"").concat(color, "\" ").concat(reverseStyle, "=\"none\" ");
      });
    },
    addOriginalColor: function addOriginalColor(data) {
      var styleReg = /_fill="|_stroke="/gi;
      return data.replace(styleReg, function (styleName) {
        return styleName && styleName.slice(1);
      });
    },
    getValidPathData: function getValidPathData(pathData) {
      // If use original and colors, clear double fill or stroke
      if (this.original && this.colors.length > 0) {
        var reg = /<(path|rect|circle|polygon|line|polyline|ellipse)(\sfill|\sstroke)([="\w\s\.\-\+#\$\&>]+)(fill|stroke)/gi;
        pathData = pathData.replace(reg, function (match, p1, p2, p3, p4) {
          return "<".concat(p1).concat(p2).concat(p3, "_").concat(p4);
        });
      }

      return pathData;
    },
    setTitle: function setTitle(pathData) {
      if (this.title) {
        var title = this.title.replace(/\</gi, '&lt;').replace(/>/gi, '&gt;').replace(/&/g, '&amp;');
        return "<title>".concat(title, "</title>") + pathData;
      }

      return pathData;
    },
    onClick: function onClick(e) {
      this.$emit('click', e);
    }
  },
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var tagName = options.tagName || 'svgicon';

    if (options.classPrefix) {
      classPrefix = options.classPrefix;
    }

    isStroke = !!options.isStroke; // default size

    options.defaultWidth && (defaultWidth = options.defaultWidth);
    options.defaultHeight && (defaultHeight = options.defaultHeight);
    Vue.component(tagName, this);
  },
  // register icons
  register: function register(data) {
    var _loop = function _loop(name) {
      if (!icons[name]) {
        icons[name] = data[name];
      } // check new register icon is not loaded, and set loaded to true


      notLoadedIcons = notLoadedIcons.filter(function (v, ix) {
        if (v.name === name) {
          v.component.$set(v.component, 'loaded', true);
        }

        return v.name !== name;
      });
    };

    for (var name in data) {
      _loop(name);
    }
  },
  icons: icons
});
// CONCATENATED MODULE: ./src/components/SvgIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SvgIconvue_type_script_lang_js_ = (SvgIconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/SvgIcon.vue





/* normalize component */

var component = normalizeComponent(
  components_SvgIconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "SvgIcon.vue"
/* harmony default export */ var SvgIcon = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (SvgIcon);



/***/ })

/******/ })["default"];
//# sourceMappingURL=svgicon.common.js.map

/***/ }),

/***/ "04ed":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/CircularStd-Bold.03e7ee16.woff";

/***/ }),

/***/ "061b":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.Widget_minidesk-widget__container_2ZSqn{height:665px;width:400px;-webkit-box-shadow:0 2px 19px 0 rgba(124,134,153,.36);box-shadow:0 2px 19px 0 rgba(124,134,153,.36);text-align:left;font-family:Circular Std;border-radius:4px;background-color:#fff;z-index:999999999\n}\n.Widget_minidesk-widget__pages_mJqqf{height:632px\n}\n.Widget_minidesk-widget__help-button-showed_3GmNJ{height:62px;min-width:106px;border-radius:31px;color:#fff\n}\n.Widget_minidesk-widget__help-button-not-showed_31xNT{height:62px;width:62px\n}\n@media (max-width:576px){\n.Widget_minidesk-widget__container_2ZSqn{width:100%;height:100vh;border-radius:0\n}\n.Widget_minidesk-widget__pages_mJqqf{height:calc(100vh - 35px)\n}\n}", ""]);

// exports
exports.locals = {
	"minidesk-widget__container": "Widget_minidesk-widget__container_2ZSqn",
	"minidesk-widget__pages": "Widget_minidesk-widget__pages_mJqqf",
	"minidesk-widget__help-button-showed": "Widget_minidesk-widget__help-button-showed_3GmNJ",
	"minidesk-widget__help-button-not-showed": "Widget_minidesk-widget__help-button-not-showed_31xNT"
};

/***/ }),

/***/ "0e0c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/CircularStd-Black.49611f29.woff";

/***/ }),

/***/ "1dad":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/CircularStd-BoldItalic.705bbdf2.woff";

/***/ }),

/***/ "1e74":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
var icon = __webpack_require__("038a");

icon.register({
  'close': {
    width: 512,
    height: 512,
    viewBox: '0 0 52 52',
    data: '<g _fill="#FFF"><path pid="0" d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"/><path pid="1" d="M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z"/></g>'
  }
});

/***/ }),

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "206f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/CircularStd-Book.829012af.woff";

/***/ }),

/***/ "2350":
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

/***/ "23c8":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.Footer_minidesk-widget-footer_5cl01{height:35px;color:#fff;font-size:11px;font-weight:500;line-height:14px;border-bottom-left-radius:4px;border-bottom-right-radius:4px\n}\n@media (max-width:576px){\n.Footer_minidesk-widget-footer_5cl01{border-radius:0\n}\n}", ""]);

// exports
exports.locals = {
	"minidesk-widget-footer": "Footer_minidesk-widget-footer_5cl01"
};

/***/ }),

/***/ "2bda":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.Home_scroll-area-empty_1wB3w{height:480px\n}\n.Home_scroll-area-one_3jIA9{height:337px\n}\n.Home_scroll-area-more_3WTYg{height:214px\n}\n@media (max-width:576px){\n.Home_scroll-area-empty_1wB3w{height:calc(100vh - 185px)\n}\n.Home_scroll-area-one_3jIA9{height:calc(100vh - 330px)\n}\n.Home_scroll-area-more_3WTYg{height:calc(100vh - 455px)\n}\n}", ""]);

// exports
exports.locals = {
	"scroll-area-empty": "Home_scroll-area-empty_1wB3w",
	"scroll-area-one": "Home_scroll-area-one_3jIA9",
	"scroll-area-more": "Home_scroll-area-more_3WTYg"
};

/***/ }),

/***/ "2be6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/category_widget.75c07522.svg";

/***/ }),

/***/ "2d25":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/category_settings.4d511576.svg";

/***/ }),

/***/ "31c5":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5fc7");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("f155f63c", content, shadowRoot)
};

/***/ }),

/***/ "3233":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n:first-child .ListArticles_list-group-item_2GU8L:first-of-type{border-top:0\n}\n:last-child .ListArticles_list-group-item_2GU8L:last-of-type{border-bottom:0\n}\n.ListArticles_minidesk-widget-list-articles__title_gb_zo{color:#4e4e4e;font-size:16px;font-weight:300;line-height:20px\n}", ""]);

// exports
exports.locals = {
	"list-group-item": "ListArticles_list-group-item_2GU8L",
	"minidesk-widget-list-articles__title": "ListArticles_minidesk-widget-list-articles__title_gb_zo"
};

/***/ }),

/***/ "359b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4ce8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "35d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesToShadowDOM; });


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "3884":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("67a5");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("0d484d54", content, shadowRoot)
};

/***/ }),

/***/ "3b64":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("44e1");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("97f95fb6", content, shadowRoot)
};

/***/ }),

/***/ "44e1":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.Header_minidesk-widget-header_WBZYp{height:85px;color:#fff;font-size:22px;font-weight:500;line-height:28px;border-top-left-radius:4px;border-top-right-radius:4px\n}\n@media (max-width:576px){\n.Header_minidesk-widget-header_WBZYp{border-radius:0\n}\n}", ""]);

// exports
exports.locals = {
	"minidesk-widget-header": "Header_minidesk-widget-header_WBZYp"
};

/***/ }),

/***/ "4ce8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5c6a");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("6197eb73", content, shadowRoot)
};

/***/ }),

/***/ "5021":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
var icon = __webpack_require__("038a");

icon.register({
  'right-arrow': {
    width: 512,
    height: 512,
    viewBox: '0 0 492.004 492.004',
    data: '<path pid="0" d="M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z" _fill="#b2bfcf"/>'
  }
});

/***/ }),

/***/ "52a7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cc84");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5843":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHeader_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ce38");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHeader_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHeader_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHeader_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHeader_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHeader_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5a74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name) {
      return true
    }
    return value != null
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      super();
      this.attachShadow({ mode: 'open' });

      const wrapper = this._wrapper = new Vue({
        name: 'shadow-root',
        customElement: this,
        shadowRoot: this.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === this) {
            syncAttribute(this, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            this.childNodes
          ));
        }
      });
      observer.observe(this, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/css-loader/lib/css-base.js
var css_base = __webpack_require__("2350");

// EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("35d6");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// EXTERNAL MODULE: ./node_modules/vue-svgicon/dist/components/svgicon.common.js
var svgicon_common = __webpack_require__("038a");
var svgicon_common_default = /*#__PURE__*/__webpack_require__.n(svgicon_common);

// EXTERNAL MODULE: ./node_modules/vuebar/vuebar.js
var vuebar = __webpack_require__("ae1a");
var vuebar_default = /*#__PURE__*/__webpack_require__.n(vuebar);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3a86e180-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=6b4a3e7e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Widget')}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=6b4a3e7e&

// EXTERNAL MODULE: ./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js
var webcomponents_bundle = __webpack_require__("ec2e");

// EXTERNAL MODULE: ./src/compiled-icons/index.js
var compiled_icons = __webpack_require__("9f24");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3a86e180-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Widget.vue?vue&type=template&id=323cb7d9&
var Widgetvue_type_template_id_323cb7d9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.widgetOnMobile)?_c('div',{staticClass:"d-xs-flex"},[_c('div',{staticClass:"fixed-bottom"},[(_vm.showed)?_c('div',{class:_vm.position},[_c('div',{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:(_vm.away),expression:"away"}],class:_vm.$style['minidesk-widget__container']},[_c('div',{class:_vm.$style['minidesk-widget__pages']},[(_vm.current === 'home')?_c('app-home',{on:{"currentPage":function($event){_vm.current = $event},"category":function($event){_vm.categorySelected = $event},"article":function($event){_vm.articleSelected = $event},"closed":function($event){_vm.showed = $event}}}):_vm._e(),(_vm.current === 'articles')?_c('app-articles',{attrs:{"category":_vm.categorySelected},on:{"currentPage":function($event){_vm.current = $event},"article":function($event){_vm.articleSelected = $event},"previous":function($event){_vm.current = $event},"closed":function($event){_vm.showed = $event}}}):_vm._e(),(_vm.current === 'details')?_c('app-article-details',{attrs:{"article":_vm.articleSelected},on:{"previous":function($event){_vm.current = $event},"closed":function($event){_vm.showed = $event}}}):_vm._e()],1),_c('app-footer')],1)]):_vm._e(),_c('div',{class:{'d-none d-sm-block': _vm.showed}},[_c('span',{class:_vm.position},[(!_vm.showed)?_c('button',{staticClass:"btn btn-lg my-4 shadow-none",class:_vm.$style['minidesk-widget__help-button-showed'],style:({backgroundColor: _vm.widgetPrimaryColor}),on:{"click":function($event){_vm.showed = !_vm.showed}}},[_vm._v(_vm._s(this.widgetButtonText))]):_vm._e(),(_vm.showed)?_c('button',{staticClass:"btn btn-lg my-4 shadow-none rounded-circle",class:_vm.$style['minidesk-widget__help-button-not-showed'],style:({backgroundColor: _vm.widgetPrimaryColor}),on:{"click":function($event){_vm.showed = !_vm.showed}}},[_c('span',{staticClass:"d-flex justify-content-center align-items-center"},[_c('svgicon',{attrs:{"name":"cancel","width":"24px","height":"24px","color":"#ffffff"}})],1)]):_vm._e()])])])]):_vm._e()}
var Widgetvue_type_template_id_323cb7d9_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Widget.vue?vue&type=template&id=323cb7d9&

// EXTERNAL MODULE: ./node_modules/vue-clickaway/dist/vue-clickaway.common.js
var vue_clickaway_common = __webpack_require__("c7db");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3a86e180-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/Home.vue?vue&type=template&id=67a47c4f&
var Homevue_type_template_id_67a47c4f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('app-home-header',{on:{"article":_vm.articleSelected,"currentPage":_vm.current,"closed":_vm.close}}),_c('div',{directives:[{name:"bar",rawName:"v-bar"}],class:_vm.$style[_vm.scollArea]},[_c('div',[_c('app-headline',{attrs:{"headline":_vm.headlines[0]}}),_c('app-list-categories',{attrs:{"categories":_vm.categories},on:{"category":_vm.categorySelected,"currentPage":_vm.current}}),_c('app-headline',{attrs:{"headline":_vm.headlines[1]}}),_c('app-list-articles',{attrs:{"articles":_vm.articles},on:{"article":_vm.articleSelected,"currentPage":_vm.current}})],1)])],1)}
var Homevue_type_template_id_67a47c4f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/pages/Home.vue?vue&type=template&id=67a47c4f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3a86e180-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/HomeHeader.vue?vue&type=template&id=611b77f1&
var HomeHeadervue_type_template_id_611b77f1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"px-4 py-3",class:_vm.$style['minidesk-widget-home-header'],style:({backgroundColor: _vm.widgetPrimaryColor})},[_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"w-100 d-flex align-items-center",class:_vm.$style['minidesk-widget-home-header__title'],attrs:{"for":"searchArticle"}},[_c('span',[_vm._v(_vm._s(_vm.widgetTitle))]),_c('span',{staticClass:"ml-auto mr-4 d-block d-sm-none",staticStyle:{"cursor":"pointer"},attrs:{"id":"minidesk-widget-home-header__close"},on:{"click":_vm.close}},[_c('svgicon',{attrs:{"name":"close","width":"24px","height":"24px","color":"#ffffff"}})],1)]),_c('input',{staticClass:"form-control form-control-lg border-0",class:_vm.$style['minidesk-widget-home-header__search'],attrs:{"type":"text","id":"searchArticle","placeholder":"Search for an article"}})]),(_vm.recommendedArticles.length !== 0)?_c('div',{staticClass:"mt-3",attrs:{"id":"RecommendedArticles"}},[_c('div',{staticClass:"mb-3",class:_vm.$style['minidesk-widget-home-header__recommended']},[_vm._v("Recommended articles :")]),_c('div',{directives:[{name:"bar",rawName:"v-bar"}],class:_vm.$style[_vm.scollArea]},[_c('div',_vm._l((_vm.recommendedArticles),function(article){return _c('div',{key:article.id,staticClass:"card mb-3",class:_vm.$style['minidesk-widget-home-header__card'],on:{"click":function($event){_vm.articleSelected(article)}}},[_c('div',{staticClass:"card-body"},[_c('h5',{staticClass:"card-title",class:_vm.$style['minidesk-widget-home-header__card-title']},[_vm._v(_vm._s(article.title))]),_c('p',{staticClass:"card-text",class:_vm.$style['minidesk-widget-home-header__card-text'],domProps:{"innerHTML":_vm._s(article.content.substring(0,40))}})])])}))])]):_vm._e()])}
var HomeHeadervue_type_template_id_611b77f1_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/common/HomeHeader.vue?vue&type=template&id=611b77f1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/HomeHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// NPM
/* harmony default export */ var HomeHeadervue_type_script_lang_js_ = ({
  computed: {
    recommendedArticles() {
      return this.$store.state.article.articles.filter(article => article.recommended === true);
    },

    widgetPrimaryColor() {
      return this.$store.state.setting.widget.primaryColor;
    },

    widgetTitle() {
      return this.$store.state.setting.widget.title;
    },

    scollArea() {
      if (this.recommendedArticles.length === 1) {
        console.log('one');
        return 'scroll-area-one';
      } else {
        console.log('more');
        return 'scroll-area-more';
      }
    }

  },
  methods: {
    close() {
      this.$emit('closed', false);
    },

    articleSelected(article) {
      this.$emit('article', article);
      this.$emit('currentPage', 'details');
    }

  }
});
// CONCATENATED MODULE: ./src/components/common/HomeHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_HomeHeadervue_type_script_lang_js_ = (HomeHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/common/HomeHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("5843")
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var component = normalizeComponent(
  common_HomeHeadervue_type_script_lang_js_,
  HomeHeadervue_type_template_id_611b77f1_render,
  HomeHeadervue_type_template_id_611b77f1_staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

component.options.__file = "HomeHeader.vue"
/* harmony default export */ var HomeHeader = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3a86e180-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/Headline.vue?vue&type=template&id=ca31d3e6&
var Headlinevue_type_template_id_ca31d3e6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex align-items-center",class:_vm.$style['minidesk-widget-headline__background'],style:({backgroundColor: _vm.widgetPrimaryColor + '1a'})},[_c('span',{class:'ml-4 ' + _vm.$style['minidesk-widget-headline__content'],style:({color: _vm.widgetPrimaryColor})},[_vm._v("\n    "+_vm._s(_vm.headline)+"\n  ")])])}
var Headlinevue_type_template_id_ca31d3e6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/common/Headline.vue?vue&type=template&id=ca31d3e6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/Headline.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Headlinevue_type_script_lang_js_ = ({
  props: {
    headline: {
      type: String,
      required: true
    }
  },
  computed: {
    widgetPrimaryColor() {
      return this.$store.state.setting.widget.primaryColor;
    }

  }
});
// CONCATENATED MODULE: ./src/components/common/Headline.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_Headlinevue_type_script_lang_js_ = (Headlinevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/common/Headline.vue



function Headline_injectStyles (context) {
  
  var style0 = __webpack_require__("359b")
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var Headline_component = normalizeComponent(
  common_Headlinevue_type_script_lang_js_,
  Headlinevue_type_template_id_ca31d3e6_render,
  Headlinevue_type_template_id_ca31d3e6_staticRenderFns,
  false,
  Headline_injectStyles,
  null,
  null
  ,true
)

Headline_component.options.__file = "Headline.vue"
/* harmony default export */ var Headline = (Headline_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3a86e180-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/ListCategories.vue?vue&type=template&id=28c1aade&
var ListCategoriesvue_type_template_id_28c1aade_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"list-group list-group-flush"},_vm._l((_vm.categories),function(category){return _c('li',{key:category.id,staticClass:"list-group-item pl-4 pr-4",staticStyle:{"cursor":"pointer"},on:{"click":function($event){_vm.categorySelected(category)}}},[_c('div',{staticClass:"media d-flex align-items-center"},[_c('span',{staticClass:"mr-3",class:_vm.$style['minidesk-widget-list-categories__icon'],style:({backgroundColor: _vm.widgetPrimaryColor})},[_c('img',{attrs:{"src":__webpack_require__("c031")("./category_"+category.icon+'.svg'),"height":"20px","width":"20px"}})]),_c('div',{staticClass:"media-body"},[_c('div',{staticClass:"mt-0 d-flex align-items-center"},[_c('div',{class:_vm.$style['minidesk-widget-list-categories__title']},[_vm._v(_vm._s(category.title))]),_c('div',{staticClass:"ml-auto"},[_c('svgicon',{attrs:{"name":"right-arrow","width":"16px","height":"12px","color":"#b2bfcf"}})],1)])])])])}))}
var ListCategoriesvue_type_template_id_28c1aade_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/common/ListCategories.vue?vue&type=template&id=28c1aade&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/ListCategories.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ListCategoriesvue_type_script_lang_js_ = ({
  props: {
    categories: {
      type: Array
    }
  },
  computed: {
    widgetPrimaryColor() {
      return this.$store.state.setting.widget.primaryColor;
    }

  },
  methods: {
    categorySelected(category) {
      this.$emit('category', category);
      this.$emit('currentPage', 'articles');
    }

  }
});
// CONCATENATED MODULE: ./src/components/common/ListCategories.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_ListCategoriesvue_type_script_lang_js_ = (ListCategoriesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/common/ListCategories.vue



function ListCategories_injectStyles (context) {
  
  var style0 = __webpack_require__("b330")
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var ListCategories_component = normalizeComponent(
  common_ListCategoriesvue_type_script_lang_js_,
  ListCategoriesvue_type_template_id_28c1aade_render,
  ListCategoriesvue_type_template_id_28c1aade_staticRenderFns,
  false,
  ListCategories_injectStyles,
  null,
  null
  ,true
)

ListCategories_component.options.__file = "ListCategories.vue"
/* harmony default export */ var ListCategories = (ListCategories_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3a86e180-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/ListArticles.vue?vue&type=template&id=7890d34c&
var ListArticlesvue_type_template_id_7890d34c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"list-group list-group-flush"},_vm._l((_vm.articles),function(article){return _c('li',{key:article.id,staticClass:"list-group-item pl-4 pr-4 py-3",staticStyle:{"cursor":"pointer"},on:{"click":function($event){_vm.articleSelected(article)}}},[_c('div',{staticClass:"d-flex align-items-center"},[_c('div',{class:_vm.$style['minidesk-widget-list-articles__title']},[_vm._v(_vm._s(article.title))]),_c('div',{staticClass:"ml-auto"},[_c('svgicon',{attrs:{"name":"right-arrow","width":"16px","height":"12px","color":"#b2bfcf"}})],1)])])}))}
var ListArticlesvue_type_template_id_7890d34c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/common/ListArticles.vue?vue&type=template&id=7890d34c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/ListArticles.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ListArticlesvue_type_script_lang_js_ = ({
  props: {
    articles: {
      type: Array
    }
  },
  methods: {
    articleSelected(article) {
      this.$emit('article', article);
      this.$emit('currentPage', 'details');
    }

  }
});
// CONCATENATED MODULE: ./src/components/common/ListArticles.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_ListArticlesvue_type_script_lang_js_ = (ListArticlesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/common/ListArticles.vue



function ListArticles_injectStyles (context) {
  
  var style0 = __webpack_require__("9597")
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var ListArticles_component = normalizeComponent(
  common_ListArticlesvue_type_script_lang_js_,
  ListArticlesvue_type_template_id_7890d34c_render,
  ListArticlesvue_type_template_id_7890d34c_staticRenderFns,
  false,
  ListArticles_injectStyles,
  null,
  null
  ,true
)

ListArticles_component.options.__file = "ListArticles.vue"
/* harmony default export */ var ListArticles = (ListArticles_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/Home.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// PROJECT




/* harmony default export */ var Homevue_type_script_lang_js_ = ({
  data() {
    return {
      headlines: ['BROWSE CATEGORIES', 'POPULAR ARTICLES'],
      recommendedArticlesLength: 'empty'
    };
  },

  components: {
    appHomeHeader: HomeHeader,
    appHeadline: Headline,
    appListCategories: ListCategories,
    appListArticles: ListArticles
  },
  computed: {
    articles() {
      return this.$store.state.article.articles;
    },

    categories() {
      return this.$store.state.category.categories;
    },

    scollArea() {
      if (this.$store.state.article.articles.filter(article => article.recommended === true).length === 0) {
        return 'scroll-area-empty';
      } else if (this.$store.state.article.articles.filter(article => article.recommended === true).length === 1) {
        return 'scroll-area-one';
      } else {
        return 'scroll-area-more';
      }
    }

  },
  methods: {
    close() {
      this.$emit('closed', false);
    },

    categorySelected(value) {
      this.$emit('category', value);
    },

    articleSelected(value) {
      this.$emit('article', value);
    },

    current(value) {
      this.$emit('currentPage', value);
    }

  }
});
// CONCATENATED MODULE: ./src/components/pages/Home.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/pages/Home.vue



function Home_injectStyles (context) {
  
  var style0 = __webpack_require__("c646")
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var Home_component = normalizeComponent(
  pages_Homevue_type_script_lang_js_,
  Homevue_type_template_id_67a47c4f_render,
  Homevue_type_template_id_67a47c4f_staticRenderFns,
  false,
  Home_injectStyles,
  null,
  null
  ,true
)

Home_component.options.__file = "Home.vue"
/* harmony default export */ var Home = (Home_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3a86e180-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/Articles.vue?vue&type=template&id=4d77381a&
var Articlesvue_type_template_id_4d77381a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('app-header',{attrs:{"title":_vm.categorySelected.title},on:{"previous":_vm.previous,"closed":_vm.close}}),_c('div',{directives:[{name:"bar",rawName:"v-bar"}],class:_vm.$style['scroll-area']},[_c('div',[_c('app-headline',{attrs:{"headline":_vm.headlines[0]}}),_c('app-list-articles',{attrs:{"articles":_vm.articles},on:{"article":_vm.articleSelected,"currentPage":_vm.current}}),_c('app-headline',{attrs:{"headline":_vm.headlines[1]}}),_c('app-list-categories',{attrs:{"categories":_vm.categories},on:{"category":function($event){_vm.categorySelected = $event}}})],1)])],1)}
var Articlesvue_type_template_id_4d77381a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/pages/Articles.vue?vue&type=template&id=4d77381a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3a86e180-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/Header.vue?vue&type=template&id=797c4e01&
var Headervue_type_template_id_797c4e01_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex align-items-center",class:_vm.$style['minidesk-widget-header'],style:({backgroundColor: _vm.widgetPrimaryColor})},[_c('span',{staticClass:"ml-4 mr-3",staticStyle:{"cursor":"pointer"},attrs:{"id":"minidesk-widget-header__previous"},on:{"click":_vm.previous}},[_c('svgicon',{attrs:{"name":"left-arrow","width":"20px","height":"16px","color":"#ffffff"}})],1),_c('span',[_vm._v(_vm._s(_vm.title))]),_c('span',{staticClass:"ml-auto mr-4 d-block d-sm-none",staticStyle:{"cursor":"pointer"},attrs:{"id":"minidesk-widget-header__close"},on:{"click":_vm.close}},[_c('svgicon',{attrs:{"name":"close","width":"24px","height":"24px","color":"#ffffff"}})],1)])}
var Headervue_type_template_id_797c4e01_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/common/Header.vue?vue&type=template&id=797c4e01&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    widgetPrimaryColor() {
      return this.$store.state.setting.widget.primaryColor;
    }

  },
  methods: {
    previous() {
      this.$emit('previous', 'home');
    },

    close() {
      this.$emit('closed', false);
    }

  }
});
// CONCATENATED MODULE: ./src/components/common/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/common/Header.vue



function Header_injectStyles (context) {
  
  var style0 = __webpack_require__("b53b")
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var Header_component = normalizeComponent(
  common_Headervue_type_script_lang_js_,
  Headervue_type_template_id_797c4e01_render,
  Headervue_type_template_id_797c4e01_staticRenderFns,
  false,
  Header_injectStyles,
  null,
  null
  ,true
)

Header_component.options.__file = "Header.vue"
/* harmony default export */ var Header = (Header_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/Articles.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// PROJECT




/* harmony default export */ var Articlesvue_type_script_lang_js_ = ({
  props: {
    category: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      headlines: ['ALL ARTICLES', 'OTHER CATEGORIES'],
      categorySelected: this.category
    };
  },

  components: {
    appHeader: Header,
    appHeadline: Headline,
    appListArticles: ListArticles,
    appListCategories: ListCategories
  },
  computed: {
    articles() {
      return this.$store.state.article.articles.filter(article => article.category === this.categorySelected.id);
    },

    categories() {
      return this.$store.state.category.categories.filter(category => category.id !== this.categorySelected.id);
    }

  },
  methods: {
    close() {
      this.$emit('closed', false);
    },

    previous(value) {
      this.$emit('previous', value);
    },

    articleSelected(value) {
      this.$emit('article', value);
    },

    current(value) {
      this.$emit('currentPage', value);
    }

  }
});
// CONCATENATED MODULE: ./src/components/pages/Articles.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Articlesvue_type_script_lang_js_ = (Articlesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/pages/Articles.vue



function Articles_injectStyles (context) {
  
  var style0 = __webpack_require__("52a7")
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var Articles_component = normalizeComponent(
  pages_Articlesvue_type_script_lang_js_,
  Articlesvue_type_template_id_4d77381a_render,
  Articlesvue_type_template_id_4d77381a_staticRenderFns,
  false,
  Articles_injectStyles,
  null,
  null
  ,true
)

Articles_component.options.__file = "Articles.vue"
/* harmony default export */ var Articles = (Articles_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3a86e180-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/ArticleDetails.vue?vue&type=template&id=32b101b8&
var ArticleDetailsvue_type_template_id_32b101b8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('app-header',{attrs:{"title":'Article'},on:{"previous":_vm.previous,"closed":_vm.close}}),_c('div',{directives:[{name:"bar",rawName:"v-bar"}],class:_vm.$style['scroll-area']},[_c('div',[_c('div',{staticClass:"m-4",class:_vm.$style['minidesk-widget-article-details__title']},[_vm._v(_vm._s(_vm.articleSelected.title))]),_c('div',{staticClass:"m-4",class:_vm.$style['minidesk-widget-article-details__content'],domProps:{"innerHTML":_vm._s(_vm.articleSelected.content)}})])])],1)}
var ArticleDetailsvue_type_template_id_32b101b8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/pages/ArticleDetails.vue?vue&type=template&id=32b101b8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/ArticleDetails.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// PROJECT

/* harmony default export */ var ArticleDetailsvue_type_script_lang_js_ = ({
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      articleSelected: this.article
    };
  },

  components: {
    appHeader: Header
  },
  methods: {
    close() {
      this.$emit('closed', false);
    },

    previous(value) {
      this.$emit('previous', value);
    }

  }
});
// CONCATENATED MODULE: ./src/components/pages/ArticleDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_ArticleDetailsvue_type_script_lang_js_ = (ArticleDetailsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/pages/ArticleDetails.vue



function ArticleDetails_injectStyles (context) {
  
  var style0 = __webpack_require__("8495")
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var ArticleDetails_component = normalizeComponent(
  pages_ArticleDetailsvue_type_script_lang_js_,
  ArticleDetailsvue_type_template_id_32b101b8_render,
  ArticleDetailsvue_type_template_id_32b101b8_staticRenderFns,
  false,
  ArticleDetails_injectStyles,
  null,
  null
  ,true
)

ArticleDetails_component.options.__file = "ArticleDetails.vue"
/* harmony default export */ var ArticleDetails = (ArticleDetails_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3a86e180-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/Footer.vue?vue&type=template&id=66fe4465&
var Footervue_type_template_id_66fe4465_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex justify-content-center align-items-center",class:_vm.$style['minidesk-widget-footer'],style:({backgroundColor: _vm.widgetPrimaryColor})},[_vm._v("Powered by Minidesk")])}
var Footervue_type_template_id_66fe4465_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/common/Footer.vue?vue&type=template&id=66fe4465&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  computed: {
    widgetPrimaryColor() {
      return this.$store.state.setting.widget.primaryColor;
    }

  }
});
// CONCATENATED MODULE: ./src/components/common/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/common/Footer.vue



function Footer_injectStyles (context) {
  
  var style0 = __webpack_require__("67db")
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var Footer_component = normalizeComponent(
  common_Footervue_type_script_lang_js_,
  Footervue_type_template_id_66fe4465_render,
  Footervue_type_template_id_66fe4465_staticRenderFns,
  false,
  Footer_injectStyles,
  null,
  null
  ,true
)

Footer_component.options.__file = "Footer.vue"
/* harmony default export */ var Footer = (Footer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Widget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// NPM
 // PROJECT





/* harmony default export */ var Widgetvue_type_script_lang_js_ = ({
  directives: {
    onClickaway: vue_clickaway_common["directive"]
  },

  data() {
    return {
      showed: false,
      current: 'home',
      categorySelected: {},
      articleSelected: {}
    };
  },

  components: {
    appHome: Home,
    appArticles: Articles,
    appArticleDetails: ArticleDetails,
    appFooter: Footer
  },
  computed: {
    widgetPrimaryColor() {
      return this.$store.state.setting.widget.primaryColor;
    },

    widgetButtonText() {
      return this.$store.state.setting.widget.buttonText;
    },

    widgetPosition() {
      return this.$store.state.setting.widget.position;
    },

    widgetOnMobile() {
      return this.$store.state.setting.widget.onMobile;
    },

    position() {
      return {
        'd-flex justify-content-start align-items-end ml-sm-4': this.widgetPosition === 'left',
        'd-flex justify-content-end align-items-end mr-sm-4': this.widgetPosition === 'right'
      };
    }

  },
  methods: {
    away() {
      this.showed = false;
    }

  }
});
// CONCATENATED MODULE: ./src/components/Widget.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Widgetvue_type_script_lang_js_ = (Widgetvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Widget.vue



function Widget_injectStyles (context) {
  
  var style0 = __webpack_require__("814a")
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var Widget_component = normalizeComponent(
  components_Widgetvue_type_script_lang_js_,
  Widgetvue_type_template_id_323cb7d9_render,
  Widgetvue_type_template_id_323cb7d9_staticRenderFns,
  false,
  Widget_injectStyles,
  null,
  null
  ,true
)

Widget_component.options.__file = "Widget.vue"
/* harmony default export */ var Widget = (Widget_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//


 // require('@/assets/fonts/style.module.css')

/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  components: {
    Widget: Widget
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App.vue



function App_injectStyles (context) {
  
  var style0 = __webpack_require__("034f")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var App_component = normalizeComponent(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  App_injectStyles,
  null,
  null
  ,true
)

App_component.options.__file = "App.vue"
/* harmony default export */ var App = (App_component.exports);
// CONCATENATED MODULE: ./node_modules/vuex/dist/vuex.esm.js
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (false) {}

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (false) {}

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (false) {}
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (false) {}

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (false) {}
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (false) {}
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    false
  ) {}
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (false) {}
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (false) {}
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (false) {}

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (false) {}

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {}
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {}
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (false) {}
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (false) {}
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (false) {}

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (false) {}
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (false) {}
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (false) {}
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ var vuex_esm = (index_esm);

// CONCATENATED MODULE: ./src/store/modules/article.js
/* *************************************************************************
 * IMPORTS
 * ************************************************************************* */

/* *************************************************************************
 * STATE, ACTIONS & MUTATIONS
 * ************************************************************************* */
var state = {
  articles: [{
    id: 1,
    title: 'What is sentiment analysis?',
    content: `<p><br><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p><h6>There's two possible reasons for this - either, you paid in via bank transfer and your money hasn't reached us yet, or you didn't pay in.</h6><iframe class="ql-video ql-align-center" allowfullscreen="true" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" height="240" width="100%" frameborder="0"></iframe><h6>If it's the latter, you need to click on your transfer.</h6>`,
    recommended: true,
    category: 1
  }, {
    id: 2,
    title: 'What is the pricing model of this wounderful application for clients?',
    content: `<h6>There's two possible reasons for this - either, you paid in via bank transfer and your money hasn't reached us yet, or you didn't pay in.</h6><iframe class="ql-video ql-align-center" allowfullscreen="true" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" height="240" width="100%" frameborder="0"></iframe><h6>If it's the latter, you need to click on your transfer.</h6>`,
    recommended: true,
    category: 1
  }, {
    id: 3,
    title: 'Can you change, recall, or cancel, a completed transfer?',
    content: `<h6>There's two possible reasons for this - either, you paid in via bank transfer and your money hasn't reached us yet, or you didn't pay in.</h6><iframe class="ql-video ql-align-center" allowfullscreen="true" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" height="240" width="100%" frameborder="0"></iframe><h6>If it's the latter, you need to click on your transfer.</h6>`,
    recommended: true,
    category: 2
  }]
};
var mutations = {};
var actions = {};
/* *************************************************************************
   * VUEX EXPORT
   * ************************************************************************* */

/* harmony default export */ var article = ({
  state,
  mutations,
  actions
});
// CONCATENATED MODULE: ./src/store/modules/category.js
/* *************************************************************************
 * IMPORTS
 * ************************************************************************* */

/* *************************************************************************
 * STATE, ACTIONS & MUTATIONS
 * ************************************************************************* */
var category_state = {
  categories: [{
    id: 1,
    title: 'My account',
    icon: 'personal'
  }, {
    id: 2,
    title: 'Billing & receipts',
    icon: 'billing'
  }]
};
var category_mutations = {};
var category_actions = {};
/* *************************************************************************
 * VUEX EXPORT
 * ************************************************************************* */

/* harmony default export */ var category = ({
  state: category_state,
  mutations: category_mutations,
  actions: category_actions
});
// CONCATENATED MODULE: ./src/store/modules/setting.js
/* *************************************************************************
 * IMPORTS
 * ************************************************************************* */

/* *************************************************************************
 * STATE, ACTIONS & MUTATIONS
 * ************************************************************************* */
var setting_state = {
  widget: {
    buttonText: 'Help',
    primaryColor: '#5DAF75',
    title: 'Helpdesk',
    position: 'right',
    onMobile: true
  }
};
var setting_mutations = {};
var setting_actions = {};
/* *************************************************************************
     * VUEX EXPORT
     * ************************************************************************* */

/* harmony default export */ var setting = ({
  state: setting_state,
  mutations: setting_mutations,
  actions: setting_actions
});
// CONCATENATED MODULE: ./src/store/store.js
/* *************************************************************************
 * IMPORTS
 * ************************************************************************* */
// NPM

 // PROJECT




/* *************************************************************************
 * VUEX CONFIGURATION
 * ************************************************************************* */

external_Vue_default.a.use(vuex_esm);
/* *************************************************************************
 * VUEX EXPORT
 * ************************************************************************* */

/* harmony default export */ var store = (new vuex_esm.Store({
  modules: {
    article: article,
    category: category,
    setting: setting
  }
}));
// CONCATENATED MODULE: ./src/main.js?shadow
/* *************************************************************************
 * IMPORTS
 * ************************************************************************* */
// NPM



 // import vueCustomElement from 'vue-custom-element'
// import 'document-register-element/build/document-register-element'
// BOOTSTRAP
// import './../node_modules/jquery/dist/jquery.min.js'
// import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './../node_modules/bootstrap/dist/js/bootstrap.min.js'
// PROJECT


 // import './assets/fonts/style.css'

/* *************************************************************************
 * APPLICATION & PACKAGE CONFIGURATIONS
 * https://vuejs.org/v2/guide/plugins.html
 * ************************************************************************* */
// Vue.config.productionTip = false
// Vue.use(vueCustomElement)

App.store = store;
external_Vue_default.a.use(svgicon_common_default.a);
external_Vue_default.a.use(vuebar_default.a);
var CustomElement = vue_wc_wrapper(external_Vue_default.a, App);
/* harmony default export */ var mainshadow = (window.customElements.define('minidesk-widget', CustomElement));
/* *************************************************************************
 * VUE INSTANCE
 * ************************************************************************* */
// App.store = store
// Vue.customElement('minidesk-widget', App)
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('minidesk-widget', vue_wc_wrapper(external_Vue_default.a, mainshadow))

/***/ }),

/***/ "5c6a":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.Headline_minidesk-widget-headline__background_2FKjJ{height:56px\n}\n.Headline_minidesk-widget-headline__content_wFfFf{font-size:14px;font-weight:600;line-height:18px\n}", ""]);

// exports
exports.locals = {
	"minidesk-widget-headline__background": "Headline_minidesk-widget-headline__background_2FKjJ",
	"minidesk-widget-headline__content": "Headline_minidesk-widget-headline__content_wFfFf"
};

/***/ }),

/***/ "5f5b":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.Articles_scroll-area_2Sj7U{position:relative;height:545px\n}\n@media (max-width:576px){\n.Articles_scroll-area_2Sj7U{height:calc(100vh - 120px)\n}\n}", ""]);

// exports
exports.locals = {
	"scroll-area": "Articles_scroll-area_2Sj7U"
};

/***/ }),

/***/ "5fc7":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports
exports.i(__webpack_require__("dc52"), "");
exports.i(__webpack_require__("dc95"), "");

// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "67a5":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ArticleDetails_scroll-area_2-9I7{position:relative;height:545px\n}\n.ArticleDetails_minidesk-widget-article-details__title_3B-m0{color:#4e4e4e;font-size:21px;font-weight:500;line-height:27px\n}\n.ArticleDetails_minidesk-widget-article-details__content_2iIkc{color:#7c7c7c;font-size:16px;font-weight:300;line-height:23px\n}\n@media (max-width:576px){\n.ArticleDetails_scroll-area_2-9I7{height:calc(100vh - 120px)\n}\n}", ""]);

// exports
exports.locals = {
	"scroll-area": "ArticleDetails_scroll-area_2-9I7",
	"minidesk-widget-article-details__title": "ArticleDetails_minidesk-widget-article-details__title_3B-m0",
	"minidesk-widget-article-details__content": "ArticleDetails_minidesk-widget-article-details__content_2iIkc"
};

/***/ }),

/***/ "67db":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fb10");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7ef9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3233");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("6adfeafe", content, shadowRoot)
};

/***/ }),

/***/ "814a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d667");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8495":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleDetails_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3884");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleDetails_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleDetails_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleDetails_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleDetails_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleDetails_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8716":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/CircularStd-MediumItalic.451b6f03.woff";

/***/ }),

/***/ "8b32":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/category_billing.faafad90.svg";

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "9597":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListArticles_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7ef9");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListArticles_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListArticles_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListArticles_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListArticles_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListArticles_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9f24":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
__webpack_require__("b500");

__webpack_require__("1e74");

__webpack_require__("a8ff");

__webpack_require__("5021");

/***/ }),

/***/ "a802":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2bda");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("0898ccb4", content, shadowRoot)
};

/***/ }),

/***/ "a8ff":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
var icon = __webpack_require__("038a");

icon.register({
  'left-arrow': {
    width: 512,
    height: 512,
    viewBox: '0 0 492 492',
    data: '<path pid="0" d="M198.608 246.104L382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z" _fill="#FFF"/>'
  }
});

/***/ }),

/***/ "ae1a":
/***/ (function(module, exports, __webpack_require__) {

/*----------------------------------------*\
    Vuebar
\*----------------------------------------*/
;(function(){
    'use strict';



    /*------------------------------------*\
        Vuebar
    \*------------------------------------*/
    var Vuebar = {};
    Vuebar.install = function(Vue, installOptions){


        /*------------------------------------*\
            Custom Directive Name
        \*------------------------------------*/
        installOptions = installOptions || {};
        installOptions.directive = installOptions.directive || 'bar';


        /*------------------------------------*\
            Create State
            - contains default values
        \*------------------------------------*/
        function createState(el){
            el._vuebarState = {

                // config with default values that may be overwritten on directive intialization
                config: {
                    scrollThrottle: 10,
                    draggerThrottle: 10,
                    resizeRefresh: true,
                    observerThrottle: 100,
                    resizeDebounce: 100,
                    unselectableBody: true,
                    overrideFloatingScrollbar: true,
                    scrollingPhantomDelay: 1000,
                    draggingPhantomDelay: 1000,
                    preventParentScroll: false,
                    useScrollbarPseudo: false, // experimental

                    el1Class: 'vb',
                    el1ScrollVisibleClass: 'vb-visible',
                    el1ScrollInvisibleClass: 'vb-invisible',
                    el1ScrollingClass: 'vb-scrolling',
                    el1ScrollingPhantomClass: 'vb-scrolling-phantom',
                    el1DraggingClass: 'vb-dragging',
                    el1DraggingPhantomClass: 'vb-dragging-phantom',

                    el2Class: 'vb-content',

                    draggerClass: 'vb-dragger',
                    draggerStylerClass: 'vb-dragger-styler',
                },

                // reference to binding
                binding: null,

                // references to directive DOM elements
                el1: null,
                el2: null,
                dragger: null,

                // show dragger
                draggerEnabled: null,

                // properties computed for internal directive logic & DOM manipulations
                visibleArea: 0, // ratio between container height and scrollable content height
                scrollTop: 0, // position of content scrollTop in px
                barTop: 0, // position of dragger in px
                barHeight: 0, // height of dragger in px
                mouseBarOffsetY: 0, // relative position of mouse at the time of clicking on dragger
                barDragging: false, // when the dragger is used

                // reference to MutationObserver
                mutationObserver: null,

                // references to timeouts for DOM class manipulation
                scrollingClassTimeout: null,
                draggingClassTimeout: null,
                scrollingPhantomClassTimeout: null,
                draggingPhantomClassTimeout: null,

                // references to a functions we'll need when removing events
                barMousedown: null,
                documentMousemove: null,
                documentMouseup: null,
                windowResize: null,
                scrollHandler: null,
                wheelHandler: null,

            };
            return el._vuebarState;
        }




        /*------------------------------------*\
            Get State
        \*------------------------------------*/
        function getState(el){
            return el._vuebarState;
        }




        /*------------------------------------*\
            Mount Validation
        \*------------------------------------*/
        function markupValidation(el){
            if (!el.firstChild) {
                Vue.util.warn('(Vuebar) Element 1 with v-bar directive doesn\'t have required child element 2.');
                return false;
            }
            return true;
        }





        /*------------------------------------*\
            Computing Properties
        \*------------------------------------*/
        function computeVisibleArea(el){
            var state = getState(el);
            state.visibleArea = (state.el2.clientHeight / state.el2.scrollHeight);
        }

        function computeScrollTop(el){
            var state = getState(el);
            state.scrollTop = state.barTop * (state.el2.scrollHeight / state.el2.clientHeight);
        }

        function computeBarTop(el, event){
            var state = getState(el);

            // if the function gets called on scroll event
            if (!event) {
                state.barTop = state.el2.scrollTop * state.visibleArea;
                return false;
            } // else the function gets called when moving dragger with mouse


            var relativeMouseY = (event.clientY - state.el1.getBoundingClientRect().top);
            if (relativeMouseY <= state.mouseBarOffsetY) { // if bar is trying to go over top
                state.barTop = 0;
            }

            if (relativeMouseY > state.mouseBarOffsetY) { // if bar is moving between top and bottom
                state.barTop = relativeMouseY - state.mouseBarOffsetY;
            }


            if ( (state.barTop + state.barHeight ) >= state.el2.clientHeight ) { // if bar is trying to go over bottom
                state.barTop = state.el2.clientHeight - state.barHeight;
            }

        }

        function computeBarHeight(el){
            var state = getState(el);
            if (state.visibleArea >= 1) {
                state.barHeight = 0;
            } else {
                state.barHeight = state.el2.clientHeight * state.visibleArea;
            }
        }




        /*------------------------------------*\
            Styles & DOM
        \*------------------------------------*/
        function createDragger(el){
            var state = getState(el);

            var dragger = document.createElement('div');
            var draggerStyler = document.createElement('div');

            dragger.className = state.config.draggerClass;

            dragger.style.position = 'absolute';

            if (!state.draggerEnabled) {
                dragger.style.display = 'none';
            }

            draggerStyler.className = state.config.draggerStylerClass;

            dragger.appendChild(draggerStyler);
            state.el1.appendChild(dragger);

            return dragger;
        }


        function updateDragger(el, options){
            var options = options ? options : {};
            var state = getState(el);

            // setting dragger styles
            state.dragger.style.height = parseInt( Math.round( state.barHeight)  ) + 'px';
            state.dragger.style.top = parseInt( Math.round( state.barTop ) ) + 'px';
            //state.dragger.style.height = Math.ceil( state.barHeight ) + 'px';
            //state.dragger.style.top = Math.ceil( state.barTop ) + 'px';

            // scrollbar visible / invisible classes
            if (state.draggerEnabled && (state.visibleArea<1)) {
                removeClass(state.el1, state.config.el1ScrollInvisibleClass);
                addClass(state.el1, state.config.el1ScrollVisibleClass);
            } else {
                removeClass(state.el1, state.config.el1ScrollVisibleClass);
                addClass(state.el1, state.config.el1ScrollInvisibleClass);
            }



            if (options.withScrollingClasses) {

                // add scrolling class
                addClass(state.el1, state.config.el1ScrollingClass);

                // remove scrolling class
                state.scrollingClassTimeout ?
                    clearTimeout(state.scrollingClassTimeout) : null;
                state.scrollingClassTimeout = setTimeout(function() {
                    removeClass(state.el1, state.config.el1ScrollingClass);
                }, state.config.scrollThrottle + 5);



                // add phantom scrolling class
                addClass(state.el1, state.config.el1ScrollingPhantomClass);

                // remove phantom scrolling class
                state.scrollingPhantomClassTimeout ?
                    clearTimeout(state.scrollingPhantomClassTimeout) : null;
                state.scrollingPhantomClassTimeout = setTimeout(function() {
                    removeClass(state.el1, state.config.el1ScrollingPhantomClass);
                }, state.config.scrollThrottle + state.config.scrollingPhantomDelay);

            }

        }



        // this is an experimental feature
        // - it works only on chrome and safari
        // - instead of hiding scrollbar by overflowing it with its parent set to overflow:hidden
        //   we hide scrollbar using pseudo-element selector ::-webkit-scrollbar
        function hideScrollbarUsingPseudoElement(el){
            var state = getState(el);
            var idName = 'vuebar-pseudo-element-styles';
            var selector = '.' + state.config.el2Class + '::-webkit-scrollbar';
            var styleElm = document.getElementById(idName);
            var sheet = null;

            if (styleElm) {
                sheet = styleElm.sheet;
            } else {
                styleElm = document.createElement('style');
                styleElm.id = idName;
                document.head.appendChild(styleElm);
                sheet = styleElm.sheet;
            }

            // detect if there is a rule already added to the selector
            var ruleExists = false;
            for(var i=0, l=sheet.rules.length; i<l; i++){
                var rule = sheet.rules[i];
                if (rule.selectorText == selector) {
                    ruleExists = true;
                }
            }

            // if there is rule added already then don't continue
            if ( ruleExists ) { return false }

            // insert rule
            // - we only need to use insertRule and don't need to use addRule at all
            //   because we're only targeting chrome & safari browsers
            if (sheet.insertRule) {
                sheet.insertRule(selector + '{display:none}', 0);
            }

        }




        function preventParentScroll(el, event){
            var state = getState(el);

            if (state.visibleArea >= 1) {
                return false;
            }

            var scrollDist = state.el2.scrollHeight - state.el2.clientHeight;
            var scrollTop = state.el2.scrollTop;

            var wheelingUp = event.deltaY < 0;
            var wheelingDown = event.deltaY > 0;

            if ( (scrollTop <= 0) && wheelingUp) {
                event.preventDefault();
                return false;
            }

            if ( (scrollTop >= scrollDist) && wheelingDown) {
                event.preventDefault();
                return false;
            }

        }



        function updateScroll(el){
            var state = getState(el);
            state.el2.scrollTop = state.scrollTop;
        }




        /*------------------------------------*\
            Refresh
        \*------------------------------------*/

        function refreshScrollbar(el, options){
            var options = options ? options : {};

            if (options.immediate) {
                computeVisibleArea(el);
                computeBarTop(el);
                computeBarHeight(el);
                updateDragger(el);
            }

            Vue.nextTick(function(){
                if ( !getState(el) ) { return false }
                computeVisibleArea(el);
                computeBarTop(el);
                computeBarHeight(el);
                updateDragger(el);
            }.bind(this));
        }




        /*------------------------------------*\
            Events & Handlers
        \*------------------------------------*/

        function scrollHandler(el){
            var state = getState(el);
            return throttle(function(event){
                computeVisibleArea(el);
                computeBarHeight(el); // fallback for an undetected content change
                if (!state.barDragging) {
                    computeBarTop(el);
                    updateDragger(el, {withScrollingClasses: true});
                }
            }.bind(this), state.config.scrollThrottle);
        }


        function wheelHandler(el){
            return function(event){
                preventParentScroll(el, event);
            }.bind(this);
        }


        function documentMousemove(el){
            var state = getState(el);
            return throttle(function(event){
                computeBarTop(el, event);
                updateDragger(el);
                computeScrollTop(el);
                updateScroll(el);
            }.bind(this), state.config.draggerThrottle);
        }


        function documentMouseup(el){
            var state = getState(el);
            return function(event){

                //
                state.barDragging = false;

                // enable user select
                state.el1.style.userSelect = '';
                state.config.unselectableBody ? compatStyle(document.body, 'UserSelect', '') : null;

                // remove dragging class
                removeClass(state.el1, state.config.el1DraggingClass);
                state.draggingPhantomClassTimeout = setTimeout(function() {
                    removeClass(state.el1, state.config.el1DraggingPhantomClass);
                }, state.config.draggingPhantomDelay);


                // remove events
                document.removeEventListener('mousemove', state.documentMousemove, 0);
                document.removeEventListener('mouseup', state.documentMouseup, 0);

            }.bind(this);

        }


        function barMousedown(el){
            var state = getState(el);
            return function(event){

                // don't do nothing if it's not left mouse button
                if ( event.which!==1 ) { return false }

                state.barDragging = true;
                state.mouseBarOffsetY = event.offsetY;

                // disable user select
                state.el1.style.userSelect = 'none';
                state.config.unselectableBody ? compatStyle(document.body, 'UserSelect', 'none') : null;

                // add dragging class
                addClass(state.el1, state.config.el1DraggingClass);
                state.draggingPhantomClassTimeout ?
                    clearTimeout(state.draggingPhantomClassTimeout) : null;
                addClass(state.el1, state.config.el1DraggingPhantomClass);

                // add events
                document.addEventListener('mousemove', state.documentMousemove, 0);
                document.addEventListener('mouseup', state.documentMouseup, 0);


            }.bind(this);
        }


        function windowResize(el){
            var state = getState(el);
            return debounce(function(event){
                refreshScrollbar(el);
            }.bind(this), state.config.resizeDebounce);
        }




        function initMutationObserver(el){
            if (typeof MutationObserver === typeof void 0) { return null }

            var state = getState(el);

            var observer = new MutationObserver(throttle(function(mutations) {
                refreshScrollbar(el);
            }, state.config.observerThrottle));

            observer.observe(state.el2, {
                childList: true,
                characterData: true,
                subtree: true,
            });

            return observer;
        }




        /*------------------------------------*\
            Initialize Scrollbar
        \*------------------------------------*/
        function initScrollbar(el, kwargs){

            // validate on directive bind if the markup is OK
            if ( !markupValidation.call(this, el) ) { return false }

            // safeguard to not initialize vuebar when it's already initialized
            if (el._vuebarState) {
                // and I'm actually curious if that can happen
                Vue.util.warn('(Vuebar) Tried to initialize second time. If you see this please create an issue on https://github.com/DominikSerafin/vuebar with all relevent debug information. Thank you!');
                return false;
            }

            // create state
            var state = createState(el);

            // get options object
            // - it will come from directive binding (there is a 'value' property)
            // - or it will come from public method direct options object
            var options = kwargs.value ? kwargs.value : (kwargs ? kwargs : {});

            // overwrite defaults with provided options
            for (var key in options){
                state.config[key] = options[key];
            }

            // detect browser
            var browser = detectBrowser();

            // dragger enabled?
            var elNativeScrollbarWidth = getNativeScrollbarWidth(el.firstElementChild);
            var overlayScrollbar = elNativeScrollbarWidth == 0;
            state.draggerEnabled = ( (!overlayScrollbar) || state.config.overrideFloatingScrollbar ) ? 1 : 0;

            // setup scrollbar "state"
            state.binding = kwargs.value ? kwargs : null;
            state.el1 = el;
            state.el2 = el.firstElementChild;
            state.dragger = createDragger(el);

            // create and reference event listeners
            state.barMousedown = barMousedown(el);
            state.documentMousemove = documentMousemove(el);
            state.documentMouseup = documentMouseup(el);
            state.windowResize = windowResize(el);
            state.scrollHandler = scrollHandler(el);
            state.wheelHandler = wheelHandler(el);

            // initialize and reference mutation observer
            state.mutationObserver = initMutationObserver(el);

            // el1 styles and class
            addClass(state.el1, state.config.el1Class);
            state.el1.style.position = 'relative';
            state.el1.style.overflow = 'hidden';

            // el2 styles and class
            addClass(state.el2, state.config.el2Class);
            state.el2.style.display = 'block';
            state.el2.style.overflowX = 'hidden';
            state.el2.style.overflowY = 'scroll';
            state.el2.style.height = '100%';

            // do the magic
            if (state.draggerEnabled) {

                // hide original browser scrollbar using pseudo css selectors (only chrome & safari)
                if ( state.config.useScrollbarPseudo && (browser.chrome || browser.safari) ) {
                    state.el2.style.width = '100%';
                    hideScrollbarUsingPseudoElement(el);
                }

                // hide original browser overlay scrollbar and add padding to compensate for that
                else if (overlayScrollbar) {
                    /* state.el2.style.width = 'calc(100% + ' + 20 + 'px)';
                    compatStyle(state.el2, 'BoxSizing', 'border-box'); */
                    state.el2.style.width = '100%';
                    compatStyle(state.el2, 'BoxSizing', 'content-box');
                    state.el2.style.paddingRight = '20px';
                }

                // hide original browser scrollbar behind element edges and hidden overflow
                else {
                    state.el2.style.width = 'calc(100% + ' + elNativeScrollbarWidth + 'px)';
                }

            }

            // add events
            // - wheel event is only needed when preventParentScroll option is enabled
            // - resize event is only needed when resizeRefresh option is enabled
            state.el2.addEventListener('scroll', state.scrollHandler, 0);
            state.dragger.addEventListener('mousedown', state.barMousedown, 0);
            state.config.preventParentScroll ? state.el2.addEventListener('wheel', state.wheelHandler, 0) : null;
            state.config.resizeRefresh ? window.addEventListener('resize', state.windowResize, 0) : null;

            // initial calculations using refresh scrollbar
            refreshScrollbar(el, {immediate: true});

        }




        /*------------------------------------*\
            Destroy Scrollbar
        \*------------------------------------*/
        function destroyScrollbar(el, options){
            var options = options ? options : {};
            var state = getState(el);
            if (!state) return;

            // clear events
            state.dragger.removeEventListener('mousedown', state.barMousedown, 0);
            state.el2.removeEventListener('scroll', state.scrollHandler, 0);
            state.el2.removeEventListener('wheel', state.scrollHandler, 0);
            window.removeEventListener('resize', state.windowResize, 0);

            // disconnect mutation observer
            state.mutationObserver ? state.mutationObserver.disconnect() : null;

            // clear el1 classes
            removeClass(state.el1, state.config.el1Class);
            removeClass(state.el1, state.config.el1ScrollVisibleClass);
            removeClass(state.el1, state.config.el1ScrollInvisibleClass);
            removeClass(state.el1, state.config.el1ScrollingClass);
            removeClass(state.el1, state.config.el1ScrollingPhantomClass);
            removeClass(state.el1, state.config.el1DraggingClass);

            // clear el1 styles
            if (options.clearStyles) {
                state.el1.style.position = '';
                state.el1.style.overflow = '';
            }

            // clear el2 classes
            removeClass(state.el2, state.config.el2Class);

            // clear el2 styles
            if (options.clearStyles) {
                state.el2.style.display = '';
                state.el2.style.overflowX = '';
                state.el2.style.overflowY = '';
                state.el2.style.msOverflowStyle = '';
                state.el2.style.height = '';
                state.el2.style.width = '';
            }

            // clear dragger
            state.dragger.removeChild(state.dragger.firstChild);
            state.el1.removeChild(state.dragger);

            // clear timeouts that may be still running
            state.scrollingPhantomClassTimeout ?
                clearTimeout(state.scrollingPhantomClassTimeout) : null;
            state.draggingPhantomClassTimeout ?
                clearTimeout(state.draggingPhantomClassTimeout) : null;

            // delete state object from element
            delete el._vuebarState;

        }






        /*------------------------------------*\
            Public Methods Install
        \*------------------------------------*/
        function publicMethods(){
            return {
                getState: getState,
                initScrollbar: initScrollbar,
                destroyScrollbar: destroyScrollbar,
                refreshScrollbar: refreshScrollbar,
            };
        }
        Vue.vuebar = publicMethods();
        Vue.prototype.$vuebar = publicMethods();





        /*------------------------------------*\
            Directive Install
        \*------------------------------------*/
        Vue.directive(installOptions.directive, {

            inserted: function(el, binding, vnode){
                initScrollbar.call(this, el, binding);
            },

            componentUpdated: function(el, binding, vnode, oldVnode){
                refreshScrollbar.call(this, el);
            },

            unbind: function(el, binding, vnode, oldVnode){
                // we shouldn't clearStyles because it actually doesn't matter that much
                // the element will be always deleted on unbind and its styles also
                // and if we do clear styles then it looks bad on transitions
                destroyScrollbar.call(this, el, {clearStyles: false});
            },

        });







        /*------------------------------------*\
            Debounce Helper
            https://remysharp.com/2010/07/21/throttling-function-calls
        \*------------------------------------*/
        function debounce(fn, delay) {
            var timer = null;
            return function () {
                var context = this, args = arguments;
                clearTimeout(timer);
                timer = setTimeout(function () {
                    fn.apply(context, args);
                }, delay);
            };
        };




        /*------------------------------------*\
            Throttle Helper
            https://remysharp.com/2010/07/21/throttling-function-calls
        \*------------------------------------*/
        function throttle(fn, threshhold, scope) {
            threshhold || (threshhold = 250);
            var last,
                deferTimer;
            return function () {
                var context = scope || this;

                var now = +new Date,
                    args = arguments;
                if (last && now < last + threshhold) {
                    // hold on to it
                    clearTimeout(deferTimer);
                    deferTimer = setTimeout(function () {
                        last = now;
                        fn.apply(context, args);
                    }, threshhold);
                } else {
                    last = now;
                    fn.apply(context, args);
                }
            }
        }



        /*------------------------------------*\
            Style Vendor Prefixes Helper
        \*------------------------------------*/
        function compatStyle(element, property, value) {
            element.style['webkit' + property] = value;
            element.style['moz' + property] = value;
            element.style['ms' + property] = value;
            element.style['o' + property] = value;
            element.style[ property.slice(0,1).toLowerCase() + property.substring(1) ] = value;
        }



        /*------------------------------------*\
            Class Manipulation Helpers
            https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
        \*------------------------------------*/
        function hasClass(el, className) {
            return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
        }

        function addClass(el, className) {
            if (el.classList) el.classList.add(className);
            else if (!hasClass(el, className)) el.className += ' ' + className;
        }

        function removeClass(el, className) {
            if (el.classList) el.classList.remove(className);
            else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
        }





        /*------------------------------------*\
            Browser Detection Helper
        \*------------------------------------*/
        function detectBrowser(){

            // get ie version helper
            function getIEVersion() {
                var match = window.navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
                return match ? parseInt(match[1]) : void 0;
            }

            // user agent & vendor
            var ua = window.navigator.userAgent;
            var vendor = window.navigator.vendor;

            // chrome
            var chrome = (
                (ua.toLowerCase().indexOf('chrome') > -1) && (vendor.toLowerCase().indexOf('google') > -1)
            );

            // edge
            var edge = ua.indexOf('Edge') > -1;

            // safari
            var safari = !!window.safari || ((ua.toLowerCase().indexOf('safari') > -1) && (vendor.toLowerCase().indexOf('apple') > -1));

            // internet explorer
            var ie8 = getIEVersion() == 8;
            var ie9 = getIEVersion() == 9;
            var ie10 = getIEVersion() == 10;
            var ie11 = getIEVersion() == 11;
            var ie = ie8 || ie9 || ie10 || ie11;

            // is it mobile browser?
            // regex below thanks to http://detectmobilebrowsers.com/
            var uaOrVendor = ua || vendor || window.opera;
            var mobile = (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(uaOrVendor)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(uaOrVendor.substr(0,4)));

            // construct return object
            return {
                edge: edge,
                chrome: chrome,
                safari: safari,
                mobile: mobile,
                ie: ie,
                ie8: ie8,
                ie9: ie9,
                ie10: ie10,
                ie11: ie11,
            };

        }


        /*------------------------------------*\
            Calculate scrollbar width in element
            - if the width is 0 it means the scrollbar is floated/overlayed
            - accepts "container" paremeter because ie & edge can have different
              scrollbar behaviors for different elements using '-ms-overflow-style'
        \*------------------------------------*/
        function getNativeScrollbarWidth(container) {
            var container = container ? container : document.body;

            var fullWidth = 0;
            var barWidth = 0;

            var wrapper = document.createElement('div');
            var child = document.createElement('div');

            wrapper.style.position = 'absolute';
            wrapper.style.pointerEvents = 'none';
            wrapper.style.bottom = '0';
            wrapper.style.right = '0';
            wrapper.style.width = '100px';
            wrapper.style.overflow = 'hidden';

            wrapper.appendChild(child);
            container.appendChild(wrapper);

            fullWidth = child.offsetWidth;
            child.style.width = '100%';
            wrapper.style.overflowY = 'scroll';
            barWidth = fullWidth - child.offsetWidth;

            container.removeChild(wrapper);

            return barWidth;
        }




    };



    /*------------------------------------*\
        Expose / Autoinstall
    \*------------------------------------*/
    if (true) {
        module.exports = Vuebar;
    } else {}

    if (typeof Vue !== typeof void 0) {
        Vue.use(Vuebar);
    }




})();


/***/ }),

/***/ "af96":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.HomeHeader_minidesk-widget-home-header_3DvkB{max-height:427px;border-top-left-radius:4px;border-top-right-radius:4px\n}\n.HomeHeader_minidesk-widget-home-header__title_3x2gA{color:#fff;font-size:27px;font-weight:500;line-height:34px;margin-bottom:20px\n}\n.HomeHeader_minidesk-widget-home-header__search_1Xpuf{height:50px;border-radius:4px;background-color:#fff;-webkit-box-shadow:0 2px 5px 0 rgba(124,134,153,.45);box-shadow:0 2px 5px 0 rgba(124,134,153,.45)\n}\n.HomeHeader_minidesk-widget-home-header__search_1Xpuf::-webkit-input-placeholder{color:#9db0b5;font-size:15px;font-weight:300;padding-left:10px\n}\n.HomeHeader_minidesk-widget-home-header__search_1Xpuf:-ms-input-placeholder{color:#9db0b5;font-size:15px;font-weight:300;padding-left:10px\n}\n.HomeHeader_minidesk-widget-home-header__search_1Xpuf::-ms-input-placeholder{color:#9db0b5;font-size:15px;font-weight:300;padding-left:10px\n}\n.HomeHeader_minidesk-widget-home-header__search_1Xpuf::placeholder{color:#9db0b5;font-size:15px;font-weight:300;padding-left:10px\n}\n.HomeHeader_scroll-area-one_2Q2Ub{height:120px\n}\n.HomeHeader_scroll-area-more_2CI0v{height:230px\n}\n.HomeHeader_minidesk-widget-home-header__recommended_18POV{color:#fff;font-size:16px;font-weight:500;line-height:20px\n}\n.HomeHeader_minidesk-widget-home-header__card_39MMA{height:107px;border-radius:2px;background-color:#fff;-webkit-box-shadow:0 2px 5px 0 rgba(124,134,153,.45);box-shadow:0 2px 5px 0 rgba(124,134,153,.45);cursor:pointer\n}\n.HomeHeader_minidesk-widget-home-header__card-title_2oYt3{color:#4e4e4e;font-size:16px;font-weight:500;line-height:20px;margin-bottom:5px\n}\n.HomeHeader_minidesk-widget-home-header__card-text_3ekXc{color:#a1a1a1;font-size:14px;font-weight:300;line-height:23px\n}\n@media (max-width:576px){\n.HomeHeader_minidesk-widget-home-header_3DvkB{border-radius:0\n}\n}", ""]);

// exports
exports.locals = {
	"minidesk-widget-home-header": "HomeHeader_minidesk-widget-home-header_3DvkB",
	"minidesk-widget-home-header__title": "HomeHeader_minidesk-widget-home-header__title_3x2gA",
	"minidesk-widget-home-header__search": "HomeHeader_minidesk-widget-home-header__search_1Xpuf",
	"scroll-area-one": "HomeHeader_scroll-area-one_2Q2Ub",
	"scroll-area-more": "HomeHeader_scroll-area-more_2CI0v",
	"minidesk-widget-home-header__recommended": "HomeHeader_minidesk-widget-home-header__recommended_18POV",
	"minidesk-widget-home-header__card": "HomeHeader_minidesk-widget-home-header__card_39MMA",
	"minidesk-widget-home-header__card-title": "HomeHeader_minidesk-widget-home-header__card-title_2oYt3",
	"minidesk-widget-home-header__card-text": "HomeHeader_minidesk-widget-home-header__card-text_3ekXc"
};

/***/ }),

/***/ "b041":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "b330":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCategories_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b7c6");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCategories_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCategories_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCategories_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCategories_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCategories_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b500":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
var icon = __webpack_require__("038a");

icon.register({
  'cancel': {
    width: 512,
    height: 512,
    viewBox: '0 0 47.971 47.971',
    data: '<path pid="0" d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z" _fill="#FFF"/>'
  }
});

/***/ }),

/***/ "b53b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3b64");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b7c6":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ec9d");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("102d173f", content, shadowRoot)
};

/***/ }),

/***/ "bc90":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/CircularStd-BlackItalic.1c46c301.woff";

/***/ }),

/***/ "c031":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./category_billing.svg": "8b32",
	"./category_personal.svg": "dbee",
	"./category_settings.svg": "2d25",
	"./category_widget.svg": "2be6"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "c031";

/***/ }),

/***/ "c646":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a802");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_0_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c7db":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vue = __webpack_require__("8bbf");
Vue = 'default' in Vue ? Vue['default'] : Vue;

var version = '2.2.2';

var compatible = (/^2\./).test(Vue.version);
if (!compatible) {
  Vue.util.warn('VueClickaway ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}



// @SECTION: implementation

var HANDLER = '_vue_clickaway_handler';

function bind(el, binding, vnode) {
  unbind(el);

  var vm = vnode.context;

  var callback = binding.value;
  if (typeof callback !== 'function') {
    if (false) {}
    return;
  }

  // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
  //        in macrotasks. This causes the listener to be set up before
  //        the "origin" click event (the event that lead to the binding of
  //        the directive) arrives at the document root. To work around that,
  //        we ignore events until the end of the "initial" macrotask.
  // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
  var initialMacrotaskEnded = false;
  setTimeout(function() {
    initialMacrotaskEnded = true;
  }, 0);

  el[HANDLER] = function(ev) {
    // @NOTE: this test used to be just `el.containts`, but working with path is better,
    //        because it tests whether the element was there at the time of
    //        the click, not whether it is there now, that the event has arrived
    //        to the top.
    // @NOTE: `.path` is non-standard, the standard way is `.composedPath()`
    var path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);
    if (initialMacrotaskEnded && (path ? path.indexOf(el) < 0 : !el.contains(ev.target))) {
      return callback.call(vm, ev);
    }
  };

  document.documentElement.addEventListener('click', el[HANDLER], false);
}

function unbind(el) {
  document.documentElement.removeEventListener('click', el[HANDLER], false);
  delete el[HANDLER];
}

var directive = {
  bind: bind,
  update: function(el, binding) {
    if (binding.value === binding.oldValue) return;
    bind(el, binding);
  },
  unbind: unbind,
};

var mixin = {
  directives: { onClickaway: directive },
};

exports.version = version;
exports.directive = directive;
exports.mixin = mixin;

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "cc84":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5f5b");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("8a061218", content, shadowRoot)
};

/***/ }),

/***/ "ce38":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("af96");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("686bbda3", content, shadowRoot)
};

/***/ }),

/***/ "d667":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("061b");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("4b3ff68e", content, shadowRoot)
};

/***/ }),

/***/ "dbee":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/category_personal.52516646.svg";

/***/ }),

/***/ "dc52":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "/*!\n * Bootstrap v4.1.3 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace\n}\n*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box\n}\nhtml{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent\n}\n@-ms-viewport{width:device-width\n}\narticle,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block\n}\nbody{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff\n}\n[tabindex=\"-1\"]:focus{outline:0!important\n}\nhr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible\n}\nh1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem\n}\np{margin-top:0;margin-bottom:1rem\n}\nabbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0\n}\naddress{font-style:normal;line-height:inherit\n}\naddress,dl,ol,ul{margin-bottom:1rem\n}\ndl,ol,ul{margin-top:0\n}\nol ol,ol ul,ul ol,ul ul{margin-bottom:0\n}\ndt{font-weight:700\n}\ndd{margin-bottom:.5rem;margin-left:0\n}\nblockquote{margin:0 0 1rem\n}\ndfn{font-style:italic\n}\nb,strong{font-weight:bolder\n}\nsmall{font-size:80%\n}\nsub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline\n}\nsub{bottom:-.25em\n}\nsup{top:-.5em\n}\na{color:#007bff;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects\n}\na:hover{color:#0056b3;text-decoration:underline\n}\na:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none\n}\na:not([href]):not([tabindex]):focus{outline:0\n}\ncode,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em\n}\npre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar\n}\nfigure{margin:0 0 1rem\n}\nimg{border-style:none\n}\nimg,svg{vertical-align:middle\n}\nsvg{overflow:hidden\n}\ntable{border-collapse:collapse\n}\ncaption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom\n}\nth{text-align:inherit\n}\nlabel{display:inline-block;margin-bottom:.5rem\n}\nbutton{border-radius:0\n}\nbutton:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color\n}\nbutton,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit\n}\nbutton,input{overflow:visible\n}\nbutton,select{text-transform:none\n}\n[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button\n}\n[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none\n}\ninput[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0\n}\ninput[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox\n}\ntextarea{overflow:auto;resize:vertical\n}\nfieldset{min-width:0;padding:0;margin:0;border:0\n}\nlegend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal\n}\nprogress{vertical-align:baseline\n}\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto\n}\n[type=search]{outline-offset:-2px;-webkit-appearance:none\n}\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none\n}\n::-webkit-file-upload-button{font:inherit;-webkit-appearance:button\n}\noutput{display:inline-block\n}\nsummary{display:list-item;cursor:pointer\n}\ntemplate{display:none\n}\n[hidden]{display:none!important\n}\n.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit\n}\n.h1,h1{font-size:2.5rem\n}\n.h2,h2{font-size:2rem\n}\n.h3,h3{font-size:1.75rem\n}\n.h4,h4{font-size:1.5rem\n}\n.h5,h5{font-size:1.25rem\n}\n.h6,h6{font-size:1rem\n}\n.lead{font-size:1.25rem;font-weight:300\n}\n.display-1{font-size:6rem\n}\n.display-1,.display-2{font-weight:300;line-height:1.2\n}\n.display-2{font-size:5.5rem\n}\n.display-3{font-size:4.5rem\n}\n.display-3,.display-4{font-weight:300;line-height:1.2\n}\n.display-4{font-size:3.5rem\n}\nhr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)\n}\n.small,small{font-size:80%;font-weight:400\n}\n.mark,mark{padding:.2em;background-color:#fcf8e3\n}\n.list-inline,.list-unstyled{padding-left:0;list-style:none\n}\n.list-inline-item{display:inline-block\n}\n.list-inline-item:not(:last-child){margin-right:.5rem\n}\n.initialism{font-size:90%;text-transform:uppercase\n}\n.blockquote{margin-bottom:1rem;font-size:1.25rem\n}\n.blockquote-footer{display:block;font-size:80%;color:#6c757d\n}\n.blockquote-footer:before{content:\"\\2014   \\A0\"\n}\n.img-fluid,.img-thumbnail{max-width:100%;height:auto\n}\n.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem\n}\n.figure{display:inline-block\n}\n.figure-img{margin-bottom:.5rem;line-height:1\n}\n.figure-caption{font-size:90%;color:#6c757d\n}\ncode{font-size:87.5%;color:#e83e8c;word-break:break-word\n}\na>code{color:inherit\n}\nkbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem\n}\nkbd kbd{padding:0;font-size:100%;font-weight:700\n}\npre{display:block;font-size:87.5%;color:#212529\n}\npre code{font-size:inherit;color:inherit;word-break:normal\n}\n.pre-scrollable{max-height:340px;overflow-y:scroll\n}\n.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto\n}\n@media (min-width:576px){\n.container{max-width:540px\n}\n}\n@media (min-width:768px){\n.container{max-width:720px\n}\n}\n@media (min-width:992px){\n.container{max-width:960px\n}\n}\n@media (min-width:1200px){\n.container{max-width:1140px\n}\n}\n.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto\n}\n.row{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px\n}\n.no-gutters{margin-right:0;margin-left:0\n}\n.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0\n}\n.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px\n}\n.col{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;max-width:100%\n}\n.col-auto{-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;width:auto;max-width:none\n}\n.col-1{-ms-flex:0 0 8.333333%;-webkit-box-flex:0;flex:0 0 8.333333%;max-width:8.333333%\n}\n.col-2{-ms-flex:0 0 16.666667%;-webkit-box-flex:0;flex:0 0 16.666667%;max-width:16.666667%\n}\n.col-3{-ms-flex:0 0 25%;-webkit-box-flex:0;flex:0 0 25%;max-width:25%\n}\n.col-4{-ms-flex:0 0 33.333333%;-webkit-box-flex:0;flex:0 0 33.333333%;max-width:33.333333%\n}\n.col-5{-ms-flex:0 0 41.666667%;-webkit-box-flex:0;flex:0 0 41.666667%;max-width:41.666667%\n}\n.col-6{-ms-flex:0 0 50%;-webkit-box-flex:0;flex:0 0 50%;max-width:50%\n}\n.col-7{-ms-flex:0 0 58.333333%;-webkit-box-flex:0;flex:0 0 58.333333%;max-width:58.333333%\n}\n.col-8{-ms-flex:0 0 66.666667%;-webkit-box-flex:0;flex:0 0 66.666667%;max-width:66.666667%\n}\n.col-9{-ms-flex:0 0 75%;-webkit-box-flex:0;flex:0 0 75%;max-width:75%\n}\n.col-10{-ms-flex:0 0 83.333333%;-webkit-box-flex:0;flex:0 0 83.333333%;max-width:83.333333%\n}\n.col-11{-ms-flex:0 0 91.666667%;-webkit-box-flex:0;flex:0 0 91.666667%;max-width:91.666667%\n}\n.col-12{-ms-flex:0 0 100%;-webkit-box-flex:0;flex:0 0 100%;max-width:100%\n}\n.order-first{-ms-flex-order:-1;-webkit-box-ordinal-group:0;order:-1\n}\n.order-last{-ms-flex-order:13;-webkit-box-ordinal-group:14;order:13\n}\n.order-0{-ms-flex-order:0;-webkit-box-ordinal-group:1;order:0\n}\n.order-1{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1\n}\n.order-2{-ms-flex-order:2;-webkit-box-ordinal-group:3;order:2\n}\n.order-3{-ms-flex-order:3;-webkit-box-ordinal-group:4;order:3\n}\n.order-4{-ms-flex-order:4;-webkit-box-ordinal-group:5;order:4\n}\n.order-5{-ms-flex-order:5;-webkit-box-ordinal-group:6;order:5\n}\n.order-6{-ms-flex-order:6;-webkit-box-ordinal-group:7;order:6\n}\n.order-7{-ms-flex-order:7;-webkit-box-ordinal-group:8;order:7\n}\n.order-8{-ms-flex-order:8;-webkit-box-ordinal-group:9;order:8\n}\n.order-9{-ms-flex-order:9;-webkit-box-ordinal-group:10;order:9\n}\n.order-10{-ms-flex-order:10;-webkit-box-ordinal-group:11;order:10\n}\n.order-11{-ms-flex-order:11;-webkit-box-ordinal-group:12;order:11\n}\n.order-12{-ms-flex-order:12;-webkit-box-ordinal-group:13;order:12\n}\n.offset-1{margin-left:8.333333%\n}\n.offset-2{margin-left:16.666667%\n}\n.offset-3{margin-left:25%\n}\n.offset-4{margin-left:33.333333%\n}\n.offset-5{margin-left:41.666667%\n}\n.offset-6{margin-left:50%\n}\n.offset-7{margin-left:58.333333%\n}\n.offset-8{margin-left:66.666667%\n}\n.offset-9{margin-left:75%\n}\n.offset-10{margin-left:83.333333%\n}\n.offset-11{margin-left:91.666667%\n}\n@media (min-width:576px){\n.col-sm{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;max-width:100%\n}\n.col-sm-auto{-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;width:auto;max-width:none\n}\n.col-sm-1{-ms-flex:0 0 8.333333%;-webkit-box-flex:0;flex:0 0 8.333333%;max-width:8.333333%\n}\n.col-sm-2{-ms-flex:0 0 16.666667%;-webkit-box-flex:0;flex:0 0 16.666667%;max-width:16.666667%\n}\n.col-sm-3{-ms-flex:0 0 25%;-webkit-box-flex:0;flex:0 0 25%;max-width:25%\n}\n.col-sm-4{-ms-flex:0 0 33.333333%;-webkit-box-flex:0;flex:0 0 33.333333%;max-width:33.333333%\n}\n.col-sm-5{-ms-flex:0 0 41.666667%;-webkit-box-flex:0;flex:0 0 41.666667%;max-width:41.666667%\n}\n.col-sm-6{-ms-flex:0 0 50%;-webkit-box-flex:0;flex:0 0 50%;max-width:50%\n}\n.col-sm-7{-ms-flex:0 0 58.333333%;-webkit-box-flex:0;flex:0 0 58.333333%;max-width:58.333333%\n}\n.col-sm-8{-ms-flex:0 0 66.666667%;-webkit-box-flex:0;flex:0 0 66.666667%;max-width:66.666667%\n}\n.col-sm-9{-ms-flex:0 0 75%;-webkit-box-flex:0;flex:0 0 75%;max-width:75%\n}\n.col-sm-10{-ms-flex:0 0 83.333333%;-webkit-box-flex:0;flex:0 0 83.333333%;max-width:83.333333%\n}\n.col-sm-11{-ms-flex:0 0 91.666667%;-webkit-box-flex:0;flex:0 0 91.666667%;max-width:91.666667%\n}\n.col-sm-12{-ms-flex:0 0 100%;-webkit-box-flex:0;flex:0 0 100%;max-width:100%\n}\n.order-sm-first{-ms-flex-order:-1;-webkit-box-ordinal-group:0;order:-1\n}\n.order-sm-last{-ms-flex-order:13;-webkit-box-ordinal-group:14;order:13\n}\n.order-sm-0{-ms-flex-order:0;-webkit-box-ordinal-group:1;order:0\n}\n.order-sm-1{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1\n}\n.order-sm-2{-ms-flex-order:2;-webkit-box-ordinal-group:3;order:2\n}\n.order-sm-3{-ms-flex-order:3;-webkit-box-ordinal-group:4;order:3\n}\n.order-sm-4{-ms-flex-order:4;-webkit-box-ordinal-group:5;order:4\n}\n.order-sm-5{-ms-flex-order:5;-webkit-box-ordinal-group:6;order:5\n}\n.order-sm-6{-ms-flex-order:6;-webkit-box-ordinal-group:7;order:6\n}\n.order-sm-7{-ms-flex-order:7;-webkit-box-ordinal-group:8;order:7\n}\n.order-sm-8{-ms-flex-order:8;-webkit-box-ordinal-group:9;order:8\n}\n.order-sm-9{-ms-flex-order:9;-webkit-box-ordinal-group:10;order:9\n}\n.order-sm-10{-ms-flex-order:10;-webkit-box-ordinal-group:11;order:10\n}\n.order-sm-11{-ms-flex-order:11;-webkit-box-ordinal-group:12;order:11\n}\n.order-sm-12{-ms-flex-order:12;-webkit-box-ordinal-group:13;order:12\n}\n.offset-sm-0{margin-left:0\n}\n.offset-sm-1{margin-left:8.333333%\n}\n.offset-sm-2{margin-left:16.666667%\n}\n.offset-sm-3{margin-left:25%\n}\n.offset-sm-4{margin-left:33.333333%\n}\n.offset-sm-5{margin-left:41.666667%\n}\n.offset-sm-6{margin-left:50%\n}\n.offset-sm-7{margin-left:58.333333%\n}\n.offset-sm-8{margin-left:66.666667%\n}\n.offset-sm-9{margin-left:75%\n}\n.offset-sm-10{margin-left:83.333333%\n}\n.offset-sm-11{margin-left:91.666667%\n}\n}\n@media (min-width:768px){\n.col-md{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;max-width:100%\n}\n.col-md-auto{-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;width:auto;max-width:none\n}\n.col-md-1{-ms-flex:0 0 8.333333%;-webkit-box-flex:0;flex:0 0 8.333333%;max-width:8.333333%\n}\n.col-md-2{-ms-flex:0 0 16.666667%;-webkit-box-flex:0;flex:0 0 16.666667%;max-width:16.666667%\n}\n.col-md-3{-ms-flex:0 0 25%;-webkit-box-flex:0;flex:0 0 25%;max-width:25%\n}\n.col-md-4{-ms-flex:0 0 33.333333%;-webkit-box-flex:0;flex:0 0 33.333333%;max-width:33.333333%\n}\n.col-md-5{-ms-flex:0 0 41.666667%;-webkit-box-flex:0;flex:0 0 41.666667%;max-width:41.666667%\n}\n.col-md-6{-ms-flex:0 0 50%;-webkit-box-flex:0;flex:0 0 50%;max-width:50%\n}\n.col-md-7{-ms-flex:0 0 58.333333%;-webkit-box-flex:0;flex:0 0 58.333333%;max-width:58.333333%\n}\n.col-md-8{-ms-flex:0 0 66.666667%;-webkit-box-flex:0;flex:0 0 66.666667%;max-width:66.666667%\n}\n.col-md-9{-ms-flex:0 0 75%;-webkit-box-flex:0;flex:0 0 75%;max-width:75%\n}\n.col-md-10{-ms-flex:0 0 83.333333%;-webkit-box-flex:0;flex:0 0 83.333333%;max-width:83.333333%\n}\n.col-md-11{-ms-flex:0 0 91.666667%;-webkit-box-flex:0;flex:0 0 91.666667%;max-width:91.666667%\n}\n.col-md-12{-ms-flex:0 0 100%;-webkit-box-flex:0;flex:0 0 100%;max-width:100%\n}\n.order-md-first{-ms-flex-order:-1;-webkit-box-ordinal-group:0;order:-1\n}\n.order-md-last{-ms-flex-order:13;-webkit-box-ordinal-group:14;order:13\n}\n.order-md-0{-ms-flex-order:0;-webkit-box-ordinal-group:1;order:0\n}\n.order-md-1{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1\n}\n.order-md-2{-ms-flex-order:2;-webkit-box-ordinal-group:3;order:2\n}\n.order-md-3{-ms-flex-order:3;-webkit-box-ordinal-group:4;order:3\n}\n.order-md-4{-ms-flex-order:4;-webkit-box-ordinal-group:5;order:4\n}\n.order-md-5{-ms-flex-order:5;-webkit-box-ordinal-group:6;order:5\n}\n.order-md-6{-ms-flex-order:6;-webkit-box-ordinal-group:7;order:6\n}\n.order-md-7{-ms-flex-order:7;-webkit-box-ordinal-group:8;order:7\n}\n.order-md-8{-ms-flex-order:8;-webkit-box-ordinal-group:9;order:8\n}\n.order-md-9{-ms-flex-order:9;-webkit-box-ordinal-group:10;order:9\n}\n.order-md-10{-ms-flex-order:10;-webkit-box-ordinal-group:11;order:10\n}\n.order-md-11{-ms-flex-order:11;-webkit-box-ordinal-group:12;order:11\n}\n.order-md-12{-ms-flex-order:12;-webkit-box-ordinal-group:13;order:12\n}\n.offset-md-0{margin-left:0\n}\n.offset-md-1{margin-left:8.333333%\n}\n.offset-md-2{margin-left:16.666667%\n}\n.offset-md-3{margin-left:25%\n}\n.offset-md-4{margin-left:33.333333%\n}\n.offset-md-5{margin-left:41.666667%\n}\n.offset-md-6{margin-left:50%\n}\n.offset-md-7{margin-left:58.333333%\n}\n.offset-md-8{margin-left:66.666667%\n}\n.offset-md-9{margin-left:75%\n}\n.offset-md-10{margin-left:83.333333%\n}\n.offset-md-11{margin-left:91.666667%\n}\n}\n@media (min-width:992px){\n.col-lg{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;max-width:100%\n}\n.col-lg-auto{-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;width:auto;max-width:none\n}\n.col-lg-1{-ms-flex:0 0 8.333333%;-webkit-box-flex:0;flex:0 0 8.333333%;max-width:8.333333%\n}\n.col-lg-2{-ms-flex:0 0 16.666667%;-webkit-box-flex:0;flex:0 0 16.666667%;max-width:16.666667%\n}\n.col-lg-3{-ms-flex:0 0 25%;-webkit-box-flex:0;flex:0 0 25%;max-width:25%\n}\n.col-lg-4{-ms-flex:0 0 33.333333%;-webkit-box-flex:0;flex:0 0 33.333333%;max-width:33.333333%\n}\n.col-lg-5{-ms-flex:0 0 41.666667%;-webkit-box-flex:0;flex:0 0 41.666667%;max-width:41.666667%\n}\n.col-lg-6{-ms-flex:0 0 50%;-webkit-box-flex:0;flex:0 0 50%;max-width:50%\n}\n.col-lg-7{-ms-flex:0 0 58.333333%;-webkit-box-flex:0;flex:0 0 58.333333%;max-width:58.333333%\n}\n.col-lg-8{-ms-flex:0 0 66.666667%;-webkit-box-flex:0;flex:0 0 66.666667%;max-width:66.666667%\n}\n.col-lg-9{-ms-flex:0 0 75%;-webkit-box-flex:0;flex:0 0 75%;max-width:75%\n}\n.col-lg-10{-ms-flex:0 0 83.333333%;-webkit-box-flex:0;flex:0 0 83.333333%;max-width:83.333333%\n}\n.col-lg-11{-ms-flex:0 0 91.666667%;-webkit-box-flex:0;flex:0 0 91.666667%;max-width:91.666667%\n}\n.col-lg-12{-ms-flex:0 0 100%;-webkit-box-flex:0;flex:0 0 100%;max-width:100%\n}\n.order-lg-first{-ms-flex-order:-1;-webkit-box-ordinal-group:0;order:-1\n}\n.order-lg-last{-ms-flex-order:13;-webkit-box-ordinal-group:14;order:13\n}\n.order-lg-0{-ms-flex-order:0;-webkit-box-ordinal-group:1;order:0\n}\n.order-lg-1{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1\n}\n.order-lg-2{-ms-flex-order:2;-webkit-box-ordinal-group:3;order:2\n}\n.order-lg-3{-ms-flex-order:3;-webkit-box-ordinal-group:4;order:3\n}\n.order-lg-4{-ms-flex-order:4;-webkit-box-ordinal-group:5;order:4\n}\n.order-lg-5{-ms-flex-order:5;-webkit-box-ordinal-group:6;order:5\n}\n.order-lg-6{-ms-flex-order:6;-webkit-box-ordinal-group:7;order:6\n}\n.order-lg-7{-ms-flex-order:7;-webkit-box-ordinal-group:8;order:7\n}\n.order-lg-8{-ms-flex-order:8;-webkit-box-ordinal-group:9;order:8\n}\n.order-lg-9{-ms-flex-order:9;-webkit-box-ordinal-group:10;order:9\n}\n.order-lg-10{-ms-flex-order:10;-webkit-box-ordinal-group:11;order:10\n}\n.order-lg-11{-ms-flex-order:11;-webkit-box-ordinal-group:12;order:11\n}\n.order-lg-12{-ms-flex-order:12;-webkit-box-ordinal-group:13;order:12\n}\n.offset-lg-0{margin-left:0\n}\n.offset-lg-1{margin-left:8.333333%\n}\n.offset-lg-2{margin-left:16.666667%\n}\n.offset-lg-3{margin-left:25%\n}\n.offset-lg-4{margin-left:33.333333%\n}\n.offset-lg-5{margin-left:41.666667%\n}\n.offset-lg-6{margin-left:50%\n}\n.offset-lg-7{margin-left:58.333333%\n}\n.offset-lg-8{margin-left:66.666667%\n}\n.offset-lg-9{margin-left:75%\n}\n.offset-lg-10{margin-left:83.333333%\n}\n.offset-lg-11{margin-left:91.666667%\n}\n}\n@media (min-width:1200px){\n.col-xl{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;max-width:100%\n}\n.col-xl-auto{-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;width:auto;max-width:none\n}\n.col-xl-1{-ms-flex:0 0 8.333333%;-webkit-box-flex:0;flex:0 0 8.333333%;max-width:8.333333%\n}\n.col-xl-2{-ms-flex:0 0 16.666667%;-webkit-box-flex:0;flex:0 0 16.666667%;max-width:16.666667%\n}\n.col-xl-3{-ms-flex:0 0 25%;-webkit-box-flex:0;flex:0 0 25%;max-width:25%\n}\n.col-xl-4{-ms-flex:0 0 33.333333%;-webkit-box-flex:0;flex:0 0 33.333333%;max-width:33.333333%\n}\n.col-xl-5{-ms-flex:0 0 41.666667%;-webkit-box-flex:0;flex:0 0 41.666667%;max-width:41.666667%\n}\n.col-xl-6{-ms-flex:0 0 50%;-webkit-box-flex:0;flex:0 0 50%;max-width:50%\n}\n.col-xl-7{-ms-flex:0 0 58.333333%;-webkit-box-flex:0;flex:0 0 58.333333%;max-width:58.333333%\n}\n.col-xl-8{-ms-flex:0 0 66.666667%;-webkit-box-flex:0;flex:0 0 66.666667%;max-width:66.666667%\n}\n.col-xl-9{-ms-flex:0 0 75%;-webkit-box-flex:0;flex:0 0 75%;max-width:75%\n}\n.col-xl-10{-ms-flex:0 0 83.333333%;-webkit-box-flex:0;flex:0 0 83.333333%;max-width:83.333333%\n}\n.col-xl-11{-ms-flex:0 0 91.666667%;-webkit-box-flex:0;flex:0 0 91.666667%;max-width:91.666667%\n}\n.col-xl-12{-ms-flex:0 0 100%;-webkit-box-flex:0;flex:0 0 100%;max-width:100%\n}\n.order-xl-first{-ms-flex-order:-1;-webkit-box-ordinal-group:0;order:-1\n}\n.order-xl-last{-ms-flex-order:13;-webkit-box-ordinal-group:14;order:13\n}\n.order-xl-0{-ms-flex-order:0;-webkit-box-ordinal-group:1;order:0\n}\n.order-xl-1{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1\n}\n.order-xl-2{-ms-flex-order:2;-webkit-box-ordinal-group:3;order:2\n}\n.order-xl-3{-ms-flex-order:3;-webkit-box-ordinal-group:4;order:3\n}\n.order-xl-4{-ms-flex-order:4;-webkit-box-ordinal-group:5;order:4\n}\n.order-xl-5{-ms-flex-order:5;-webkit-box-ordinal-group:6;order:5\n}\n.order-xl-6{-ms-flex-order:6;-webkit-box-ordinal-group:7;order:6\n}\n.order-xl-7{-ms-flex-order:7;-webkit-box-ordinal-group:8;order:7\n}\n.order-xl-8{-ms-flex-order:8;-webkit-box-ordinal-group:9;order:8\n}\n.order-xl-9{-ms-flex-order:9;-webkit-box-ordinal-group:10;order:9\n}\n.order-xl-10{-ms-flex-order:10;-webkit-box-ordinal-group:11;order:10\n}\n.order-xl-11{-ms-flex-order:11;-webkit-box-ordinal-group:12;order:11\n}\n.order-xl-12{-ms-flex-order:12;-webkit-box-ordinal-group:13;order:12\n}\n.offset-xl-0{margin-left:0\n}\n.offset-xl-1{margin-left:8.333333%\n}\n.offset-xl-2{margin-left:16.666667%\n}\n.offset-xl-3{margin-left:25%\n}\n.offset-xl-4{margin-left:33.333333%\n}\n.offset-xl-5{margin-left:41.666667%\n}\n.offset-xl-6{margin-left:50%\n}\n.offset-xl-7{margin-left:58.333333%\n}\n.offset-xl-8{margin-left:66.666667%\n}\n.offset-xl-9{margin-left:75%\n}\n.offset-xl-10{margin-left:83.333333%\n}\n.offset-xl-11{margin-left:91.666667%\n}\n}\n.table{width:100%;margin-bottom:1rem;background-color:transparent\n}\n.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6\n}\n.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6\n}\n.table tbody+tbody{border-top:2px solid #dee2e6\n}\n.table .table{background-color:#fff\n}\n.table-sm td,.table-sm th{padding:.3rem\n}\n.table-bordered,.table-bordered td,.table-bordered th{border:1px solid #dee2e6\n}\n.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px\n}\n.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0\n}\n.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)\n}\n.table-hover tbody tr:hover{background-color:rgba(0,0,0,.075)\n}\n.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff\n}\n.table-hover .table-primary:hover,.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff\n}\n.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db\n}\n.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf\n}\n.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb\n}\n.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb\n}\n.table-info,.table-info>td,.table-info>th{background-color:#bee5eb\n}\n.table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5\n}\n.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba\n}\n.table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1\n}\n.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb\n}\n.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7\n}\n.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe\n}\n.table-hover .table-light:hover,.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6\n}\n.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca\n}\n.table-hover .table-dark:hover,.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe\n}\n.table-active,.table-active>td,.table-active>th,.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)\n}\n.table .thead-dark th{color:#fff;background-color:#212529;border-color:#32383e\n}\n.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6\n}\n.table-dark{color:#fff;background-color:#212529\n}\n.table-dark td,.table-dark th,.table-dark thead th{border-color:#32383e\n}\n.table-dark.table-bordered{border:0\n}\n.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:hsla(0,0%,100%,.05)\n}\n.table-dark.table-hover tbody tr:hover{background-color:hsla(0,0%,100%,.075)\n}\n@media (max-width:575.98px){\n.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar\n}\n.table-responsive-sm>.table-bordered{border:0\n}\n}\n@media (max-width:767.98px){\n.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar\n}\n.table-responsive-md>.table-bordered{border:0\n}\n}\n@media (max-width:991.98px){\n.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar\n}\n.table-responsive-lg>.table-bordered{border:0\n}\n}\n@media (max-width:1199.98px){\n.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar\n}\n.table-responsive-xl>.table-bordered{border:0\n}\n}\n.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar\n}\n.table-responsive>.table-bordered{border:0\n}\n.form-control{display:block;width:100%;height:calc(2.25rem + 2px);padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out\n}\n@media screen and (prefers-reduced-motion:reduce){\n.form-control{-webkit-transition:none;transition:none\n}\n}\n.form-control::-ms-expand{background-color:transparent;border:0\n}\n.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 .2rem rgba(0,123,255,.25)\n}\n.form-control::-webkit-input-placeholder{color:#6c757d;opacity:1\n}\n.form-control:-ms-input-placeholder{color:#6c757d;opacity:1\n}\n.form-control::-ms-input-placeholder{color:#6c757d;opacity:1\n}\n.form-control::placeholder{color:#6c757d;opacity:1\n}\n.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1\n}\nselect.form-control:focus::-ms-value{color:#495057;background-color:#fff\n}\n.form-control-file,.form-control-range{display:block;width:100%\n}\n.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5\n}\n.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5\n}\n.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5\n}\n.form-control-plaintext{display:block;width:100%;padding-top:.375rem;padding-bottom:.375rem;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0\n}\n.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0\n}\n.form-control-sm{height:calc(1.8125rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem\n}\n.form-control-lg{height:calc(2.875rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem\n}\nselect.form-control[multiple],select.form-control[size],textarea.form-control{height:auto\n}\n.form-group{margin-bottom:1rem\n}\n.form-text{display:block;margin-top:.25rem\n}\n.form-row{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px\n}\n.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px\n}\n.form-check{position:relative;display:block;padding-left:1.25rem\n}\n.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem\n}\n.form-check-input:disabled~.form-check-label{color:#6c757d\n}\n.form-check-label{margin-bottom:0\n}\n.form-check-inline{display:-ms-inline-flexbox;display:-webkit-inline-box;display:inline-flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;padding-left:0;margin-right:.75rem\n}\n.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0\n}\n.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745\n}\n.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,.9);border-radius:.25rem\n}\n.custom-select.is-valid,.form-control.is-valid,.was-validated .custom-select:valid,.was-validated .form-control:valid{border-color:#28a745\n}\n.custom-select.is-valid:focus,.form-control.is-valid:focus,.was-validated .custom-select:valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.25);box-shadow:0 0 0 .2rem rgba(40,167,69,.25)\n}\n.custom-select.is-valid~.valid-feedback,.custom-select.is-valid~.valid-tooltip,.form-control-file.is-valid~.valid-feedback,.form-control-file.is-valid~.valid-tooltip,.form-control.is-valid~.valid-feedback,.form-control.is-valid~.valid-tooltip,.was-validated .custom-select:valid~.valid-feedback,.was-validated .custom-select:valid~.valid-tooltip,.was-validated .form-control-file:valid~.valid-feedback,.was-validated .form-control-file:valid~.valid-tooltip,.was-validated .form-control:valid~.valid-feedback,.was-validated .form-control:valid~.valid-tooltip{display:block\n}\n.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#28a745\n}\n.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block\n}\n.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#28a745\n}\n.custom-control-input.is-valid~.custom-control-label:before,.was-validated .custom-control-input:valid~.custom-control-label:before{background-color:#71dd8a\n}\n.custom-control-input.is-valid~.valid-feedback,.custom-control-input.is-valid~.valid-tooltip,.was-validated .custom-control-input:valid~.valid-feedback,.was-validated .custom-control-input:valid~.valid-tooltip{display:block\n}\n.custom-control-input.is-valid:checked~.custom-control-label:before,.was-validated .custom-control-input:valid:checked~.custom-control-label:before{background-color:#34ce57\n}\n.custom-control-input.is-valid:focus~.custom-control-label:before,.was-validated .custom-control-input:valid:focus~.custom-control-label:before{-webkit-box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(40,167,69,.25);box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(40,167,69,.25)\n}\n.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#28a745\n}\n.custom-file-input.is-valid~.custom-file-label:after,.was-validated .custom-file-input:valid~.custom-file-label:after{border-color:inherit\n}\n.custom-file-input.is-valid~.valid-feedback,.custom-file-input.is-valid~.valid-tooltip,.was-validated .custom-file-input:valid~.valid-feedback,.was-validated .custom-file-input:valid~.valid-tooltip{display:block\n}\n.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.25);box-shadow:0 0 0 .2rem rgba(40,167,69,.25)\n}\n.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545\n}\n.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem\n}\n.custom-select.is-invalid,.form-control.is-invalid,.was-validated .custom-select:invalid,.was-validated .form-control:invalid{border-color:#dc3545\n}\n.custom-select.is-invalid:focus,.form-control.is-invalid:focus,.was-validated .custom-select:invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.25);box-shadow:0 0 0 .2rem rgba(220,53,69,.25)\n}\n.custom-select.is-invalid~.invalid-feedback,.custom-select.is-invalid~.invalid-tooltip,.form-control-file.is-invalid~.invalid-feedback,.form-control-file.is-invalid~.invalid-tooltip,.form-control.is-invalid~.invalid-feedback,.form-control.is-invalid~.invalid-tooltip,.was-validated .custom-select:invalid~.invalid-feedback,.was-validated .custom-select:invalid~.invalid-tooltip,.was-validated .form-control-file:invalid~.invalid-feedback,.was-validated .form-control-file:invalid~.invalid-tooltip,.was-validated .form-control:invalid~.invalid-feedback,.was-validated .form-control:invalid~.invalid-tooltip{display:block\n}\n.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545\n}\n.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block\n}\n.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#dc3545\n}\n.custom-control-input.is-invalid~.custom-control-label:before,.was-validated .custom-control-input:invalid~.custom-control-label:before{background-color:#efa2a9\n}\n.custom-control-input.is-invalid~.invalid-feedback,.custom-control-input.is-invalid~.invalid-tooltip,.was-validated .custom-control-input:invalid~.invalid-feedback,.was-validated .custom-control-input:invalid~.invalid-tooltip{display:block\n}\n.custom-control-input.is-invalid:checked~.custom-control-label:before,.was-validated .custom-control-input:invalid:checked~.custom-control-label:before{background-color:#e4606d\n}\n.custom-control-input.is-invalid:focus~.custom-control-label:before,.was-validated .custom-control-input:invalid:focus~.custom-control-label:before{-webkit-box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(220,53,69,.25);box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(220,53,69,.25)\n}\n.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#dc3545\n}\n.custom-file-input.is-invalid~.custom-file-label:after,.was-validated .custom-file-input:invalid~.custom-file-label:after{border-color:inherit\n}\n.custom-file-input.is-invalid~.invalid-feedback,.custom-file-input.is-invalid~.invalid-tooltip,.was-validated .custom-file-input:invalid~.invalid-feedback,.was-validated .custom-file-input:invalid~.invalid-tooltip{display:block\n}\n.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.25);box-shadow:0 0 0 .2rem rgba(220,53,69,.25)\n}\n.form-inline{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-flow:row wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;-ms-flex-align:center;-webkit-box-align:center;align-items:center\n}\n.form-inline .form-check{width:100%\n}\n@media (min-width:576px){\n.form-inline label{-ms-flex-align:center;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center\n}\n.form-inline .form-group,.form-inline label{display:-ms-flexbox;display:-webkit-box;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:0\n}\n.form-inline .form-group{-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;-ms-flex-flow:row wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;-ms-flex-align:center\n}\n.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle\n}\n.form-inline .form-control-plaintext{display:inline-block\n}\n.form-inline .custom-select,.form-inline .input-group{width:auto\n}\n.form-inline .form-check{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;width:auto;padding-left:0\n}\n.form-inline .form-check-input{position:relative;margin-top:0;margin-right:.25rem;margin-left:0\n}\n.form-inline .custom-control{-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center\n}\n.form-inline .custom-control-label{margin-bottom:0\n}\n}\n.btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out\n}\n@media screen and (prefers-reduced-motion:reduce){\n.btn{-webkit-transition:none;transition:none\n}\n}\n.btn:focus,.btn:hover{text-decoration:none\n}\n.btn.focus,.btn:focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 .2rem rgba(0,123,255,.25)\n}\n.btn.disabled,.btn:disabled{opacity:.65\n}\n.btn:not(:disabled):not(.disabled){cursor:pointer\n}\na.btn.disabled,fieldset:disabled a.btn{pointer-events:none\n}\n.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff\n}\n.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc\n}\n.btn-primary.focus,.btn-primary:focus{-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.5);box-shadow:0 0 0 .2rem rgba(0,123,255,.5)\n}\n.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff\n}\n.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf\n}\n.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.5);box-shadow:0 0 0 .2rem rgba(0,123,255,.5)\n}\n.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d\n}\n.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62\n}\n.btn-secondary.focus,.btn-secondary:focus{-webkit-box-shadow:0 0 0 .2rem rgba(108,117,125,.5);box-shadow:0 0 0 .2rem rgba(108,117,125,.5)\n}\n.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d\n}\n.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b\n}\n.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(108,117,125,.5);box-shadow:0 0 0 .2rem rgba(108,117,125,.5)\n}\n.btn-success{color:#fff;background-color:#28a745;border-color:#28a745\n}\n.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34\n}\n.btn-success.focus,.btn-success:focus{-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.5);box-shadow:0 0 0 .2rem rgba(40,167,69,.5)\n}\n.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745\n}\n.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430\n}\n.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.5);box-shadow:0 0 0 .2rem rgba(40,167,69,.5)\n}\n.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8\n}\n.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b\n}\n.btn-info.focus,.btn-info:focus{-webkit-box-shadow:0 0 0 .2rem rgba(23,162,184,.5);box-shadow:0 0 0 .2rem rgba(23,162,184,.5)\n}\n.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8\n}\n.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f\n}\n.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(23,162,184,.5);box-shadow:0 0 0 .2rem rgba(23,162,184,.5)\n}\n.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107\n}\n.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00\n}\n.btn-warning.focus,.btn-warning:focus{-webkit-box-shadow:0 0 0 .2rem rgba(255,193,7,.5);box-shadow:0 0 0 .2rem rgba(255,193,7,.5)\n}\n.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107\n}\n.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500\n}\n.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(255,193,7,.5);box-shadow:0 0 0 .2rem rgba(255,193,7,.5)\n}\n.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545\n}\n.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130\n}\n.btn-danger.focus,.btn-danger:focus{-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.5);box-shadow:0 0 0 .2rem rgba(220,53,69,.5)\n}\n.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545\n}\n.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d\n}\n.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.5);box-shadow:0 0 0 .2rem rgba(220,53,69,.5)\n}\n.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa\n}\n.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5\n}\n.btn-light.focus,.btn-light:focus{-webkit-box-shadow:0 0 0 .2rem rgba(248,249,250,.5);box-shadow:0 0 0 .2rem rgba(248,249,250,.5)\n}\n.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa\n}\n.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df\n}\n.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(248,249,250,.5);box-shadow:0 0 0 .2rem rgba(248,249,250,.5)\n}\n.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40\n}\n.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124\n}\n.btn-dark.focus,.btn-dark:focus{-webkit-box-shadow:0 0 0 .2rem rgba(52,58,64,.5);box-shadow:0 0 0 .2rem rgba(52,58,64,.5)\n}\n.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40\n}\n.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d\n}\n.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(52,58,64,.5);box-shadow:0 0 0 .2rem rgba(52,58,64,.5)\n}\n.btn-outline-primary{color:#007bff;background-color:transparent;background-image:none;border-color:#007bff\n}\n.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff\n}\n.btn-outline-primary.focus,.btn-outline-primary:focus{-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.5);box-shadow:0 0 0 .2rem rgba(0,123,255,.5)\n}\n.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent\n}\n.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff\n}\n.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.5);box-shadow:0 0 0 .2rem rgba(0,123,255,.5)\n}\n.btn-outline-secondary{color:#6c757d;background-color:transparent;background-image:none;border-color:#6c757d\n}\n.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d\n}\n.btn-outline-secondary.focus,.btn-outline-secondary:focus{-webkit-box-shadow:0 0 0 .2rem rgba(108,117,125,.5);box-shadow:0 0 0 .2rem rgba(108,117,125,.5)\n}\n.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent\n}\n.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d\n}\n.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(108,117,125,.5);box-shadow:0 0 0 .2rem rgba(108,117,125,.5)\n}\n.btn-outline-success{color:#28a745;background-color:transparent;background-image:none;border-color:#28a745\n}\n.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745\n}\n.btn-outline-success.focus,.btn-outline-success:focus{-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.5);box-shadow:0 0 0 .2rem rgba(40,167,69,.5)\n}\n.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent\n}\n.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745\n}\n.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.5);box-shadow:0 0 0 .2rem rgba(40,167,69,.5)\n}\n.btn-outline-info{color:#17a2b8;background-color:transparent;background-image:none;border-color:#17a2b8\n}\n.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8\n}\n.btn-outline-info.focus,.btn-outline-info:focus{-webkit-box-shadow:0 0 0 .2rem rgba(23,162,184,.5);box-shadow:0 0 0 .2rem rgba(23,162,184,.5)\n}\n.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent\n}\n.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8\n}\n.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(23,162,184,.5);box-shadow:0 0 0 .2rem rgba(23,162,184,.5)\n}\n.btn-outline-warning{color:#ffc107;background-color:transparent;background-image:none;border-color:#ffc107\n}\n.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107\n}\n.btn-outline-warning.focus,.btn-outline-warning:focus{-webkit-box-shadow:0 0 0 .2rem rgba(255,193,7,.5);box-shadow:0 0 0 .2rem rgba(255,193,7,.5)\n}\n.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent\n}\n.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107\n}\n.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(255,193,7,.5);box-shadow:0 0 0 .2rem rgba(255,193,7,.5)\n}\n.btn-outline-danger{color:#dc3545;background-color:transparent;background-image:none;border-color:#dc3545\n}\n.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545\n}\n.btn-outline-danger.focus,.btn-outline-danger:focus{-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.5);box-shadow:0 0 0 .2rem rgba(220,53,69,.5)\n}\n.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent\n}\n.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545\n}\n.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.5);box-shadow:0 0 0 .2rem rgba(220,53,69,.5)\n}\n.btn-outline-light{color:#f8f9fa;background-color:transparent;background-image:none;border-color:#f8f9fa\n}\n.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa\n}\n.btn-outline-light.focus,.btn-outline-light:focus{-webkit-box-shadow:0 0 0 .2rem rgba(248,249,250,.5);box-shadow:0 0 0 .2rem rgba(248,249,250,.5)\n}\n.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent\n}\n.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa\n}\n.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(248,249,250,.5);box-shadow:0 0 0 .2rem rgba(248,249,250,.5)\n}\n.btn-outline-dark{color:#343a40;background-color:transparent;background-image:none;border-color:#343a40\n}\n.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40\n}\n.btn-outline-dark.focus,.btn-outline-dark:focus{-webkit-box-shadow:0 0 0 .2rem rgba(52,58,64,.5);box-shadow:0 0 0 .2rem rgba(52,58,64,.5)\n}\n.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent\n}\n.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40\n}\n.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(52,58,64,.5);box-shadow:0 0 0 .2rem rgba(52,58,64,.5)\n}\n.btn-link{font-weight:400;color:#007bff;background-color:transparent\n}\n.btn-link:hover{color:#0056b3;background-color:transparent\n}\n.btn-link.focus,.btn-link:focus,.btn-link:hover{text-decoration:underline;border-color:transparent\n}\n.btn-link.focus,.btn-link:focus{-webkit-box-shadow:none;box-shadow:none\n}\n.btn-link.disabled,.btn-link:disabled{color:#6c757d;pointer-events:none\n}\n.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem\n}\n.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem\n}\n.btn-block{display:block;width:100%\n}\n.btn-block+.btn-block{margin-top:.5rem\n}\ninput[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%\n}\n.fade{-webkit-transition:opacity .15s linear;transition:opacity .15s linear\n}\n@media screen and (prefers-reduced-motion:reduce){\n.fade{-webkit-transition:none;transition:none\n}\n}\n.fade:not(.show){opacity:0\n}\n.collapse:not(.show){display:none\n}\n.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition:height .35s ease;transition:height .35s ease\n}\n@media screen and (prefers-reduced-motion:reduce){\n.collapsing{-webkit-transition:none;transition:none\n}\n}\n.dropdown,.dropleft,.dropright,.dropup{position:relative\n}\n.dropdown-toggle:after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent\n}\n.dropdown-toggle:empty:after{margin-left:0\n}\n.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem\n}\n.dropdown-menu-right{right:0;left:auto\n}\n.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem\n}\n.dropup .dropdown-toggle:after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent\n}\n.dropup .dropdown-toggle:empty:after{margin-left:0\n}\n.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem\n}\n.dropright .dropdown-toggle:after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid\n}\n.dropright .dropdown-toggle:empty:after{margin-left:0\n}\n.dropright .dropdown-toggle:after{vertical-align:0\n}\n.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem\n}\n.dropleft .dropdown-toggle:after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:\"\";display:none\n}\n.dropleft .dropdown-toggle:before{display:inline-block;width:0;height:0;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent\n}\n.dropleft .dropdown-toggle:empty:after{margin-left:0\n}\n.dropleft .dropdown-toggle:before{vertical-align:0\n}\n.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto\n}\n.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef\n}\n.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0\n}\n.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa\n}\n.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff\n}\n.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;background-color:transparent\n}\n.dropdown-menu.show{display:block\n}\n.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap\n}\n.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529\n}\n.btn-group,.btn-group-vertical{position:relative;display:-ms-inline-flexbox;display:-webkit-inline-box;display:inline-flex;vertical-align:middle\n}\n.btn-group-vertical>.btn,.btn-group>.btn{position:relative;-ms-flex:0 1 auto;-webkit-box-flex:0;flex:0 1 auto\n}\n.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1\n}\n.btn-group-vertical .btn+.btn,.btn-group-vertical .btn+.btn-group,.btn-group-vertical .btn-group+.btn,.btn-group-vertical .btn-group+.btn-group,.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px\n}\n.btn-toolbar{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start\n}\n.btn-toolbar .input-group{width:auto\n}\n.btn-group>.btn:first-child{margin-left:0\n}\n.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0\n}\n.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0\n}\n.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem\n}\n.dropdown-toggle-split:after,.dropright .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{margin-left:0\n}\n.dropleft .dropdown-toggle-split:before{margin-right:0\n}\n.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem\n}\n.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem\n}\n.btn-group-vertical{-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-ms-flex-align:start;-webkit-box-align:start;align-items:flex-start;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center\n}\n.btn-group-vertical .btn,.btn-group-vertical .btn-group{width:100%\n}\n.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0\n}\n.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0\n}\n.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0\n}\n.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0\n}\n.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio],.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none\n}\n.input-group{position:relative;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:stretch;-webkit-box-align:stretch;align-items:stretch;width:100%\n}\n.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control{position:relative;-ms-flex:1 1 auto;-webkit-box-flex:1;flex:1 1 auto;width:1%;margin-bottom:0\n}\n.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control{margin-left:-1px\n}\n.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3\n}\n.input-group>.custom-file .custom-file-input:focus{z-index:4\n}\n.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0\n}\n.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0\n}\n.input-group>.custom-file{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center\n}\n.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label:after{border-top-right-radius:0;border-bottom-right-radius:0\n}\n.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0\n}\n.input-group-append,.input-group-prepend{display:-ms-flexbox;display:-webkit-box;display:flex\n}\n.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2\n}\n.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px\n}\n.input-group-prepend{margin-right:-1px\n}\n.input-group-append{margin-left:-1px\n}\n.input-group-text{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem\n}\n.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0\n}\n.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{height:calc(2.875rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem\n}\n.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{height:calc(1.8125rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem\n}\n.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0\n}\n.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0\n}\n.custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem\n}\n.custom-control-inline{display:-ms-inline-flexbox;display:-webkit-inline-box;display:inline-flex;margin-right:1rem\n}\n.custom-control-input{position:absolute;z-index:-1;opacity:0\n}\n.custom-control-input:checked~.custom-control-label:before{color:#fff;background-color:#007bff\n}\n.custom-control-input:focus~.custom-control-label:before{-webkit-box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)\n}\n.custom-control-input:active~.custom-control-label:before{color:#fff;background-color:#b3d7ff\n}\n.custom-control-input:disabled~.custom-control-label{color:#6c757d\n}\n.custom-control-input:disabled~.custom-control-label:before{background-color:#e9ecef\n}\n.custom-control-label{position:relative;margin-bottom:0\n}\n.custom-control-label:before{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#dee2e6\n}\n.custom-control-label:after,.custom-control-label:before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\"\n}\n.custom-control-label:after{background-repeat:no-repeat;background-position:50%;background-size:50% 50%\n}\n.custom-checkbox .custom-control-label:before{border-radius:.25rem\n}\n.custom-checkbox .custom-control-input:checked~.custom-control-label:before{background-color:#007bff\n}\n.custom-checkbox .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")\n}\n.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:before{background-color:#007bff\n}\n.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\")\n}\n.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)\n}\n.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label:before{background-color:rgba(0,123,255,.5)\n}\n.custom-radio .custom-control-label:before{border-radius:50%\n}\n.custom-radio .custom-control-input:checked~.custom-control-label:before{background-color:#007bff\n}\n.custom-radio .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")\n}\n.custom-radio .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)\n}\n.custom-select{display:inline-block;width:100%;height:calc(2.25rem + 2px);padding:.375rem 1.75rem .375rem .75rem;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center;background-size:8px 10px;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none\n}\n.custom-select:focus{border-color:#80bdff;outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(128,189,255,.5);box-shadow:0 0 0 .2rem rgba(128,189,255,.5)\n}\n.custom-select:focus::-ms-value{color:#495057;background-color:#fff\n}\n.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none\n}\n.custom-select:disabled{color:#6c757d;background-color:#e9ecef\n}\n.custom-select::-ms-expand{opacity:0\n}\n.custom-select-sm{height:calc(1.8125rem + 2px);font-size:75%\n}\n.custom-select-lg,.custom-select-sm{padding-top:.375rem;padding-bottom:.375rem\n}\n.custom-select-lg{height:calc(2.875rem + 2px);font-size:125%\n}\n.custom-file{display:inline-block;margin-bottom:0\n}\n.custom-file,.custom-file-input{position:relative;width:100%;height:calc(2.25rem + 2px)\n}\n.custom-file-input{z-index:2;margin:0;opacity:0\n}\n.custom-file-input:focus~.custom-file-label{border-color:#80bdff;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 .2rem rgba(0,123,255,.25)\n}\n.custom-file-input:focus~.custom-file-label:after{border-color:#80bdff\n}\n.custom-file-input:disabled~.custom-file-label{background-color:#e9ecef\n}\n.custom-file-input:lang(en)~.custom-file-label:after{content:\"Browse\"\n}\n.custom-file-label{left:0;z-index:1;height:calc(2.25rem + 2px);background-color:#fff;border:1px solid #ced4da;border-radius:.25rem\n}\n.custom-file-label,.custom-file-label:after{position:absolute;top:0;right:0;padding:.375rem .75rem;line-height:1.5;color:#495057\n}\n.custom-file-label:after{bottom:0;z-index:3;display:block;height:2.25rem;content:\"Browse\";background-color:#e9ecef;border-left:1px solid #ced4da;border-radius:0 .25rem .25rem 0\n}\n.custom-range{width:100%;padding-left:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none\n}\n.custom-range:focus{outline:0\n}\n.custom-range:focus::-webkit-slider-thumb{-webkit-box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)\n}\n.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)\n}\n.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)\n}\n.custom-range::-moz-focus-outer{border:0\n}\n.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none\n}\n@media screen and (prefers-reduced-motion:reduce){\n.custom-range::-webkit-slider-thumb{-webkit-transition:none;transition:none\n}\n}\n.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff\n}\n.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem\n}\n.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none\n}\n@media screen and (prefers-reduced-motion:reduce){\n.custom-range::-moz-range-thumb{-webkit-transition:none;transition:none\n}\n}\n.custom-range::-moz-range-thumb:active{background-color:#b3d7ff\n}\n.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem\n}\n.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;appearance:none\n}\n@media screen and (prefers-reduced-motion:reduce){\n.custom-range::-ms-thumb{-webkit-transition:none;transition:none\n}\n}\n.custom-range::-ms-thumb:active{background-color:#b3d7ff\n}\n.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem\n}\n.custom-range::-ms-fill-lower,.custom-range::-ms-fill-upper{background-color:#dee2e6;border-radius:1rem\n}\n.custom-range::-ms-fill-upper{margin-right:15px\n}\n.custom-control-label:before,.custom-file-label,.custom-select{-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out\n}\n@media screen and (prefers-reduced-motion:reduce){\n.custom-control-label:before,.custom-file-label,.custom-select{-webkit-transition:none;transition:none\n}\n}\n.nav{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none\n}\n.nav-link{display:block;padding:.5rem 1rem\n}\n.nav-link:focus,.nav-link:hover{text-decoration:none\n}\n.nav-link.disabled{color:#6c757d\n}\n.nav-tabs{border-bottom:1px solid #dee2e6\n}\n.nav-tabs .nav-item{margin-bottom:-1px\n}\n.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem\n}\n.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6\n}\n.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent\n}\n.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff\n}\n.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0\n}\n.nav-pills .nav-link{border-radius:.25rem\n}\n.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff\n}\n.nav-fill .nav-item{-ms-flex:1 1 auto;-webkit-box-flex:1;flex:1 1 auto;text-align:center\n}\n.nav-justified .nav-item{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;text-align:center\n}\n.tab-content>.tab-pane{display:none\n}\n.tab-content>.active{display:block\n}\n.navbar{position:relative;padding:.5rem 1rem\n}\n.navbar,.navbar>.container,.navbar>.container-fluid{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-pack:justify;-webkit-box-pack:justify;justify-content:space-between\n}\n.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap\n}\n.navbar-brand:focus,.navbar-brand:hover{text-decoration:none\n}\n.navbar-nav{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none\n}\n.navbar-nav .nav-link{padding-right:0;padding-left:0\n}\n.navbar-nav .dropdown-menu{position:static;float:none\n}\n.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem\n}\n.navbar-collapse{-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;-ms-flex-align:center;-webkit-box-align:center;align-items:center\n}\n.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem\n}\n.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none\n}\n.navbar-toggler:not(:disabled):not(.disabled){cursor:pointer\n}\n.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat 50%;background-size:100% 100%\n}\n@media (max-width:575.98px){\n.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{padding-right:0;padding-left:0\n}\n}\n@media (min-width:576px){\n.navbar-expand-sm{-ms-flex-flow:row nowrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start\n}\n.navbar-expand-sm .navbar-nav{-ms-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row\n}\n.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute\n}\n.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem\n}\n.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap\n}\n.navbar-expand-sm .navbar-collapse{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto\n}\n.navbar-expand-sm .navbar-toggler{display:none\n}\n}\n@media (max-width:767.98px){\n.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{padding-right:0;padding-left:0\n}\n}\n@media (min-width:768px){\n.navbar-expand-md{-ms-flex-flow:row nowrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start\n}\n.navbar-expand-md .navbar-nav{-ms-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row\n}\n.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute\n}\n.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem\n}\n.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap\n}\n.navbar-expand-md .navbar-collapse{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto\n}\n.navbar-expand-md .navbar-toggler{display:none\n}\n}\n@media (max-width:991.98px){\n.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{padding-right:0;padding-left:0\n}\n}\n@media (min-width:992px){\n.navbar-expand-lg{-ms-flex-flow:row nowrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start\n}\n.navbar-expand-lg .navbar-nav{-ms-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row\n}\n.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute\n}\n.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem\n}\n.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap\n}\n.navbar-expand-lg .navbar-collapse{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto\n}\n.navbar-expand-lg .navbar-toggler{display:none\n}\n}\n@media (max-width:1199.98px){\n.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{padding-right:0;padding-left:0\n}\n}\n@media (min-width:1200px){\n.navbar-expand-xl{-ms-flex-flow:row nowrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start\n}\n.navbar-expand-xl .navbar-nav{-ms-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row\n}\n.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute\n}\n.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem\n}\n.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap\n}\n.navbar-expand-xl .navbar-collapse{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto\n}\n.navbar-expand-xl .navbar-toggler{display:none\n}\n}\n.navbar-expand{-ms-flex-flow:row nowrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start\n}\n.navbar-expand>.container,.navbar-expand>.container-fluid{padding-right:0;padding-left:0\n}\n.navbar-expand .navbar-nav{-ms-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row\n}\n.navbar-expand .navbar-nav .dropdown-menu{position:absolute\n}\n.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem\n}\n.navbar-expand>.container,.navbar-expand>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap\n}\n.navbar-expand .navbar-collapse{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto\n}\n.navbar-expand .navbar-toggler{display:none\n}\n.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)\n}\n.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)\n}\n.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)\n}\n.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)\n}\n.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)\n}\n.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)\n}\n.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")\n}\n.navbar-light .navbar-text{color:rgba(0,0,0,.5)\n}\n.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)\n}\n.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff\n}\n.navbar-dark .navbar-nav .nav-link{color:hsla(0,0%,100%,.5)\n}\n.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:hsla(0,0%,100%,.75)\n}\n.navbar-dark .navbar-nav .nav-link.disabled{color:hsla(0,0%,100%,.25)\n}\n.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff\n}\n.navbar-dark .navbar-toggler{color:hsla(0,0%,100%,.5);border-color:hsla(0,0%,100%,.1)\n}\n.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")\n}\n.navbar-dark .navbar-text{color:hsla(0,0%,100%,.5)\n}\n.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff\n}\n.card{position:relative;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem\n}\n.card>hr{margin-right:0;margin-left:0\n}\n.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem\n}\n.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem\n}\n.card-body{-ms-flex:1 1 auto;-webkit-box-flex:1;flex:1 1 auto;padding:1.25rem\n}\n.card-title{margin-bottom:.75rem\n}\n.card-subtitle{margin-top:-.375rem\n}\n.card-subtitle,.card-text:last-child{margin-bottom:0\n}\n.card-link:hover{text-decoration:none\n}\n.card-link+.card-link{margin-left:1.25rem\n}\n.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)\n}\n.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0\n}\n.card-header+.list-group .list-group-item:first-child{border-top:0\n}\n.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)\n}\n.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)\n}\n.card-header-tabs{margin-bottom:-.75rem;border-bottom:0\n}\n.card-header-pills,.card-header-tabs{margin-right:-.625rem;margin-left:-.625rem\n}\n.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem\n}\n.card-img{width:100%;border-radius:calc(.25rem - 1px)\n}\n.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)\n}\n.card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)\n}\n.card-deck{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column\n}\n.card-deck .card{margin-bottom:15px\n}\n@media (min-width:576px){\n.card-deck{-ms-flex-flow:row wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;margin-right:-15px;margin-left:-15px\n}\n.card-deck .card{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex:1 0 0%;-webkit-box-flex:1;flex:1 0 0%;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin-right:15px;margin-bottom:0;margin-left:15px\n}\n}\n.card-group{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column\n}\n.card-group>.card{margin-bottom:15px\n}\n@media (min-width:576px){\n.card-group{-ms-flex-flow:row wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap\n}\n.card-group>.card{-ms-flex:1 0 0%;-webkit-box-flex:1;flex:1 0 0%;margin-bottom:0\n}\n.card-group>.card+.card{margin-left:0;border-left:0\n}\n.card-group>.card:first-child{border-top-right-radius:0;border-bottom-right-radius:0\n}\n.card-group>.card:first-child .card-header,.card-group>.card:first-child .card-img-top{border-top-right-radius:0\n}\n.card-group>.card:first-child .card-footer,.card-group>.card:first-child .card-img-bottom{border-bottom-right-radius:0\n}\n.card-group>.card:last-child{border-top-left-radius:0;border-bottom-left-radius:0\n}\n.card-group>.card:last-child .card-header,.card-group>.card:last-child .card-img-top{border-top-left-radius:0\n}\n.card-group>.card:last-child .card-footer,.card-group>.card:last-child .card-img-bottom{border-bottom-left-radius:0\n}\n.card-group>.card:only-child{border-radius:.25rem\n}\n.card-group>.card:only-child .card-header,.card-group>.card:only-child .card-img-top{border-top-left-radius:.25rem;border-top-right-radius:.25rem\n}\n.card-group>.card:only-child .card-footer,.card-group>.card:only-child .card-img-bottom{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem\n}\n.card-group>.card:not(:first-child):not(:last-child):not(:only-child),.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-footer,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-header,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-top{border-radius:0\n}\n}\n.card-columns .card{margin-bottom:.75rem\n}\n@media (min-width:576px){\n.card-columns{-webkit-column-count:3;column-count:3;-webkit-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1\n}\n.card-columns .card{display:inline-block;width:100%\n}\n}\n.accordion .card:not(:first-of-type):not(:last-of-type){border-bottom:0;border-radius:0\n}\n.accordion .card:not(:first-of-type) .card-header:first-child{border-radius:0\n}\n.accordion .card:first-of-type{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0\n}\n.accordion .card:last-of-type{border-top-left-radius:0;border-top-right-radius:0\n}\n.breadcrumb{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem\n}\n.breadcrumb-item+.breadcrumb-item{padding-left:.5rem\n}\n.breadcrumb-item+.breadcrumb-item:before{display:inline-block;padding-right:.5rem;color:#6c757d;content:\"/\"\n}\n.breadcrumb-item+.breadcrumb-item:hover:before{text-decoration:underline;text-decoration:none\n}\n.breadcrumb-item.active{color:#6c757d\n}\n.pagination{display:-ms-flexbox;display:-webkit-box;display:flex;padding-left:0;list-style:none;border-radius:.25rem\n}\n.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6\n}\n.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6\n}\n.page-link:focus{z-index:2;outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 .2rem rgba(0,123,255,.25)\n}\n.page-link:not(:disabled):not(.disabled){cursor:pointer\n}\n.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem\n}\n.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem\n}\n.page-item.active .page-link{z-index:1;color:#fff;background-color:#007bff;border-color:#007bff\n}\n.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6\n}\n.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5\n}\n.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem\n}\n.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem\n}\n.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5\n}\n.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem\n}\n.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem\n}\n.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem\n}\n.badge:empty{display:none\n}\n.btn .badge{position:relative;top:-1px\n}\n.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem\n}\n.badge-primary{color:#fff;background-color:#007bff\n}\n.badge-primary[href]:focus,.badge-primary[href]:hover{color:#fff;text-decoration:none;background-color:#0062cc\n}\n.badge-secondary{color:#fff;background-color:#6c757d\n}\n.badge-secondary[href]:focus,.badge-secondary[href]:hover{color:#fff;text-decoration:none;background-color:#545b62\n}\n.badge-success{color:#fff;background-color:#28a745\n}\n.badge-success[href]:focus,.badge-success[href]:hover{color:#fff;text-decoration:none;background-color:#1e7e34\n}\n.badge-info{color:#fff;background-color:#17a2b8\n}\n.badge-info[href]:focus,.badge-info[href]:hover{color:#fff;text-decoration:none;background-color:#117a8b\n}\n.badge-warning{color:#212529;background-color:#ffc107\n}\n.badge-warning[href]:focus,.badge-warning[href]:hover{color:#212529;text-decoration:none;background-color:#d39e00\n}\n.badge-danger{color:#fff;background-color:#dc3545\n}\n.badge-danger[href]:focus,.badge-danger[href]:hover{color:#fff;text-decoration:none;background-color:#bd2130\n}\n.badge-light{color:#212529;background-color:#f8f9fa\n}\n.badge-light[href]:focus,.badge-light[href]:hover{color:#212529;text-decoration:none;background-color:#dae0e5\n}\n.badge-dark{color:#fff;background-color:#343a40\n}\n.badge-dark[href]:focus,.badge-dark[href]:hover{color:#fff;text-decoration:none;background-color:#1d2124\n}\n.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem\n}\n@media (min-width:576px){\n.jumbotron{padding:4rem 2rem\n}\n}\n.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0\n}\n.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem\n}\n.alert-heading{color:inherit\n}\n.alert-link{font-weight:700\n}\n.alert-dismissible{padding-right:4rem\n}\n.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit\n}\n.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff\n}\n.alert-primary hr{border-top-color:#9fcdff\n}\n.alert-primary .alert-link{color:#002752\n}\n.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db\n}\n.alert-secondary hr{border-top-color:#c8cbcf\n}\n.alert-secondary .alert-link{color:#202326\n}\n.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb\n}\n.alert-success hr{border-top-color:#b1dfbb\n}\n.alert-success .alert-link{color:#0b2e13\n}\n.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb\n}\n.alert-info hr{border-top-color:#abdde5\n}\n.alert-info .alert-link{color:#062c33\n}\n.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba\n}\n.alert-warning hr{border-top-color:#ffe8a1\n}\n.alert-warning .alert-link{color:#533f03\n}\n.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb\n}\n.alert-danger hr{border-top-color:#f1b0b7\n}\n.alert-danger .alert-link{color:#491217\n}\n.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe\n}\n.alert-light hr{border-top-color:#ececf6\n}\n.alert-light .alert-link{color:#686868\n}\n.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca\n}\n.alert-dark hr{border-top-color:#b9bbbe\n}\n.alert-dark .alert-link{color:#040505\n}\n@-webkit-keyframes progress-bar-stripes{\n0%{background-position:1rem 0\n}\nto{background-position:0 0\n}\n}\n@keyframes progress-bar-stripes{\n0%{background-position:1rem 0\n}\nto{background-position:0 0\n}\n}\n.progress{height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem\n}\n.progress,.progress-bar{display:-ms-flexbox;display:-webkit-box;display:flex\n}\n.progress-bar{-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;-webkit-transition:width .6s ease;transition:width .6s ease\n}\n@media screen and (prefers-reduced-motion:reduce){\n.progress-bar{-webkit-transition:none;transition:none\n}\n}\n.progress-bar-striped{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:1rem 1rem\n}\n.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite\n}\n.media{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:start;-webkit-box-align:start;align-items:flex-start\n}\n.media-body{-ms-flex:1;-webkit-box-flex:1;flex:1\n}\n.list-group{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding-left:0;margin-bottom:0\n}\n.list-group-item-action{width:100%;color:#495057;text-align:inherit\n}\n.list-group-item-action:focus,.list-group-item-action:hover{color:#495057;text-decoration:none;background-color:#f8f9fa\n}\n.list-group-item-action:active{color:#212529;background-color:#e9ecef\n}\n.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125)\n}\n.list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem\n}\n.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem\n}\n.list-group-item:focus,.list-group-item:hover{z-index:1;text-decoration:none\n}\n.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;background-color:#fff\n}\n.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff\n}\n.list-group-flush .list-group-item{border-right:0;border-left:0;border-radius:0\n}\n.list-group-flush:first-child .list-group-item:first-child{border-top:0\n}\n.list-group-flush:last-child .list-group-item:last-child{border-bottom:0\n}\n.list-group-item-primary{color:#004085;background-color:#b8daff\n}\n.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#004085;background-color:#9fcdff\n}\n.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085\n}\n.list-group-item-secondary{color:#383d41;background-color:#d6d8db\n}\n.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#383d41;background-color:#c8cbcf\n}\n.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41\n}\n.list-group-item-success{color:#155724;background-color:#c3e6cb\n}\n.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#155724;background-color:#b1dfbb\n}\n.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724\n}\n.list-group-item-info{color:#0c5460;background-color:#bee5eb\n}\n.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#0c5460;background-color:#abdde5\n}\n.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460\n}\n.list-group-item-warning{color:#856404;background-color:#ffeeba\n}\n.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#856404;background-color:#ffe8a1\n}\n.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404\n}\n.list-group-item-danger{color:#721c24;background-color:#f5c6cb\n}\n.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#721c24;background-color:#f1b0b7\n}\n.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24\n}\n.list-group-item-light{color:#818182;background-color:#fdfdfe\n}\n.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#818182;background-color:#ececf6\n}\n.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182\n}\n.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca\n}\n.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#1b1e21;background-color:#b9bbbe\n}\n.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21\n}\n.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5\n}\n.close:not(:disabled):not(.disabled){cursor:pointer\n}\n.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{color:#000;text-decoration:none;opacity:.75\n}\nbutton.close{padding:0;background-color:transparent;border:0;-webkit-appearance:none\n}\n.modal-open{overflow:hidden\n}\n.modal-open .modal{overflow-x:hidden;overflow-y:auto\n}\n.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;outline:0\n}\n.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none\n}\n.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;-webkit-transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out, -webkit-transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;-webkit-transform:translateY(-25%);transform:translateY(-25%)\n}\n@media screen and (prefers-reduced-motion:reduce){\n.modal.fade .modal-dialog{-webkit-transition:none;transition:none\n}\n}\n.modal.show .modal-dialog{-webkit-transform:translate(0);transform:translate(0)\n}\n.modal-dialog-centered{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;min-height:calc(100% - 1rem)\n}\n.modal-dialog-centered:before{display:block;height:calc(100vh - 1rem);content:\"\"\n}\n.modal-content{position:relative;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0\n}\n.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000\n}\n.modal-backdrop.fade{opacity:0\n}\n.modal-backdrop.show{opacity:.5\n}\n.modal-header{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:start;-webkit-box-align:start;align-items:flex-start;-ms-flex-pack:justify;-webkit-box-pack:justify;justify-content:space-between;padding:1rem;border-bottom:1px solid #e9ecef;border-top-left-radius:.3rem;border-top-right-radius:.3rem\n}\n.modal-header .close{padding:1rem;margin:-1rem -1rem -1rem auto\n}\n.modal-title{margin-bottom:0;line-height:1.5\n}\n.modal-body{position:relative;-ms-flex:1 1 auto;-webkit-box-flex:1;flex:1 1 auto;padding:1rem\n}\n.modal-footer{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-pack:end;-webkit-box-pack:end;justify-content:flex-end;padding:1rem;border-top:1px solid #e9ecef\n}\n.modal-footer>:not(:first-child){margin-left:.25rem\n}\n.modal-footer>:not(:last-child){margin-right:.25rem\n}\n.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll\n}\n@media (min-width:576px){\n.modal-dialog{max-width:500px;margin:1.75rem auto\n}\n.modal-dialog-centered{min-height:calc(100% - 3.5rem)\n}\n.modal-dialog-centered:before{height:calc(100vh - 3.5rem)\n}\n.modal-sm{max-width:300px\n}\n}\n@media (min-width:992px){\n.modal-lg{max-width:800px\n}\n}\n.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0\n}\n.tooltip.show{opacity:.9\n}\n.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem\n}\n.tooltip .arrow:before{position:absolute;content:\"\";border-color:transparent;border-style:solid\n}\n.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0\n}\n.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0\n}\n.bs-tooltip-auto[x-placement^=top] .arrow:before,.bs-tooltip-top .arrow:before{top:0;border-width:.4rem .4rem 0;border-top-color:#000\n}\n.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem\n}\n.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem\n}\n.bs-tooltip-auto[x-placement^=right] .arrow:before,.bs-tooltip-right .arrow:before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000\n}\n.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0\n}\n.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0\n}\n.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.bs-tooltip-bottom .arrow:before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000\n}\n.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem\n}\n.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem\n}\n.bs-tooltip-auto[x-placement^=left] .arrow:before,.bs-tooltip-left .arrow:before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000\n}\n.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem\n}\n.popover{top:0;left:0;z-index:1060;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem\n}\n.popover,.popover .arrow{position:absolute;display:block\n}\n.popover .arrow{width:1rem;height:.5rem;margin:0 .3rem\n}\n.popover .arrow:after,.popover .arrow:before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid\n}\n.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem\n}\n.bs-popover-auto[x-placement^=top] .arrow,.bs-popover-top .arrow{bottom:calc(-.5rem + -1px)\n}\n.bs-popover-auto[x-placement^=top] .arrow:after,.bs-popover-auto[x-placement^=top] .arrow:before,.bs-popover-top .arrow:after,.bs-popover-top .arrow:before{border-width:.5rem .5rem 0\n}\n.bs-popover-auto[x-placement^=top] .arrow:before,.bs-popover-top .arrow:before{bottom:0;border-top-color:rgba(0,0,0,.25)\n}\n.bs-popover-auto[x-placement^=top] .arrow:after,.bs-popover-top .arrow:after{bottom:1px;border-top-color:#fff\n}\n.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem\n}\n.bs-popover-auto[x-placement^=right] .arrow,.bs-popover-right .arrow{left:calc(-.5rem + -1px);width:.5rem;height:1rem;margin:.3rem 0\n}\n.bs-popover-auto[x-placement^=right] .arrow:after,.bs-popover-auto[x-placement^=right] .arrow:before,.bs-popover-right .arrow:after,.bs-popover-right .arrow:before{border-width:.5rem .5rem .5rem 0\n}\n.bs-popover-auto[x-placement^=right] .arrow:before,.bs-popover-right .arrow:before{left:0;border-right-color:rgba(0,0,0,.25)\n}\n.bs-popover-auto[x-placement^=right] .arrow:after,.bs-popover-right .arrow:after{left:1px;border-right-color:#fff\n}\n.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem\n}\n.bs-popover-auto[x-placement^=bottom] .arrow,.bs-popover-bottom .arrow{top:calc(-.5rem + -1px)\n}\n.bs-popover-auto[x-placement^=bottom] .arrow:after,.bs-popover-auto[x-placement^=bottom] .arrow:before,.bs-popover-bottom .arrow:after,.bs-popover-bottom .arrow:before{border-width:0 .5rem .5rem .5rem\n}\n.bs-popover-auto[x-placement^=bottom] .arrow:before,.bs-popover-bottom .arrow:before{top:0;border-bottom-color:rgba(0,0,0,.25)\n}\n.bs-popover-auto[x-placement^=bottom] .arrow:after,.bs-popover-bottom .arrow:after{top:1px;border-bottom-color:#fff\n}\n.bs-popover-auto[x-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7\n}\n.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem\n}\n.bs-popover-auto[x-placement^=left] .arrow,.bs-popover-left .arrow{right:calc(-.5rem + -1px);width:.5rem;height:1rem;margin:.3rem 0\n}\n.bs-popover-auto[x-placement^=left] .arrow:after,.bs-popover-auto[x-placement^=left] .arrow:before,.bs-popover-left .arrow:after,.bs-popover-left .arrow:before{border-width:.5rem 0 .5rem .5rem\n}\n.bs-popover-auto[x-placement^=left] .arrow:before,.bs-popover-left .arrow:before{right:0;border-left-color:rgba(0,0,0,.25)\n}\n.bs-popover-auto[x-placement^=left] .arrow:after,.bs-popover-left .arrow:after{right:1px;border-left-color:#fff\n}\n.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;color:inherit;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)\n}\n.popover-header:empty{display:none\n}\n.popover-body{padding:.5rem .75rem;color:#212529\n}\n.carousel{position:relative\n}\n.carousel-inner{position:relative;width:100%;overflow:hidden\n}\n.carousel-item{position:relative;display:none;-ms-flex-align:center;-webkit-box-align:center;align-items:center;width:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px\n}\n.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block;transition:-webkit-transform .6s ease;-webkit-transition:-webkit-transform .6s ease;transition:transform .6s ease;transition:transform .6s ease, -webkit-transform .6s ease;transition:transform .6s ease,-webkit-transform .6s ease\n}\n@media screen and (prefers-reduced-motion:reduce){\n.carousel-item-next,.carousel-item-prev,.carousel-item.active{-webkit-transition:none;transition:none\n}\n}\n.carousel-item-next,.carousel-item-prev{position:absolute;top:0\n}\n.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{-webkit-transform:translateX(0);transform:translateX(0)\n}\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)){\n.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n}\n.active.carousel-item-right,.carousel-item-next{-webkit-transform:translateX(100%);transform:translateX(100%)\n}\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)){\n.active.carousel-item-right,.carousel-item-next{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)\n}\n}\n.active.carousel-item-left,.carousel-item-prev{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)){\n.active.carousel-item-left,.carousel-item-prev{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)\n}\n}\n.carousel-fade .carousel-item{opacity:0;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:opacity;transition-property:opacity\n}\n.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{opacity:1\n}\n.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{opacity:0\n}\n.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-prev,.carousel-fade .carousel-item-next,.carousel-fade .carousel-item-prev,.carousel-fade .carousel-item.active{-webkit-transform:translateX(0);transform:translateX(0)\n}\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)){\n.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-prev,.carousel-fade .carousel-item-next,.carousel-fade .carousel-item-prev,.carousel-fade .carousel-item.active{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n}\n.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5\n}\n.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9\n}\n.carousel-control-prev{left:0\n}\n.carousel-control-next{right:0\n}\n.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:transparent no-repeat 50%;background-size:100% 100%\n}\n.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\")\n}\n.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\")\n}\n.carousel-indicators{position:absolute;right:0;bottom:10px;left:0;z-index:15;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none\n}\n.carousel-indicators li{position:relative;-ms-flex:0 1 auto;-webkit-box-flex:0;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:hsla(0,0%,100%,.5)\n}\n.carousel-indicators li:before{top:-10px\n}\n.carousel-indicators li:after,.carousel-indicators li:before{position:absolute;left:0;display:inline-block;width:100%;height:10px;content:\"\"\n}\n.carousel-indicators li:after{bottom:-10px\n}\n.carousel-indicators .active{background-color:#fff\n}\n.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center\n}\n.align-baseline{vertical-align:baseline!important\n}\n.align-top{vertical-align:top!important\n}\n.align-middle{vertical-align:middle!important\n}\n.align-bottom{vertical-align:bottom!important\n}\n.align-text-bottom{vertical-align:text-bottom!important\n}\n.align-text-top{vertical-align:text-top!important\n}\n.bg-primary{background-color:#007bff!important\n}\na.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important\n}\n.bg-secondary{background-color:#6c757d!important\n}\na.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#545b62!important\n}\n.bg-success{background-color:#28a745!important\n}\na.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34!important\n}\n.bg-info{background-color:#17a2b8!important\n}\na.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b!important\n}\n.bg-warning{background-color:#ffc107!important\n}\na.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00!important\n}\n.bg-danger{background-color:#dc3545!important\n}\na.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130!important\n}\n.bg-light{background-color:#f8f9fa!important\n}\na.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5!important\n}\n.bg-dark{background-color:#343a40!important\n}\na.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124!important\n}\n.bg-white{background-color:#fff!important\n}\n.bg-transparent{background-color:transparent!important\n}\n.border{border:1px solid #dee2e6!important\n}\n.border-top{border-top:1px solid #dee2e6!important\n}\n.border-right{border-right:1px solid #dee2e6!important\n}\n.border-bottom{border-bottom:1px solid #dee2e6!important\n}\n.border-left{border-left:1px solid #dee2e6!important\n}\n.border-0{border:0!important\n}\n.border-top-0{border-top:0!important\n}\n.border-right-0{border-right:0!important\n}\n.border-bottom-0{border-bottom:0!important\n}\n.border-left-0{border-left:0!important\n}\n.border-primary{border-color:#007bff!important\n}\n.border-secondary{border-color:#6c757d!important\n}\n.border-success{border-color:#28a745!important\n}\n.border-info{border-color:#17a2b8!important\n}\n.border-warning{border-color:#ffc107!important\n}\n.border-danger{border-color:#dc3545!important\n}\n.border-light{border-color:#f8f9fa!important\n}\n.border-dark{border-color:#343a40!important\n}\n.border-white{border-color:#fff!important\n}\n.rounded{border-radius:.25rem!important\n}\n.rounded-top{border-top-left-radius:.25rem!important\n}\n.rounded-right,.rounded-top{border-top-right-radius:.25rem!important\n}\n.rounded-bottom,.rounded-right{border-bottom-right-radius:.25rem!important\n}\n.rounded-bottom,.rounded-left{border-bottom-left-radius:.25rem!important\n}\n.rounded-left{border-top-left-radius:.25rem!important\n}\n.rounded-circle{border-radius:50%!important\n}\n.rounded-0{border-radius:0!important\n}\n.clearfix:after{display:block;clear:both;content:\"\"\n}\n.d-none{display:none!important\n}\n.d-inline{display:inline!important\n}\n.d-inline-block{display:inline-block!important\n}\n.d-block{display:block!important\n}\n.d-table{display:table!important\n}\n.d-table-row{display:table-row!important\n}\n.d-table-cell{display:table-cell!important\n}\n.d-flex{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important\n}\n.d-inline-flex{display:-ms-inline-flexbox!important;display:-webkit-inline-box!important;display:inline-flex!important\n}\n@media (min-width:576px){\n.d-sm-none{display:none!important\n}\n.d-sm-inline{display:inline!important\n}\n.d-sm-inline-block{display:inline-block!important\n}\n.d-sm-block{display:block!important\n}\n.d-sm-table{display:table!important\n}\n.d-sm-table-row{display:table-row!important\n}\n.d-sm-table-cell{display:table-cell!important\n}\n.d-sm-flex{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important\n}\n.d-sm-inline-flex{display:-ms-inline-flexbox!important;display:-webkit-inline-box!important;display:inline-flex!important\n}\n}\n@media (min-width:768px){\n.d-md-none{display:none!important\n}\n.d-md-inline{display:inline!important\n}\n.d-md-inline-block{display:inline-block!important\n}\n.d-md-block{display:block!important\n}\n.d-md-table{display:table!important\n}\n.d-md-table-row{display:table-row!important\n}\n.d-md-table-cell{display:table-cell!important\n}\n.d-md-flex{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important\n}\n.d-md-inline-flex{display:-ms-inline-flexbox!important;display:-webkit-inline-box!important;display:inline-flex!important\n}\n}\n@media (min-width:992px){\n.d-lg-none{display:none!important\n}\n.d-lg-inline{display:inline!important\n}\n.d-lg-inline-block{display:inline-block!important\n}\n.d-lg-block{display:block!important\n}\n.d-lg-table{display:table!important\n}\n.d-lg-table-row{display:table-row!important\n}\n.d-lg-table-cell{display:table-cell!important\n}\n.d-lg-flex{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important\n}\n.d-lg-inline-flex{display:-ms-inline-flexbox!important;display:-webkit-inline-box!important;display:inline-flex!important\n}\n}\n@media (min-width:1200px){\n.d-xl-none{display:none!important\n}\n.d-xl-inline{display:inline!important\n}\n.d-xl-inline-block{display:inline-block!important\n}\n.d-xl-block{display:block!important\n}\n.d-xl-table{display:table!important\n}\n.d-xl-table-row{display:table-row!important\n}\n.d-xl-table-cell{display:table-cell!important\n}\n.d-xl-flex{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important\n}\n.d-xl-inline-flex{display:-ms-inline-flexbox!important;display:-webkit-inline-box!important;display:inline-flex!important\n}\n}\n@media print{\n.d-print-none{display:none!important\n}\n.d-print-inline{display:inline!important\n}\n.d-print-inline-block{display:inline-block!important\n}\n.d-print-block{display:block!important\n}\n.d-print-table{display:table!important\n}\n.d-print-table-row{display:table-row!important\n}\n.d-print-table-cell{display:table-cell!important\n}\n.d-print-flex{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important\n}\n.d-print-inline-flex{display:-ms-inline-flexbox!important;display:-webkit-inline-box!important;display:inline-flex!important\n}\n}\n.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden\n}\n.embed-responsive:before{display:block;content:\"\"\n}\n.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0\n}\n.embed-responsive-21by9:before{padding-top:42.857143%\n}\n.embed-responsive-16by9:before{padding-top:56.25%\n}\n.embed-responsive-4by3:before{padding-top:75%\n}\n.embed-responsive-1by1:before{padding-top:100%\n}\n.flex-row{-ms-flex-direction:row!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;flex-direction:row!important\n}\n.flex-column{-ms-flex-direction:column!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;flex-direction:column!important\n}\n.flex-row-reverse{-ms-flex-direction:row-reverse!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;flex-direction:row-reverse!important\n}\n.flex-column-reverse{-ms-flex-direction:column-reverse!important;-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important\n}\n.flex-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important\n}\n.flex-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important\n}\n.flex-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important\n}\n.flex-fill{-ms-flex:1 1 auto!important;-webkit-box-flex:1!important;flex:1 1 auto!important\n}\n.flex-grow-0{-ms-flex-positive:0!important;-webkit-box-flex:0!important;flex-grow:0!important\n}\n.flex-grow-1{-ms-flex-positive:1!important;-webkit-box-flex:1!important;flex-grow:1!important\n}\n.flex-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important\n}\n.flex-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important\n}\n.justify-content-start{-ms-flex-pack:start!important;-webkit-box-pack:start!important;justify-content:flex-start!important\n}\n.justify-content-end{-ms-flex-pack:end!important;-webkit-box-pack:end!important;justify-content:flex-end!important\n}\n.justify-content-center{-ms-flex-pack:center!important;-webkit-box-pack:center!important;justify-content:center!important\n}\n.justify-content-between{-ms-flex-pack:justify!important;-webkit-box-pack:justify!important;justify-content:space-between!important\n}\n.justify-content-around{-ms-flex-pack:distribute!important;justify-content:space-around!important\n}\n.align-items-start{-ms-flex-align:start!important;-webkit-box-align:start!important;align-items:flex-start!important\n}\n.align-items-end{-ms-flex-align:end!important;-webkit-box-align:end!important;align-items:flex-end!important\n}\n.align-items-center{-ms-flex-align:center!important;-webkit-box-align:center!important;align-items:center!important\n}\n.align-items-baseline{-ms-flex-align:baseline!important;-webkit-box-align:baseline!important;align-items:baseline!important\n}\n.align-items-stretch{-ms-flex-align:stretch!important;-webkit-box-align:stretch!important;align-items:stretch!important\n}\n.align-content-start{-ms-flex-line-pack:start!important;align-content:flex-start!important\n}\n.align-content-end{-ms-flex-line-pack:end!important;align-content:flex-end!important\n}\n.align-content-center{-ms-flex-line-pack:center!important;align-content:center!important\n}\n.align-content-between{-ms-flex-line-pack:justify!important;align-content:space-between!important\n}\n.align-content-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important\n}\n.align-content-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important\n}\n.align-self-auto{-ms-flex-item-align:auto!important;align-self:auto!important\n}\n.align-self-start{-ms-flex-item-align:start!important;align-self:flex-start!important\n}\n.align-self-end{-ms-flex-item-align:end!important;align-self:flex-end!important\n}\n.align-self-center{-ms-flex-item-align:center!important;align-self:center!important\n}\n.align-self-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important\n}\n.align-self-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important\n}\n@media (min-width:576px){\n.flex-sm-row{-ms-flex-direction:row!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;flex-direction:row!important\n}\n.flex-sm-column{-ms-flex-direction:column!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;flex-direction:column!important\n}\n.flex-sm-row-reverse{-ms-flex-direction:row-reverse!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;flex-direction:row-reverse!important\n}\n.flex-sm-column-reverse{-ms-flex-direction:column-reverse!important;-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important\n}\n.flex-sm-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important\n}\n.flex-sm-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important\n}\n.flex-sm-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important\n}\n.flex-sm-fill{-ms-flex:1 1 auto!important;-webkit-box-flex:1!important;flex:1 1 auto!important\n}\n.flex-sm-grow-0{-ms-flex-positive:0!important;-webkit-box-flex:0!important;flex-grow:0!important\n}\n.flex-sm-grow-1{-ms-flex-positive:1!important;-webkit-box-flex:1!important;flex-grow:1!important\n}\n.flex-sm-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important\n}\n.flex-sm-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important\n}\n.justify-content-sm-start{-ms-flex-pack:start!important;-webkit-box-pack:start!important;justify-content:flex-start!important\n}\n.justify-content-sm-end{-ms-flex-pack:end!important;-webkit-box-pack:end!important;justify-content:flex-end!important\n}\n.justify-content-sm-center{-ms-flex-pack:center!important;-webkit-box-pack:center!important;justify-content:center!important\n}\n.justify-content-sm-between{-ms-flex-pack:justify!important;-webkit-box-pack:justify!important;justify-content:space-between!important\n}\n.justify-content-sm-around{-ms-flex-pack:distribute!important;justify-content:space-around!important\n}\n.align-items-sm-start{-ms-flex-align:start!important;-webkit-box-align:start!important;align-items:flex-start!important\n}\n.align-items-sm-end{-ms-flex-align:end!important;-webkit-box-align:end!important;align-items:flex-end!important\n}\n.align-items-sm-center{-ms-flex-align:center!important;-webkit-box-align:center!important;align-items:center!important\n}\n.align-items-sm-baseline{-ms-flex-align:baseline!important;-webkit-box-align:baseline!important;align-items:baseline!important\n}\n.align-items-sm-stretch{-ms-flex-align:stretch!important;-webkit-box-align:stretch!important;align-items:stretch!important\n}\n.align-content-sm-start{-ms-flex-line-pack:start!important;align-content:flex-start!important\n}\n.align-content-sm-end{-ms-flex-line-pack:end!important;align-content:flex-end!important\n}\n.align-content-sm-center{-ms-flex-line-pack:center!important;align-content:center!important\n}\n.align-content-sm-between{-ms-flex-line-pack:justify!important;align-content:space-between!important\n}\n.align-content-sm-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important\n}\n.align-content-sm-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important\n}\n.align-self-sm-auto{-ms-flex-item-align:auto!important;align-self:auto!important\n}\n.align-self-sm-start{-ms-flex-item-align:start!important;align-self:flex-start!important\n}\n.align-self-sm-end{-ms-flex-item-align:end!important;align-self:flex-end!important\n}\n.align-self-sm-center{-ms-flex-item-align:center!important;align-self:center!important\n}\n.align-self-sm-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important\n}\n.align-self-sm-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important\n}\n}\n@media (min-width:768px){\n.flex-md-row{-ms-flex-direction:row!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;flex-direction:row!important\n}\n.flex-md-column{-ms-flex-direction:column!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;flex-direction:column!important\n}\n.flex-md-row-reverse{-ms-flex-direction:row-reverse!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;flex-direction:row-reverse!important\n}\n.flex-md-column-reverse{-ms-flex-direction:column-reverse!important;-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important\n}\n.flex-md-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important\n}\n.flex-md-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important\n}\n.flex-md-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important\n}\n.flex-md-fill{-ms-flex:1 1 auto!important;-webkit-box-flex:1!important;flex:1 1 auto!important\n}\n.flex-md-grow-0{-ms-flex-positive:0!important;-webkit-box-flex:0!important;flex-grow:0!important\n}\n.flex-md-grow-1{-ms-flex-positive:1!important;-webkit-box-flex:1!important;flex-grow:1!important\n}\n.flex-md-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important\n}\n.flex-md-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important\n}\n.justify-content-md-start{-ms-flex-pack:start!important;-webkit-box-pack:start!important;justify-content:flex-start!important\n}\n.justify-content-md-end{-ms-flex-pack:end!important;-webkit-box-pack:end!important;justify-content:flex-end!important\n}\n.justify-content-md-center{-ms-flex-pack:center!important;-webkit-box-pack:center!important;justify-content:center!important\n}\n.justify-content-md-between{-ms-flex-pack:justify!important;-webkit-box-pack:justify!important;justify-content:space-between!important\n}\n.justify-content-md-around{-ms-flex-pack:distribute!important;justify-content:space-around!important\n}\n.align-items-md-start{-ms-flex-align:start!important;-webkit-box-align:start!important;align-items:flex-start!important\n}\n.align-items-md-end{-ms-flex-align:end!important;-webkit-box-align:end!important;align-items:flex-end!important\n}\n.align-items-md-center{-ms-flex-align:center!important;-webkit-box-align:center!important;align-items:center!important\n}\n.align-items-md-baseline{-ms-flex-align:baseline!important;-webkit-box-align:baseline!important;align-items:baseline!important\n}\n.align-items-md-stretch{-ms-flex-align:stretch!important;-webkit-box-align:stretch!important;align-items:stretch!important\n}\n.align-content-md-start{-ms-flex-line-pack:start!important;align-content:flex-start!important\n}\n.align-content-md-end{-ms-flex-line-pack:end!important;align-content:flex-end!important\n}\n.align-content-md-center{-ms-flex-line-pack:center!important;align-content:center!important\n}\n.align-content-md-between{-ms-flex-line-pack:justify!important;align-content:space-between!important\n}\n.align-content-md-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important\n}\n.align-content-md-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important\n}\n.align-self-md-auto{-ms-flex-item-align:auto!important;align-self:auto!important\n}\n.align-self-md-start{-ms-flex-item-align:start!important;align-self:flex-start!important\n}\n.align-self-md-end{-ms-flex-item-align:end!important;align-self:flex-end!important\n}\n.align-self-md-center{-ms-flex-item-align:center!important;align-self:center!important\n}\n.align-self-md-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important\n}\n.align-self-md-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important\n}\n}\n@media (min-width:992px){\n.flex-lg-row{-ms-flex-direction:row!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;flex-direction:row!important\n}\n.flex-lg-column{-ms-flex-direction:column!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;flex-direction:column!important\n}\n.flex-lg-row-reverse{-ms-flex-direction:row-reverse!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;flex-direction:row-reverse!important\n}\n.flex-lg-column-reverse{-ms-flex-direction:column-reverse!important;-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important\n}\n.flex-lg-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important\n}\n.flex-lg-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important\n}\n.flex-lg-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important\n}\n.flex-lg-fill{-ms-flex:1 1 auto!important;-webkit-box-flex:1!important;flex:1 1 auto!important\n}\n.flex-lg-grow-0{-ms-flex-positive:0!important;-webkit-box-flex:0!important;flex-grow:0!important\n}\n.flex-lg-grow-1{-ms-flex-positive:1!important;-webkit-box-flex:1!important;flex-grow:1!important\n}\n.flex-lg-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important\n}\n.flex-lg-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important\n}\n.justify-content-lg-start{-ms-flex-pack:start!important;-webkit-box-pack:start!important;justify-content:flex-start!important\n}\n.justify-content-lg-end{-ms-flex-pack:end!important;-webkit-box-pack:end!important;justify-content:flex-end!important\n}\n.justify-content-lg-center{-ms-flex-pack:center!important;-webkit-box-pack:center!important;justify-content:center!important\n}\n.justify-content-lg-between{-ms-flex-pack:justify!important;-webkit-box-pack:justify!important;justify-content:space-between!important\n}\n.justify-content-lg-around{-ms-flex-pack:distribute!important;justify-content:space-around!important\n}\n.align-items-lg-start{-ms-flex-align:start!important;-webkit-box-align:start!important;align-items:flex-start!important\n}\n.align-items-lg-end{-ms-flex-align:end!important;-webkit-box-align:end!important;align-items:flex-end!important\n}\n.align-items-lg-center{-ms-flex-align:center!important;-webkit-box-align:center!important;align-items:center!important\n}\n.align-items-lg-baseline{-ms-flex-align:baseline!important;-webkit-box-align:baseline!important;align-items:baseline!important\n}\n.align-items-lg-stretch{-ms-flex-align:stretch!important;-webkit-box-align:stretch!important;align-items:stretch!important\n}\n.align-content-lg-start{-ms-flex-line-pack:start!important;align-content:flex-start!important\n}\n.align-content-lg-end{-ms-flex-line-pack:end!important;align-content:flex-end!important\n}\n.align-content-lg-center{-ms-flex-line-pack:center!important;align-content:center!important\n}\n.align-content-lg-between{-ms-flex-line-pack:justify!important;align-content:space-between!important\n}\n.align-content-lg-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important\n}\n.align-content-lg-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important\n}\n.align-self-lg-auto{-ms-flex-item-align:auto!important;align-self:auto!important\n}\n.align-self-lg-start{-ms-flex-item-align:start!important;align-self:flex-start!important\n}\n.align-self-lg-end{-ms-flex-item-align:end!important;align-self:flex-end!important\n}\n.align-self-lg-center{-ms-flex-item-align:center!important;align-self:center!important\n}\n.align-self-lg-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important\n}\n.align-self-lg-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important\n}\n}\n@media (min-width:1200px){\n.flex-xl-row{-ms-flex-direction:row!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;flex-direction:row!important\n}\n.flex-xl-column{-ms-flex-direction:column!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;flex-direction:column!important\n}\n.flex-xl-row-reverse{-ms-flex-direction:row-reverse!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;flex-direction:row-reverse!important\n}\n.flex-xl-column-reverse{-ms-flex-direction:column-reverse!important;-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important\n}\n.flex-xl-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important\n}\n.flex-xl-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important\n}\n.flex-xl-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important\n}\n.flex-xl-fill{-ms-flex:1 1 auto!important;-webkit-box-flex:1!important;flex:1 1 auto!important\n}\n.flex-xl-grow-0{-ms-flex-positive:0!important;-webkit-box-flex:0!important;flex-grow:0!important\n}\n.flex-xl-grow-1{-ms-flex-positive:1!important;-webkit-box-flex:1!important;flex-grow:1!important\n}\n.flex-xl-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important\n}\n.flex-xl-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important\n}\n.justify-content-xl-start{-ms-flex-pack:start!important;-webkit-box-pack:start!important;justify-content:flex-start!important\n}\n.justify-content-xl-end{-ms-flex-pack:end!important;-webkit-box-pack:end!important;justify-content:flex-end!important\n}\n.justify-content-xl-center{-ms-flex-pack:center!important;-webkit-box-pack:center!important;justify-content:center!important\n}\n.justify-content-xl-between{-ms-flex-pack:justify!important;-webkit-box-pack:justify!important;justify-content:space-between!important\n}\n.justify-content-xl-around{-ms-flex-pack:distribute!important;justify-content:space-around!important\n}\n.align-items-xl-start{-ms-flex-align:start!important;-webkit-box-align:start!important;align-items:flex-start!important\n}\n.align-items-xl-end{-ms-flex-align:end!important;-webkit-box-align:end!important;align-items:flex-end!important\n}\n.align-items-xl-center{-ms-flex-align:center!important;-webkit-box-align:center!important;align-items:center!important\n}\n.align-items-xl-baseline{-ms-flex-align:baseline!important;-webkit-box-align:baseline!important;align-items:baseline!important\n}\n.align-items-xl-stretch{-ms-flex-align:stretch!important;-webkit-box-align:stretch!important;align-items:stretch!important\n}\n.align-content-xl-start{-ms-flex-line-pack:start!important;align-content:flex-start!important\n}\n.align-content-xl-end{-ms-flex-line-pack:end!important;align-content:flex-end!important\n}\n.align-content-xl-center{-ms-flex-line-pack:center!important;align-content:center!important\n}\n.align-content-xl-between{-ms-flex-line-pack:justify!important;align-content:space-between!important\n}\n.align-content-xl-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important\n}\n.align-content-xl-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important\n}\n.align-self-xl-auto{-ms-flex-item-align:auto!important;align-self:auto!important\n}\n.align-self-xl-start{-ms-flex-item-align:start!important;align-self:flex-start!important\n}\n.align-self-xl-end{-ms-flex-item-align:end!important;align-self:flex-end!important\n}\n.align-self-xl-center{-ms-flex-item-align:center!important;align-self:center!important\n}\n.align-self-xl-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important\n}\n.align-self-xl-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important\n}\n}\n.float-left{float:left!important\n}\n.float-right{float:right!important\n}\n.float-none{float:none!important\n}\n@media (min-width:576px){\n.float-sm-left{float:left!important\n}\n.float-sm-right{float:right!important\n}\n.float-sm-none{float:none!important\n}\n}\n@media (min-width:768px){\n.float-md-left{float:left!important\n}\n.float-md-right{float:right!important\n}\n.float-md-none{float:none!important\n}\n}\n@media (min-width:992px){\n.float-lg-left{float:left!important\n}\n.float-lg-right{float:right!important\n}\n.float-lg-none{float:none!important\n}\n}\n@media (min-width:1200px){\n.float-xl-left{float:left!important\n}\n.float-xl-right{float:right!important\n}\n.float-xl-none{float:none!important\n}\n}\n.position-static{position:static!important\n}\n.position-relative{position:relative!important\n}\n.position-absolute{position:absolute!important\n}\n.position-fixed{position:fixed!important\n}\n.position-sticky{position:-webkit-sticky!important;position:sticky!important\n}\n.fixed-top{top:0\n}\n.fixed-bottom,.fixed-top{position:fixed;right:0;left:0;z-index:1030\n}\n.fixed-bottom{bottom:0\n}\n@supports ((position: -webkit-sticky) or (position: sticky)){\n.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020\n}\n}\n.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0\n}\n.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal\n}\n.shadow-sm{-webkit-box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important;box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important\n}\n.shadow{-webkit-box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important;box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important\n}\n.shadow-lg{-webkit-box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important;box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important\n}\n.shadow-none{-webkit-box-shadow:none!important;box-shadow:none!important\n}\n.w-25{width:25%!important\n}\n.w-50{width:50%!important\n}\n.w-75{width:75%!important\n}\n.w-100{width:100%!important\n}\n.w-auto{width:auto!important\n}\n.h-25{height:25%!important\n}\n.h-50{height:50%!important\n}\n.h-75{height:75%!important\n}\n.h-100{height:100%!important\n}\n.h-auto{height:auto!important\n}\n.mw-100{max-width:100%!important\n}\n.mh-100{max-height:100%!important\n}\n.m-0{margin:0!important\n}\n.mt-0,.my-0{margin-top:0!important\n}\n.mr-0,.mx-0{margin-right:0!important\n}\n.mb-0,.my-0{margin-bottom:0!important\n}\n.ml-0,.mx-0{margin-left:0!important\n}\n.m-1{margin:.25rem!important\n}\n.mt-1,.my-1{margin-top:.25rem!important\n}\n.mr-1,.mx-1{margin-right:.25rem!important\n}\n.mb-1,.my-1{margin-bottom:.25rem!important\n}\n.ml-1,.mx-1{margin-left:.25rem!important\n}\n.m-2{margin:.5rem!important\n}\n.mt-2,.my-2{margin-top:.5rem!important\n}\n.mr-2,.mx-2{margin-right:.5rem!important\n}\n.mb-2,.my-2{margin-bottom:.5rem!important\n}\n.ml-2,.mx-2{margin-left:.5rem!important\n}\n.m-3{margin:1rem!important\n}\n.mt-3,.my-3{margin-top:1rem!important\n}\n.mr-3,.mx-3{margin-right:1rem!important\n}\n.mb-3,.my-3{margin-bottom:1rem!important\n}\n.ml-3,.mx-3{margin-left:1rem!important\n}\n.m-4{margin:1.5rem!important\n}\n.mt-4,.my-4{margin-top:1.5rem!important\n}\n.mr-4,.mx-4{margin-right:1.5rem!important\n}\n.mb-4,.my-4{margin-bottom:1.5rem!important\n}\n.ml-4,.mx-4{margin-left:1.5rem!important\n}\n.m-5{margin:3rem!important\n}\n.mt-5,.my-5{margin-top:3rem!important\n}\n.mr-5,.mx-5{margin-right:3rem!important\n}\n.mb-5,.my-5{margin-bottom:3rem!important\n}\n.ml-5,.mx-5{margin-left:3rem!important\n}\n.p-0{padding:0!important\n}\n.pt-0,.py-0{padding-top:0!important\n}\n.pr-0,.px-0{padding-right:0!important\n}\n.pb-0,.py-0{padding-bottom:0!important\n}\n.pl-0,.px-0{padding-left:0!important\n}\n.p-1{padding:.25rem!important\n}\n.pt-1,.py-1{padding-top:.25rem!important\n}\n.pr-1,.px-1{padding-right:.25rem!important\n}\n.pb-1,.py-1{padding-bottom:.25rem!important\n}\n.pl-1,.px-1{padding-left:.25rem!important\n}\n.p-2{padding:.5rem!important\n}\n.pt-2,.py-2{padding-top:.5rem!important\n}\n.pr-2,.px-2{padding-right:.5rem!important\n}\n.pb-2,.py-2{padding-bottom:.5rem!important\n}\n.pl-2,.px-2{padding-left:.5rem!important\n}\n.p-3{padding:1rem!important\n}\n.pt-3,.py-3{padding-top:1rem!important\n}\n.pr-3,.px-3{padding-right:1rem!important\n}\n.pb-3,.py-3{padding-bottom:1rem!important\n}\n.pl-3,.px-3{padding-left:1rem!important\n}\n.p-4{padding:1.5rem!important\n}\n.pt-4,.py-4{padding-top:1.5rem!important\n}\n.pr-4,.px-4{padding-right:1.5rem!important\n}\n.pb-4,.py-4{padding-bottom:1.5rem!important\n}\n.pl-4,.px-4{padding-left:1.5rem!important\n}\n.p-5{padding:3rem!important\n}\n.pt-5,.py-5{padding-top:3rem!important\n}\n.pr-5,.px-5{padding-right:3rem!important\n}\n.pb-5,.py-5{padding-bottom:3rem!important\n}\n.pl-5,.px-5{padding-left:3rem!important\n}\n.m-auto{margin:auto!important\n}\n.mt-auto,.my-auto{margin-top:auto!important\n}\n.mr-auto,.mx-auto{margin-right:auto!important\n}\n.mb-auto,.my-auto{margin-bottom:auto!important\n}\n.ml-auto,.mx-auto{margin-left:auto!important\n}\n@media (min-width:576px){\n.m-sm-0{margin:0!important\n}\n.mt-sm-0,.my-sm-0{margin-top:0!important\n}\n.mr-sm-0,.mx-sm-0{margin-right:0!important\n}\n.mb-sm-0,.my-sm-0{margin-bottom:0!important\n}\n.ml-sm-0,.mx-sm-0{margin-left:0!important\n}\n.m-sm-1{margin:.25rem!important\n}\n.mt-sm-1,.my-sm-1{margin-top:.25rem!important\n}\n.mr-sm-1,.mx-sm-1{margin-right:.25rem!important\n}\n.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important\n}\n.ml-sm-1,.mx-sm-1{margin-left:.25rem!important\n}\n.m-sm-2{margin:.5rem!important\n}\n.mt-sm-2,.my-sm-2{margin-top:.5rem!important\n}\n.mr-sm-2,.mx-sm-2{margin-right:.5rem!important\n}\n.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important\n}\n.ml-sm-2,.mx-sm-2{margin-left:.5rem!important\n}\n.m-sm-3{margin:1rem!important\n}\n.mt-sm-3,.my-sm-3{margin-top:1rem!important\n}\n.mr-sm-3,.mx-sm-3{margin-right:1rem!important\n}\n.mb-sm-3,.my-sm-3{margin-bottom:1rem!important\n}\n.ml-sm-3,.mx-sm-3{margin-left:1rem!important\n}\n.m-sm-4{margin:1.5rem!important\n}\n.mt-sm-4,.my-sm-4{margin-top:1.5rem!important\n}\n.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important\n}\n.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important\n}\n.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important\n}\n.m-sm-5{margin:3rem!important\n}\n.mt-sm-5,.my-sm-5{margin-top:3rem!important\n}\n.mr-sm-5,.mx-sm-5{margin-right:3rem!important\n}\n.mb-sm-5,.my-sm-5{margin-bottom:3rem!important\n}\n.ml-sm-5,.mx-sm-5{margin-left:3rem!important\n}\n.p-sm-0{padding:0!important\n}\n.pt-sm-0,.py-sm-0{padding-top:0!important\n}\n.pr-sm-0,.px-sm-0{padding-right:0!important\n}\n.pb-sm-0,.py-sm-0{padding-bottom:0!important\n}\n.pl-sm-0,.px-sm-0{padding-left:0!important\n}\n.p-sm-1{padding:.25rem!important\n}\n.pt-sm-1,.py-sm-1{padding-top:.25rem!important\n}\n.pr-sm-1,.px-sm-1{padding-right:.25rem!important\n}\n.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important\n}\n.pl-sm-1,.px-sm-1{padding-left:.25rem!important\n}\n.p-sm-2{padding:.5rem!important\n}\n.pt-sm-2,.py-sm-2{padding-top:.5rem!important\n}\n.pr-sm-2,.px-sm-2{padding-right:.5rem!important\n}\n.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important\n}\n.pl-sm-2,.px-sm-2{padding-left:.5rem!important\n}\n.p-sm-3{padding:1rem!important\n}\n.pt-sm-3,.py-sm-3{padding-top:1rem!important\n}\n.pr-sm-3,.px-sm-3{padding-right:1rem!important\n}\n.pb-sm-3,.py-sm-3{padding-bottom:1rem!important\n}\n.pl-sm-3,.px-sm-3{padding-left:1rem!important\n}\n.p-sm-4{padding:1.5rem!important\n}\n.pt-sm-4,.py-sm-4{padding-top:1.5rem!important\n}\n.pr-sm-4,.px-sm-4{padding-right:1.5rem!important\n}\n.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important\n}\n.pl-sm-4,.px-sm-4{padding-left:1.5rem!important\n}\n.p-sm-5{padding:3rem!important\n}\n.pt-sm-5,.py-sm-5{padding-top:3rem!important\n}\n.pr-sm-5,.px-sm-5{padding-right:3rem!important\n}\n.pb-sm-5,.py-sm-5{padding-bottom:3rem!important\n}\n.pl-sm-5,.px-sm-5{padding-left:3rem!important\n}\n.m-sm-auto{margin:auto!important\n}\n.mt-sm-auto,.my-sm-auto{margin-top:auto!important\n}\n.mr-sm-auto,.mx-sm-auto{margin-right:auto!important\n}\n.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important\n}\n.ml-sm-auto,.mx-sm-auto{margin-left:auto!important\n}\n}\n@media (min-width:768px){\n.m-md-0{margin:0!important\n}\n.mt-md-0,.my-md-0{margin-top:0!important\n}\n.mr-md-0,.mx-md-0{margin-right:0!important\n}\n.mb-md-0,.my-md-0{margin-bottom:0!important\n}\n.ml-md-0,.mx-md-0{margin-left:0!important\n}\n.m-md-1{margin:.25rem!important\n}\n.mt-md-1,.my-md-1{margin-top:.25rem!important\n}\n.mr-md-1,.mx-md-1{margin-right:.25rem!important\n}\n.mb-md-1,.my-md-1{margin-bottom:.25rem!important\n}\n.ml-md-1,.mx-md-1{margin-left:.25rem!important\n}\n.m-md-2{margin:.5rem!important\n}\n.mt-md-2,.my-md-2{margin-top:.5rem!important\n}\n.mr-md-2,.mx-md-2{margin-right:.5rem!important\n}\n.mb-md-2,.my-md-2{margin-bottom:.5rem!important\n}\n.ml-md-2,.mx-md-2{margin-left:.5rem!important\n}\n.m-md-3{margin:1rem!important\n}\n.mt-md-3,.my-md-3{margin-top:1rem!important\n}\n.mr-md-3,.mx-md-3{margin-right:1rem!important\n}\n.mb-md-3,.my-md-3{margin-bottom:1rem!important\n}\n.ml-md-3,.mx-md-3{margin-left:1rem!important\n}\n.m-md-4{margin:1.5rem!important\n}\n.mt-md-4,.my-md-4{margin-top:1.5rem!important\n}\n.mr-md-4,.mx-md-4{margin-right:1.5rem!important\n}\n.mb-md-4,.my-md-4{margin-bottom:1.5rem!important\n}\n.ml-md-4,.mx-md-4{margin-left:1.5rem!important\n}\n.m-md-5{margin:3rem!important\n}\n.mt-md-5,.my-md-5{margin-top:3rem!important\n}\n.mr-md-5,.mx-md-5{margin-right:3rem!important\n}\n.mb-md-5,.my-md-5{margin-bottom:3rem!important\n}\n.ml-md-5,.mx-md-5{margin-left:3rem!important\n}\n.p-md-0{padding:0!important\n}\n.pt-md-0,.py-md-0{padding-top:0!important\n}\n.pr-md-0,.px-md-0{padding-right:0!important\n}\n.pb-md-0,.py-md-0{padding-bottom:0!important\n}\n.pl-md-0,.px-md-0{padding-left:0!important\n}\n.p-md-1{padding:.25rem!important\n}\n.pt-md-1,.py-md-1{padding-top:.25rem!important\n}\n.pr-md-1,.px-md-1{padding-right:.25rem!important\n}\n.pb-md-1,.py-md-1{padding-bottom:.25rem!important\n}\n.pl-md-1,.px-md-1{padding-left:.25rem!important\n}\n.p-md-2{padding:.5rem!important\n}\n.pt-md-2,.py-md-2{padding-top:.5rem!important\n}\n.pr-md-2,.px-md-2{padding-right:.5rem!important\n}\n.pb-md-2,.py-md-2{padding-bottom:.5rem!important\n}\n.pl-md-2,.px-md-2{padding-left:.5rem!important\n}\n.p-md-3{padding:1rem!important\n}\n.pt-md-3,.py-md-3{padding-top:1rem!important\n}\n.pr-md-3,.px-md-3{padding-right:1rem!important\n}\n.pb-md-3,.py-md-3{padding-bottom:1rem!important\n}\n.pl-md-3,.px-md-3{padding-left:1rem!important\n}\n.p-md-4{padding:1.5rem!important\n}\n.pt-md-4,.py-md-4{padding-top:1.5rem!important\n}\n.pr-md-4,.px-md-4{padding-right:1.5rem!important\n}\n.pb-md-4,.py-md-4{padding-bottom:1.5rem!important\n}\n.pl-md-4,.px-md-4{padding-left:1.5rem!important\n}\n.p-md-5{padding:3rem!important\n}\n.pt-md-5,.py-md-5{padding-top:3rem!important\n}\n.pr-md-5,.px-md-5{padding-right:3rem!important\n}\n.pb-md-5,.py-md-5{padding-bottom:3rem!important\n}\n.pl-md-5,.px-md-5{padding-left:3rem!important\n}\n.m-md-auto{margin:auto!important\n}\n.mt-md-auto,.my-md-auto{margin-top:auto!important\n}\n.mr-md-auto,.mx-md-auto{margin-right:auto!important\n}\n.mb-md-auto,.my-md-auto{margin-bottom:auto!important\n}\n.ml-md-auto,.mx-md-auto{margin-left:auto!important\n}\n}\n@media (min-width:992px){\n.m-lg-0{margin:0!important\n}\n.mt-lg-0,.my-lg-0{margin-top:0!important\n}\n.mr-lg-0,.mx-lg-0{margin-right:0!important\n}\n.mb-lg-0,.my-lg-0{margin-bottom:0!important\n}\n.ml-lg-0,.mx-lg-0{margin-left:0!important\n}\n.m-lg-1{margin:.25rem!important\n}\n.mt-lg-1,.my-lg-1{margin-top:.25rem!important\n}\n.mr-lg-1,.mx-lg-1{margin-right:.25rem!important\n}\n.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important\n}\n.ml-lg-1,.mx-lg-1{margin-left:.25rem!important\n}\n.m-lg-2{margin:.5rem!important\n}\n.mt-lg-2,.my-lg-2{margin-top:.5rem!important\n}\n.mr-lg-2,.mx-lg-2{margin-right:.5rem!important\n}\n.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important\n}\n.ml-lg-2,.mx-lg-2{margin-left:.5rem!important\n}\n.m-lg-3{margin:1rem!important\n}\n.mt-lg-3,.my-lg-3{margin-top:1rem!important\n}\n.mr-lg-3,.mx-lg-3{margin-right:1rem!important\n}\n.mb-lg-3,.my-lg-3{margin-bottom:1rem!important\n}\n.ml-lg-3,.mx-lg-3{margin-left:1rem!important\n}\n.m-lg-4{margin:1.5rem!important\n}\n.mt-lg-4,.my-lg-4{margin-top:1.5rem!important\n}\n.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important\n}\n.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important\n}\n.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important\n}\n.m-lg-5{margin:3rem!important\n}\n.mt-lg-5,.my-lg-5{margin-top:3rem!important\n}\n.mr-lg-5,.mx-lg-5{margin-right:3rem!important\n}\n.mb-lg-5,.my-lg-5{margin-bottom:3rem!important\n}\n.ml-lg-5,.mx-lg-5{margin-left:3rem!important\n}\n.p-lg-0{padding:0!important\n}\n.pt-lg-0,.py-lg-0{padding-top:0!important\n}\n.pr-lg-0,.px-lg-0{padding-right:0!important\n}\n.pb-lg-0,.py-lg-0{padding-bottom:0!important\n}\n.pl-lg-0,.px-lg-0{padding-left:0!important\n}\n.p-lg-1{padding:.25rem!important\n}\n.pt-lg-1,.py-lg-1{padding-top:.25rem!important\n}\n.pr-lg-1,.px-lg-1{padding-right:.25rem!important\n}\n.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important\n}\n.pl-lg-1,.px-lg-1{padding-left:.25rem!important\n}\n.p-lg-2{padding:.5rem!important\n}\n.pt-lg-2,.py-lg-2{padding-top:.5rem!important\n}\n.pr-lg-2,.px-lg-2{padding-right:.5rem!important\n}\n.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important\n}\n.pl-lg-2,.px-lg-2{padding-left:.5rem!important\n}\n.p-lg-3{padding:1rem!important\n}\n.pt-lg-3,.py-lg-3{padding-top:1rem!important\n}\n.pr-lg-3,.px-lg-3{padding-right:1rem!important\n}\n.pb-lg-3,.py-lg-3{padding-bottom:1rem!important\n}\n.pl-lg-3,.px-lg-3{padding-left:1rem!important\n}\n.p-lg-4{padding:1.5rem!important\n}\n.pt-lg-4,.py-lg-4{padding-top:1.5rem!important\n}\n.pr-lg-4,.px-lg-4{padding-right:1.5rem!important\n}\n.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important\n}\n.pl-lg-4,.px-lg-4{padding-left:1.5rem!important\n}\n.p-lg-5{padding:3rem!important\n}\n.pt-lg-5,.py-lg-5{padding-top:3rem!important\n}\n.pr-lg-5,.px-lg-5{padding-right:3rem!important\n}\n.pb-lg-5,.py-lg-5{padding-bottom:3rem!important\n}\n.pl-lg-5,.px-lg-5{padding-left:3rem!important\n}\n.m-lg-auto{margin:auto!important\n}\n.mt-lg-auto,.my-lg-auto{margin-top:auto!important\n}\n.mr-lg-auto,.mx-lg-auto{margin-right:auto!important\n}\n.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important\n}\n.ml-lg-auto,.mx-lg-auto{margin-left:auto!important\n}\n}\n@media (min-width:1200px){\n.m-xl-0{margin:0!important\n}\n.mt-xl-0,.my-xl-0{margin-top:0!important\n}\n.mr-xl-0,.mx-xl-0{margin-right:0!important\n}\n.mb-xl-0,.my-xl-0{margin-bottom:0!important\n}\n.ml-xl-0,.mx-xl-0{margin-left:0!important\n}\n.m-xl-1{margin:.25rem!important\n}\n.mt-xl-1,.my-xl-1{margin-top:.25rem!important\n}\n.mr-xl-1,.mx-xl-1{margin-right:.25rem!important\n}\n.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important\n}\n.ml-xl-1,.mx-xl-1{margin-left:.25rem!important\n}\n.m-xl-2{margin:.5rem!important\n}\n.mt-xl-2,.my-xl-2{margin-top:.5rem!important\n}\n.mr-xl-2,.mx-xl-2{margin-right:.5rem!important\n}\n.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important\n}\n.ml-xl-2,.mx-xl-2{margin-left:.5rem!important\n}\n.m-xl-3{margin:1rem!important\n}\n.mt-xl-3,.my-xl-3{margin-top:1rem!important\n}\n.mr-xl-3,.mx-xl-3{margin-right:1rem!important\n}\n.mb-xl-3,.my-xl-3{margin-bottom:1rem!important\n}\n.ml-xl-3,.mx-xl-3{margin-left:1rem!important\n}\n.m-xl-4{margin:1.5rem!important\n}\n.mt-xl-4,.my-xl-4{margin-top:1.5rem!important\n}\n.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important\n}\n.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important\n}\n.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important\n}\n.m-xl-5{margin:3rem!important\n}\n.mt-xl-5,.my-xl-5{margin-top:3rem!important\n}\n.mr-xl-5,.mx-xl-5{margin-right:3rem!important\n}\n.mb-xl-5,.my-xl-5{margin-bottom:3rem!important\n}\n.ml-xl-5,.mx-xl-5{margin-left:3rem!important\n}\n.p-xl-0{padding:0!important\n}\n.pt-xl-0,.py-xl-0{padding-top:0!important\n}\n.pr-xl-0,.px-xl-0{padding-right:0!important\n}\n.pb-xl-0,.py-xl-0{padding-bottom:0!important\n}\n.pl-xl-0,.px-xl-0{padding-left:0!important\n}\n.p-xl-1{padding:.25rem!important\n}\n.pt-xl-1,.py-xl-1{padding-top:.25rem!important\n}\n.pr-xl-1,.px-xl-1{padding-right:.25rem!important\n}\n.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important\n}\n.pl-xl-1,.px-xl-1{padding-left:.25rem!important\n}\n.p-xl-2{padding:.5rem!important\n}\n.pt-xl-2,.py-xl-2{padding-top:.5rem!important\n}\n.pr-xl-2,.px-xl-2{padding-right:.5rem!important\n}\n.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important\n}\n.pl-xl-2,.px-xl-2{padding-left:.5rem!important\n}\n.p-xl-3{padding:1rem!important\n}\n.pt-xl-3,.py-xl-3{padding-top:1rem!important\n}\n.pr-xl-3,.px-xl-3{padding-right:1rem!important\n}\n.pb-xl-3,.py-xl-3{padding-bottom:1rem!important\n}\n.pl-xl-3,.px-xl-3{padding-left:1rem!important\n}\n.p-xl-4{padding:1.5rem!important\n}\n.pt-xl-4,.py-xl-4{padding-top:1.5rem!important\n}\n.pr-xl-4,.px-xl-4{padding-right:1.5rem!important\n}\n.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important\n}\n.pl-xl-4,.px-xl-4{padding-left:1.5rem!important\n}\n.p-xl-5{padding:3rem!important\n}\n.pt-xl-5,.py-xl-5{padding-top:3rem!important\n}\n.pr-xl-5,.px-xl-5{padding-right:3rem!important\n}\n.pb-xl-5,.py-xl-5{padding-bottom:3rem!important\n}\n.pl-xl-5,.px-xl-5{padding-left:3rem!important\n}\n.m-xl-auto{margin:auto!important\n}\n.mt-xl-auto,.my-xl-auto{margin-top:auto!important\n}\n.mr-xl-auto,.mx-xl-auto{margin-right:auto!important\n}\n.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important\n}\n.ml-xl-auto,.mx-xl-auto{margin-left:auto!important\n}\n}\n.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace\n}\n.text-justify{text-align:justify!important\n}\n.text-nowrap{white-space:nowrap!important\n}\n.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap\n}\n.text-left{text-align:left!important\n}\n.text-right{text-align:right!important\n}\n.text-center{text-align:center!important\n}\n@media (min-width:576px){\n.text-sm-left{text-align:left!important\n}\n.text-sm-right{text-align:right!important\n}\n.text-sm-center{text-align:center!important\n}\n}\n@media (min-width:768px){\n.text-md-left{text-align:left!important\n}\n.text-md-right{text-align:right!important\n}\n.text-md-center{text-align:center!important\n}\n}\n@media (min-width:992px){\n.text-lg-left{text-align:left!important\n}\n.text-lg-right{text-align:right!important\n}\n.text-lg-center{text-align:center!important\n}\n}\n@media (min-width:1200px){\n.text-xl-left{text-align:left!important\n}\n.text-xl-right{text-align:right!important\n}\n.text-xl-center{text-align:center!important\n}\n}\n.text-lowercase{text-transform:lowercase!important\n}\n.text-uppercase{text-transform:uppercase!important\n}\n.text-capitalize{text-transform:capitalize!important\n}\n.font-weight-light{font-weight:300!important\n}\n.font-weight-normal{font-weight:400!important\n}\n.font-weight-bold{font-weight:700!important\n}\n.font-italic{font-style:italic!important\n}\n.text-white{color:#fff!important\n}\n.text-primary{color:#007bff!important\n}\na.text-primary:focus,a.text-primary:hover{color:#0062cc!important\n}\n.text-secondary{color:#6c757d!important\n}\na.text-secondary:focus,a.text-secondary:hover{color:#545b62!important\n}\n.text-success{color:#28a745!important\n}\na.text-success:focus,a.text-success:hover{color:#1e7e34!important\n}\n.text-info{color:#17a2b8!important\n}\na.text-info:focus,a.text-info:hover{color:#117a8b!important\n}\n.text-warning{color:#ffc107!important\n}\na.text-warning:focus,a.text-warning:hover{color:#d39e00!important\n}\n.text-danger{color:#dc3545!important\n}\na.text-danger:focus,a.text-danger:hover{color:#bd2130!important\n}\n.text-light{color:#f8f9fa!important\n}\na.text-light:focus,a.text-light:hover{color:#dae0e5!important\n}\n.text-dark{color:#343a40!important\n}\na.text-dark:focus,a.text-dark:hover{color:#1d2124!important\n}\n.text-body{color:#212529!important\n}\n.text-muted{color:#6c757d!important\n}\n.text-black-50{color:rgba(0,0,0,.5)!important\n}\n.text-white-50{color:hsla(0,0%,100%,.5)!important\n}\n.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0\n}\n.visible{visibility:visible!important\n}\n.invisible{visibility:hidden!important\n}\n@media print{\n*,:after,:before{text-shadow:none!important;-webkit-box-shadow:none!important;box-shadow:none!important\n}\na:not(.btn){text-decoration:underline\n}\nabbr[title]:after{content:\" (\" attr(title) \")\"\n}\npre{white-space:pre-wrap!important\n}\nblockquote,pre{border:1px solid #adb5bd;page-break-inside:avoid\n}\nthead{display:table-header-group\n}\nimg,tr{page-break-inside:avoid\n}\nh2,h3,p{orphans:3;widows:3\n}\nh2,h3{page-break-after:avoid\n}\n@page{size:a3\n}\n.container,body{min-width:992px!important\n}\n.navbar{display:none\n}\n.badge{border:1px solid #000\n}\n.table{border-collapse:collapse!important\n}\n.table td,.table th{background-color:#fff!important\n}\n.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important\n}\n.table-dark{color:inherit\n}\n.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6\n}\n.table .thead-dark th{color:inherit;border-color:#dee2e6\n}\n}", ""]);

// exports


/***/ }),

/***/ "dc95":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("b041");
exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n@font-face{font-family:Circular Std;font-weight:400;font-style:normal;src:local(\"Circular Std Book\"),url(" + escape(__webpack_require__("206f")) + ") format(\"woff\")\n}\n@font-face{font-family:Circular Std\\ ;font-weight:400;font-style:italic;src:local(\"Circular Std Book Italic\"),url(" + escape(__webpack_require__("e6cc")) + ") format(\"woff\")\n}\n@font-face{font-family:Circular Std;font-weight:500;font-style:normal;src:local(\"Circular Std Medium\"),url(" + escape(__webpack_require__("fa17")) + ") format(\"woff\")\n}\n@font-face{font-family:Circular Std;font-weight:500;font-style:italic;src:local(\"Circular Std Medium Italic\"),url(" + escape(__webpack_require__("8716")) + ") format(\"woff\")\n}\n@font-face{font-family:Circular Std;font-weight:600;font-style:normal;src:local(\"Circular Std Bold\"),url(" + escape(__webpack_require__("04ed")) + ") format(\"woff\")\n}\n@font-face{font-family:Circular Std;font-weight:600;font-style:italic;src:local(\"Circular Std Bold Italic\"),url(" + escape(__webpack_require__("1dad")) + ") format(\"woff\")\n}\n@font-face{font-family:Circular Std;font-weight:800;font-style:normal;src:local(\"Circular Std Black\"),url(" + escape(__webpack_require__("0e0c")) + ") format(\"woff\")\n}\n@font-face{font-family:Circular Std;font-weight:800;font-style:italic;src:local(\"Circular Std Black Italic\"),url(" + escape(__webpack_require__("bc90")) + ") format(\"woff\")\n}", ""]);

// exports


/***/ }),

/***/ "e6cc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/CircularStd-BookItalic.3c7409b8.woff";

/***/ }),

/***/ "ec2e":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(){/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var r,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},fa="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ha(){ha=function(){};fa.Symbol||(fa.Symbol=ia)}var ia=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function ja(){ha();var a=fa.Symbol.iterator;a||(a=fa.Symbol.iterator=fa.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ka(this)}});ja=function(){}}function ka(a){var b=0;return la(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function la(a){ja();a={next:a};a[fa.Symbol.iterator]=function(){return this};return a}function ma(a){ja();var b=a[Symbol.iterator];return b?b.call(a):ka(a)}
function na(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var oa;if("function"==typeof Object.setPrototypeOf)oa=Object.setPrototypeOf;else{var pa;a:{var qa={Na:!0},ra={};try{ra.__proto__=qa;pa=ra.Na;break a}catch(a){}pa=!1}oa=pa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=oa;function ta(){this.f=!1;this.b=null;this.fa=void 0;this.a=1;this.G=0;this.c=null}
function ua(a){if(a.f)throw new TypeError("Generator is already running");a.f=!0}ta.prototype.m=function(a){this.fa=a};function va(a,b){a.c={Qa:b,Ua:!0};a.a=a.G}ta.prototype.return=function(a){this.c={return:a};this.a=this.G};function wa(a,b){a.a=3;return{value:b}}function xa(a){this.a=new ta;this.b=a}function ya(a,b){ua(a.a);var c=a.a.b;if(c)return Ba(a,"return"in c?c["return"]:function(a){return{value:a,done:!0}},b,a.a.return);a.a.return(b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.a.b,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.f=!1,e;var f=e.value}catch(g){return a.a.b=null,va(a.a,g),Ca(a)}a.a.b=null;d.call(a.a,f);return Ca(a)}function Ca(a){for(;a.a.a;)try{var b=a.b(a.a);if(b)return a.a.f=!1,{value:b.value,done:!1}}catch(c){a.a.fa=void 0,va(a.a,c)}a.a.f=!1;if(a.a.c){b=a.a.c;a.a.c=null;if(b.Ua)throw b.Qa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){ua(a.a);a.a.b?b=Ba(a,a.a.b.next,b,a.a.m):(a.a.m(b),b=Ca(a));return b};this.throw=function(b){ua(a.a);a.a.b?b=Ba(a,a.a.b["throw"],b,a.a.m):(va(a.a,b),b=Ca(a));return b};this.return=function(b){return ya(a,b)};ja();this[Symbol.iterator]=function(){return this}}function Ea(a,b){b=new Da(new xa(b));sa&&sa(b,a.prototype);return b}
(function(){if(!function(){var a=document.createEvent("Event");a.initEvent("foo",!0,!0);a.preventDefault();return a.defaultPrevented}()){var a=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(a.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}var b=/Trident/.test(navigator.userAgent);if(!window.CustomEvent||b&&"function"!==typeof window.CustomEvent)window.CustomEvent=function(a,b){b=b||{};var c=document.createEvent("CustomEvent");
c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c},window.CustomEvent.prototype=window.Event.prototype;if(!window.Event||b&&"function"!==typeof window.Event){var c=window.Event;window.Event=function(a,b){b=b||{};var c=document.createEvent("Event");c.initEvent(a,!!b.bubbles,!!b.cancelable);return c};if(c)for(var d in c)window.Event[d]=c[d];window.Event.prototype=c.prototype}if(!window.MouseEvent||b&&"function"!==typeof window.MouseEvent){b=window.MouseEvent;window.MouseEvent=function(a,
b){b=b||{};var c=document.createEvent("MouseEvent");c.initMouseEvent(a,!!b.bubbles,!!b.cancelable,b.view||window,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget);return c};if(b)for(d in b)window.MouseEvent[d]=b[d];window.MouseEvent.prototype=b.prototype}Array.from||(Array.from=function(a){return[].slice.call(a)});Object.assign||(Object.assign=function(a,b){for(var c=[].slice.call(arguments,1),d=0,e;d<c.length;d++)if(e=c[d])for(var f=
a,n=e,p=Object.getOwnPropertyNames(n),G=0;G<p.length;G++)e=p[G],f[e]=n[e];return a})})(window.WebComponents);(function(){function a(){}function b(a,b){if(!a.childNodes.length)return[];switch(a.nodeType){case Node.DOCUMENT_NODE:return R.call(a,b);case Node.DOCUMENT_FRAGMENT_NODE:return yb.call(a,b);default:return w.call(a,b)}}var c="undefined"===typeof HTMLTemplateElement,d=!(document.createDocumentFragment().cloneNode()instanceof DocumentFragment),e=!1;/Trident/.test(navigator.userAgent)&&function(){function a(a,b){if(a instanceof DocumentFragment)for(var d;d=a.firstChild;)c.call(this,d,b);else c.call(this,
a,b);return a}e=!0;var b=Node.prototype.cloneNode;Node.prototype.cloneNode=function(a){a=b.call(this,a);this instanceof DocumentFragment&&(a.__proto__=DocumentFragment.prototype);return a};DocumentFragment.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll;DocumentFragment.prototype.querySelector=HTMLElement.prototype.querySelector;Object.defineProperties(DocumentFragment.prototype,{nodeType:{get:function(){return Node.DOCUMENT_FRAGMENT_NODE},configurable:!0},localName:{get:function(){},
configurable:!0},nodeName:{get:function(){return"#document-fragment"},configurable:!0}});var c=Node.prototype.insertBefore;Node.prototype.insertBefore=a;var d=Node.prototype.appendChild;Node.prototype.appendChild=function(b){b instanceof DocumentFragment?a.call(this,b,null):d.call(this,b);return b};var f=Node.prototype.removeChild,g=Node.prototype.replaceChild;Node.prototype.replaceChild=function(b,c){b instanceof DocumentFragment?(a.call(this,b,c),f.call(this,c)):g.call(this,b,c);return c};Document.prototype.createDocumentFragment=
function(){var a=this.createElement("df");a.__proto__=DocumentFragment.prototype;return a};var h=Document.prototype.importNode;Document.prototype.importNode=function(a,b){b=h.call(this,a,b||!1);a instanceof DocumentFragment&&(b.__proto__=DocumentFragment.prototype);return b}}();var f=Node.prototype.cloneNode,g=Document.prototype.createElement,h=Document.prototype.importNode,k=Node.prototype.removeChild,l=Node.prototype.appendChild,n=Node.prototype.replaceChild,p=DOMParser.prototype.parseFromString,
G=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML")||{get:function(){return this.innerHTML},set:function(a){this.innerHTML=a}},u=Object.getOwnPropertyDescriptor(window.Node.prototype,"childNodes")||{get:function(){return this.childNodes}},w=Element.prototype.querySelectorAll,R=Document.prototype.querySelectorAll,yb=DocumentFragment.prototype.querySelectorAll,zb=function(){if(!c){var a=document.createElement("template"),b=document.createElement("template");b.content.appendChild(document.createElement("div"));
a.content.appendChild(b);a=a.cloneNode(!0);return 0===a.content.childNodes.length||0===a.content.firstChild.content.childNodes.length||d}}();if(c){var U=document.implementation.createHTMLDocument("template"),Ma=!0,q=document.createElement("style");q.textContent="template{display:none;}";var za=document.head;za.insertBefore(q,za.firstElementChild);a.prototype=Object.create(HTMLElement.prototype);var da=!document.createElement("div").hasOwnProperty("innerHTML");a.R=function(b){if(!b.content&&b.namespaceURI===
document.documentElement.namespaceURI){b.content=U.createDocumentFragment();for(var c;c=b.firstChild;)l.call(b.content,c);if(da)b.__proto__=a.prototype;else if(b.cloneNode=function(b){return a.b(this,b)},Ma)try{m(b),y(b)}catch(Hh){Ma=!1}a.a(b.content)}};var ba={option:["select"],thead:["table"],col:["colgroup","table"],tr:["tbody","table"],th:["tr","tbody","table"],td:["tr","tbody","table"]},m=function(b){Object.defineProperty(b,"innerHTML",{get:function(){return ea(this)},set:function(b){var c=ba[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(b)||
["",""])[1].toLowerCase()];if(c)for(var d=0;d<c.length;d++)b="<"+c[d]+">"+b+"</"+c[d]+">";U.body.innerHTML=b;for(a.a(U);this.content.firstChild;)k.call(this.content,this.content.firstChild);b=U.body;if(c)for(d=0;d<c.length;d++)b=b.lastChild;for(;b.firstChild;)l.call(this.content,b.firstChild)},configurable:!0})},y=function(a){Object.defineProperty(a,"outerHTML",{get:function(){return"<template>"+this.innerHTML+"</template>"},set:function(a){if(this.parentNode){U.body.innerHTML=a;for(a=this.ownerDocument.createDocumentFragment();U.body.firstChild;)l.call(a,
U.body.firstChild);n.call(this.parentNode,a,this)}else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");},configurable:!0})};m(a.prototype);y(a.prototype);a.a=function(c){c=b(c,"template");for(var d=0,e=c.length,f;d<e&&(f=c[d]);d++)a.R(f)};document.addEventListener("DOMContentLoaded",function(){a.a(document)});Document.prototype.createElement=function(){var b=g.apply(this,arguments);"template"===b.localName&&a.R(b);return b};DOMParser.prototype.parseFromString=
function(){var b=p.apply(this,arguments);a.a(b);return b};Object.defineProperty(HTMLElement.prototype,"innerHTML",{get:function(){return ea(this)},set:function(b){G.set.call(this,b);a.a(this)},configurable:!0,enumerable:!0});var ca=/[&\u00A0"]/g,Ab=/[&\u00A0<>]/g,Na=function(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}};q=function(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b};var Aa=q("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
Oa=q("style script xmp iframe noembed noframes plaintext noscript".split(" ")),ea=function(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):u.get.call(a),e=0,f=d.length,g;e<f&&(g=d[e]);e++){a:{var h=g;var k=a;var l=b;switch(h.nodeType){case Node.ELEMENT_NODE:for(var n=h.localName,m="<"+n,p=h.attributes,w=0;k=p[w];w++)m+=" "+k.name+'="'+k.value.replace(ca,Na)+'"';m+=">";h=Aa[n]?m:m+ea(h,l)+"</"+n+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&Oa[k.localName]?h:h.replace(Ab,Na);break a;
case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),Error("not implemented");}}c+=h}return c}}if(c||zb){a.b=function(a,b){var c=f.call(a,!1);this.R&&this.R(c);b&&(l.call(c.content,f.call(a.content,!0)),Pa(c.content,a.content));return c};var Pa=function(c,d){if(d.querySelectorAll&&(d=b(d,"template"),0!==d.length)){c=b(c,"template");for(var e=0,f=c.length,g,h;e<f;e++)h=d[e],g=c[e],a&&a.R&&a.R(h),n.call(g.parentNode,tf.call(h,!0),g)}},tf=Node.prototype.cloneNode=
function(b){if(!e&&d&&this instanceof DocumentFragment)if(b)var c=uf.call(this.ownerDocument,this,!0);else return this.ownerDocument.createDocumentFragment();else this.nodeType===Node.ELEMENT_NODE&&"template"===this.localName&&this.namespaceURI==document.documentElement.namespaceURI?c=a.b(this,b):c=f.call(this,b);b&&Pa(c,this);return c},uf=Document.prototype.importNode=function(c,d){d=d||!1;if("template"===c.localName)return a.b(c,d);var e=h.call(this,c,d);if(d){Pa(e,c);c=b(e,'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');
for(var f,k=0;k<c.length;k++){f=c[k];d=g.call(document,"script");d.textContent=f.textContent;for(var l=f.attributes,m=0,p;m<l.length;m++)p=l[m],d.setAttribute(p.name,p.value);n.call(f.parentNode,d,f)}}return e}}c&&(window.HTMLTemplateElement=a)})();var Fa=setTimeout;function Ga(){}function Ha(a,b){return function(){a.apply(b,arguments)}}function t(a){if(!(this instanceof t))throw new TypeError("Promises must be constructed via new");if("function"!==typeof a)throw new TypeError("not a function");this.J=0;this.wa=!1;this.A=void 0;this.U=[];Ia(a,this)}
function Ja(a,b){for(;3===a.J;)a=a.A;0===a.J?a.U.push(b):(a.wa=!0,Ka(function(){var c=1===a.J?b.Wa:b.Xa;if(null===c)(1===a.J?La:Qa)(b.ra,a.A);else{try{var d=c(a.A)}catch(e){Qa(b.ra,e);return}La(b.ra,d)}}))}function La(a,b){try{if(b===a)throw new TypeError("A promise cannot be resolved with itself.");if(b&&("object"===typeof b||"function"===typeof b)){var c=b.then;if(b instanceof t){a.J=3;a.A=b;Ra(a);return}if("function"===typeof c){Ia(Ha(c,b),a);return}}a.J=1;a.A=b;Ra(a)}catch(d){Qa(a,d)}}
function Qa(a,b){a.J=2;a.A=b;Ra(a)}function Ra(a){2===a.J&&0===a.U.length&&Ka(function(){a.wa||"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",a.A)});for(var b=0,c=a.U.length;b<c;b++)Ja(a,a.U[b]);a.U=null}function Sa(a,b,c){this.Wa="function"===typeof a?a:null;this.Xa="function"===typeof b?b:null;this.ra=c}function Ia(a,b){var c=!1;try{a(function(a){c||(c=!0,La(b,a))},function(a){c||(c=!0,Qa(b,a))})}catch(d){c||(c=!0,Qa(b,d))}}
t.prototype["catch"]=function(a){return this.then(null,a)};t.prototype.then=function(a,b){var c=new this.constructor(Ga);Ja(this,new Sa(a,b,c));return c};t.prototype["finally"]=function(a){var b=this.constructor;return this.then(function(c){return b.resolve(a()).then(function(){return c})},function(c){return b.resolve(a()).then(function(){return b.reject(c)})})};
function Ta(a){return new t(function(b,c){function d(a,g){try{if(g&&("object"===typeof g||"function"===typeof g)){var h=g.then;if("function"===typeof h){h.call(g,function(b){d(a,b)},c);return}}e[a]=g;0===--f&&b(e)}catch(n){c(n)}}if(!a||"undefined"===typeof a.length)throw new TypeError("Promise.all accepts an array");var e=Array.prototype.slice.call(a);if(0===e.length)return b([]);for(var f=e.length,g=0;g<e.length;g++)d(g,e[g])})}
function Ua(a){return a&&"object"===typeof a&&a.constructor===t?a:new t(function(b){b(a)})}function Va(a){return new t(function(b,c){c(a)})}function Wa(a){return new t(function(b,c){for(var d=0,e=a.length;d<e;d++)a[d].then(b,c)})}var Ka="function"===typeof setImmediate&&function(a){setImmediate(a)}||function(a){Fa(a,0)};/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
if(!window.Promise){window.Promise=t;t.prototype.then=t.prototype.then;t.all=Ta;t.race=Wa;t.resolve=Ua;t.reject=Va;var Xa=document.createTextNode(""),Ya=[];(new MutationObserver(function(){for(var a=Ya.length,b=0;b<a;b++)Ya[b]();Ya.splice(0,a)})).observe(Xa,{characterData:!0});Ka=function(a){Ya.push(a);Xa.textContent=0<Xa.textContent.length?"":"a"}};/*
 Copyright (C) 2015 by WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function(a,b){if(!(b in a)){var c=typeof global===typeof c?window:global,d=0,e=""+Math.random(),f="__\u0001symbol@@"+e,g=a.getOwnPropertyNames,h=a.getOwnPropertyDescriptor,k=a.create,l=a.keys,n=a.freeze||a,p=a.defineProperty,G=a.defineProperties,u=h(a,"getOwnPropertyNames"),w=a.prototype,R=w.hasOwnProperty,yb=w.propertyIsEnumerable,zb=w.toString,U=function(a,b,c){R.call(a,f)||p(a,f,{enumerable:!1,configurable:!1,writable:!1,value:{}});a[f]["@@"+b]=c},Ma=function(a,b){var c=k(a);g(b).forEach(function(a){ba.call(b,
a)&&Aa(c,a,b[a])});return c},q=function(){},za=function(a){return a!=f&&!R.call(ca,a)},da=function(a){return a!=f&&R.call(ca,a)},ba=function(a){var b=""+a;return da(b)?R.call(this,b)&&this[f]["@@"+b]:yb.call(this,a)},m=function(b){p(w,b,{enumerable:!1,configurable:!0,get:q,set:function(a){ea(this,b,{enumerable:!1,configurable:!0,writable:!0,value:a});U(this,b,!0)}});return n(ca[b]=p(a(b),"constructor",Ab))},y=function(a){if(this&&this!==c)throw new TypeError("Symbol is not a constructor");return m("__\u0001symbol:".concat(a||
"",e,++d))},ca=k(null),Ab={value:y},Na=function(a){return ca[a]},Aa=function(a,b,c){var d=""+b;if(da(d)){b=ea;if(c.enumerable){var e=k(c);e.enumerable=!1}else e=c;b(a,d,e);U(a,d,!!c.enumerable)}else p(a,b,c);return a},Oa=function(a){return g(a).filter(da).map(Na)};u.value=Aa;p(a,"defineProperty",u);u.value=Oa;p(a,b,u);u.value=function(a){return g(a).filter(za)};p(a,"getOwnPropertyNames",u);u.value=function(a,b){var c=Oa(b);c.length?l(b).concat(c).forEach(function(c){ba.call(b,c)&&Aa(a,c,b[c])}):G(a,
b);return a};p(a,"defineProperties",u);u.value=ba;p(w,"propertyIsEnumerable",u);u.value=y;p(c,"Symbol",u);u.value=function(a){a="__\u0001symbol:".concat("__\u0001symbol:",a,e);return a in w?ca[a]:m(a)};p(y,"for",u);u.value=function(a){if(za(a))throw new TypeError(a+" is not a symbol");return R.call(ca,a)?a.slice(20,-e.length):void 0};p(y,"keyFor",u);u.value=function(a,b){var c=h(a,b);c&&da(b)&&(c.enumerable=ba.call(a,b));return c};p(a,"getOwnPropertyDescriptor",u);u.value=function(a,b){return 1===
arguments.length?k(a):Ma(a,b)};p(a,"create",u);u.value=function(){var a=zb.call(this);return"[object String]"===a&&da(this)?"[object Symbol]":a};p(w,"toString",u);try{var ea=k(p({},"__\u0001symbol:",{get:function(){return p(this,"__\u0001symbol:",{value:!1})["__\u0001symbol:"]}}))["__\u0001symbol:"]||p}catch(Pa){ea=function(a,b,c){var d=h(w,b);delete w[b];p(a,b,c);p(w,b,d)}}}})(Object,"getOwnPropertySymbols");
(function(a){var b=a.defineProperty,c=a.prototype,d=c.toString,e;"iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(f){if(!(f in Symbol))switch(b(Symbol,f,{value:Symbol(f)}),f){case "toStringTag":e=a.getOwnPropertyDescriptor(c,"toString"),e.value=function(){var a=d.call(this),b=this[Symbol.toStringTag];return"undefined"===typeof b?a:"[object "+b+"]"},b(c,"toString",e)}})})(Object,Symbol);
(function(a,b,c){function d(){return this}b[a]||(b[a]=function(){var b=0,c=this,g={next:function(){var a=c.length<=b;return a?{done:a}:{done:a,value:c[b++]}}};g[a]=d;return g});c[a]||(c[a]=function(){var b=String.fromCodePoint,c=this,g=0,h=c.length,k={next:function(){var a=h<=g,d=a?"":b(c.codePointAt(g));g+=d.length;return a?{done:a}:{done:a,value:d}}};k[a]=d;return k})})(Symbol.iterator,Array.prototype,String.prototype);/*

Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Object.keys=function(a){return Object.getOwnPropertyNames(a).filter(function(b){return(b=Object.getOwnPropertyDescriptor(a,b))&&b.enumerable})};var Za=window.Symbol.iterator;String.prototype[Za]&&String.prototype.codePointAt||(String.prototype[Za]=function $a(){var b,c=this;return Ea($a,function(d){1==d.a&&(b=0);if(3!=d.a)return b<c.length?d=wa(d,c[b]):(d.a=0,d=void 0),d;b++;d.a=2})});
Set.prototype[Za]||(Set.prototype[Za]=function ab(){var b,c=this,d;return Ea(ab,function(e){1==e.a&&(b=[],c.forEach(function(c){b.push(c)}),d=0);if(3!=e.a)return d<b.length?e=wa(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2})});Map.prototype[Za]||(Map.prototype[Za]=function bb(){var b,c=this,d;return Ea(bb,function(e){1==e.a&&(b=[],c.forEach(function(c,d){b.push([d,c])}),d=0);if(3!=e.a)return d<b.length?e=wa(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2})});/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.WebComponents=window.WebComponents||{flags:{}};var cb=document.querySelector('script[src*="webcomponents-bundle"]'),db=/wc-(.+)/,v={};if(!v.noOpts){location.search.slice(1).split("&").forEach(function(a){a=a.split("=");var b;a[0]&&(b=a[0].match(db))&&(v[b[1]]=a[1]||!0)});if(cb)for(var eb=0,fb=void 0;fb=cb.attributes[eb];eb++)"src"!==fb.name&&(v[fb.name]=fb.value||!0);if(v.log&&v.log.split){var gb=v.log.split(",");v.log={};gb.forEach(function(a){v.log[a]=!0})}else v.log={}}
window.WebComponents.flags=v;var hb=v.shadydom;hb&&(window.ShadyDOM=window.ShadyDOM||{},window.ShadyDOM.force=hb);var ib=v.register||v.ce;ib&&window.customElements&&(window.customElements.forcePolyfill=ib);/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function jb(){this.za=this.root=null;this.ea=!1;this.N=this.$=this.oa=this.assignedSlot=this.assignedNodes=this.S=null;this.childNodes=this.nextSibling=this.previousSibling=this.lastChild=this.firstChild=this.parentNode=this.V=void 0;this.Ea=this.ua=!1;this.Z={}}jb.prototype.toJSON=function(){return{}};function x(a){a.ma||(a.ma=new jb);return a.ma}function z(a){return a&&a.ma};var A=window.ShadyDOM||{};A.Sa=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var kb=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");A.K=!!(kb&&kb.configurable&&kb.get);A.qa=A.force||!A.Sa;var lb=navigator.userAgent.match("Trident"),mb=navigator.userAgent.match("Edge");void 0===A.Ba&&(A.Ba=A.K&&(lb||mb));function nb(a){return(a=z(a))&&void 0!==a.firstChild}function B(a){return"ShadyRoot"===a.Ja}function ob(a){a=a.getRootNode();if(B(a))return a}
var pb=Element.prototype,qb=pb.matches||pb.matchesSelector||pb.mozMatchesSelector||pb.msMatchesSelector||pb.oMatchesSelector||pb.webkitMatchesSelector;function rb(a,b){if(a&&b)for(var c=Object.getOwnPropertyNames(b),d=0,e=void 0;d<c.length&&(e=c[d]);d++){var f=e,g=a,h=Object.getOwnPropertyDescriptor(b,f);h&&Object.defineProperty(g,f,h)}}function sb(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];for(d=0;d<c.length;d++)rb(a,c[d]);return a}
function tb(a,b){for(var c in b)a[c]=b[c]}var ub=document.createTextNode(""),vb=0,wb=[];(new MutationObserver(function(){for(;wb.length;)try{wb.shift()()}catch(a){throw ub.textContent=vb++,a;}})).observe(ub,{characterData:!0});function xb(a){wb.push(a);ub.textContent=vb++}var Bb=!!document.contains;function Cb(a,b){for(;b;){if(b==a)return!0;b=b.parentNode}return!1}
function Db(a){for(var b=a.length-1;0<=b;b--){var c=a[b],d=c.getAttribute("id")||c.getAttribute("name");d&&"length"!==d&&isNaN(d)&&(a[d]=c)}a.item=function(b){return a[b]};a.namedItem=function(b){if("length"!==b&&isNaN(b)&&a[b])return a[b];for(var c=ma(a),d=c.next();!d.done;d=c.next())if(d=d.value,(d.getAttribute("id")||d.getAttribute("name"))==b)return d;return null};return a};var Eb=[],Fb;function Gb(a){Fb||(Fb=!0,xb(Hb));Eb.push(a)}function Hb(){Fb=!1;for(var a=!!Eb.length;Eb.length;)Eb.shift()();return a}Hb.list=Eb;function Ib(){this.a=!1;this.addedNodes=[];this.removedNodes=[];this.ca=new Set}function Jb(a){a.a||(a.a=!0,xb(function(){a.flush()}))}Ib.prototype.flush=function(){if(this.a){this.a=!1;var a=this.takeRecords();a.length&&this.ca.forEach(function(b){b(a)})}};Ib.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return[]};
function Kb(a,b){var c=x(a);c.S||(c.S=new Ib);c.S.ca.add(b);var d=c.S;return{Ia:b,P:d,Ka:a,takeRecords:function(){return d.takeRecords()}}}function Lb(a){var b=a&&a.P;b&&(b.ca.delete(a.Ia),b.ca.size||(x(a.Ka).S=null))}
function Mb(a,b){var c=b.getRootNode();return a.map(function(a){var b=c===a.target.getRootNode();if(b&&a.addedNodes){if(b=Array.from(a.addedNodes).filter(function(a){return c===a.getRootNode()}),b.length)return a=Object.create(a),Object.defineProperty(a,"addedNodes",{value:b,configurable:!0}),a}else if(b)return a}).filter(function(a){return a})};var Nb=Element.prototype.insertBefore,Ob=Element.prototype.replaceChild,Pb=Element.prototype.removeChild,Qb=Element.prototype.setAttribute,Rb=Element.prototype.removeAttribute,Sb=Element.prototype.cloneNode,Tb=Document.prototype.importNode,Ub=Element.prototype.addEventListener,Vb=Element.prototype.removeEventListener,Wb=Window.prototype.addEventListener,Xb=Window.prototype.removeEventListener,Yb=Element.prototype.dispatchEvent,Zb=Node.prototype.contains||HTMLElement.prototype.contains,$b=Document.prototype.getElementById,
ac=Element.prototype.querySelector,bc=DocumentFragment.prototype.querySelector,cc=Document.prototype.querySelector,dc=Element.prototype.querySelectorAll,ec=DocumentFragment.prototype.querySelectorAll,fc=Document.prototype.querySelectorAll,C={};C.appendChild=Element.prototype.appendChild;C.insertBefore=Nb;C.replaceChild=Ob;C.removeChild=Pb;C.setAttribute=Qb;C.removeAttribute=Rb;C.cloneNode=Sb;C.importNode=Tb;C.addEventListener=Ub;C.removeEventListener=Vb;C.gb=Wb;C.hb=Xb;C.dispatchEvent=Yb;
C.contains=Zb;C.getElementById=$b;C.pb=ac;C.tb=bc;C.nb=cc;C.querySelector=function(a){switch(this.nodeType){case Node.ELEMENT_NODE:return ac.call(this,a);case Node.DOCUMENT_NODE:return cc.call(this,a);default:return bc.call(this,a)}};C.qb=dc;C.ub=ec;C.ob=fc;C.querySelectorAll=function(a){switch(this.nodeType){case Node.ELEMENT_NODE:return dc.call(this,a);case Node.DOCUMENT_NODE:return fc.call(this,a);default:return ec.call(this,a)}};var gc=/[&\u00A0"]/g,hc=/[&\u00A0<>]/g;function ic(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}}function jc(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var kc=jc("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),lc=jc("style script xmp iframe noembed noframes plaintext noscript".split(" "));
function mc(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,g=void 0;e<f&&(g=d[e]);e++){a:{var h=g;var k=a,l=b;switch(h.nodeType){case Node.ELEMENT_NODE:k=h.localName;for(var n="<"+k,p=h.attributes,G=0,u;u=p[G];G++)n+=" "+u.name+'="'+u.value.replace(gc,ic)+'"';n+=">";h=kc[k]?n:n+mc(h,l)+"</"+k+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&lc[k.localName]?h:h.replace(hc,ic);break a;case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),
Error("not implemented");}}c+=h}return c};var D=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),E=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1);function nc(a){var b=[];D.currentNode=a;for(a=D.firstChild();a;)b.push(a),a=D.nextSibling();return b}
var F={parentNode:function(a){D.currentNode=a;return D.parentNode()},firstChild:function(a){D.currentNode=a;return D.firstChild()},lastChild:function(a){D.currentNode=a;return D.lastChild()},previousSibling:function(a){D.currentNode=a;return D.previousSibling()},nextSibling:function(a){D.currentNode=a;return D.nextSibling()}};F.childNodes=nc;F.parentElement=function(a){E.currentNode=a;return E.parentNode()};F.firstElementChild=function(a){E.currentNode=a;return E.firstChild()};
F.lastElementChild=function(a){E.currentNode=a;return E.lastChild()};F.previousElementSibling=function(a){E.currentNode=a;return E.previousSibling()};F.nextElementSibling=function(a){E.currentNode=a;return E.nextSibling()};F.children=function(a){var b=[];E.currentNode=a;for(a=E.firstChild();a;)b.push(a),a=E.nextSibling();return Db(b)};F.innerHTML=function(a){return mc(a,function(a){return nc(a)})};
F.textContent=function(a){switch(a.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:a=document.createTreeWalker(a,NodeFilter.SHOW_TEXT,null,!1);for(var b="",c;c=a.nextNode();)b+=c.nodeValue;return b;default:return a.nodeValue}};var oc=A.K,pc=[Node.prototype,Element.prototype,HTMLElement.prototype];function H(a){var b;a:{for(b=0;b<pc.length;b++){var c=pc[b];if(c.hasOwnProperty(a)){b=c;break a}}b=void 0}if(!b)throw Error("Could not find descriptor for "+a);return Object.getOwnPropertyDescriptor(b,a)}
var I=oc?{parentNode:H("parentNode"),firstChild:H("firstChild"),lastChild:H("lastChild"),previousSibling:H("previousSibling"),nextSibling:H("nextSibling"),childNodes:H("childNodes"),parentElement:H("parentElement"),previousElementSibling:H("previousElementSibling"),nextElementSibling:H("nextElementSibling"),innerHTML:H("innerHTML"),textContent:H("textContent"),firstElementChild:H("firstElementChild"),lastElementChild:H("lastElementChild"),children:H("children")}:{},qc=oc?{firstElementChild:Object.getOwnPropertyDescriptor(DocumentFragment.prototype,
"firstElementChild"),lastElementChild:Object.getOwnPropertyDescriptor(DocumentFragment.prototype,"lastElementChild"),children:Object.getOwnPropertyDescriptor(DocumentFragment.prototype,"children")}:{},rc=oc?{firstElementChild:Object.getOwnPropertyDescriptor(Document.prototype,"firstElementChild"),lastElementChild:Object.getOwnPropertyDescriptor(Document.prototype,"lastElementChild"),children:Object.getOwnPropertyDescriptor(Document.prototype,"children")}:{},sc={ya:I,sb:qc,mb:rc,parentNode:function(a){return I.parentNode.get.call(a)},
firstChild:function(a){return I.firstChild.get.call(a)},lastChild:function(a){return I.lastChild.get.call(a)},previousSibling:function(a){return I.previousSibling.get.call(a)},nextSibling:function(a){return I.nextSibling.get.call(a)},childNodes:function(a){return Array.prototype.slice.call(I.childNodes.get.call(a))},parentElement:function(a){return I.parentElement.get.call(a)},previousElementSibling:function(a){return I.previousElementSibling.get.call(a)},nextElementSibling:function(a){return I.nextElementSibling.get.call(a)},
innerHTML:function(a){return I.innerHTML.get.call(a)},textContent:function(a){return I.textContent.get.call(a)},children:function(a){switch(a.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:return qc.children.get.call(a);case Node.DOCUMENT_NODE:return rc.children.get.call(a);default:return I.children.get.call(a)}},firstElementChild:function(a){switch(a.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:return qc.firstElementChild.get.call(a);case Node.DOCUMENT_NODE:return rc.firstElementChild.get.call(a);default:return I.firstElementChild.get.call(a)}},
lastElementChild:function(a){switch(a.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:return qc.lastElementChild.get.call(a);case Node.DOCUMENT_NODE:return rc.lastElementChild.get.call(a);default:return I.lastElementChild.get.call(a)}}};var J=A.Ba?sc:F;function tc(a){for(;a.firstChild;)a.removeChild(a.firstChild)}
var uc=A.K,vc=document.implementation.createHTMLDocument("inert"),wc=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected"),xc=wc&&wc.get,yc=Object.getOwnPropertyDescriptor(Document.prototype,"activeElement"),zc={parentElement:{get:function(){var a=z(this);(a=a&&a.parentNode)&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:J.parentElement(this)},configurable:!0},parentNode:{get:function(){var a=z(this);a=a&&a.parentNode;return void 0!==a?a:J.parentNode(this)},configurable:!0},
nextSibling:{get:function(){var a=z(this);a=a&&a.nextSibling;return void 0!==a?a:J.nextSibling(this)},configurable:!0},previousSibling:{get:function(){var a=z(this);a=a&&a.previousSibling;return void 0!==a?a:J.previousSibling(this)},configurable:!0},nextElementSibling:{get:function(){var a=z(this);if(a&&void 0!==a.nextSibling){for(a=this.nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return J.nextElementSibling(this)},configurable:!0},previousElementSibling:{get:function(){var a=
z(this);if(a&&void 0!==a.previousSibling){for(a=this.previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return J.previousElementSibling(this)},configurable:!0}},Ac={className:{get:function(){return this.getAttribute("class")||""},set:function(a){this.setAttribute("class",a)},configurable:!0}},Bc={childNodes:{get:function(){if(nb(this)){var a=z(this);if(!a.childNodes){a.childNodes=[];for(var b=this.firstChild;b;b=b.nextSibling)a.childNodes.push(b)}var c=a.childNodes}else c=
J.childNodes(this);c.item=function(a){return c[a]};return c},configurable:!0},childElementCount:{get:function(){return this.children.length},configurable:!0},firstChild:{get:function(){var a=z(this);a=a&&a.firstChild;return void 0!==a?a:J.firstChild(this)},configurable:!0},lastChild:{get:function(){var a=z(this);a=a&&a.lastChild;return void 0!==a?a:J.lastChild(this)},configurable:!0},textContent:{get:function(){if(nb(this)){for(var a=[],b=0,c=this.childNodes,d;d=c[b];b++)d.nodeType!==Node.COMMENT_NODE&&
a.push(d.textContent);return a.join("")}return J.textContent(this)},set:function(a){if("undefined"===typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:if(!nb(this)&&uc){var b=this.firstChild;(b!=this.lastChild||b&&b.nodeType!=Node.TEXT_NODE)&&tc(this);sc.ya.textContent.set.call(this,a)}else tc(this),(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.appendChild(document.createTextNode(a));break;default:this.nodeValue=a}},configurable:!0},firstElementChild:{get:function(){var a=
z(this);if(a&&void 0!==a.firstChild){for(a=this.firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return J.firstElementChild(this)},configurable:!0},lastElementChild:{get:function(){var a=z(this);if(a&&void 0!==a.lastChild){for(a=this.lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return J.lastElementChild(this)},configurable:!0},children:{get:function(){return nb(this)?Db(Array.prototype.filter.call(this.childNodes,function(a){return a.nodeType===Node.ELEMENT_NODE})):
J.children(this)},configurable:!0},innerHTML:{get:function(){return nb(this)?mc("template"===this.localName?this.content:this):J.innerHTML(this)},set:function(a){var b="template"===this.localName?this.content:this;tc(b);var c=this.localName||"div";c=this.namespaceURI&&this.namespaceURI!==vc.namespaceURI?vc.createElementNS(this.namespaceURI,c):vc.createElement(c);uc?sc.ya.innerHTML.set.call(c,a):c.innerHTML=a;for(a="template"===this.localName?c.content:c;a.firstChild;)b.appendChild(a.firstChild)},
configurable:!0}},Cc={shadowRoot:{get:function(){var a=z(this);return a&&a.za||null},configurable:!0}},Dc={activeElement:{get:function(){var a=yc&&yc.get?yc.get.call(document):A.K?void 0:document.activeElement;if(a&&a.nodeType){var b=!!B(this);if(this===document||b&&this.host!==a&&C.contains.call(this.host,a)){for(b=ob(a);b&&b!==this;)a=b.host,b=ob(a);a=this===document?b?null:a:b===this?a:null}else a=null}else a=null;return a},set:function(){},configurable:!0}};
function K(a,b,c){for(var d in b){var e=Object.getOwnPropertyDescriptor(a,d);e&&e.configurable||!e&&c?Object.defineProperty(a,d,b[d]):c&&console.warn("Could not define",d,"on",a)}}function Ec(a){K(a,zc);K(a,Ac);K(a,Bc);K(a,Dc)}
function Fc(){var a=Gc.prototype;a.__proto__=DocumentFragment.prototype;K(a,zc,!0);K(a,Bc,!0);K(a,Dc,!0);Object.defineProperties(a,{nodeType:{value:Node.DOCUMENT_FRAGMENT_NODE,configurable:!0},nodeName:{value:"#document-fragment",configurable:!0},nodeValue:{value:null,configurable:!0}});["localName","namespaceURI","prefix"].forEach(function(b){Object.defineProperty(a,b,{value:void 0,configurable:!0})});["ownerDocument","baseURI","isConnected"].forEach(function(b){Object.defineProperty(a,b,{get:function(){return this.host[b]},
configurable:!0})})}var Hc=A.K?function(){}:function(a){var b=x(a);b.ua||(b.ua=!0,K(a,zc,!0),K(a,Ac,!0))},Ic=A.K?function(){}:function(a){x(a).Ea||(K(a,Bc,!0),K(a,Cc,!0))};var Jc=J.childNodes;function Kc(a,b,c){Ic(b);var d=x(b);void 0!==d.firstChild&&(d.childNodes=null);if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){d=a.childNodes;for(var e=0;e<d.length;e++)Lc(d[e],b,c);a=x(a);b=void 0!==a.firstChild?null:void 0;a.firstChild=a.lastChild=b;a.childNodes=b}else Lc(a,b,c)}
function Lc(a,b,c){Hc(a);c=c||null;var d=x(a),e=x(b),f=c?x(c):null;d.previousSibling=c?f.previousSibling:b.lastChild;if(f=z(d.previousSibling))f.nextSibling=a;if(f=z(d.nextSibling=c))f.previousSibling=a;d.parentNode=b;c?c===e.firstChild&&(e.firstChild=a):(e.lastChild=a,e.firstChild||(e.firstChild=a));e.childNodes=null}
function Mc(a,b){var c=x(a);b=x(b);a===b.firstChild&&(b.firstChild=c.nextSibling);a===b.lastChild&&(b.lastChild=c.previousSibling);a=c.previousSibling;var d=c.nextSibling;a&&(x(a).nextSibling=d);d&&(x(d).previousSibling=a);c.parentNode=c.previousSibling=c.nextSibling=void 0;void 0!==b.childNodes&&(b.childNodes=null)}
function Nc(a){var b=x(a);if(void 0===b.firstChild){b.childNodes=null;var c=Jc(a);b.firstChild=c[0]||null;b.lastChild=c[c.length-1]||null;Ic(a);for(b=0;b<c.length;b++){var d=c[b],e=x(d);e.parentNode=a;e.nextSibling=c[b+1]||null;e.previousSibling=c[b-1]||null;Hc(d)}}};var Oc=J.parentNode;
function Pc(a,b,c){if(b===a)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(c){var d=z(c);d=d&&d.parentNode;if(void 0!==d&&d!==a||void 0===d&&Oc(c)!==a)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(c===b)return b;var e=[],f=Qc,g=ob(a),h=g?g.host.localName:"";if(b.parentNode){var k=Rc(b);Sc(b.parentNode,b,!!g||!(b.getRootNode()instanceof ShadowRoot));
f=function(a,b){Tc()&&(Uc(a,k),Qc(a,b))}}d=!0;var l=!Vc(b,h);!g||b.__noInsertionPoint&&!l||Wc(b,function(a){"slot"===a.localName&&e.push(a);l&&f(a,h)});e.length&&Xc(g,e);("slot"===a.localName||e.length)&&g&&Yc(g);nb(a)&&(Kc(b,a,c),g=z(a),Zc(a)?(Yc(g.root),d=!1):g.root&&(d=!1));d?(d=B(a)?a.host:a,c?(c=$c(c),C.insertBefore.call(d,b,c)):C.appendChild.call(d,b)):b.ownerDocument!==a.ownerDocument&&a.ownerDocument.adoptNode(b);ad(a,b);return b}
function Sc(a,b,c){c=void 0===c?!1:c;if(b.parentNode!==a)throw Error("The node to be removed is not a child of this node: "+b);var d=ob(b),e=z(a);if(nb(a)&&(Mc(b,a),Zc(a))){Yc(e.root);var f=!0}if(Tc()&&!c&&d){var g=Rc(b);Wc(b,function(a){Uc(a,g)})}bd(b);if(d){var h=a&&"slot"===a.localName;h&&(f=!0);((c=cd(d,b))||h)&&Yc(d)}f||(f=B(a)?a.host:a,(!e.root&&"slot"!==b.localName||f===Oc(b))&&C.removeChild.call(f,b));ad(a,null,b);return b}
function bd(a){var b=z(a);if(b&&void 0!==b.V){b=a.childNodes;for(var c=0,d=b.length,e=void 0;c<d&&(e=b[c]);c++)bd(e)}if(a=z(a))a.V=void 0}function $c(a){var b=a;a&&"slot"===a.localName&&(b=(b=(b=z(a))&&b.N)&&b.length?b[0]:$c(a.nextSibling));return b}function Zc(a){return(a=(a=z(a))&&a.root)&&dd(a)}
function ed(a,b){if("slot"===b)a=a.parentNode,Zc(a)&&Yc(z(a).root);else if("slot"===a.localName&&"name"===b&&(b=ob(a))){if(b.o){fd(b);var c=a.Ha,d=gd(a);if(d!==c){c=b.w[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.w[d]||(b.w[d]=[]);c.push(a);1<c.length&&(b.w[d]=hd(c))}}Yc(b)}}function ad(a,b,c){if(a=(a=z(a))&&a.S)b&&a.addedNodes.push(b),c&&a.removedNodes.push(c),Jb(a)}
function id(a){if(a&&a.nodeType){var b=x(a),c=b.V;void 0===c&&(B(a)?(c=a,b.V=c):(c=(c=a.parentNode)?id(c):a,C.contains.call(document.documentElement,a)&&(b.V=c)));return c}}function jd(a,b,c){var d=[];kd(a.childNodes,b,c,d);return d}function kd(a,b,c,d){for(var e=0,f=a.length,g=void 0;e<f&&(g=a[e]);e++){var h;if(h=g.nodeType===Node.ELEMENT_NODE){h=g;var k=b,l=c,n=d,p=k(h);p&&n.push(h);l&&l(p)?h=p:(kd(h.childNodes,k,l,n),h=void 0)}if(h)break}}var ld=null;
function Tc(){ld||(ld=window.ShadyCSS&&window.ShadyCSS.ScopingShim);return ld||null}function md(a,b,c){var d=Tc();d&&"class"===b?d.setElementClass(a,c):(C.setAttribute.call(a,b,c),ed(a,b))}function nd(a,b){if(a.ownerDocument!==document||"template"===a.localName)return C.importNode.call(document,a,b);var c=C.importNode.call(document,a,!1);if(b){a=a.childNodes;b=0;for(var d;b<a.length;b++)d=nd(a[b],!0),c.appendChild(d)}return c}function Qc(a,b){var c=Tc();c&&c.scopeNode(a,b)}
function Uc(a,b){var c=Tc();c&&c.unscopeNode(a,b)}function Vc(a,b){var c=Tc();if(!c)return!0;if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){c=!0;for(var d=0;c&&d<a.childNodes.length;d++)c=c&&Vc(a.childNodes[d],b);return c}return a.nodeType!==Node.ELEMENT_NODE?!0:c.currentScopeForNode(a)===b}function Rc(a){if(a.nodeType!==Node.ELEMENT_NODE)return"";var b=Tc();return b?b.currentScopeForNode(a):""}
function Wc(a,b){if(a){a.nodeType===Node.ELEMENT_NODE&&b(a);for(var c=0,d;c<a.childNodes.length;c++)d=a.childNodes[c],d.nodeType===Node.ELEMENT_NODE&&Wc(d,b)}};var od="__eventWrappers"+Date.now(),pd=function(){var a=Object.getOwnPropertyDescriptor(Event.prototype,"composed");return a?function(b){return a.get.call(b)}:null}(),qd={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,
pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},rd={DOMAttrModified:!0,DOMAttributeNameChanged:!0,DOMCharacterDataModified:!0,DOMElementNameChanged:!0,DOMNodeInserted:!0,DOMNodeInsertedIntoDocument:!0,DOMNodeRemoved:!0,DOMNodeRemovedFromDocument:!0,DOMSubtreeModified:!0};
function sd(a,b){var c=[],d=a;for(a=a===window?window:a.getRootNode();d;)c.push(d),d=d.assignedSlot?d.assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d.host:d.parentNode;c[c.length-1]===document&&c.push(window);return c}function td(a,b){if(!B)return a;a=sd(a,!0);for(var c=0,d,e=void 0,f,g=void 0;c<b.length;c++)if(d=b[c],f=d===window?window:d.getRootNode(),f!==e&&(g=a.indexOf(f),e=f),!B(f)||-1<g)return d}
var ud={get composed(){void 0===this.Y&&(pd?this.Y="focusin"===this.type||"focusout"===this.type||pd(this):!1!==this.isTrusted&&(this.Y=qd[this.type]));return this.Y||!1},composedPath:function(){this.ta||(this.ta=sd(this.__target,this.composed));return this.ta},get target(){return td(this.currentTarget||this.__previousCurrentTarget,this.composedPath())},get relatedTarget(){if(!this.la)return null;this.va||(this.va=sd(this.la,!0));return td(this.currentTarget||this.__previousCurrentTarget,this.va)},
stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.ka=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);this.ka=this.Da=!0}};function vd(a){function b(b,d){b=new a(b,d);b.Y=d&&!!d.composed;return b}tb(b,a);b.prototype=a.prototype;return b}var wd={focus:!0,blur:!0};function xd(a){return a.__target!==a.target||a.la!==a.relatedTarget}
function yd(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&(!xd(a)||a.target!==a.relatedTarget)&&(e.call(b,a),!a.Da);d++);}
function zd(a){var b=a.composedPath();Object.defineProperty(a,"currentTarget",{get:function(){return d},configurable:!0});for(var c=b.length-1;0<=c;c--){var d=b[c];yd(a,d,"capture");if(a.ka)return}Object.defineProperty(a,"eventPhase",{get:function(){return Event.AT_TARGET}});var e;for(c=0;c<b.length;c++){d=b[c];var f=z(d);f=f&&f.root;if(0===c||f&&f===e)if(yd(a,d,"bubble"),d!==window&&(e=d.getRootNode()),a.ka)break}}
function Ad(a,b,c,d,e,f){for(var g=0;g<a.length;g++){var h=a[g],k=h.type,l=h.capture,n=h.once,p=h.passive;if(b===h.node&&c===k&&d===l&&e===n&&f===p)return g}return-1}
function Bd(a,b,c){if(b){var d=typeof b;if("function"===d||"object"===d)if("object"!==d||b.handleEvent&&"function"===typeof b.handleEvent){var e=this instanceof Window?C.gb:C.addEventListener;if(rd[a])return e.call(this,a,b,c);if(c&&"object"===typeof c){var f=!!c.capture;var g=!!c.once;var h=!!c.passive}else f=!!c,h=g=!1;var k=c&&c.na||this,l=b[od];if(l){if(-1<Ad(l,k,a,f,g,h))return}else b[od]=[];l=function(e){g&&this.removeEventListener(a,b,c);e.__target||Cd(e);if(k!==this){var f=Object.getOwnPropertyDescriptor(e,
"currentTarget");Object.defineProperty(e,"currentTarget",{get:function(){return k},configurable:!0})}e.__previousCurrentTarget=e.currentTarget;if(!B(k)||-1!=e.composedPath().indexOf(k))if(e.composed||-1<e.composedPath().indexOf(k))if(xd(e)&&e.target===e.relatedTarget)e.eventPhase===Event.BUBBLING_PHASE&&e.stopImmediatePropagation();else if(e.eventPhase===Event.CAPTURING_PHASE||e.bubbles||e.target===k||k instanceof Window){var h="function"===d?b.call(k,e):b.handleEvent&&b.handleEvent(e);k!==this&&
(f?(Object.defineProperty(e,"currentTarget",f),f=null):delete e.currentTarget);return h}};b[od].push({node:k,type:a,capture:f,once:g,passive:h,ib:l});wd[a]?(this.__handlers=this.__handlers||{},this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]},this.__handlers[a][f?"capture":"bubble"].push(l)):e.call(this,a,l,c)}}}
function Dd(a,b,c){if(b){var d=this instanceof Window?C.hb:C.removeEventListener;if(rd[a])return d.call(this,a,b,c);if(c&&"object"===typeof c){var e=!!c.capture;var f=!!c.once;var g=!!c.passive}else e=!!c,g=f=!1;var h=c&&c.na||this,k=void 0;var l=null;try{l=b[od]}catch(n){}l&&(f=Ad(l,h,a,e,f,g),-1<f&&(k=l.splice(f,1)[0].ib,l.length||(b[od]=void 0)));d.call(this,a,k||b,c);k&&wd[a]&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][e?"capture":"bubble"],k=a.indexOf(k),-1<k&&a.splice(k,1))}}
function Ed(){for(var a in wd)window.addEventListener(a,function(a){a.__target||(Cd(a),zd(a))},!0)}function Cd(a){a.__target=a.target;a.la=a.relatedTarget;if(A.K){var b=Object.getPrototypeOf(a);if(!b.hasOwnProperty("__patchProto")){var c=Object.create(b);c.jb=b;rb(c,ud);b.__patchProto=c}a.__proto__=b.__patchProto}else rb(a,ud)}var Fd=vd(window.Event),Gd=vd(window.CustomEvent),Hd=vd(window.MouseEvent);
function Id(){window.Event=Fd;window.CustomEvent=Gd;window.MouseEvent=Hd;Ed();if(!pd&&Object.getOwnPropertyDescriptor(Event.prototype,"isTrusted")){var a=function(){var a=new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(a)};Element.prototype.click?Element.prototype.click=a:HTMLElement.prototype.click&&(HTMLElement.prototype.click=a)}};function Jd(a,b){return{index:a,W:[],ba:b}}
function Kd(a,b,c,d){var e=0,f=0,g=0,h=0,k=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(g=0;g<k;g++)if(a[g]!==c[g])break a;g=k}if(b==a.length&&d==c.length){h=a.length;for(var l=c.length,n=0;n<k-g&&Ld(a[--h],c[--l]);)n++;h=n}e+=g;f+=g;b-=h;d-=h;if(0==b-e&&0==d-f)return[];if(e==b){for(b=Jd(e,0);f<d;)b.W.push(c[f++]);return[b]}if(f==d)return[Jd(e,b-e)];k=e;g=f;d=d-g+1;h=b-k+1;b=Array(d);for(l=0;l<d;l++)b[l]=Array(h),b[l][0]=l;for(l=0;l<h;l++)b[0][l]=l;for(l=1;l<d;l++)for(n=1;n<h;n++)if(a[k+n-1]===c[g+l-1])b[l][n]=
b[l-1][n-1];else{var p=b[l-1][n]+1,G=b[l][n-1]+1;b[l][n]=p<G?p:G}k=b.length-1;g=b[0].length-1;d=b[k][g];for(a=[];0<k||0<g;)0==k?(a.push(2),g--):0==g?(a.push(3),k--):(h=b[k-1][g-1],l=b[k-1][g],n=b[k][g-1],p=l<n?l<h?l:h:n<h?n:h,p==h?(h==d?a.push(0):(a.push(1),d=h),k--,g--):p==l?(a.push(3),k--,d=l):(a.push(2),g--,d=n));a.reverse();b=void 0;k=[];for(g=0;g<a.length;g++)switch(a[g]){case 0:b&&(k.push(b),b=void 0);e++;f++;break;case 1:b||(b=Jd(e,0));b.ba++;e++;b.W.push(c[f]);f++;break;case 2:b||(b=Jd(e,
0));b.ba++;e++;break;case 3:b||(b=Jd(e,0)),b.W.push(c[f]),f++}b&&k.push(b);return k}function Ld(a,b){return a===b};var Md=J.parentNode,Nd=J.childNodes,Od={},Pd=A.deferConnectionCallbacks&&"loading"===document.readyState,Qd;function Rd(a){var b=[];do b.unshift(a);while(a=a.parentNode);return b}
function Gc(a,b,c){if(a!==Od)throw new TypeError("Illegal constructor");this.Ja="ShadyRoot";this.host=b;this.c=c&&c.mode;Nc(b);a=x(b);a.root=this;a.za="closed"!==this.c?this:null;a=x(this);a.firstChild=a.lastChild=a.parentNode=a.nextSibling=a.previousSibling=null;a.childNodes=[];this.b=this.aa=!1;this.a=this.w=this.o=null;Yc(this)}function Yc(a){a.aa||(a.aa=!0,Gb(function(){return Sd(a)}))}
function Sd(a){for(var b;a;){a.aa&&(b=a);a:{var c=a;a=c.host.getRootNode();if(B(a))for(var d=c.host.childNodes,e=0;e<d.length;e++)if(c=d[e],"slot"==c.localName)break a;a=void 0}}b&&b._renderRoot()}
Gc.prototype._renderRoot=function(){var a=Pd;Pd=!0;this.aa=!1;if(this.o){fd(this);for(var b=0,c;b<this.o.length;b++){c=this.o[b];var d=z(c),e=d.assignedNodes;d.assignedNodes=[];d.N=[];if(d.oa=e)for(d=0;d<e.length;d++){var f=z(e[d]);f.$=f.assignedSlot;f.assignedSlot===c&&(f.assignedSlot=null)}}for(b=this.host.firstChild;b;b=b.nextSibling)Td(this,b);for(b=0;b<this.o.length;b++){c=this.o[b];e=z(c);if(!e.assignedNodes.length)for(d=c.firstChild;d;d=d.nextSibling)Td(this,d,c);(d=(d=z(c.parentNode))&&d.root)&&
dd(d)&&d._renderRoot();Ud(this,e.N,e.assignedNodes);if(d=e.oa){for(f=0;f<d.length;f++)z(d[f]).$=null;e.oa=null;d.length>e.assignedNodes.length&&(e.ea=!0)}e.ea&&(e.ea=!1,Vd(this,c))}c=this.o;b=[];for(e=0;e<c.length;e++)d=c[e].parentNode,(f=z(d))&&f.root||!(0>b.indexOf(d))||b.push(d);for(c=0;c<b.length;c++){f=b[c];e=f===this?this.host:f;d=[];f=f.childNodes;for(var g=0;g<f.length;g++){var h=f[g];if("slot"==h.localName){h=z(h).N;for(var k=0;k<h.length;k++)d.push(h[k])}else d.push(h)}f=Nd(e);g=Kd(d,d.length,
f,f.length);k=h=0;for(var l=void 0;h<g.length&&(l=g[h]);h++){for(var n=0,p=void 0;n<l.W.length&&(p=l.W[n]);n++)Md(p)===e&&C.removeChild.call(e,p),f.splice(l.index+k,1);k-=l.ba}k=0;for(l=void 0;k<g.length&&(l=g[k]);k++)for(h=f[l.index],n=l.index;n<l.index+l.ba;n++)p=d[n],C.insertBefore.call(e,p,h),f.splice(n,0,p)}}if(!this.b)for(b=this.host.childNodes,c=0,e=b.length;c<e;c++)d=b[c],f=z(d),Md(d)!==this.host||"slot"!==d.localName&&f.assignedSlot||C.removeChild.call(this.host,d);this.b=!0;Pd=a;Qd&&Qd()};
function Td(a,b,c){var d=x(b),e=d.$;d.$=null;c||(c=(a=a.w[b.slot||"__catchall"])&&a[0]);c?(x(c).assignedNodes.push(b),d.assignedSlot=c):d.assignedSlot=void 0;e!==d.assignedSlot&&d.assignedSlot&&(x(d.assignedSlot).ea=!0)}function Ud(a,b,c){for(var d=0,e=void 0;d<c.length&&(e=c[d]);d++)if("slot"==e.localName){var f=z(e).assignedNodes;f&&f.length&&Ud(a,b,f)}else b.push(c[d])}function Vd(a,b){C.dispatchEvent.call(b,new Event("slotchange"));b=z(b);b.assignedSlot&&Vd(a,b.assignedSlot)}
function Xc(a,b){a.a=a.a||[];a.o=a.o||[];a.w=a.w||{};a.a.push.apply(a.a,b instanceof Array?b:na(ma(b)))}function fd(a){if(a.a&&a.a.length){for(var b=a.a,c,d=0;d<b.length;d++){var e=b[d];Nc(e);Nc(e.parentNode);var f=gd(e);a.w[f]?(c=c||{},c[f]=!0,a.w[f].push(e)):a.w[f]=[e];a.o.push(e)}if(c)for(var g in c)a.w[g]=hd(a.w[g]);a.a=[]}}function gd(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.Ha=b}
function hd(a){return a.sort(function(a,c){a=Rd(a);for(var b=Rd(c),e=0;e<a.length;e++){c=a[e];var f=b[e];if(c!==f)return a=Array.from(c.parentNode.childNodes),a.indexOf(c)-a.indexOf(f)}})}function cd(a,b){if(a.o){fd(a);var c=a.w,d;for(d in c)for(var e=c[d],f=0;f<e.length;f++){var g=e[f];if(Cb(b,g)){e.splice(f,1);var h=a.o.indexOf(g);0<=h&&a.o.splice(h,1);f--;g=z(g);if(h=g.N)for(var k=0;k<h.length;k++){var l=h[k],n=Md(l);n&&C.removeChild.call(n,l)}g.N=[];g.assignedNodes=[];h=!0}}return h}}
function dd(a){fd(a);return!(!a.o||!a.o.length)}
if(window.customElements&&A.qa){var Wd=new Map;Qd=function(){var a=Array.from(Wd);Wd.clear();a=ma(a);for(var b=a.next();!b.done;b=a.next()){b=ma(b.value);var c=b.next().value;b.next().value?c.Fa():c.Ga()}};Pd&&document.addEventListener("readystatechange",function(){Pd=!1;Qd()},{once:!0});var Xd=function(a,b,c){var d=0,e="__isConnected"+d++;if(b||c)a.prototype.connectedCallback=a.prototype.Fa=function(){Pd?Wd.set(this,!0):this[e]||(this[e]=!0,b&&b.call(this))},a.prototype.disconnectedCallback=a.prototype.Ga=
function(){Pd?this.isConnected||Wd.set(this,!1):this[e]&&(this[e]=!1,c&&c.call(this))};return a},define=window.customElements.define;Object.defineProperty(window.CustomElementRegistry.prototype,"define",{value:function(a,b){var c=b.prototype.connectedCallback,d=b.prototype.disconnectedCallback;define.call(window.customElements,a,Xd(b,c,d));b.prototype.connectedCallback=c;b.prototype.disconnectedCallback=d}})};function Yd(a){var b=a.getRootNode();B(b)&&Sd(b);return(a=z(a))&&a.assignedSlot||null}
var Zd={addEventListener:Bd.bind(window),removeEventListener:Dd.bind(window)},$d={addEventListener:Bd,removeEventListener:Dd,appendChild:function(a){return Pc(this,a)},insertBefore:function(a,b){return Pc(this,a,b)},removeChild:function(a){return Sc(this,a)},replaceChild:function(a,b){Pc(this,a,b);Sc(this,b);return a},cloneNode:function(a){if("template"==this.localName)var b=C.cloneNode.call(this,a);else if(b=C.cloneNode.call(this,!1),a&&b.nodeType!==Node.ATTRIBUTE_NODE){a=this.childNodes;for(var c=
0,d;c<a.length;c++)d=a[c].cloneNode(!0),b.appendChild(d)}return b},getRootNode:function(){return id(this)},contains:function(a){return Cb(this,a)},dispatchEvent:function(a){Hb();return C.dispatchEvent.call(this,a)}};
Object.defineProperties($d,{isConnected:{get:function(){if(xc&&xc.call(this))return!0;if(this.nodeType==Node.DOCUMENT_FRAGMENT_NODE)return!1;var a=this.ownerDocument;if(Bb){if(C.contains.call(a,this))return!0}else if(a.documentElement&&C.contains.call(a.documentElement,this))return!0;for(a=this;a&&!(a instanceof Document);)a=a.parentNode||(B(a)?a.host:void 0);return!!(a&&a instanceof Document)},configurable:!0}});
var ae={get assignedSlot(){return Yd(this)}},be={querySelector:function(a){return jd(this,function(b){return qb.call(b,a)},function(a){return!!a})[0]||null},querySelectorAll:function(a,b){if(b){b=Array.prototype.slice.call(C.querySelectorAll.call(this,a));var c=this.getRootNode();return b.filter(function(a){return a.getRootNode()==c})}return jd(this,function(b){return qb.call(b,a)})}},ce={assignedNodes:function(a){if("slot"===this.localName){var b=this.getRootNode();B(b)&&Sd(b);return(b=z(this))?
(a&&a.flatten?b.N:b.assignedNodes)||[]:[]}}},de=sb({setAttribute:function(a,b){md(this,a,b)},removeAttribute:function(a){C.removeAttribute.call(this,a);ed(this,a)},attachShadow:function(a){if(!this)throw"Must provide a host.";if(!a)throw"Not enough arguments.";return new Gc(Od,this,a)},get slot(){return this.getAttribute("slot")},set slot(a){md(this,"slot",a)},get assignedSlot(){return Yd(this)}},be,ce);Object.defineProperties(de,Cc);
var ee=sb({importNode:function(a,b){return nd(a,b)},getElementById:function(a){return jd(this,function(b){return b.id==a},function(a){return!!a})[0]||null}},be);Object.defineProperties(ee,{_activeElement:Dc.activeElement});
for(var fe=HTMLElement.prototype.blur,ge={blur:function(){var a=z(this);(a=(a=a&&a.root)&&a.activeElement)?a.blur():fe.call(this)}},he={},ie=ma(Object.getOwnPropertyNames(Document.prototype)),je=ie.next();!je.done;he={H:he.H},je=ie.next())he.H=je.value,"on"===he.H.substring(0,2)&&Object.defineProperty(ge,he.H,{set:function(a){return function(b){var c=x(this),d=a.H.substring(2);c.Z[a.H]&&this.removeEventListener(d,c.Z[a.H]);this.addEventListener(d,b,{});c.Z[a.H]=b}}(he),get:function(a){return function(){var b=
z(this);return b&&b.Z[a.H]}}(he),configurable:!0});var ke={addEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.na=this;this.host.addEventListener(a,b,c)},removeEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.na=this;this.host.removeEventListener(a,b,c)},getElementById:function(a){return jd(this,function(b){return b.id==a},function(a){return!!a})[0]||null}};
function L(a,b){for(var c=Object.getOwnPropertyNames(b),d=0;d<c.length;d++){var e=c[d],f=Object.getOwnPropertyDescriptor(b,e);f.value?a[e]=f.value:Object.defineProperty(a,e,f)}};if(A.qa){var ShadyDOM={inUse:A.qa,patch:function(a){Ic(a);Hc(a);return a},isShadyRoot:B,enqueue:Gb,flush:Hb,settings:A,filterMutations:Mb,observeChildren:Kb,unobserveChildren:Lb,nativeMethods:C,nativeTree:J,deferConnectionCallbacks:A.deferConnectionCallbacks,handlesDynamicScoping:!0};window.ShadyDOM=ShadyDOM;Id();var le=window.customElements&&window.customElements.nativeHTMLElement||HTMLElement;L(Gc.prototype,ke);L(window.Node.prototype,$d);L(window.Window.prototype,Zd);L(window.Text.prototype,ae);
L(window.DocumentFragment.prototype,be);L(window.Element.prototype,de);L(window.Document.prototype,ee);window.HTMLSlotElement&&L(window.HTMLSlotElement.prototype,ce);L(le.prototype,ge);A.K&&(Ec(window.Node.prototype),Ec(window.Text.prototype),Ec(window.DocumentFragment.prototype),Ec(window.Element.prototype),Ec(le.prototype),Ec(window.Document.prototype),window.HTMLSlotElement&&Ec(window.HTMLSlotElement.prototype));Fc();window.ShadowRoot=Gc};var me=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function ne(a){var b=me.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return!b&&a}function M(a){var b=a.isConnected;if(void 0!==b)return b;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}
function oe(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
function pe(a,b,c){c=void 0===c?new Set:c;for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)pe(d,b,c);d=oe(a,e);continue}else if("template"===f){d=oe(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)pe(e,b,c)}d=d.firstChild?d.firstChild:oe(a,d)}}function N(a,b,c){a[b]=c};function qe(){this.a=new Map;this.m=new Map;this.f=[];this.c=!1}function re(a,b,c){a.a.set(b,c);a.m.set(c.constructor,c)}function se(a,b){a.c=!0;a.f.push(b)}function te(a,b){a.c&&pe(b,function(b){return a.b(b)})}qe.prototype.b=function(a){if(this.c&&!a.__CE_patched){a.__CE_patched=!0;for(var b=0;b<this.f.length;b++)this.f[b](a)}};function O(a,b){var c=[];pe(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state?a.connectedCallback(d):ue(a,d)}}
function P(a,b){var c=[];pe(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state&&a.disconnectedCallback(d)}}
function Q(a,b,c){c=void 0===c?{}:c;var d=c.fb||new Set,e=c.ia||function(b){return ue(a,b)},f=[];pe(b,function(b){if("link"===b.localName&&"import"===b.getAttribute("rel")){var c=b.import;c instanceof Node&&(c.__CE_isImportDocument=!0,c.__CE_hasRegistry=!0);c&&"complete"===c.readyState?c.__CE_documentLoadHandled=!0:b.addEventListener("load",function(){var c=b.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;var f=new Set(d);f.delete(c);Q(a,c,{fb:f,ia:e})}})}else f.push(b)},d);
if(a.c)for(b=0;b<f.length;b++)a.b(f[b]);for(b=0;b<f.length;b++)e(f[b])}
function ue(a,b){if(void 0===b.__CE_state){var c=b.ownerDocument;if(c.defaultView||c.__CE_isImportDocument&&c.__CE_hasRegistry)if(c=a.a.get(b.localName)){c.constructionStack.push(b);var d=c.constructor;try{try{if(new d!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{c.constructionStack.pop()}}catch(g){throw b.__CE_state=2,g;}b.__CE_state=1;b.__CE_definition=c;if(c.attributeChangedCallback)for(c=c.observedAttributes,d=0;d<c.length;d++){var e=c[d],
f=b.getAttribute(e);null!==f&&a.attributeChangedCallback(b,e,null,f,null)}M(b)&&a.connectedCallback(b)}}}qe.prototype.connectedCallback=function(a){var b=a.__CE_definition;b.connectedCallback&&b.connectedCallback.call(a)};qe.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;b.disconnectedCallback&&b.disconnectedCallback.call(a)};
qe.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b)&&f.attributeChangedCallback.call(a,b,c,d,e)};function ve(a){var b=document;this.b=a;this.a=b;this.P=void 0;Q(this.b,this.a);"loading"===this.a.readyState&&(this.P=new MutationObserver(this.c.bind(this)),this.P.observe(this.a,{childList:!0,subtree:!0}))}function we(a){a.P&&a.P.disconnect()}ve.prototype.c=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||we(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)Q(this.b,c[d])};function xe(){var a=this;this.a=this.A=void 0;this.b=new Promise(function(b){a.a=b;a.A&&b(a.A)})}xe.prototype.resolve=function(a){if(this.A)throw Error("Already resolved.");this.A=a;this.a&&this.a(a)};function S(a){this.c=!1;this.a=a;this.G=new Map;this.f=function(a){return a()};this.b=!1;this.m=[];this.fa=new ve(a)}r=S.prototype;
r.define=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!ne(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.a.a.get(a))throw Error("A custom element with name '"+a+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var d=function(a){var b=e[a];if(void 0!==b&&!(b instanceof Function))throw Error("The '"+a+"' callback must be a function.");
return b},e=b.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=d("connectedCallback");var g=d("disconnectedCallback");var h=d("adoptedCallback");var k=d("attributeChangedCallback");var l=b.observedAttributes||[]}catch(n){return}finally{this.c=!1}b={localName:a,constructor:b,connectedCallback:f,disconnectedCallback:g,adoptedCallback:h,attributeChangedCallback:k,observedAttributes:l,constructionStack:[]};re(this.a,a,b);this.m.push(b);
this.b||(this.b=!0,this.f(function(){return ye(c)}))};r.ia=function(a){Q(this.a,a)};function ye(a){if(!1!==a.b){a.b=!1;for(var b=a.m,c=[],d=new Map,e=0;e<b.length;e++)d.set(b[e].localName,[]);Q(a.a,document,{ia:function(b){if(void 0===b.__CE_state){var e=b.localName,f=d.get(e);f?f.push(b):a.a.a.get(e)&&c.push(b)}}});for(e=0;e<c.length;e++)ue(a.a,c[e]);for(;0<b.length;){var f=b.shift();e=f.localName;f=d.get(f.localName);for(var g=0;g<f.length;g++)ue(a.a,f[g]);(e=a.G.get(e))&&e.resolve(void 0)}}}
r.get=function(a){if(a=this.a.a.get(a))return a.constructor};r.Ca=function(a){if(!ne(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.G.get(a);if(b)return b.b;b=new xe;this.G.set(a,b);this.a.a.get(a)&&!this.m.some(function(b){return b.localName===a})&&b.resolve(void 0);return b.b};r.Ya=function(a){we(this.fa);var b=this.f;this.f=function(c){return a(function(){return b(c)})}};window.CustomElementRegistry=S;S.prototype.define=S.prototype.define;
S.prototype.upgrade=S.prototype.ia;S.prototype.get=S.prototype.get;S.prototype.whenDefined=S.prototype.Ca;S.prototype.polyfillWrapFlushCallback=S.prototype.Ya;var ze=window.Document.prototype.createElement,Ae=window.Document.prototype.createElementNS,Be=window.Document.prototype.importNode,Ce=window.Document.prototype.prepend,De=window.Document.prototype.append,Ee=window.DocumentFragment.prototype.prepend,Fe=window.DocumentFragment.prototype.append,Ge=window.Node.prototype.cloneNode,He=window.Node.prototype.appendChild,Ie=window.Node.prototype.insertBefore,Je=window.Node.prototype.removeChild,Ke=window.Node.prototype.replaceChild,Le=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),Me=window.Element.prototype.attachShadow,Ne=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Oe=window.Element.prototype.getAttribute,Pe=window.Element.prototype.setAttribute,Qe=window.Element.prototype.removeAttribute,Re=window.Element.prototype.getAttributeNS,Se=window.Element.prototype.setAttributeNS,Te=window.Element.prototype.removeAttributeNS,Ue=window.Element.prototype.insertAdjacentElement,Ve=window.Element.prototype.insertAdjacentHTML,We=window.Element.prototype.prepend,
Xe=window.Element.prototype.append,Ye=window.Element.prototype.before,Ze=window.Element.prototype.after,$e=window.Element.prototype.replaceWith,af=window.Element.prototype.remove,bf=window.HTMLElement,cf=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),df=window.HTMLElement.prototype.insertAdjacentElement,ef=window.HTMLElement.prototype.insertAdjacentHTML;var ff=new function(){};function gf(){var a=hf;window.HTMLElement=function(){function b(){var b=this.constructor,d=a.m.get(b);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=ze.call(document,d.localName),Object.setPrototypeOf(e,b.prototype),e.__CE_state=1,e.__CE_definition=d,a.b(e),e;d=e.length-1;var f=e[d];if(f===ff)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
e[d]=ff;Object.setPrototypeOf(f,b.prototype);a.b(f);return f}b.prototype=bf.prototype;Object.defineProperty(b.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});return b}()};function jf(a,b,c){function d(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var f=[],l=0;l<d.length;l++){var n=d[l];n instanceof Element&&M(n)&&f.push(n);if(n instanceof DocumentFragment)for(n=n.firstChild;n;n=n.nextSibling)e.push(n);else e.push(n)}b.apply(this,d);for(d=0;d<f.length;d++)P(a,f[d]);if(M(this))for(d=0;d<e.length;d++)f=e[d],f instanceof Element&&O(a,f)}}void 0!==c.ha&&(b.prepend=d(c.ha));void 0!==c.append&&(b.append=d(c.append))};function kf(){var a=hf;N(Document.prototype,"createElement",function(b){if(this.__CE_hasRegistry){var c=a.a.get(b);if(c)return new c.constructor}b=ze.call(this,b);a.b(b);return b});N(Document.prototype,"importNode",function(b,c){b=Be.call(this,b,c);this.__CE_hasRegistry?Q(a,b):te(a,b);return b});N(Document.prototype,"createElementNS",function(b,c){if(this.__CE_hasRegistry&&(null===b||"http://www.w3.org/1999/xhtml"===b)){var d=a.a.get(c);if(d)return new d.constructor}b=Ae.call(this,b,c);a.b(b);return b});
jf(a,Document.prototype,{ha:Ce,append:De})};function lf(){function a(a,d){Object.defineProperty(a,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,a);else{var c=void 0;if(this.firstChild){var e=this.childNodes,h=e.length;if(0<h&&M(this)){c=Array(h);for(var k=0;k<h;k++)c[k]=e[k]}}d.set.call(this,a);if(c)for(a=0;a<c.length;a++)P(b,c[a])}}})}var b=hf;N(Node.prototype,"insertBefore",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);
a=Ie.call(this,a,d);if(M(this))for(d=0;d<c.length;d++)O(b,c[d]);return a}c=M(a);d=Ie.call(this,a,d);c&&P(b,a);M(this)&&O(b,a);return d});N(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=He.call(this,a);if(M(this))for(var e=0;e<c.length;e++)O(b,c[e]);return a}c=M(a);e=He.call(this,a);c&&P(b,a);M(this)&&O(b,a);return e});N(Node.prototype,"cloneNode",function(a){a=Ge.call(this,a);this.ownerDocument.__CE_hasRegistry?Q(b,a):
te(b,a);return a});N(Node.prototype,"removeChild",function(a){var c=M(a),e=Je.call(this,a);c&&P(b,a);return e});N(Node.prototype,"replaceChild",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=Ke.call(this,a,d);if(M(this))for(P(b,d),d=0;d<c.length;d++)O(b,c[d]);return a}c=M(a);var f=Ke.call(this,a,d),g=M(this);g&&P(b,d);c&&P(b,a);g&&O(b,a);return f});Le&&Le.get?a(Node.prototype,Le):se(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=
[],b=0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)Je.call(this,this.firstChild);He.call(this,document.createTextNode(a))}})})};function mf(a){function b(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var h=[],k=0;k<d.length;k++){var l=d[k];l instanceof Element&&M(l)&&h.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)e.push(l);else e.push(l)}b.apply(this,d);for(d=0;d<h.length;d++)P(a,h[d]);if(M(this))for(d=0;d<e.length;d++)h=e[d],h instanceof Element&&O(a,h)}}var c=Element.prototype;void 0!==Ye&&(c.before=b(Ye));void 0!==Ye&&(c.after=b(Ze));void 0!==$e&&
N(c,"replaceWith",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=[];for(var g=[],h=0;h<c.length;h++){var k=c[h];k instanceof Element&&M(k)&&g.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)d.push(k);else d.push(k)}h=M(this);$e.apply(this,c);for(c=0;c<g.length;c++)P(a,g[c]);if(h)for(P(a,this),c=0;c<d.length;c++)g=d[c],g instanceof Element&&O(a,g)});void 0!==af&&N(c,"remove",function(){var b=M(this);af.call(this);b&&P(a,this)})};function nf(){function a(a,b){Object.defineProperty(a,"innerHTML",{enumerable:b.enumerable,configurable:!0,get:b.get,set:function(a){var c=this,e=void 0;M(this)&&(e=[],pe(this,function(a){a!==c&&e.push(a)}));b.set.call(this,a);if(e)for(var f=0;f<e.length;f++){var g=e[f];1===g.__CE_state&&d.disconnectedCallback(g)}this.ownerDocument.__CE_hasRegistry?Q(d,this):te(d,this);return a}})}function b(a,b){N(a,"insertAdjacentElement",function(a,c){var e=M(c);a=b.call(this,a,c);e&&P(d,c);M(a)&&O(d,c);return a})}
function c(a,b){function c(a,b){for(var c=[];a!==b;a=a.nextSibling)c.push(a);for(b=0;b<c.length;b++)Q(d,c[b])}N(a,"insertAdjacentHTML",function(a,d){a=a.toLowerCase();if("beforebegin"===a){var e=this.previousSibling;b.call(this,a,d);c(e||this.parentNode.firstChild,this)}else if("afterbegin"===a)e=this.firstChild,b.call(this,a,d),c(this.firstChild,e);else if("beforeend"===a)e=this.lastChild,b.call(this,a,d),c(e||this.firstChild,null);else if("afterend"===a)e=this.nextSibling,b.call(this,a,d),c(this.nextSibling,
e);else throw new SyntaxError("The value provided ("+String(a)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");})}var d=hf;Me&&N(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=Me.call(this,a)});Ne&&Ne.get?a(Element.prototype,Ne):cf&&cf.get?a(HTMLElement.prototype,cf):se(d,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return Ge.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName,c=b?this.content:this,d=Ae.call(document,
this.namespaceURI,this.localName);for(d.innerHTML=a;0<c.childNodes.length;)Je.call(c,c.childNodes[0]);for(a=b?d.content:d;0<a.childNodes.length;)He.call(c,a.childNodes[0])}})});N(Element.prototype,"setAttribute",function(a,b){if(1!==this.__CE_state)return Pe.call(this,a,b);var c=Oe.call(this,a);Pe.call(this,a,b);b=Oe.call(this,a);d.attributeChangedCallback(this,a,c,b,null)});N(Element.prototype,"setAttributeNS",function(a,b,c){if(1!==this.__CE_state)return Se.call(this,a,b,c);var e=Re.call(this,a,
b);Se.call(this,a,b,c);c=Re.call(this,a,b);d.attributeChangedCallback(this,b,e,c,a)});N(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return Qe.call(this,a);var b=Oe.call(this,a);Qe.call(this,a);null!==b&&d.attributeChangedCallback(this,a,b,null,null)});N(Element.prototype,"removeAttributeNS",function(a,b){if(1!==this.__CE_state)return Te.call(this,a,b);var c=Re.call(this,a,b);Te.call(this,a,b);var e=Re.call(this,a,b);c!==e&&d.attributeChangedCallback(this,b,c,e,a)});df?b(HTMLElement.prototype,
df):Ue?b(Element.prototype,Ue):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");ef?c(HTMLElement.prototype,ef):Ve?c(Element.prototype,Ve):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");jf(d,Element.prototype,{ha:We,append:Xe});mf(d)};var of=window.customElements;if(!of||of.forcePolyfill||"function"!=typeof of.define||"function"!=typeof of.get){var hf=new qe;gf();kf();jf(hf,DocumentFragment.prototype,{ha:Ee,append:Fe});lf();nf();document.__CE_hasRegistry=!0;var customElements=new S(hf);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};function pf(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName=""}
function qf(a){a=a.replace(rf,"").replace(sf,"");var b=vf,c=a,d=new pf;d.start=0;d.end=c.length;for(var e=d,f=0,g=c.length;f<g;f++)if("{"===c[f]){e.rules||(e.rules=[]);var h=e,k=h.rules[h.rules.length-1]||null;e=new pf;e.start=f+1;e.parent=h;e.previous=k;h.rules.push(e)}else"}"===c[f]&&(e.end=f+1,e=e.parent||d);return b(d,a)}
function vf(a,b){var c=b.substring(a.start,a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&(c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=wf(c),c=c.replace(xf," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=0===c.indexOf("@"),a.atRule?0===c.indexOf("@media")?a.type=yf:c.match(zf)&&(a.type=Af,a.keyframesName=a.selector.split(xf).pop()):a.type=0===c.indexOf("--")?Bf:Cf);if(c=a.rules)for(var d=0,e=c.length,f=void 0;d<e&&(f=c[d]);d++)vf(f,
b);return a}function wf(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(a,c){a=c;for(c=6-a.length;c--;)a="0"+a;return"\\"+a})}
function Df(a,b,c){c=void 0===c?"":c;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var g=e.length,h=void 0;f<g&&(h=e[f]);f++)d=Df(h,b,d)}else b?b=a.cssText:(b=a.cssText,b=b.replace(Ef,"").replace(Ff,""),b=b.replace(Gf,"").replace(Hf,"")),(d=b.trim())&&(d="  "+d+"\n")}d&&(a.selector&&(c+=a.selector+" {\n"),c+=d,a.selector&&(c+="}\n\n"));return c}
var Cf=1,Af=7,yf=4,Bf=1E3,rf=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,sf=/@import[^;]*;/gim,Ef=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,Ff=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,Gf=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,Hf=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,zf=/^@[^\s]*keyframes/,xf=/\s+/g;var T=!(window.ShadyDOM&&window.ShadyDOM.inUse),If;function Jf(a){If=a&&a.shimcssproperties?!1:T||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"))}window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?If=window.ShadyCSS.nativeCss:window.ShadyCSS?(Jf(window.ShadyCSS),window.ShadyCSS=void 0):Jf(window.WebComponents&&window.WebComponents.flags);var V=If;var Kf=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Lf=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Mf=/(--[\w-]+)\s*([:,;)]|$)/gi,Nf=/(animation\s*:)|(animation-name\s*:)/,Of=/@media\s(.*)/,Pf=/\{[^}]*\}/g;var Qf=new Set;function Rf(a,b){if(!a)return"";"string"===typeof a&&(a=qf(a));b&&Sf(a,b);return Df(a,V)}function Tf(a){!a.__cssRules&&a.textContent&&(a.__cssRules=qf(a.textContent));return a.__cssRules||null}function Uf(a){return!!a.parent&&a.parent.type===Af}function Sf(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===yf){var g=a.selector.match(Of);g&&(window.matchMedia(g[1]).matches||(e=!0))}f===Cf?b(a):c&&f===Af?c(a):f===Bf&&(e=!0);if((a=a.rules)&&!e)for(e=0,f=a.length,g=void 0;e<f&&(g=a[e]);e++)Sf(g,b,c,d)}}
function Vf(a,b,c,d){var e=document.createElement("style");b&&e.setAttribute("scope",b);e.textContent=a;Wf(e,c,d);return e}var Xf=null;function Yf(a){a=document.createComment(" Shady DOM styles for "+a+" ");var b=document.head;b.insertBefore(a,(Xf?Xf.nextSibling:null)||b.firstChild);return Xf=a}function Wf(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);Xf?a.compareDocumentPosition(Xf)===Node.DOCUMENT_POSITION_PRECEDING&&(Xf=a):Xf=a}
function Zf(a,b){for(var c=0,d=a.length;b<d;b++)if("("===a[b])c++;else if(")"===a[b]&&0===--c)return b;return-1}function $f(a,b){var c=a.indexOf("var(");if(-1===c)return b(a,"","","");var d=Zf(a,c+3),e=a.substring(c+4,d);c=a.substring(0,c);a=$f(a.substring(d+1),b);d=e.indexOf(",");return-1===d?b(c,e.trim(),"",a):b(c,e.substring(0,d).trim(),e.substring(d+1).trim(),a)}function ag(a,b){T?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b)}
function bg(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||""):(b=a.is,c=a.extends);return{is:b,X:c}}function cg(a){for(var b=[],c="",d=0;0<=d&&d<a.length;d++)if("("===a[d]){var e=Zf(a,d);c+=a.slice(d,e+1);d=e}else","===a[d]?(b.push(c),c=""):c+=a[d];c&&b.push(c);return b}
function dg(a){if(void 0===a.ja){var b=a.getAttribute("css-build");if(b)a.ja=b;else{a:{b="template"===a.localName?a.content.firstChild:a.firstChild;if(b instanceof Comment&&(b=b.textContent.trim().split(":"),"css-build"===b[0])){b=b[1];break a}b=""}if(""!==b){var c="template"===a.localName?a.content.firstChild:a.firstChild;c.parentNode.removeChild(c)}a.ja=b}}return a.ja||""};function eg(){}function fg(a,b){gg(W,a,function(a){hg(a,b||"")})}function gg(a,b,c){b.nodeType===Node.ELEMENT_NODE&&c(b);if(b="template"===b.localName?(b.content||b.kb||b).childNodes:b.children||b.childNodes)for(var d=0;d<b.length;d++)gg(a,b[d],c)}
function hg(a,b,c){if(b)if(a.classList)c?(a.classList.remove("style-scope"),a.classList.remove(b)):(a.classList.add("style-scope"),a.classList.add(b));else if(a.getAttribute){var d=a.getAttribute(ig);c?d&&(b=d.replace("style-scope","").replace(b,""),ag(a,b)):ag(a,(d?d+" ":"")+"style-scope "+b)}}function jg(a,b,c){gg(W,a,function(a){hg(a,b,!0);hg(a,c)})}function kg(a,b){gg(W,a,function(a){hg(a,b||"",!0)})}
function lg(a,b,c,d){var e=W;T||"shady"===(void 0===d?"":d)?b=Rf(b,c):(a=bg(a),b=mg(e,b,a.is,a.X,c)+"\n\n");return b.trim()}function mg(a,b,c,d,e){var f=ng(c,d);c=c?og+c:"";return Rf(b,function(b){b.c||(b.selector=b.F=pg(a,b,a.b,c,f),b.c=!0);e&&e(b,c,f)})}function ng(a,b){return b?"[is="+a+"]":a}function pg(a,b,c,d,e){var f=cg(b.selector);if(!Uf(b)){b=0;for(var g=f.length,h=void 0;b<g&&(h=f[b]);b++)f[b]=c.call(a,h,d,e)}return f.filter(function(a){return!!a}).join(qg)}
function rg(a){return a.replace(sg,function(a,c,d){-1<d.indexOf("+")?d=d.replace(/\+/g,"___"):-1<d.indexOf("___")&&(d=d.replace(/___/g,"+"));return":"+c+"("+d+")"})}function tg(a){for(var b=[],c;c=a.match(ug);){var d=c.index,e=Zf(a,d);if(-1===e)throw Error(c.input+" selector missing ')'");c=a.slice(d,e+1);a=a.replace(c,"\ue000");b.push(c)}return{sa:a,matches:b}}function vg(a,b){var c=a.split("\ue000");return b.reduce(function(a,b,f){return a+b+c[f+1]},c[0])}
eg.prototype.b=function(a,b,c){var d=!1;a=a.trim();var e=sg.test(a);e&&(a=a.replace(sg,function(a,b,c){return":"+b+"("+c.replace(/\s/g,"")+")"}),a=rg(a));var f=ug.test(a);if(f){var g=tg(a);a=g.sa;g=g.matches}a=a.replace(wg,xg+" $1");a=a.replace(yg,function(a,e,f){d||(a=zg(f,e,b,c),d=d||a.stop,e=a.Oa,f=a.value);return e+f});f&&(a=vg(a,g));e&&(a=rg(a));return a};
function zg(a,b,c,d){var e=a.indexOf(Ag);0<=a.indexOf(xg)?a=Bg(a,d):0!==e&&(a=c?Cg(a,c):a);c=!1;0<=e&&(b="",c=!0);if(c){var f=!0;c&&(a=a.replace(Dg,function(a,b){return" > "+b}))}a=a.replace(Eg,function(a,b,c){return'[dir="'+c+'"] '+b+", "+b+'[dir="'+c+'"]'});return{value:a,Oa:b,stop:f}}function Cg(a,b){a=a.split(Fg);a[0]+=b;return a.join(Fg)}
function Bg(a,b){var c=a.match(Gg);return(c=c&&c[2].trim()||"")?c[0].match(Hg)?a.replace(Gg,function(a,c,f){return b+f}):c.split(Hg)[0]===b?c:Ig:a.replace(xg,b)}function Jg(a){a.selector===Kg&&(a.selector="html")}eg.prototype.c=function(a){return a.match(xg)?"":a.match(Ag)?this.b(a,Lg):Cg(a.trim(),Lg)};fa.Object.defineProperties(eg.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"style-scope"}}});
var sg=/:(nth[-\w]+)\(([^)]+)\)/,Lg=":not(.style-scope)",qg=",",yg=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,Hg=/[[.:#*]/,xg=":host",Kg=":root",Ag="::slotted",wg=new RegExp("^("+Ag+")"),Gg=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Dg=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Eg=/(.*):dir\((?:(ltr|rtl))\)/,og=".",Fg=":",ig="class",Ig="should_not_match",ug=/:(?:matches|any|-(?:webkit|moz)-any)/,W=new eg;function Mg(a,b,c,d,e){this.M=a||null;this.b=b||null;this.c=c||[];this.T=null;this.da=e||"";this.X=d||"";this.a=this.I=this.O=null}function X(a){return a?a.__styleInfo:null}function Ng(a,b){return a.__styleInfo=b}Mg.prototype.f=function(){return this.M};Mg.prototype._getStyleRules=Mg.prototype.f;function Og(a){var b=this.matches||this.matchesSelector||this.mozMatchesSelector||this.msMatchesSelector||this.oMatchesSelector||this.webkitMatchesSelector;return b&&b.call(this,a)}var Pg=navigator.userAgent.match("Trident");function Qg(){}function Rg(a){var b={},c=[],d=0;Sf(a,function(a){Sg(a);a.index=d++;a=a.B.cssText;for(var c;c=Mf.exec(a);){var e=c[1];":"!==c[2]&&(b[e]=!0)}},function(a){c.push(a)});a.b=c;a=[];for(var e in b)a.push(e);return a}
function Sg(a){if(!a.B){var b={},c={};Tg(a,c)&&(b.L=c,a.rules=null);b.cssText=a.parsedCssText.replace(Pf,"").replace(Kf,"");a.B=b}}function Tg(a,b){var c=a.B;if(c){if(c.L)return Object.assign(b,c.L),!0}else{c=a.parsedCssText;for(var d;a=Kf.exec(c);){d=(a[2]||a[3]).trim();if("inherit"!==d||"unset"!==d)b[a[1].trim()]=d;d=!0}return d}}
function Ug(a,b,c){b&&(b=0<=b.indexOf(";")?Vg(a,b,c):$f(b,function(b,e,f,g){if(!e)return b+g;(e=Ug(a,c[e],c))&&"initial"!==e?"apply-shim-inherit"===e&&(e="inherit"):e=Ug(a,c[f]||f,c)||f;return b+(e||"")+g}));return b&&b.trim()||""}
function Vg(a,b,c){b=b.split(";");for(var d=0,e,f;d<b.length;d++)if(e=b[d]){Lf.lastIndex=0;if(f=Lf.exec(e))e=Ug(a,c[f[1]],c);else if(f=e.indexOf(":"),-1!==f){var g=e.substring(f);g=g.trim();g=Ug(a,g,c)||g;e=e.substring(0,f)+g}b[d]=e&&e.lastIndexOf(";")===e.length-1?e.slice(0,-1):e||""}return b.join(";")}
function Wg(a,b){var c={},d=[];Sf(a,function(a){a.B||Sg(a);var e=a.F||a.parsedSelector;b&&a.B.L&&e&&Og.call(b,e)&&(Tg(a,c),a=a.index,e=parseInt(a/32,10),d[e]=(d[e]||0)|1<<a%32)},null,!0);return{L:c,key:d}}
function Xg(a,b,c,d){b.B||Sg(b);if(b.B.L){var e=bg(a);a=e.is;e=e.X;e=a?ng(a,e):"html";var f=b.parsedSelector,g=":host > *"===f||"html"===f,h=0===f.indexOf(":host")&&!g;"shady"===c&&(g=f===e+" > *."+e||-1!==f.indexOf("html"),h=!g&&0===f.indexOf(e));if(g||h)c=e,h&&(b.F||(b.F=pg(W,b,W.b,a?og+a:"",e)),c=b.F||e),d({sa:c,Va:h,vb:g})}}function Yg(a,b,c){var d={},e={};Sf(b,function(b){Xg(a,b,c,function(c){Og.call(a.lb||a,c.sa)&&(c.Va?Tg(b,d):Tg(b,e))})},null,!0);return{Za:e,Ta:d}}
function Zg(a,b,c,d){var e=bg(b),f=ng(e.is,e.X),g=new RegExp("(?:^|[^.#[:])"+(b.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])"),h=X(b);e=h.M;h=h.da;var k=$g(e,d);return lg(b,e,function(b){var e="";b.B||Sg(b);b.B.cssText&&(e=Vg(a,b.B.cssText,c));b.cssText=e;if(!T&&!Uf(b)&&b.cssText){var h=e=b.cssText;null==b.xa&&(b.xa=Nf.test(e));if(b.xa)if(null==b.ga){b.ga=[];for(var l in k)h=k[l],h=h(e),e!==h&&(e=h,b.ga.push(l))}else{for(l=0;l<b.ga.length;++l)h=k[b.ga[l]],e=h(e);h=e}b.cssText=h;b.F=b.F||b.selector;
e="."+d;l=cg(b.F);h=0;for(var u=l.length,w=void 0;h<u&&(w=l[h]);h++)l[h]=w.match(g)?w.replace(f,e):e+" "+w;b.selector=l.join(",")}},h)}function $g(a,b){a=a.b;var c={};if(!T&&a)for(var d=0,e=a[d];d<a.length;e=a[++d]){var f=e,g=b;f.f=new RegExp("\\b"+f.keyframesName+"(?!\\B|-)","g");f.a=f.keyframesName+"-"+g;f.F=f.F||f.selector;f.selector=f.F.replace(f.keyframesName,f.a);c[e.keyframesName]=ah(e)}return c}function ah(a){return function(b){return b.replace(a.f,a.a)}}
function bh(a,b){var c=ch,d=Tf(a);a.textContent=Rf(d,function(a){var d=a.cssText=a.parsedCssText;a.B&&a.B.cssText&&(d=d.replace(Ef,"").replace(Ff,""),a.cssText=Vg(c,d,b))})}fa.Object.defineProperties(Qg.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"x-scope"}}});var ch=new Qg;var dh={},eh=window.customElements;if(eh&&!T){var fh=eh.define;eh.define=function(a,b,c){dh[a]||(dh[a]=Yf(a));fh.call(eh,a,b,c)}};function gh(){this.cache={}}gh.prototype.store=function(a,b,c,d){var e=this.cache[a]||[];e.push({L:b,styleElement:c,I:d});100<e.length&&e.shift();this.cache[a]=e};gh.prototype.fetch=function(a,b,c){if(a=this.cache[a])for(var d=a.length-1;0<=d;d--){var e=a[d],f;a:{for(f=0;f<c.length;f++){var g=c[f];if(e.L[g]!==b[g]){f=!1;break a}}f=!0}if(f)return e}};function hh(){}function ih(a){var b=[];a.classList?b=Array.from(a.classList):a instanceof window.SVGElement&&a.hasAttribute("class")&&(b=a.getAttribute("class").split(/\s+/));a=b;b=a.indexOf(W.a);return-1<b?a[b+1]:""}function jh(a){var b=a.getRootNode();return b===a||b===a.ownerDocument?"":(a=b.host)?bg(a).is:""}
function kh(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];if(e.nodeType===Node.ELEMENT_NODE){var f=e.getRootNode(),g=ih(e);if(g&&f===e.ownerDocument&&("style"!==e.localName&&"template"!==e.localName||""===dg(e)))kg(e,g);else if(f instanceof ShadowRoot)for(f=jh(e),f!==g&&jg(e,g,f),e=window.ShadyDOM.nativeMethods.querySelectorAll.call(e,":not(."+W.a+")"),g=0;g<e.length;g++){f=e[g];
var h=jh(f);h&&hg(f,h)}}}}}
if(!(T||window.ShadyDOM&&window.ShadyDOM.handlesDynamicScoping)){var lh=new MutationObserver(kh),mh=function(a){lh.observe(a,{childList:!0,subtree:!0})};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)mh(document);else{var nh=function(){mh(document.body)};window.HTMLImports?window.HTMLImports.whenReady(nh):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function(){nh();document.removeEventListener("readystatechange",a)};document.addEventListener("readystatechange",
a)}else nh()})}hh=function(){kh(lh.takeRecords())}}var oh=hh;var ph={};var qh=Promise.resolve();function rh(a){if(a=ph[a])a._applyShimCurrentVersion=a._applyShimCurrentVersion||0,a._applyShimValidatingVersion=a._applyShimValidatingVersion||0,a._applyShimNextVersion=(a._applyShimNextVersion||0)+1}function sh(a){return a._applyShimCurrentVersion===a._applyShimNextVersion}function th(a){a._applyShimValidatingVersion=a._applyShimNextVersion;a.b||(a.b=!0,qh.then(function(){a._applyShimCurrentVersion=a._applyShimNextVersion;a.b=!1}))};var uh=new gh;function Y(){this.G={};this.c=document.documentElement;var a=new pf;a.rules=[];this.f=Ng(this.c,new Mg(a));this.m=!1;this.b=this.a=null}r=Y.prototype;r.flush=function(){oh()};r.Ra=function(a){return Tf(a)};r.cb=function(a){return Rf(a)};r.prepareTemplate=function(a,b,c){this.prepareTemplateDom(a,b);this.prepareTemplateStyles(a,b,c)};
r.prepareTemplateStyles=function(a,b,c){if(!a.m){T||dh[b]||(dh[b]=Yf(b));a.m=!0;a.name=b;a.extends=c;ph[b]=a;var d=dg(a);var e=[];for(var f=a.content.querySelectorAll("style"),g=0;g<f.length;g++){var h=f[g];if(h.hasAttribute("shady-unscoped")){if(!T){var k=h.textContent;Qf.has(k)||(Qf.add(k),k=h.cloneNode(!0),document.head.appendChild(k));h.parentNode.removeChild(h)}}else e.push(h.textContent),h.parentNode.removeChild(h)}e=e.join("").trim();c={is:b,extends:c};vh(this);if(f=""===dg(a))f=Lf.test(e)||
Kf.test(e),Lf.lastIndex=0,Kf.lastIndex=0;e=qf(e);f&&V&&this.a&&this.a.transformRules(e,b);a._styleAst=e;e=[];V||(e=Rg(a._styleAst));if(!e.length||V)f=T?a.content:null,b=dh[b]||null,d=lg(c,a._styleAst,null,d),d=d.length?Vf(d,c.is,f,b):void 0,a.a=d;a.f=e}};r.prepareTemplateDom=function(a,b){var c=dg(a);T||"shady"===c||a.c||(a.c=!0,fg(a.content,b))};
function wh(a){!a.b&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(a.b=window.ShadyCSS.CustomStyleInterface,a.b.transformCallback=function(b){a.Aa(b)},a.b.validateCallback=function(){requestAnimationFrame(function(){(a.b.enqueued||a.m)&&a.flushCustomStyles()})})}function vh(a){!a.a&&window.ShadyCSS&&window.ShadyCSS.ApplyShim&&(a.a=window.ShadyCSS.ApplyShim,a.a.invalidCallback=rh);wh(a)}
r.flushCustomStyles=function(){vh(this);if(this.b){var a=this.b.processStyles();if(this.b.enqueued){if(V)for(var b=0;b<a.length;b++){var c=this.b.getStyleForCustomStyle(a[b]);if(c&&V&&this.a){var d=Tf(c);vh(this);this.a.transformRules(d);c.textContent=Rf(d)}}else for(xh(this,this.c,this.f),b=0;b<a.length;b++)(c=this.b.getStyleForCustomStyle(a[b]))&&bh(c,this.f.O);this.b.enqueued=!1;this.m&&!V&&this.styleDocument()}}};
r.styleElement=function(a,b){var c=X(a);if(!c){var d=bg(a);c=d.is;d=d.X;var e=dh[c]||null;c=ph[c];if(c){var f=c._styleAst;var g=c.f;var h=dg(c)}f=new Mg(f,e,g,d,h);c&&Ng(a,f);c=f}a!==this.c&&(this.m=!0);b&&(c.T=c.T||{},Object.assign(c.T,b));if(V){b=c;f=bg(a).is;if(b.T){g=b.T;for(var k in g)null===k?a.style.removeProperty(k):a.style.setProperty(k,g[k])}if(!(!(k=ph[f])&&a!==this.c||k&&""!==dg(k))&&k&&k.a&&!sh(k)){if(sh(k)||k._applyShimValidatingVersion!==k._applyShimNextVersion)vh(this),this.a&&this.a.transformRules(k._styleAst,
f),k.a.textContent=lg(a,b.M),th(k);T&&(f=a.shadowRoot)&&(f=f.querySelector("style"))&&(f.textContent=lg(a,b.M));b.M=k._styleAst}}else if(k=c,this.flush(),xh(this,a,k),k.c&&k.c.length){b=bg(a).is;c=(f=uh.fetch(b,k.O,k.c))?f.styleElement:null;g=k.I;(h=f&&f.I)||(h=this.G[b]=(this.G[b]||0)+1,h=b+"-"+h);k.I=h;h=k.I;d=ch;d=c?c.textContent||"":Zg(d,a,k.O,h);e=X(a);var l=e.a;l&&!T&&l!==c&&(l._useCount--,0>=l._useCount&&l.parentNode&&l.parentNode.removeChild(l));T?e.a?(e.a.textContent=d,c=e.a):d&&(c=Vf(d,
h,a.shadowRoot,e.b)):c?c.parentNode||(Pg&&-1<d.indexOf("@media")&&(c.textContent=d),Wf(c,null,e.b)):d&&(c=Vf(d,h,null,e.b));c&&(c._useCount=c._useCount||0,e.a!=c&&c._useCount++,e.a=c);h=c;T||(c=k.I,e=d=a.getAttribute("class")||"",g&&(e=d.replace(new RegExp("\\s*x-scope\\s*"+g+"\\s*","g")," ")),e+=(e?" ":"")+"x-scope "+c,d!==e&&ag(a,e));f||uh.store(b,k.O,h,k.I)}};function yh(a,b){return(b=b.getRootNode().host)?X(b)?b:yh(a,b):a.c}
function xh(a,b,c){a=yh(a,b);var d=X(a);a=Object.create(d.O||null);var e=Yg(b,c.M,c.da);b=Wg(d.M,b).L;Object.assign(a,e.Ta,b,e.Za);b=c.T;for(var f in b)if((e=b[f])||0===e)a[f]=e;f=ch;b=Object.getOwnPropertyNames(a);for(e=0;e<b.length;e++)d=b[e],a[d]=Ug(f,a[d],a);c.O=a}r.styleDocument=function(a){this.styleSubtree(this.c,a)};
r.styleSubtree=function(a,b){var c=a.shadowRoot;(c||a===this.c)&&this.styleElement(a,b);if(b=c&&(c.children||c.childNodes))for(a=0;a<b.length;a++)this.styleSubtree(b[a]);else if(a=a.children||a.childNodes)for(b=0;b<a.length;b++)this.styleSubtree(a[b])};
r.Aa=function(a){var b=this,c=Tf(a),d=dg(a);d!==this.f.da&&(this.f.da=d);Sf(c,function(a){if(T)Jg(a);else{var c=W;a.selector=a.parsedSelector;Jg(a);a.selector=a.F=pg(c,a,c.c,void 0,void 0)}V&&""===d&&(vh(b),b.a&&b.a.transformRule(a))});V?a.textContent=Rf(c):this.f.M.rules.push(c)};r.getComputedStyleValue=function(a,b){var c;V||(c=(X(a)||X(yh(this,a))).O[b]);return(c=c||window.getComputedStyle(a).getPropertyValue(b))?c.trim():""};
r.bb=function(a,b){var c=a.getRootNode();b=b?b.split(/\s/):[];c=c.host&&c.host.localName;if(!c){var d=a.getAttribute("class");if(d){d=d.split(/\s/);for(var e=0;e<d.length;e++)if(d[e]===W.a){c=d[e+1];break}}}c&&b.push(W.a,c);V||(c=X(a))&&c.I&&b.push(ch.a,c.I);ag(a,b.join(" "))};r.La=function(a){return X(a)};r.ab=function(a,b){hg(a,b)};r.eb=function(a,b){hg(a,b,!0)};r.$a=function(a){return jh(a)};r.Pa=function(a){return ih(a)};Y.prototype.flush=Y.prototype.flush;Y.prototype.prepareTemplate=Y.prototype.prepareTemplate;
Y.prototype.styleElement=Y.prototype.styleElement;Y.prototype.styleDocument=Y.prototype.styleDocument;Y.prototype.styleSubtree=Y.prototype.styleSubtree;Y.prototype.getComputedStyleValue=Y.prototype.getComputedStyleValue;Y.prototype.setElementClass=Y.prototype.bb;Y.prototype._styleInfoForNode=Y.prototype.La;Y.prototype.transformCustomStyleForDocument=Y.prototype.Aa;Y.prototype.getStyleAst=Y.prototype.Ra;Y.prototype.styleAstToString=Y.prototype.cb;Y.prototype.flushCustomStyles=Y.prototype.flushCustomStyles;
Y.prototype.scopeNode=Y.prototype.ab;Y.prototype.unscopeNode=Y.prototype.eb;Y.prototype.scopeForNode=Y.prototype.$a;Y.prototype.currentScopeForNode=Y.prototype.Pa;Object.defineProperties(Y.prototype,{nativeShadow:{get:function(){return T}},nativeCss:{get:function(){return V}}});var Z=new Y,zh,Ah;window.ShadyCSS&&(zh=window.ShadyCSS.ApplyShim,Ah=window.ShadyCSS.CustomStyleInterface);
window.ShadyCSS={ScopingShim:Z,prepareTemplate:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplate(a,b,c)},prepareTemplateDom:function(a,b){Z.prepareTemplateDom(a,b)},prepareTemplateStyles:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplateStyles(a,b,c)},styleSubtree:function(a,b){Z.flushCustomStyles();Z.styleSubtree(a,b)},styleElement:function(a){Z.flushCustomStyles();Z.styleElement(a)},styleDocument:function(a){Z.flushCustomStyles();Z.styleDocument(a)},flushCustomStyles:function(){Z.flushCustomStyles()},
getComputedStyleValue:function(a,b){return Z.getComputedStyleValue(a,b)},nativeCss:V,nativeShadow:T};zh&&(window.ShadyCSS.ApplyShim=zh);Ah&&(window.ShadyCSS.CustomStyleInterface=Ah);(function(a){function b(a){""==a&&(f.call(this),this.i=!0);return a.toLowerCase()}function c(a){var b=a.charCodeAt(0);return 32<b&&127>b&&-1==[34,35,60,62,63,96].indexOf(b)?a:encodeURIComponent(a)}function d(a){var b=a.charCodeAt(0);return 32<b&&127>b&&-1==[34,35,60,62,96].indexOf(b)?a:encodeURIComponent(a)}function e(a,e,g){function h(a){ba.push(a)}var k=e||"scheme start",w=0,q="",u=!1,R=!1,ba=[];a:for(;(void 0!=a[w-1]||0==w)&&!this.i;){var m=a[w];switch(k){case "scheme start":if(m&&p.test(m))q+=
m.toLowerCase(),k="scheme";else if(e){h("Invalid scheme.");break a}else{q="";k="no scheme";continue}break;case "scheme":if(m&&G.test(m))q+=m.toLowerCase();else if(":"==m){this.h=q;q="";if(e)break a;void 0!==l[this.h]&&(this.D=!0);k="file"==this.h?"relative":this.D&&g&&g.h==this.h?"relative or authority":this.D?"authority first slash":"scheme data"}else if(e){void 0!=m&&h("Code point not allowed in scheme: "+m);break a}else{q="";w=0;k="no scheme";continue}break;case "scheme data":"?"==m?(this.u="?",
k="query"):"#"==m?(this.C="#",k="fragment"):void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.pa+=c(m));break;case "no scheme":if(g&&void 0!==l[g.h]){k="relative";continue}else h("Missing scheme."),f.call(this),this.i=!0;break;case "relative or authority":if("/"==m&&"/"==a[w+1])k="authority ignore slashes";else{h("Expected /, got: "+m);k="relative";continue}break;case "relative":this.D=!0;"file"!=this.h&&(this.h=g.h);if(void 0==m){this.j=g.j;this.s=g.s;this.l=g.l.slice();this.u=g.u;this.v=g.v;this.g=g.g;
break a}else if("/"==m||"\\"==m)"\\"==m&&h("\\ is an invalid code point."),k="relative slash";else if("?"==m)this.j=g.j,this.s=g.s,this.l=g.l.slice(),this.u="?",this.v=g.v,this.g=g.g,k="query";else if("#"==m)this.j=g.j,this.s=g.s,this.l=g.l.slice(),this.u=g.u,this.C="#",this.v=g.v,this.g=g.g,k="fragment";else{k=a[w+1];var y=a[w+2];if("file"!=this.h||!p.test(m)||":"!=k&&"|"!=k||void 0!=y&&"/"!=y&&"\\"!=y&&"?"!=y&&"#"!=y)this.j=g.j,this.s=g.s,this.v=g.v,this.g=g.g,this.l=g.l.slice(),this.l.pop();k=
"relative path";continue}break;case "relative slash":if("/"==m||"\\"==m)"\\"==m&&h("\\ is an invalid code point."),k="file"==this.h?"file host":"authority ignore slashes";else{"file"!=this.h&&(this.j=g.j,this.s=g.s,this.v=g.v,this.g=g.g);k="relative path";continue}break;case "authority first slash":if("/"==m)k="authority second slash";else{h("Expected '/', got: "+m);k="authority ignore slashes";continue}break;case "authority second slash":k="authority ignore slashes";if("/"!=m){h("Expected '/', got: "+
m);continue}break;case "authority ignore slashes":if("/"!=m&&"\\"!=m){k="authority";continue}else h("Expected authority, got: "+m);break;case "authority":if("@"==m){u&&(h("@ already seen."),q+="%40");u=!0;for(m=0;m<q.length;m++)y=q[m],"\t"==y||"\n"==y||"\r"==y?h("Invalid whitespace in authority."):":"==y&&null===this.g?this.g="":(y=c(y),null!==this.g?this.g+=y:this.v+=y);q=""}else if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){w-=q.length;q="";k="host";continue}else q+=m;break;case "file host":if(void 0==
m||"/"==m||"\\"==m||"?"==m||"#"==m){2!=q.length||!p.test(q[0])||":"!=q[1]&&"|"!=q[1]?(0!=q.length&&(this.j=b.call(this,q),q=""),k="relative path start"):k="relative path";continue}else"\t"==m||"\n"==m||"\r"==m?h("Invalid whitespace in file host."):q+=m;break;case "host":case "hostname":if(":"!=m||R)if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){this.j=b.call(this,q);q="";k="relative path start";if(e)break a;continue}else"\t"!=m&&"\n"!=m&&"\r"!=m?("["==m?R=!0:"]"==m&&(R=!1),q+=m):h("Invalid code point in host/hostname: "+
m);else if(this.j=b.call(this,q),q="",k="port","hostname"==e)break a;break;case "port":if(/[0-9]/.test(m))q+=m;else if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m||e){""!=q&&(q=parseInt(q,10),q!=l[this.h]&&(this.s=q+""),q="");if(e)break a;k="relative path start";continue}else"\t"==m||"\n"==m||"\r"==m?h("Invalid code point in port: "+m):(f.call(this),this.i=!0);break;case "relative path start":"\\"==m&&h("'\\' not allowed in path.");k="relative path";if("/"!=m&&"\\"!=m)continue;break;case "relative path":if(void 0!=
m&&"/"!=m&&"\\"!=m&&(e||"?"!=m&&"#"!=m))"\t"!=m&&"\n"!=m&&"\r"!=m&&(q+=c(m));else{"\\"==m&&h("\\ not allowed in relative path.");if(y=n[q.toLowerCase()])q=y;".."==q?(this.l.pop(),"/"!=m&&"\\"!=m&&this.l.push("")):"."==q&&"/"!=m&&"\\"!=m?this.l.push(""):"."!=q&&("file"==this.h&&0==this.l.length&&2==q.length&&p.test(q[0])&&"|"==q[1]&&(q=q[0]+":"),this.l.push(q));q="";"?"==m?(this.u="?",k="query"):"#"==m&&(this.C="#",k="fragment")}break;case "query":e||"#"!=m?void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.u+=
d(m)):(this.C="#",k="fragment");break;case "fragment":void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.C+=m)}w++}}function f(){this.v=this.pa=this.h="";this.g=null;this.s=this.j="";this.l=[];this.C=this.u="";this.D=this.i=!1}function g(a,b){void 0===b||b instanceof g||(b=new g(String(b)));this.Ma=a;f.call(this);a=a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");e.call(this,a,null,b)}var h=!1;if(!a.rb)try{var k=new URL("b","http://a");k.pathname="c%20d";h="http://a/c%20d"===k.href}catch(w){}if(!h){var l=Object.create(null);
l.ftp=21;l.file=0;l.gopher=70;l.http=80;l.https=443;l.ws=80;l.wss=443;var n=Object.create(null);n["%2e"]=".";n[".%2e"]="..";n["%2e."]="..";n["%2e%2e"]="..";var p=/[a-zA-Z]/,G=/[a-zA-Z0-9\+\-\.]/;g.prototype={toString:function(){return this.href},get href(){if(this.i)return this.Ma;var a="";if(""!=this.v||null!=this.g)a=this.v+(null!=this.g?":"+this.g:"")+"@";return this.protocol+(this.D?"//"+a+this.host:"")+this.pathname+this.u+this.C},set href(a){f.call(this);e.call(this,a)},get protocol(){return this.h+
":"},set protocol(a){this.i||e.call(this,a+":","scheme start")},get host(){return this.i?"":this.s?this.j+":"+this.s:this.j},set host(a){!this.i&&this.D&&e.call(this,a,"host")},get hostname(){return this.j},set hostname(a){!this.i&&this.D&&e.call(this,a,"hostname")},get port(){return this.s},set port(a){!this.i&&this.D&&e.call(this,a,"port")},get pathname(){return this.i?"":this.D?"/"+this.l.join("/"):this.pa},set pathname(a){!this.i&&this.D&&(this.l=[],e.call(this,a,"relative path start"))},get search(){return this.i||
!this.u||"?"==this.u?"":this.u},set search(a){!this.i&&this.D&&(this.u="?","?"==a[0]&&(a=a.slice(1)),e.call(this,a,"query"))},get hash(){return this.i||!this.C||"#"==this.C?"":this.C},set hash(a){this.i||(this.C="#","#"==a[0]&&(a=a.slice(1)),e.call(this,a,"fragment"))},get origin(){var a;if(this.i||!this.h)return"";switch(this.h){case "data":case "file":case "javascript":case "mailto":return"null"}return(a=this.host)?this.h+"://"+a:""}};var u=a.URL;u&&(g.createObjectURL=function(a){return u.createObjectURL.apply(u,
arguments)},g.revokeObjectURL=function(a){u.revokeObjectURL(a)});a.URL=g}})(window);Object.getOwnPropertyDescriptor(Node.prototype,"baseURI")||Object.defineProperty(Node.prototype,"baseURI",{get:function(){var a=(this.ownerDocument||this).querySelector("base[href]");return a&&a.href||window.location.href},configurable:!0,enumerable:!0});var Bh=document.createElement("style");Bh.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var Ch=document.querySelector("head");Ch.insertBefore(Bh,Ch.firstChild);var Dh=window.customElements,Eh=!1,Fh=null;Dh.polyfillWrapFlushCallback&&Dh.polyfillWrapFlushCallback(function(a){Fh=a;Eh&&a()});function Gh(){window.HTMLTemplateElement.bootstrap&&window.HTMLTemplateElement.bootstrap(window.document);Fh&&Fh();Eh=!0;window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}
"complete"!==document.readyState?(window.addEventListener("load",Gh),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",Gh);Gh()})):Gh();}).call(this);

//# sourceMappingURL=webcomponents-bundle.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "ec9d":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n:first-child .ListCategories_list-group-item_ziC4e:first-of-type{border-top:0\n}\n:last-child .ListCategories_list-group-item_ziC4e:last-of-type{border-bottom:0\n}\n.ListCategories_minidesk-widget-list-categories__icon_2nyDX{height:45px;width:45px;border-radius:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center\n}\n.ListCategories_minidesk-widget-list-categories__title_sc1rO{color:#293549;font-size:19px;font-weight:500;line-height:24px\n}", ""]);

// exports
exports.locals = {
	"list-group-item": "ListCategories_list-group-item_ziC4e",
	"minidesk-widget-list-categories__icon": "ListCategories_minidesk-widget-list-categories__icon_2nyDX",
	"minidesk-widget-list-categories__title": "ListCategories_minidesk-widget-list-categories__title_sc1rO"
};

/***/ }),

/***/ "fa17":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/CircularStd-Medium.381f87a9.woff";

/***/ }),

/***/ "fb10":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("23c8");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("42c68541", content, shadowRoot)
};

/***/ })

/******/ });
//# sourceMappingURL=minidesk-widget.js.map