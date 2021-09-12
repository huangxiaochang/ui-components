(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/search.md?vue&type=template&id=544dfd29

var searchvue_type_template_id_544dfd29_hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("h2", {
  id: "search-sou-suo-dan-kuang"
}, [/*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#search-sou-suo-dan-kuang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["l" /* createTextVNode */])(" Search 搜索弹框")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("h3", {
  id: "ding-lan"
}, [/*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ding-lan"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["l" /* createTextVNode */])(" 顶栏")], -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("p", null, "适用广泛的基础用法。", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("p", null, "默认的Search弹框")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("code", {
  class: "html"
}, "<hkust-search v-model=\"show\"></hkust-search>\n<button @click=\"handleOpen\">open</button>\n<div class=\"line\"></div>\n\n<script>\n  export default {\n    data() {\n      return {\n        show: false\n      };\n    },\n    methods: {\n      handleOpen () {\n        this.show = true\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("h3", {
  id: "mei-you-mo-hu-xiao-guo-de-fu-gai-ceng"
}, [/*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#mei-you-mo-hu-xiao-guo-de-fu-gai-ceng"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["l" /* createTextVNode */])(" 没有模糊效果的覆盖层")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("p", null, "mode=\"vertical\"")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("code", {
  class: "html"
}, "<hkust-search v-model=\"show\" :vague=\"false\"></hkust-search>\n<button @click=\"handleOpen\">open</button>\n\n<div class=\"line\"></div>\n\n<script>\n  export default {\n    data() {\n      return {\n        show: false\n      };\n    },\n    methods: {\n      handleOpen () {\n        this.show = true\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("h3", {
  id: "yan-chi-da-kai-he-guan-bi"
}, [/*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yan-chi-da-kai-he-guan-bi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["l" /* createTextVNode */])(" 延迟打开和关闭")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("p", null, "mode=\"vertical\"")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("code", {
  class: "html"
}, "<hkust-search v-model=\"show\" :openDelay=\"1000\" :closeDelay=\"1000\"></hkust-search>\n<button @click=\"handleOpen\">open</button>\n\n<div class=\"line\"></div>\n\n<script>\n  export default {\n    data() {\n      return {\n        show: false\n      };\n    },\n    methods: {\n      handleOpen () {\n        this.show = true\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["k" /* createStaticVNode */])("<h3 id=\"menu-attribute\"><a class=\"header-anchor\" href=\"#menu-attribute\">¶</a> Menu Attribute</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>mode</td><td>模式</td><td>string</td><td>horizontal / vertical</td><td>vertical</td></tr><tr><td>collapse</td><td>是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>background-color</td><td>菜单的背景色（仅支持 hex 格式）</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>text-color</td><td>菜单的文字颜色（仅支持 hex 格式）</td><td>string</td><td>—</td><td>#303133</td></tr><tr><td>active-text-color</td><td>当前激活菜单的文字颜色（仅支持 hex 格式）</td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>default-active</td><td>当前激活菜单的 index</td><td>string</td><td>—</td><td>—</td></tr><tr><td>default-openeds</td><td>当前打开的 sub-menu 的 index 的数组</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>unique-opened</td><td>是否只保持一个子菜单的展开</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>menu-trigger</td><td>子菜单打开的触发方式(只在 mode 为 horizontal 时有效)</td><td>string</td><td>hover / click</td><td>hover</td></tr><tr><td>router</td><td>是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-transition</td><td>是否开启折叠动画</td><td>boolean</td><td>—</td><td>true</td></tr></tbody></table><h3 id=\"menu-methods\"><a class=\"header-anchor\" href=\"#menu-methods\">¶</a> Menu Methods</h3><table><thead><tr><th>方法名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>open</td><td>展开指定的 sub-menu</td><td>index: 需要打开的 sub-menu 的 index</td></tr><tr><td>close</td><td>收起指定的 sub-menu</td><td>index: 需要收起的 sub-menu 的 index</td></tr></tbody></table><h3 id=\"menu-events\"><a class=\"header-anchor\" href=\"#menu-events\">¶</a> Menu Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>select</td><td>菜单激活回调</td><td>index: 选中菜单项的 index, indexPath: 选中菜单项的 index path</td></tr><tr><td>open</td><td>sub-menu 展开的回调</td><td>index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path</td></tr><tr><td>close</td><td>sub-menu 收起的回调</td><td>index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path</td></tr></tbody></table><h3 id=\"submenu-attribute\"><a class=\"header-anchor\" href=\"#submenu-attribute\">¶</a> SubMenu Attribute</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>index</td><td>唯一标志</td><td>string/null</td><td>—</td><td>null</td></tr><tr><td>popper-class</td><td>弹出菜单的自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-timeout</td><td>展开 sub-menu 的延时</td><td>number</td><td>—</td><td>300</td></tr><tr><td>hide-timeout</td><td>收起 sub-menu 的延时</td><td>number</td><td>—</td><td>300</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性</td><td>boolean</td><td>—</td><td>一级子菜单：true / 非一级子菜单：false</td></tr></tbody></table><h3 id=\"menu-item-attribute\"><a class=\"header-anchor\" href=\"#menu-item-attribute\">¶</a> Menu-Item Attribute</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>index</td><td>唯一标志</td><td>string</td><td>—</td><td>—</td></tr><tr><td>route</td><td>Vue Router 路径对象</td><td>Object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"menu-group-attribute\"><a class=\"header-anchor\" href=\"#menu-group-attribute\">¶</a> Menu-Group Attribute</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>分组标题</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 12);

function searchvue_type_template_id_544dfd29_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["I" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["I" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["I" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["I" /* resolveComponent */])("element-demo2");

  var _component_right_nav = Object(vue_esm_browser["I" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["A" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", searchvue_type_template_id_544dfd29_hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, Object(vue_esm_browser["m" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["O" /* withCtx */])(function () {
      return [Object(vue_esm_browser["m" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["O" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["O" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["m" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["O" /* withCtx */])(function () {
      return [Object(vue_esm_browser["m" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["O" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["O" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["m" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["O" /* withCtx */])(function () {
      return [Object(vue_esm_browser["m" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["O" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    default: Object(vue_esm_browser["O" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["m" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/search.md?vue&type=template&id=544dfd29

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(1);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/search.md?vue&type=script&lang=ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ var searchvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["I" /* resolveComponent */],
          _createVNode = vue_esm_browser["m" /* createVNode */],
          _openBlock = vue_esm_browser["A" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "line"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_hkust_search = _resolveComponent("hkust-search");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_hkust_search, {
          modelValue: _ctx.show,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode("button", {
          onClick: _cache[2] || (_cache[2] = function () {
            return _ctx.handleOpen && _ctx.handleOpen.apply(_ctx, arguments);
          })
        }, "open"), _hoisted_1]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show: false
          };
        },
        methods: {
          handleOpen: function handleOpen() {
            this.show = true;
          }
        }
      };
      return _objectSpread({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser["I" /* resolveComponent */],
          _createVNode = vue_esm_browser["m" /* createVNode */],
          _openBlock = vue_esm_browser["A" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "line"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_hkust_search = _resolveComponent("hkust-search");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_hkust_search, {
          modelValue: _ctx.show,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show = $event;
          }),
          vague: false
        }, null, 8, ["modelValue"]), _createVNode("button", {
          onClick: _cache[2] || (_cache[2] = function () {
            return _ctx.handleOpen && _ctx.handleOpen.apply(_ctx, arguments);
          })
        }, "open"), _hoisted_1]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show: false
          };
        },
        methods: {
          handleOpen: function handleOpen() {
            this.show = true;
          }
        }
      };
      return _objectSpread({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser["I" /* resolveComponent */],
          _createVNode = vue_esm_browser["m" /* createVNode */],
          _openBlock = vue_esm_browser["A" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "line"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_hkust_search = _resolveComponent("hkust-search");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_hkust_search, {
          modelValue: _ctx.show,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show = $event;
          }),
          openDelay: 1000,
          closeDelay: 1000
        }, null, 8, ["modelValue"]), _createVNode("button", {
          onClick: _cache[2] || (_cache[2] = function () {
            return _ctx.handleOpen && _ctx.handleOpen.apply(_ctx, arguments);
          })
        }, "open"), _hoisted_1]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show: false
          };
        },
        methods: {
          handleOpen: function handleOpen() {
            this.show = true;
          }
        }
      };
      return _objectSpread({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/search.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/search.md



searchvue_type_script_lang_ts.render = searchvue_type_template_id_544dfd29_render

/* harmony default export */ var search = __webpack_exports__["default"] = (searchvue_type_script_lang_ts);

/***/ })

}]);