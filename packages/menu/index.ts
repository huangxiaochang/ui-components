import { App } from 'vue'
import type { SFCWithInstall } from '@hkust-ui/utils/types'
import Menu from './src/index.vue'

Menu.install = (app: App): void => {
  app.component(Menu.name, Menu)
}

const _Menu: SFCWithInstall<typeof Menu> = Menu

export default _Menu
