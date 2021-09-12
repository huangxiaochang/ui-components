<template>
  <ul
    :key="+props.collapse"
    role="menubar"
    :style="{ backgroundColor: props.backgroundColor || '' }"
    :class="{
      'hkust-menu': true,
      'hkust-menu--horizontal': mode === 'horizontal',
      'hkust-menu--collapse': props.collapse,
    }"
  >
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  getCurrentInstance,
  ref,
  Ref,
  isRef,
  onMounted,
  ComputedRef,
  provide,
} from 'vue'
import mitt from 'mitt'
import { MenuProps, RootMenuProvider, RegisterMenuItem } from './menu-type'
import Menubar from '@hkust-ui/utils/menu/menu-bar'

export default defineComponent({
  name: 'HkustMenu',
  componentName: 'HkustMenu',
  props: {
    mode: {
      type: String,
      default: 'vertical',
    },
    defaultActive: {
      type: String,
      default: '',
    },
    router: Boolean,
    defaultOpeneds: Array,
    collapse: Boolean,
    textColor: { type: String }, // used by menu-item throught rootMenu.props
    activeTextColor: { type: String },
    backgroundColor: { type: String },
    hoverBackgroundColor: { type: String },
    uniqueOpened: Boolean,
    menuTrigger: {
      type: String,
      default: 'hover',
    },
    offset: {
      type: Number,
      default: 2,
    },
    placement: String,
    showTimeout: Number,
    hideTimeout: Number,
  },
  emits: ['close', 'open', 'select'],
  setup(props: MenuProps, ctx) {
    // data
    const openedMenus = ref(
      props.defaultOpeneds && !props.collapse
        ? props.defaultOpeneds.slice(0)
        : [],
    )
    const instance = getCurrentInstance()
    const activeIndex = ref(props.defaultActive)
    const items = ref<Record<string, any>>({})
    const submenus = ref<Record<string, any>>({})
    const rootMenuEmitter = mitt()
    const router = instance.appContext.config.globalProperties.$router

    // computed
    const isMenuPopup = computed(() => {
      return (
        props.mode === 'horizontal' ||
        (props.mode === 'vertical' && props.collapse)
      )
    })

    // methods

    // open submenu
    const openMenu = (index: string, indexPath?: Ref<string[]> | string[]) => {
      if (openedMenus.value.includes(index)) return
      // collapse all menu that are not under current menu item
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index: string) => {
          return (
            (isRef(indexPath) ? indexPath.value : indexPath).indexOf(index) !==
            -1
          )
        })
      }
      openedMenus.value.push(index)
    }
    // close submenu
    const closeMenu = (index: unknown) => {
      const i = openedMenus.value.indexOf(index)
      if (i !== -1) {
        openedMenus.value.splice(i, 1)
      }
    }

    const initializeMenu = () => {
      const index = activeIndex.value
      const activeItem = items.value[index]
      if (!activeItem || props.mode === 'horizontal' || props.collapse) return

      let indexPath = activeItem.indexPath

      // 展开该菜单项的路径上所有子菜单
      // expand all submenus of the menu item
      indexPath.forEach((index: string) => {
        let submenu = submenus.value[index]
        submenu && openMenu(index, submenu?.indexPath)
      })
    }

    const handleSubmenuClick = (submenu: {
      index: string
      indexPath: ComputedRef<string[]>
    }) => {
      const { index, indexPath } = submenu
      let isOpened = openedMenus.value.includes(index)

      if (isOpened) {
        closeMenu(index)
        ctx.emit('close', index, indexPath.value)
      } else {
        openMenu(index, indexPath)
        ctx.emit('open', index, indexPath.value)
      }
    }

    const handleItemClick = (item: {
      index: string
      indexPath: ComputedRef<string[]>
      route?: any
    }) => {
      const { index, indexPath } = item
      const hasIndex = item.index !== null
      const oldActiveIndex = activeIndex.value

      if (hasIndex) {
        activeIndex.value = item.index
      }

      ctx.emit('select', index, indexPath.value, item)

      if (props.mode === 'horizontal' || props.collapse) {
        openedMenus.value = []
      }

      if (props.router && router && hasIndex) {
        let route = item.route || item.index
        try {
          router?.push(route, () => null as ReturnNullFn, (error: any) => {
            activeIndex.value = oldActiveIndex
            if (error) {
              // vue-router 3.1.0+ push/replace cause NavigationDuplicated error
              if (error.name === 'NavigationDuplicated') return
              console.error(error)
            }
          })
        } catch (e) {
          console.error(e)
        }
      }
    }

    const addMenuItem = (item: RegisterMenuItem) => {
      items.value[item.index] = item
    }

    const removeMenuItem = (item: RegisterMenuItem) => {
      delete items.value[item.index]
    }

    const addSubMenu = (item: RegisterMenuItem) => {
      submenus.value[item.index] = item
    }

    const removeSubMenu = (item: RegisterMenuItem) => {
      delete submenus.value[item.index]
    }

    // provide
    provide<RootMenuProvider>('rootMenu', {
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
        closeMenu,
      },
      rootMenuEmit: rootMenuEmitter.emit,
      rootMenuOn: rootMenuEmitter.on,
    })

    // lifecycle

    onMounted(() => {
      initializeMenu()
      rootMenuEmitter.on('menuItem:item-click', handleItemClick)
      rootMenuEmitter.on('submenu:submenu-click', handleSubmenuClick)
      if (props.mode === 'horizontal') {
        // support keyboard operation, such as using ArrowDown to go to next menu item
        new Menubar(instance.vnode.el)
      }
    })

    return {
      props,
    }
  },
})
</script>
