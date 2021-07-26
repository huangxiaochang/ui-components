<script>
import { defineComponent, h, computed, watch, onMounted } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import MainHeader from './components/header'
import MainFooter from './components/footer'
import { use } from '@hkust-ui/locale'
import zhLocale from '@hkust-ui/locale/lang/zh-cn'
import enLocale from '@hkust-ui/locale/lang/en'
import { Language } from './enums/language'

const lang = location.hash.replace('#', '').split('/')[1] || Language.CN
const localize = lang => {
  switch (lang) {
    case Language.CN:
      use(zhLocale)
      break
    default:
      use(enLocale)
  }
}
localize(lang)

export default defineComponent({
  name: 'App',

  setup(){
    const route = useRoute()

    const lang = computed(() => route.path.split('/')[1] || Language.CN)

    const isComponent = computed(() => /^component-/.test(route.name || ''))

    watch(() => lang.value, val => {
      localize(val)
    })

    onMounted(() => {
      localize(lang.value)
    })

    return {
      lang,
      isComponent,
    }
  },

  render() {
    const notPlay = this.lang !== 'play'

    const notComponent = !this.isComponent

    const mainHeader = notPlay ? h(MainHeader, {
      style: 'position: fixed;top: 0;width: 100%;z-index: 2000',
    }) : null

    const mainFooter = notPlay && notComponent ? h(MainFooter) : null

    const content = [h('div', {
      class: 'main-cnt',
    }, [h(RouterView)]), mainFooter]

    const contentWrapper = notComponent
      ? h('div', null, { default: () => content })
      : content

    return h('div', {
      id: 'app',
      class: {
        'is-component': this.isComponent,
      },
    }, [mainHeader, contentWrapper])
  },
})
</script>
