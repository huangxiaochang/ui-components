'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var mitt = require('mitt');
var Menubar = require('../utils/menu/menu-bar');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var mitt__default = /*#__PURE__*/_interopDefaultLegacy(mitt);
var Menubar__default = /*#__PURE__*/_interopDefaultLegacy(Menubar);

var script = vue.defineComponent({
  name: "HkustMenu",
  componentName: "HkustMenu",
  props: {
    mode: {
      type: String,
      default: "vertical"
    },
    defaultActive: {
      type: String,
      default: ""
    },
    router: Boolean,
    defaultOpeneds: Array,
    collapse: Boolean,
    textColor: { type: String },
    activeTextColor: { type: String },
    backgroundColor: { type: String },
    hoverBackgroundColor: { type: String },
    uniqueOpened: Boolean,
    menuTrigger: {
      type: String,
      default: "hover"
    },
    offset: {
      type: Number,
      default: 2
    },
    placement: String,
    showTimeout: Number,
    hideTimeout: Number,
    collapseTransition: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close", "open", "select"],
  setup(props, ctx) {
    const openedMenus = vue.ref(props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : []);
    const instance = vue.getCurrentInstance();
    const activeIndex = vue.ref(props.defaultActive);
    const items = vue.ref({});
    const submenus = vue.ref({});
    const rootMenuEmitter = mitt__default['default']();
    const router = instance.appContext.config.globalProperties.$router;
    const isMenuPopup = vue.computed(() => {
      return props.mode === "horizontal" || props.mode === "vertical" && props.collapse;
    });
    const openMenu = (index, indexPath) => {
      if (openedMenus.value.includes(index))
        return;
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index2) => {
          return (vue.isRef(indexPath) ? indexPath.value : indexPath).indexOf(index2) !== -1;
        });
      }
      openedMenus.value.push(index);
    };
    const closeMenu = (index) => {
      const i = openedMenus.value.indexOf(index);
      if (i !== -1) {
        openedMenus.value.splice(i, 1);
      }
    };
    const open = (index) => {
      const { indexPath } = submenus.value[index.toString()];
      indexPath.forEach((i) => openMenu(i, indexPath));
    };
    const close = (index) => {
      closeMenu(index);
    };
    const initializeMenu = () => {
      const index = activeIndex.value;
      const activeItem = items.value[index];
      if (!activeItem || props.mode === "horizontal" || props.collapse)
        return;
      let indexPath = activeItem.indexPath;
      indexPath.forEach((index2) => {
        let submenu = submenus.value[index2];
        submenu && openMenu(index2, submenu == null ? void 0 : submenu.indexPath);
      });
    };
    const handleSubmenuClick = (submenu) => {
      const { index, indexPath } = submenu;
      let isOpened = openedMenus.value.includes(index);
      if (isOpened) {
        closeMenu(index);
        ctx.emit("close", index, indexPath.value);
      } else {
        openMenu(index, indexPath);
        ctx.emit("open", index, indexPath.value);
      }
    };
    const handleItemClick = (item) => {
      const { index, indexPath } = item;
      const hasIndex = item.index !== null;
      const oldActiveIndex = activeIndex.value;
      if (hasIndex) {
        activeIndex.value = item.index;
      }
      ctx.emit("select", index, indexPath.value, item);
      if (props.mode === "horizontal" || props.collapse) {
        openedMenus.value = [];
      }
      if (props.router && router && hasIndex) {
        let route = item.route || item.index;
        try {
          router == null ? void 0 : router.push(route, () => null, (error) => {
            activeIndex.value = oldActiveIndex;
            if (error) {
              if (error.name === "NavigationDuplicated")
                return;
              console.error(error);
            }
          });
        } catch (e) {
          console.error(e);
        }
      }
    };
    const addMenuItem = (item) => {
      items.value[item.index] = item;
    };
    const removeMenuItem = (item) => {
      delete items.value[item.index];
    };
    const addSubMenu = (item) => {
      submenus.value[item.index] = item;
    };
    const removeSubMenu = (item) => {
      delete submenus.value[item.index];
    };
    vue.provide("rootMenu", {
      props,
      openedMenus,
      items,
      submenus,
      activeIndex,
      isMenuPopup,
      methods: {
        addMenuItem,
        removeMenuItem,
        addSubMenu,
        removeSubMenu,
        openMenu,
        closeMenu
      },
      rootMenuEmit: rootMenuEmitter.emit,
      rootMenuOn: rootMenuEmitter.on
    });
    vue.provide(`submenu:${instance.uid}`, {
      addSubMenu: () => null,
      removeSubMenu: () => null,
      handleMouseleave: () => null,
      addMenuItem: () => null,
      removeMenuItem: () => null
    });
    vue.onMounted(() => {
      initializeMenu();
      rootMenuEmitter.on("menuItem:item-click", handleItemClick);
      rootMenuEmitter.on("submenu:submenu-click", handleSubmenuClick);
      if (props.mode === "horizontal") {
        new Menubar__default['default'](instance.vnode.el);
      }
    });
    return {
      props,
      open,
      close
    };
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("ul", {
    key: +_ctx.props.collapse,
    role: "menubar",
    style: { backgroundColor: _ctx.props.backgroundColor || "" },
    class: {
      "hkust-menu": true,
      "hkust-menu--horizontal": _ctx.mode === "horizontal",
      "hkust-menu--collapse": _ctx.props.collapse
    }
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 6);
}

script.render = render;
script.__file = "packages/menu/src/index.vue";

script.install = (app) => {
  app.component(script.name, script);
};
const _Menu = script;

exports.default = _Menu;
