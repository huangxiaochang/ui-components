declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void
  }
  export default component
}

declare type ComponentSize = 'large' | 'medium' | 'small' | 'mini'

declare type ReturnNullFn = () => ReturnType<null>

declare type Nullable<T> = T | null

declare type TimeoutHandle = ReturnType<typeof global.setTimeout>

