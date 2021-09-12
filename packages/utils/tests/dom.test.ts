import { on, off, once, addClass, removeClass, hasClass } from '../dom'

describe('Dom utils', () => {
  it('on function can listen dom event', () => {
    const div = document.createElement('div')
    const fn = jest.fn(() => null as ReturnNullFn)
    on(div, 'click', fn)
    div.click()
    expect(fn).toHaveBeenCalled()
  })

  it('off function can remove listener from dom', () => {
    const div = document.createElement('div')
    const fn = jest.fn(() => null as ReturnNullFn)
    on(div, 'click', fn)
    div.click()
    expect(fn).toHaveBeenCalled()
    off(div, 'click', fn)
    div.click()
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('once function should lister dom event only one times', () => {
    const div = document.createElement('div')
    const fn = jest.fn(() => null as ReturnNullFn)
    once(div, 'click', fn)
    div.click()
    expect(fn).toHaveBeenCalled()
    div.click()
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('hasClass contain a sxplicit class in a dom', () => {
    const div = document.createElement('div')
    div.setAttribute('class', 'foo')
    const foo = hasClass(div, 'foo')
    expect(foo).toBe(true)
    const bar = hasClass(div, 'bar')
    expect(bar).toBe(false)
  })

  it('addClass should add a className to dom', () => {
    const div = document.createElement('div')
    addClass(div, 'foo')
    const classList = div.className
    expect(classList).toContain('foo')
  })

  it('removeClass should add a className to dom', () => {
    const div = document.createElement('div')
    div.setAttribute('class', 'foo')
    let classList = div.className
    expect(classList).toContain('foo')
    removeClass(div, 'foo')
    classList = div.className
    expect(classList).not.toContain('foo')
  })
})

