import { App } from 'vue'
import type { SFCWithInstall } from '@hkust-ui/utils/types'
import Search from './src/index.vue'

Search.install = (app: App): void => {
  app.component(Search.name, Search)
}

const _Search: SFCWithInstall<typeof Search> = Search

export default _Search
