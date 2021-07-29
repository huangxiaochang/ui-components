class HkustUIError extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'HkustUIError'
  }
}

export default (scope: string, m: string) => {
  throw new HkustUIError(`[${scope}] ${m}`)
}

export function warn(scope: string, m: string) {
  console.warn(new HkustUIError(`[${scope}] ${m}`))
}
