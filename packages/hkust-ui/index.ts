import type { App } from 'vue'
import HkustMenu from '@hkust-ui/menu'

import { use, i18n } from '@hkust-ui/locale'
import type { InstallOptions } from '@hkust-ui/utils/config'

import { version as version_ } from './version'

const version = version_

const locale = use

const defaultConfig: InstallOptions = {
  size: '' as ComponentSize,
  zIndex: 2000,
}

const components = [
  HkustMenu,
]

const install = (app: App, opt: InstallOptions) => {
  const option = Object.assign(defaultConfig, opt)
  locale(option.locale)
  if (option.i18n) {
    i18n(option.i18n)
  }
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  HkustMenu,
  version,
  locale,
}

export default {
  version,
  install,
}
