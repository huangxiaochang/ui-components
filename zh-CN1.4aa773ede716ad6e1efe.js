(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./website/pages/component.vue?vue&type=template&id=0d604057&scoped=true


var _withId = /*#__PURE__*/Object(vue_esm_browser["R" /* withScopeId */])("data-v-0d604057");

Object(vue_esm_browser["D" /* pushScopeId */])("data-v-0d604057");

var _hoisted_1 = {
  ref: "componentScrollBar",
  class: "page-component__scroll"
};
var _hoisted_2 = {
  class: "page-container page-component"
};
var _hoisted_3 = {
  class: "page-component__nav"
};
var _hoisted_4 = {
  class: "page-component__content"
};
var _hoisted_5 = {
  class: "content-wrap"
};

Object(vue_esm_browser["B" /* popScopeId */])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_side_nav = Object(vue_esm_browser["I" /* resolveComponent */])("side-nav");

  var _component_router_view = Object(vue_esm_browser["I" /* resolveComponent */])("router-view");

  var _component_footer_nav = Object(vue_esm_browser["I" /* resolveComponent */])("footer-nav");

  return Object(vue_esm_browser["A" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("div", _hoisted_1, [Object(vue_esm_browser["m" /* createVNode */])("div", _hoisted_2, [Object(vue_esm_browser["m" /* createVNode */])("div", _hoisted_3, [Object(vue_esm_browser["m" /* createVNode */])(_component_side_nav, {
    data: $data.navsData[$data.lang],
    base: "/".concat($data.lang, "/component")
  }, null, 8, ["data", "base"])]), Object(vue_esm_browser["m" /* createVNode */])("div", _hoisted_4, [Object(vue_esm_browser["m" /* createVNode */])("div", _hoisted_5, [Object(vue_esm_browser["m" /* createVNode */])(_component_router_view, {
    class: "content"
  })]), Object(vue_esm_browser["m" /* createVNode */])(_component_footer_nav)])])], 512);
});
// CONCATENATED MODULE: ./website/pages/component.vue?vue&type=template&id=0d604057&scoped=true

// EXTERNAL MODULE: ./website/nav.config.json
var nav_config = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./website/pages/component.vue?vue&type=script&lang=js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ var componentvue_type_script_lang_js = ({
  data: function data() {
    return {
      lang: this.$route.meta.lang,
      navsData: nav_config,
      scrollTop: 0,
      showHeader: true,
      componentScrollBar: null
    };
  },
  computed: {
    showBackToTop: function showBackToTop() {
      return !this.$route.path.match(/backtop/);
    }
  },
  watch: {
    '$route.path': function $routePath() {
      this.componentScrollBar.scrollTop = 0;
    }
  },
  mounted: function mounted() {
    this.componentScrollBar = this.$refs.componentScrollBar;
    document.body.classList.add('is-component');
    this.addContentObserver();
  },
  unmounted: function unmounted() {
    document.body.classList.remove('is-component');
  },
  beforeUnmount: function beforeUnmount() {
    this.observer.disconnect();
  },
  methods: {
    addContentObserver: function addContentObserver() {
      var _this = this;

      this.observer = new MutationObserver(function (mutationsList, _) {
        var _iterator = _createForOfIteratorHelper(mutationsList),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var mutation = _step.value;

            if (mutation.type === 'childList') {
              _this.renderAnchorHref();

              _this.goAnchor();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      this.observer.observe(document.querySelector('.content-wrap'), {
        childList: true
      });
    },
    renderAnchorHref: function renderAnchorHref() {
      if (/changelog/g.test(location.href)) return;
      var anchors = document.querySelectorAll('h2 a,h3 a,h4 a,h5 a');
      var basePath = location.href.split('#').splice(0, 2).join('#');
      [].slice.call(anchors).forEach(function (a) {
        var href = a.getAttribute('href');

        if (href.indexOf('#') === 0) {
          a.href = basePath + href;
        }
      });
    },
    goAnchor: function goAnchor() {
      var _this2 = this;

      if (location.href.match(/#/g).length > 1) {
        var anchor = location.href.match(/#[^#]+$/g);
        if (!anchor) return;
        var elm = document.querySelector(anchor[0]);
        if (!elm) return;
        setTimeout(function () {
          _this2.componentScrollBar.scrollTop = elm.offsetTop;
        }, 50);
      }
    }
  }
});
// CONCATENATED MODULE: ./website/pages/component.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./website/pages/component.vue?vue&type=style&index=0&id=0d604057&lang=scss&scoped=true
var componentvue_type_style_index_0_id_0d604057_lang_scss_scoped_true = __webpack_require__(285);

// CONCATENATED MODULE: ./website/pages/component.vue





componentvue_type_script_lang_js.render = render
componentvue_type_script_lang_js.__scopeId = "data-v-0d604057"

/* harmony default export */ var component = __webpack_exports__["default"] = (componentvue_type_script_lang_js);

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(286);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_vue_loader_dist_index_js_ref_11_0_component_vue_vue_type_style_index_0_id_0d604057_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(280);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_vue_loader_dist_index_js_ref_11_0_component_vue_vue_type_style_index_0_id_0d604057_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_vue_loader_dist_index_js_ref_11_0_component_vue_vue_type_style_index_0_id_0d604057_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);