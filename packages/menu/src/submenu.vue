<script lang="ts">
import mitt from 'mitt'
import {
  computed,
  defineComponent,
  Fragment,
  h,
  inject,
  reactive,
  getCurrentInstance,
  ref,
  onMounted,
  onBeforeUnmount,
  provide,
  withDirectives,
  vShow,
  onBeforeMount,
} from 'vue'
import { SubmenuProps, RootMenuProvider, SubMenuProvider, RegisterMenuItem } from './menu-type'
import { useMenu } from './useMenu'
import HkustPopper from '@hkust-ui/popper'

export default defineComponent({
  name: 'HkustSubmenu',
  componentName: 'HkustSubmenu',
  props: {
    index: {
      type: String,
      required: true,
    },
    backgroundColor: String,
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: undefined,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
    offset: Number,
    placement: String,
    showTimeout: Number,
    hideTimeout: Number,
  },
  setup(props: SubmenuProps) {
    // instance
    const instance = getCurrentInstance()

    const { paddingStyle, indexPath, parentMenu } = useMenu(
      instance,
      props.index,
    )

    // inject
    const rootMenu = inject<RootMenuProvider>('rootMenu')
    const parentSubMenu = inject<SubMenuProvider>(`submenu:${parentMenu.value.uid}`)

    // data
    const state = reactive({
      items: {}, // use for store the child menu-item of this submenu
      submenus: {}, // use for store the child submenu of this submenu
      opened: false,
      currentPlacement: '',
      mouseInChild: false,
    })

    // emitter
    const subMenuEmitter = mitt()

    // ref
    const popperVnode = ref(null)
    const verticalTitleRef = ref<HTMLElement>(null)

    // computed
    const mode = computed(() => {
      return rootMenu.props.mode
    })
    const placement = computed(() => {
      return props.placement || rootMenu.props.placement || 'bottom-start'
    })
    const active = computed(() => {
      const items = state.items as any
      const submenus = state.submenus as any

      if (Object.keys(items).some(index => items[index].active)) return true

      if (Object.keys(submenus).some(index => submenus[index].active)) return true

      return false
    })
    const opened = computed(() => {
      return rootMenu.openedMenus.value.includes(props.index)
    })

    // is first level submenu
    const isFirstLevel = computed(() => {
      let isFirstLevel = true
      let parent = instance.parent
      while (parent && parent.type.name !== 'HkustMenu') {
        if (['HkustSubmenu', 'HkustMenuItemGroup'].includes(parent.type.name)) {
          isFirstLevel = false
          break
        } else {
          parent = parent.parent
        }
      }
      return isFirstLevel
    })
    const titleIcon = computed(() => {
      return (mode.value === 'horizontal' && isFirstLevel.value) ||
        (mode.value === 'vertical' && !rootMenu.props.collapse)
        ? 'hkust-icon-arrow-down-bold'
        : 'hkust-icon-arrow-right-bold'
    })

    const titleStyle = computed(() => {
      if (mode.value !== 'horizontal') {
        return {
          color: rootMenu.props.textColor || '',
        }
      }
      return {
        borderBottomColor: active.value
          ? rootMenu.props.activeTextColor || ''
          : 'transparent',
        color: active.value ? rootMenu.props.activeTextColor : rootMenu.props.textColor,
      }
    })

    const appendToBody = computed(() => {
      return props.popperAppendToBody === undefined
        ? isFirstLevel.value
        : Boolean(props.popperAppendToBody)
    })

    const menuTransitionName = computed(() => {
      return rootMenu.props.collapse ? 'hkust-zoom-in-left' : 'hkust-zoom-in-top'
    })
    const showTimeout = computed(() => {
      return props.showTimeout || rootMenu.props.showTimeout
    })
    const hideTimeout = computed(() => {
      return props.hideTimeout || rootMenu.props.hideTimeout
    })

    const submenuOffset = computed(() => {
      return props.offset || rootMenu.props.offset
    })
    const submenuBackgroundColor = computed(() => {
      return props.backgroundColor || rootMenu.props.backgroundColor
    })

    // method
    const handleMouseenter = (ev: Event) => {
      if (
        !('ActiveXObject' in window) &&
        ev.type === 'focus' &&
        !(ev as any).relatedTarget
      ) {
        return
      }

      if (
        (rootMenu.props.menuTrigger === 'click' && rootMenu.props.mode === 'horizontal') ||
        (!rootMenu.props.collapse && rootMenu.props.mode === 'vertical') ||
        props.disabled
      ) {
        return
      }
      subMenuEmitter.emit('submenu:mouse-enter-child')

      setTimeout(() => {
        rootMenu.methods.openMenu(props.index, indexPath)
      }, showTimeout.value)

      if (appendToBody.value) {
        parentMenu.value.vnode.el.dispatchEvent(new MouseEvent('mouseenter'))
      }
    }
    const handleMouseleave = (deepDispatch = false) => {
      if (
        (rootMenu.props.menuTrigger === 'click' && rootMenu.props.mode === 'horizontal') ||
        (!rootMenu.props.collapse && rootMenu.props.mode === 'vertical')
      ) {
        return
      }
      subMenuEmitter.emit('submenu:mouse-leave-child')

      setTimeout(() => {
        !state.mouseInChild && rootMenu.methods.closeMenu(props.index)
      }, hideTimeout.value)

      if (appendToBody.value && deepDispatch) {
        if (instance.parent.type.name === 'HkustSubmenu') {
          parentSubMenu.handleMouseleave(true)
        }
      }
    }
    const handleClick = () => {
      if (
        (rootMenu.props.menuTrigger === 'hover' && rootMenu.props.mode === 'horizontal') ||
        rootMenu.props.collapse && rootMenu.props.mode === 'vertical' ||
        props.disabled
      ) {
        return
      }
      rootMenu.rootMenuEmit('submenu:submenu-click', { index: props.index, indexPath })
    }
    const handleTitleMouseenter = () => {
      if (mode.value === 'horizontal' && !rootMenu.props.hoverBackgroundColor) return
      // get title dom
      const title = popperVnode.value?.triggerRef || verticalTitleRef.value
      title && (title.style.backgroundColor = rootMenu.props.hoverBackgroundColor)
    }
    const handleTitleMouseleave = () => {
      if (mode.value === 'horizontal' && !rootMenu.props.hoverBackgroundColor) return
      // get title dom
      const title = popperVnode.value?.triggerRef || verticalTitleRef.value
      title && (title.style.backgroundColor = rootMenu.props.backgroundColor || '')
    }
    const addMenuItem = (item: RegisterMenuItem) => {
      (state.items as any)[item.index] = item
    }
    const removeMenuItem = (item: RegisterMenuItem) => {
      delete (state.items as any)[item.index]
    }
    const addSubMenu = (item: RegisterMenuItem) => {
      (state.submenus as any)[item.index] = item
    }
    const removeSubMenu = (item: RegisterMenuItem) => {
      delete (state.submenus as any)[item.index]
    }
    const updatePlacement = () => {
      state.currentPlacement =
        mode.value === 'horizontal' && isFirstLevel.value
          ? placement.value
          : 'right-start'
    }

    // provide
    provide<SubMenuProvider>(`submenu:${instance.uid}`, {
      addSubMenu,
      removeSubMenu,
      handleMouseleave,
    })

    // lifecycle
    onBeforeMount(() => {
      subMenuEmitter.on('submenu:mouse-enter-child', () => {
        state.mouseInChild = true
      })
      subMenuEmitter.on('submenu:mouse-leave-child', () => {
        state.mouseInChild = false
      })
    })
    onMounted(() => {
      rootMenu.methods.addSubMenu({
        index: props.index,
        indexPath,
        active,
      })
      parentSubMenu && parentSubMenu.addSubMenu({
        index: props.index,
        indexPath,
        active,
      })
      updatePlacement()
    })
    onBeforeUnmount(() => {
      rootMenu.methods.removeSubMenu({
        index: props.index,
        indexPath,
        active,
      })
      parentSubMenu && parentSubMenu.removeSubMenu({
        index: props.index,
        indexPath,
        active,
      })
    })

    return {
      state,
      mode,
      rootMenu,
      submenuOffset,
      submenuBackgroundColor,
      active,
      opened,
      appendToBody,
      titleIcon,
      titleStyle,
      paddingStyle,
      verticalTitleRef,
      addMenuItem,
      removeMenuItem,
      handleMouseenter,
      handleMouseleave,
      handleClick,
      handleTitleMouseenter,
      handleTitleMouseleave,
      isMenuPopup: rootMenu.isMenuPopup,
      menuTransitionName,
    }
  },
  render() {
    const title = [
      this.$slots.title?.(),
      this.$slots.icon
        ? this.$slots.icon?.()
        : this.showIcon
          ? h('i', {
            class: ['hkust-submenu__icon-arrow', this.titleIcon],
          }, null)
          : null,
    ]

    const submenuStyle = {
      backgroundColor: this.submenuBackgroundColor || '',
    }

    const child = this.isMenuPopup
      ? h(HkustPopper as any, {
        ref: 'popperVNode',
        manualMode: true,
        visible: this.opened,
        'onUpdate:visible': (val: boolean) => this.opened = val,
        effect: 'light',
        pure: true,
        offset: this.submenuOffset,
        showArrow: false,
        popperClass: this.popperClass,
        placement: this.state.currentPlacement,
        appendToBody: this.appendToBody,
        transition: this.menuTransitionName,
        gpuAcceleration: false,
      }, {
        default: () => h('div', {
          ref: 'menu',
          class: [
            `hkust-menu--${this.mode}`,
            this.popperClass,
          ],
          onMouseenter: ($event: Event) => this.handleMouseenter($event, 100),
          onMouseleave: () => this.handleMouseleave(true),
          onFocus: ($event: Event) => this.handleMouseenter($event, 100),
        }, [
          h('ul', {
            class: [
              'hkust-menu hkust-menu--popup',
              `hkust-menu--popup-${this.state.currentPlacement}`,
            ],
            style: submenuStyle,
          }, [this.$slots.default?.()]),
        ]),
        trigger: () => h('div', {
          class: 'hkust-submenu__title',
          style: [this.paddingStyle, this.titleStyle, { backgroundColor: this.submenuBackgroundColor }],
          onClick: this.handleClick,
          onMouseenter: this.handleTitleMouseenter,
          onMouseleave: this.handleTitleMouseleave,
        }, title),
      })
      : h(Fragment, {}, [
        h('div', {
          class: 'hkust-submenu__title',
          style: [this.paddingStyle, this.titleStyle, { backgroundColor: this.submenuBackgroundColor }],
          ref: 'verticalTitleRef',
          onClick: this.handleClick,
          onMouseenter: this.handleTitleMouseenter,
          onMouseleave: this.handleTitleMouseleave,
        }, title),
        withDirectives(h('ul', {
          role: 'menu',
          class: 'hkust-menu hkust-menu--inline',
          style: submenuStyle,
        }, /*children*/[this.$slots.default?.()]),/*directives*/[[vShow, this.opened]]),
      ])

    return h('li', {
      class: [
        'hkust-submenu',
        {
          'is-active': this.active,
          'is-opened': this.opened,
          'is-disabled': this.disabled,
        },
      ],
      role: 'menuitem',
      ariaHaspopup: true,
      ariaExpanded: this.opened,
      onMouseenter: this.handleMouseenter,
      onMouseleave: () => this.handleMouseleave(true),
      onFocus: this.handleMouseenter,
    }, [child])
  },
})
</script>



