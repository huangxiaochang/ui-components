import { ComponentInternalInstance, inject, computed } from 'vue'
import { RootMenuProvider } from './menu-type'

export function useMenu(
  instance: ComponentInternalInstance,
  currentIndex: string,
) {
  const rootMenu = inject<RootMenuProvider>('rootMenu')

  // get the path from root to current menu index
  const indexPath = computed(() => {
    let parent = instance.parent
    const path = [currentIndex]
    while (parent.type.name !== 'HkustMenu') {
      if (parent.props.index) {
        path.unshift(parent.props.index as string)
      }
      parent = parent.parent
    }
    return path
  })

  // get parent(Menu or Submenu) of current index
  const parentMenu = computed(() => {
    let parent = instance.parent
    while (parent && ['HkustMenu', 'HkustSubmenu'].indexOf(parent.type.name) === -1) {
      parent = parent.parent
    }
    return parent
  })

  // calc the padding-left of subMenu
  const paddingStyle = computed(() => {
    let parent = instance.parent
    if (rootMenu.props.mode !== 'vertical') return {}

    let padding = 20

    if (rootMenu.props.collapse) {
      padding = 20
    } else {
      while (parent && parent.type.name !== 'HkustMenu') {
        if (parent.type.name === 'HkustSubmenu') {
          padding += 20
        }
        parent = parent.parent
      }
    }
    return { paddingLeft: padding + 'px' }
  })

  return {
    indexPath,
    parentMenu,
    paddingStyle,
  }
}


