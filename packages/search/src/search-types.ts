export interface SearchProps {
  zIndex?: number
  // overlayClass?: string | any[] | object
  overlayClass?: string | Record<string, unknown> | []
  backgroundColor?: string
  blur?: string
  showClose?: boolean
  confirmButtonText?: string
  inputPlaceholder?: string
  modelValue?: boolean
  appendToBody?: boolean
  beforeClose?: (cb: (ev: Event) => void) => null
  closeOnClickModal?: boolean
  closeOnpressEscape?: boolean
  closeDelay?: number
  openDelay?: number
  vague?: boolean
}

