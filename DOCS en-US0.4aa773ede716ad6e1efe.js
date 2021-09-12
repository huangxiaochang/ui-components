(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/menu.md?vue&type=template&id=4a0584d6

var menuvue_type_template_id_4a0584d6_hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("h2", {
  id: "navmenu"
}, [/*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#navmenu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["l" /* createTextVNode */])(" NavMenu")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("p", null, "Menu that provides navigation for your website.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("h3", {
  id: "top-bar"
}, [/*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#top-bar"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["l" /* createTextVNode */])(" Top bar")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("p", null, "Top bar NavMenu can be used in a variety of scenarios.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["l" /* createTextVNode */])("By default Menu is vertical, but you can change it to horizontal by setting the mode prop to 'horizontal'. In addition, you can use the submenu component to create a second level menu. Menu provides "), /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("code", null, "background-color"), /*#__PURE__*/Object(vue_esm_browser["l" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("code", null, "text-color"), /*#__PURE__*/Object(vue_esm_browser["l" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("code", null, "active-text-color"), /*#__PURE__*/Object(vue_esm_browser["l" /* createTextVNode */])(" to customize the colors.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("code", {
  class: "html"
}, "<hkust-menu :default-active=\"activeIndex\" class=\"el-menu-demo\" mode=\"horizontal\" @select=\"handleSelect\"></hkust-menu>\n<div class=\"line\"></div>\n\n<script>\n  export default {\n    data() {\n      return {\n        activeIndex: '1',\n        activeIndex2: '1'\n      };\n    },\n    methods: {\n      handleSelect(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("h3", {
  id: "side-bar"
}, [/*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#side-bar"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["l" /* createTextVNode */])(" Side bar")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("p", null, "Vertical NavMenu with sub-menus.", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("p", null, "You can use the el-menu-item-group component to create a menu group, and the name of the group is determined by the title prop or a named slot.")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("code", {
  class: "html"
}, "<hkust-menu :default-active=\"activeIndex\" class=\"el-menu-demo\" mode=\"horizontal\" @select=\"handleSelect\"></hkust-menu>\n\n<script>\n  export default {\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath);\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("h3", {
  id: "collapse"
}, [/*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#collapse"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["l" /* createTextVNode */])(" Collapse")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("p", null, "Vertical NavMenu could be collapsed.", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("code", {
  class: "html"
}, "\n<style>\n  .el-menu-vertical-demo:not(.el-menu--collapse) {\n    width: 200px;\n    min-height: 400px;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        isCollapse: true\n      };\n    },\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath);\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["k" /* createStaticVNode */])("<h3 id=\"menu-attributes\"><a class=\"header-anchor\" href=\"#menu-attributes\">¶</a> Menu Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>mode</td><td>menu display mode</td><td>string</td><td>horizontal / vertical</td><td>vertical</td></tr><tr><td>collapse</td><td>whether the menu is collapsed (available only in vertical mode)</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>background-color</td><td>background color of Menu (hex format)</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>text-color</td><td>text color of Menu (hex format)</td><td>string</td><td>—</td><td>#303133</td></tr><tr><td>active-text-color</td><td>text color of currently active menu item (hex format)</td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>default-active</td><td>index of currently active menu</td><td>string</td><td>—</td><td>—</td></tr><tr><td>default-openeds</td><td>array that contains indexes of currently active sub-menus</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>unique-opened</td><td>whether only one sub-menu can be active</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>menu-trigger</td><td>how sub-menus are triggered, only works when <code>mode</code> is &#39;horizontal&#39;</td><td>string</td><td>hover / click</td><td>hover</td></tr><tr><td>router</td><td>whether <code>vue-router</code> mode is activated. If true, index will be used as &#39;path&#39; to activate the route action</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-transition</td><td>whether to enable the collapse transition</td><td>boolean</td><td>—</td><td>true</td></tr></tbody></table><h3 id=\"menu-methods\"><a class=\"header-anchor\" href=\"#menu-methods\">¶</a> Menu Methods</h3><table><thead><tr><th>Methods Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>open</td><td>open a specific sub-menu</td><td>index: index of the sub-menu to open</td></tr><tr><td>close</td><td>close a specific sub-menu</td><td>index: index of the sub-menu to close</td></tr></tbody></table><h3 id=\"menu-events\"><a class=\"header-anchor\" href=\"#menu-events\">¶</a> Menu Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>select</td><td>callback function when menu is activated</td><td>index: index of activated menu, indexPath: index path of activated menu</td></tr><tr><td>open</td><td>callback function when sub-menu expands</td><td>index: index of expanded sub-menu, indexPath: index path of expanded sub-menu</td></tr><tr><td>close</td><td>callback function when sub-menu collapses</td><td>index: index of collapsed sub-menu, indexPath: index path of collapsed sub-menu</td></tr></tbody></table><h3 id=\"menu-item-events\"><a class=\"header-anchor\" href=\"#menu-item-events\">¶</a> Menu-Item Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>click</td><td>callback function when menu-item is clicked</td><td>el: menu-item instance</td></tr></tbody></table><h3 id=\"submenu-attributes\"><a class=\"header-anchor\" href=\"#submenu-attributes\">¶</a> Submenu Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>index</td><td>unique identification</td><td>string</td><td>—</td><td>—</td></tr><tr><td>popper-class</td><td>custom class name for the popup menu</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-timeout</td><td>timeout before showing a sub-menu</td><td>number</td><td>—</td><td>300</td></tr><tr><td>hide-timeout</td><td>timeout before hiding a sub-menu</td><td>number</td><td>—</td><td>300</td></tr><tr><td>disabled</td><td>whether the sub-menu is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>whether to append the popup menu to body. If the positioning of the menu is wrong, you can try setting this prop</td><td>boolean</td><td>-</td><td>level one Submenu: true / other Submenus: false</td></tr></tbody></table><h3 id=\"menu-item-attributes\"><a class=\"header-anchor\" href=\"#menu-item-attributes\">¶</a> Menu-Item Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>index</td><td>unique identification</td><td>string/null</td><td>—</td><td>null</td></tr><tr><td>route</td><td>Vue Router object</td><td>object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether disabled</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"menu-item-group-attributes\"><a class=\"header-anchor\" href=\"#menu-item-group-attributes\">¶</a> Menu-Item-Group Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>group title</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 14);

function menuvue_type_template_id_4a0584d6_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["I" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["I" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["I" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["I" /* resolveComponent */])("element-demo2");

  var _component_right_nav = Object(vue_esm_browser["I" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["A" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", menuvue_type_template_id_4a0584d6_hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["m" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["O" /* withCtx */])(function () {
      return [Object(vue_esm_browser["m" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["O" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["O" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["m" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["O" /* withCtx */])(function () {
      return [Object(vue_esm_browser["m" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["O" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["O" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser["m" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["O" /* withCtx */])(function () {
      return [Object(vue_esm_browser["m" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["O" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser["m" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/menu.md?vue&type=template&id=4a0584d6

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(1);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/menu.md?vue&type=script&lang=ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ var menuvue_type_script_lang_ts = ({
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
        var _component_hkust_menu = _resolveComponent("hkust-menu");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_hkust_menu, {
          "default-active": _ctx.activeIndex,
          class: "el-menu-demo",
          mode: "horizontal",
          onSelect: _ctx.handleSelect
        }, null, 8, ["default-active", "onSelect"]), _hoisted_1]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeIndex: '1',
            activeIndex2: '1'
          };
        },
        methods: {
          handleSelect: function handleSelect(key, keyPath) {
            console.log(key, keyPath);
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

      function render(_ctx, _cache) {
        var _component_hkust_menu = _resolveComponent("hkust-menu");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_hkust_menu, {
          "default-active": _ctx.activeIndex,
          class: "el-menu-demo",
          mode: "horizontal",
          onSelect: _ctx.handleSelect
        }, null, 8, ["default-active", "onSelect"])]);
      }

      var democomponentExport = {
        methods: {
          handleOpen: function handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose: function handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
      };
      return _objectSpread({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _openBlock = vue_esm_browser["A" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      function render(_ctx, _cache) {
        return _openBlock(), _createBlock("div");
      }

      var democomponentExport = {
        data: function data() {
          return {
            isCollapse: true
          };
        },
        methods: {
          handleOpen: function handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose: function handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
      };
      return _objectSpread({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/menu.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/menu.md



menuvue_type_script_lang_ts.render = menuvue_type_template_id_4a0584d6_render

/* harmony default export */ var menu = __webpack_exports__["default"] = (menuvue_type_script_lang_ts);

/***/ })

}]);