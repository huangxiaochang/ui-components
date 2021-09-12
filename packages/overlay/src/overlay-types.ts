export interface OverlayProps {
  zIndex?: number
  // overlayClass?: string | any[] | object
  overlayClass?: string | Record<string, unknown> | []
  mode?: 'fixed' | 'absolute'
  backgroundColor?: string
  vague?: boolean
  blur?: string
}
