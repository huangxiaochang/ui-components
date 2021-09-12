(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./website/assets/images/theme-index-blue.png
/* harmony default export */ var theme_index_blue = (__webpack_require__.p + "static/theme-index-blue.8fbb67d.png");
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./website/pages/index.vue?vue&type=template&id=874642dc&scoped=true



var _withId = /*#__PURE__*/Object(vue_esm_browser["R" /* withScopeId */])("data-v-874642dc");

Object(vue_esm_browser["D" /* pushScopeId */])("data-v-874642dc");

var _hoisted_1 = {
  class: "banner"
};
var _hoisted_2 = {
  class: "banner-desc"
};

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["m" /* createVNode */])("img", {
  class: "theme-index-img",
  src: theme_index_blue,
  alt: ""
}, null, -1);

Object(vue_esm_browser["B" /* popScopeId */])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["A" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("div", _hoisted_1, [Object(vue_esm_browser["m" /* createVNode */])("div", _hoisted_2, [Object(vue_esm_browser["m" /* createVNode */])("h1", null, Object(vue_esm_browser["K" /* toDisplayString */])(_ctx.langConfig[1]), 1), Object(vue_esm_browser["m" /* createVNode */])("p", null, Object(vue_esm_browser["K" /* toDisplayString */])(_ctx.langConfig[2]), 1)]), _hoisted_3]);
});
// CONCATENATED MODULE: ./website/pages/index.vue?vue&type=template&id=874642dc&scoped=true

// EXTERNAL MODULE: ./website/i18n/page.json
var page = __webpack_require__(278);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./website/pages/index.vue?vue&type=script&lang=js


/* harmony default export */ var pagesvue_type_script_lang_js = (Object(vue_esm_browser["o" /* defineComponent */])({
  data: function data() {
    return {
      lang: this.$route.meta.lang
    };
  },
  computed: {
    langConfig: function langConfig() {
      var _this = this;

      return page.filter(function (config) {
        return config.lang === _this.lang;
      })[0].pages.index;
    }
  }
}));
// CONCATENATED MODULE: ./website/pages/index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./website/pages/index.vue?vue&type=style&index=0&id=874642dc&lang=scss&scoped=true
var pagesvue_type_style_index_0_id_874642dc_lang_scss_scoped_true = __webpack_require__(287);

// CONCATENATED MODULE: ./website/pages/index.vue





pagesvue_type_script_lang_js.render = render
pagesvue_type_script_lang_js.__scopeId = "data-v-874642dc"

/* harmony default export */ var pages = __webpack_exports__["default"] = (pagesvue_type_script_lang_js);

/***/ }),

/***/ 278:
/***/ (function(module) {

module.exports = JSON.parse("[{\"lang\":\"zh-CN\",\"pages\":{\"index\":{\"1\":\"网站快速成型工具\",\"2\":\"HKUST UI，一套为香港科技大学准备的基于 Vue 3.0 的桌面端组件库\",\"3\":\"指南\",\"4\":\"了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。\",\"5\":\"查看详情\",\"6\":\"组件\",\"7\":\"使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。\",\"8\":\"资源\",\"9\":\"下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。\",\"10\":\"主题\",\"11\":\"在线主题编辑器，可视化定制和管理站点主题、组件样式\",\"12\":\"主题定制功能上线\",\"13\":\"点击开始编辑\",\"14\":\"尝试您的新主题\",\"lang\":\"zh-CN\",\"titleSize\":\"34\",\"paraSize\":\"18\"},\"component\":{},\"theme\":{\"1\":\"官方主题\",\"2\":\"我的主题\",\"3\":\"主题名称\"},\"theme-preview\":{\"1\":\"返回\"},\"theme-nav\":{},\"changelog\":{\"1\":\"更新日志\",\"2\":\"zh-CN\"},\"design\":{\"1\":\"设计原则\",\"2\":\"一致\",\"3\":\"Consistency\",\"4\":\"反馈\",\"5\":\"Feedback\",\"6\":\"效率\",\"7\":\"Efficiency\",\"8\":\"可控\",\"9\":\"Controllability\",\"10\":\"一致性 Consistency\",\"11\":\"与现实生活一致：\",\"12\":\"与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；\",\"13\":\"在界面中一致：\",\"14\":\"所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。\",\"15\":\"反馈 Feedback\",\"16\":\"控制反馈：\",\"17\":\"通过界面样式和交互动效让用户可以清晰的感知自己的操作；\",\"18\":\"页面反馈：\",\"19\":\"操作后，通过页面元素的变化清晰地展现当前状态。\",\"20\":\"效率 Efficiency\",\"21\":\"简化流程：\",\"22\":\"设计简洁直观的操作流程；\",\"23\":\"清晰明确：\",\"24\":\"语言表达清晰且表意明确，让用户快速理解进而作出决策；\",\"25\":\"帮助用户识别：\",\"26\":\"界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。\",\"27\":\"可控 Controllability\",\"28\":\"用户决策：\",\"29\":\"根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；\",\"30\":\"结果可控：\",\"31\":\"用户可以自由的进行操作，包括撤销、回退和终止当前操作等。\"},\"guide\":{\"1\":\"设计原则\",\"2\":\"导航\"},\"nav\":{\"1\":\"导航\",\"2\":\"导航可以解决用户在访问页面时：在哪里，去哪里，怎样去的问题。一般导航会有「侧栏导航」和「顶部导航」2 种类型。\",\"3\":\"选择合适的导航\",\"4\":\"选择合适的导航可以让用户在产品的使用过程中非常流畅，相反若是不合适就会引起用户操作不适（方向不明确），以下是「侧栏导航」和 「顶部导航」的区别。\",\"5\":\"侧栏导航\",\"6\":\"可将导航栏固定在左侧，提高导航可见性，方便页面之间切换；顶部可放置常用工具，如搜索条、帮助按钮、通知按钮等。适用于中后台的管理型、工具型网站。\",\"7\":\"一级类目\",\"8\":\"适用于结构简单的网站：只有一级页面时，不需要使用面包屑。\",\"9\":\"二级类目\",\"10\":\"侧栏中最多可显示两级导航；当使用二级导航时，我们建议搭配使用面包屑，方便用户定位自己的位置和快速返回。\",\"11\":\"三级类目\",\"12\":\"适用于较复杂的工具型后台，左侧栏为一级导航，中间栏可显示其对应的二级导航，也可放置其他的工具型选项。\",\"13\":\"顶部导航\",\"14\":\"顺应了从上至下的正常浏览顺序，方便浏览信息；顶部宽度限制了导航的数量和文本长度。\",\"15\":\"适用于导航较少，页面篇幅较长的网站。\"},\"resource\":{\"1\":\"资源\",\"2\":\"整理中\",\"3\":\"Axure Components\",\"4\":\"通过在 Axure 中导入 Element 组件库，可以在交互设计阶段方便地调用常用的组件\",\"5\":\"下载\",\"6\":\"Sketch Template\",\"7\":\"从 Element Template 快速调用常用组件，在提升设计效率的同时，保证统一的视觉风格\",\"8\":\"组件交互文档\",\"9\":\"进一步查看 Element 交互文档，从一个较为微观的角度详细地了解各个组件的交互细节\",\"paraHeight\":\"1.8\",\"placeholder1\":\"整理中\",\"placeholder2\":\"设计资源正在整理和完善中\"}}},{\"lang\":\"en-US\",\"pages\":{\"index\":{\"1\":\"A Desktop UI Library\",\"2\":\"HKUST UIs, a Vue 3.0 based component library for hkust\",\"3\":\"Guide\",\"4\":\"Understand the design guidelines, helping designers build product that's logically sound, reasonably structured and easy to use.\",\"5\":\"View Detail\",\"6\":\"Component\",\"7\":\"Experience interaction details by strolling through component demos. Use encapsulated code to improve developing efficiency.\",\"8\":\"Resource\",\"9\":\"Download relevant design resources for shaping page prototype or visual draft, increasing design efficiency.\",\"10\":\"Theme\",\"11\":\"Online theme roller, visualize custom and manage site themes and component styles\",\"12\":\"Theme customization is available!\",\"13\":\"Click here\",\"14\":\"Make your own theme\",\"lang\":\"en-US\",\"titleSize\":\"34\",\"paraSize\":\"18\"},\"component\":{},\"theme\":{\"1\":\"Official Theme\",\"2\":\"My Theme\",\"3\":\"Theme name\"},\"theme-preview\":{\"1\":\"Back\"},\"theme-nav\":{},\"changelog\":{\"1\":\"Changelog\",\"2\":\"en-US\"},\"design\":{\"1\":\"Design Disciplines\",\"2\":\"Consistency\",\"3\":\"\",\"4\":\"Feedback\",\"5\":\"\",\"6\":\"Efficiency\",\"7\":\"\",\"8\":\"Controllability\",\"9\":\"\",\"10\":\"Consistency\",\"11\":\"Consistent with real life: \",\"12\":\"in line with the process and logic of real life, and comply with languages and habits that the users are used to.\",\"13\":\"Consistent within interface: \",\"14\":\"all elements should be consistent, such as: design style, icons and texts, position of elements, etc.\",\"15\":\"Feedback\",\"16\":\"Operation feedback: \",\"17\":\"enable the users to clearly perceive their operations by style updates and interactive effects.\",\"18\":\"Visual feedback: \",\"19\":\"reflect current state by updating or rearranging elements of the page.\",\"20\":\"Efficiency\",\"21\":\"Simplify the process: \",\"22\":\"keep operating process simple and intuitive.\",\"23\":\"Definite and clear: \",\"24\":\"enunciate your intentions clearly so that the users can quickly understand and make decisions.\",\"25\":\"Easy to identify: \",\"26\":\"the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.\",\"27\":\"Controllability\",\"28\":\"Decision making: \",\"29\":\"giving advices about operations is acceptable, but do not make decisions for the users.\",\"30\":\"Controlled consequences: \",\"31\":\"users should be granted the freedom to operate, including canceling, aborting or terminating current operation.\"},\"guide\":{\"1\":\"Design Disciplines\",\"2\":\"Navigation\"},\"nav\":{\"1\":\"Navigation\",\"2\":\"Navigation focuses on solving the users' problems of where to go and how to get there. Generally it can be categorized into 'sidebar navigation' and 'top navigation'.\",\"3\":\"Choose the right navigation\",\"4\":\"An appropriate navigation gives users a smooth experience, while an inappropriate one leads to confusion. Here are the differences between sidebar navigation and top navigation\",\"5\":\"Side Navigation\",\"6\":\"Fix the navigation at the left edge, thus improves its visibility, making it easier to switch between pages. In this case, the top area of the page holds commonly used tools, e.g. search bar, help button, notice button, etc. Suitable for background management or utility websites.\",\"7\":\"Level 1 categories\",\"8\":\"Suitable for simply structured sites with only one level of pages. No breadcrumb is needed.\",\"9\":\"Level 2 categories\",\"10\":\"Sidebar displays up to two levels of navigation. Breadcrumbs are recommended in combination of second level navigation, making it easier for the users to locate and navigate.\",\"11\":\"Level 3 categories\",\"12\":\"Suitable for complicated utility websites. The left sidebar holds first level navigation, and the middle column displays second level navigation or other utility options.\",\"13\":\"Top Navigation\",\"14\":\"Conforms to the normal browsing order from top to bottom, which makes things more natural. The navigation amount and text length are limited to the width of the top.\",\"15\":\"Suitable for sites with few navigations and large chunks.\"},\"resource\":{\"1\":\"Resource\",\"2\":\"Under construction.\",\"3\":\"Axure Components\",\"4\":\"By importing Element UI in Axure, you can easily apply all the components we provide during interaction design.\",\"5\":\"Download\",\"6\":\"Sketch Template\",\"7\":\"Apply components from Element template, so you can improve design efficiency while keeping a unified visual style.\",\"8\":\"Interaction Design Documentation\",\"9\":\"Take a closer look at the interaction design documentation. Learn more details of each component from a microcosmic perspective.\",\"paraHeight\":\"1.6\",\"placeholder1\":\"Under construction\",\"placeholder2\":\"More resources are being developed\"}}}]");

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(288);

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

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_vue_loader_dist_index_js_ref_11_0_index_vue_vue_type_style_index_0_id_874642dc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(281);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_vue_loader_dist_index_js_ref_11_0_index_vue_vue_type_style_index_0_id_874642dc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_vue_loader_dist_index_js_ref_11_0_index_vue_vue_type_style_index_0_id_874642dc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);