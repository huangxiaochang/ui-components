'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "HkustMenu",
  componentName: "HkustMenu",
  props: {
    mode: {
      type: String,
      default: "vertical"
    }
  },
  setup(props) {
    console.log(props);
  }
});

const _hoisted_1 = { class: "hkust-menu" };
const _hoisted_2 = /* @__PURE__ */ vue.createTextVNode(" hello menu ");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [
    _hoisted_2,
    vue.renderSlot(_ctx.$slots, "default")
  ]);
}

script.render = render;
script.__file = "packages/menu/src/index.vue";

script.install = (app) => {
  app.component(script.name, script);
};
const _Menu = script;

exports.default = _Menu;
