import { defineAsyncComponent } from 'vue'
import langs from './i18n/route'
import navConfig from './nav.config'
import { Language } from './enums/language'

const LoadingComponent = {
  // template: `<div v-loading="true" style="min-height: 500px; width: 100%;"></div>`,
  template: `<div style="min-height: 500px; width: 100%;"></div>`,
}
const ErrorComponent = {
  template: `
    <div style="text-align: center;padding: 100px 0;">Loading error. Please refresh the page and try again</div>`,
}

// 加载异步组件
const getAsyncComponent = func => {
  return defineAsyncComponent({
    loader: func,
    delay: 0,
    timeout: 30000,
    errorComponent: ErrorComponent,
    loadingComponent: LoadingComponent,
  })
}

// 加载非组件页面
const LOAD_MAP = {
  [Language.CN]: name => {
    return getAsyncComponent(() => import(/* webpackChunkName: "zh-CN" */ `./pages/${name}.vue`))
  },
  [Language.EN]: name => {
    return getAsyncComponent(() => import(/* webpackChunkName: "en-US" */ `./pages/${name}.vue`))
  }
}

const load = function(lang, path) {
  return LOAD_MAP[lang](path)
}

// 加载组件文档
const LOAD_DOCS_MAP = {
  [Language.CN]: path => {
    return getAsyncComponent(() => import(/* webpackChunkName: "DOCS zh-CN" */ `./docs/zh-CN${path}.md`))
  },
  [Language.EN]: path => {
    return getAsyncComponent(() => import(/* webpackChunkName: "DOCS en-US" */ `./docs/en-US${path}.md`))
  }
}

const loadDocs = function(lang, path) {
  return LOAD_DOCS_MAP[lang](path)
}

// 注册路由
const registerRoute = navConfig => {
  let route = []
  Object.keys(navConfig).forEach((lang, index) => {
    let navs = navConfig[lang]
    route.push({
      path: `/${ lang }/component`,
      redirect: `/${ lang }/component/installation`,
      component: load(lang, 'component'),
      children: [],
    })
    navs.forEach(nav => {
      if (nav.href) return
      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(nav => {
            addRoute(nav, lang, index)
          })
        })
      } else if (nav.children) {
        nav.children.forEach(nav => {
          addRoute(nav, lang, index)
        })
      } else {
        addRoute(nav, lang, index)
      }
    })
  })
  function addRoute(page, lang, index) {
    const component = page.path === '/changelog'
      ? load(lang, 'changelog')
      : loadDocs(lang, page.path)
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang,
      },
      name: 'component-' + lang + (page.title || page.name),
      component: component.default || component,
    }

    route[index].children.push(child)
  }
  return route
}

let route = registerRoute(navConfig)

// 生成其他非组件的路由
const generateMiscRoutes = function(lang) {

  let indexRoute = {
    path: `/${ lang }`, // 首页
    meta: { lang },
    name: 'home' + lang,
    component: load(lang, 'index'),
  }

  return [indexRoute]
}

langs.forEach(lang => {
  route = route.concat(generateMiscRoutes(lang.lang))
})

// 获取用户默认语言
let userLanguage = localStorage.getItem('HKUST_LANGUAGE') || window.navigator.language || Language.EN
let defaultPath = Language.EN
if (userLanguage.indexOf('zh-') !== -1) {
  defaultPath = Language.CN
}

route = route.concat([{
  path: '/',
  redirect: { path: `/${defaultPath}` },
}, {
  path: '/*',
  redirect: { path: `/${defaultPath}` },
}])

export default route
