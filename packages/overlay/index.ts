import { App } from 'vue'
import type { SFCWithInstall } from '@hkust-ui/utils/types'
import VagueDialog from './src/index.vue'

VagueDialog.install = (app: App): void => {
  app.component(VagueDialog.name, VagueDialog)
}

const _VagueDialog: SFCWithInstall<typeof VagueDialog> = VagueDialog

export default _VagueDialog
