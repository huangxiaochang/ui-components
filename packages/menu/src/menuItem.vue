<template>
  <li
    class="hkust-menu-item"
    role="menuitem"
    tabindex="-1"
    :style="[paddingStyle, itemStyle, { backgroundColor }]"
    :class="{
      'is-active': active,
      'is-disabled': disabled,
    }"
    @click="handleClick"
    @mouseenter="onMouseEnter"
    @focus="onMouseEnter"
    @blur="onMouseLeave"
    @mouseleave="onMouseLeave"
  >
    <slot></slot>
    <slot name="title"></slot>
  </li>
</template>

<script lang="ts">
import { SubMenuProvider } from '@hkust-ui/menu/src/menu-type'
import {
  defineComponent,
  inject,
  getCurrentInstance,
  computed,
  onMounted,
  onBeforeUnmount,
} from 'vue'
import { RootMenuProvider, MenuItemProps } from './menu-type'
import { useMenu } from './useMenu'

export default defineComponent({
  name: 'HkustMenuItem',
  componentName: 'HkustMenuItem',
  props: {
    disabled: Boolean,
    index: {
      default: null,
      validator: val => typeof val === 'string' || val === null,
    },
    route: [String, Object],
  },
  emits: ['click'],
  setup(props: MenuItemProps, { emit }) {
    const instance = getCurrentInstance()

    // data

    const { parentMenu, paddingStyle, indexPath } = useMenu(
      instance,
      props.index,
    )

    // inject
    const rootMenu = inject<RootMenuProvider>('rootMenu')
    const subMenu = inject<SubMenuProvider>(`submenu:${parentMenu.value.uid}`)

    // computed
    const active = computed(() => {
      return props.index === rootMenu.activeIndex.value
    })

    const hoverBackgroundColor = computed(() => {
      return rootMenu.props.hoverBackgroundColor
    })
    const backgroundColor = computed(() => {
      return rootMenu.props.backgroundColor || ''
    })
    const activeTextColor = computed(() => {
      return rootMenu.props.activeTextColor || ''
    })
    const textColor = computed(() => {
      return rootMenu.props.textColor || ''
    })
    const itemStyle = computed(() => {
      const style = {
        color: active.value ? activeTextColor.value : textColor.value,
      }
      return style
    })
    const mode = computed(() => {
      return rootMenu.props.mode
    })

    // method

    const onMouseEnter = () => {
      if (mode.value === 'horizontal' && !rootMenu.props.hoverBackgroundColor) return
      instance.vnode.el.style.backgroundColor = hoverBackgroundColor.value
    }
    const onMouseLeave = () => {
      if (mode.value === 'horizontal' && !rootMenu.props.backgroundColor) return
      instance.vnode.el.style.backgroundColor = backgroundColor.value
    }
    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.rootMenuEmit('menuItem:item-click', {
          index: props.index,
          indexPath,
          route: props.route,
        })
        emit('click', {
          index: props.index,
          indexPath: indexPath.value,
        })
      }
    }

    // lifecycle
    onMounted(() => {
      subMenu && subMenu.addMenuItem({
        index: props.index,
        indexPath,
        active,
      })
      rootMenu.methods.addMenuItem({
        index: props.index,
        indexPath,
        active,
      })
    })

    onBeforeUnmount(() => {
      subMenu && subMenu.removeMenuItem({
        index: props.index,
        indexPath,
        active,
      })
      rootMenu.methods.removeMenuItem({
        index: props.index,
        indexPath,
        active,
      })
    })

    return {
      active,
      itemStyle,
      paddingStyle,
      backgroundColor,
      handleClick,
      onMouseEnter,
      onMouseLeave,
    }
  },
})
</script>

