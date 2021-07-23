import { defineComponent, openBlock, createBlock, renderSlot, createTextVNode } from 'vue';

var script = defineComponent({
    name: 'HkustMenu',
    componentName: 'HkustMenu',
    props: {
        mode: {
            type: String,
            default: 'vertical',
        },
    },
    setup(props) {
        console.log(props);
    },
});

const _hoisted_1 = { class: "hkust-menu" };
const _hoisted_2 = /*#__PURE__*/createTextVNode(" hello menu ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1, [
    _hoisted_2,
    renderSlot(_ctx.$slots, "default")
  ]))
}

script.render = render;
script.__file = "packages/menu/src/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _Menu = script;

export default _Menu;
