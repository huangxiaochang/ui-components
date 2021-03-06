import { mount } from '@vue/test-utils'
import ClickOutside from '../click-outside/index'

const AXIOM = 'hkust ui'
const TRIGGER = 'trigger'
const OTHER_CLASS = 'other-class'

// init some local variables
let mousedownObject: any
let mouseupObject: any
// mock handler with implementations which makes assignment to the local variable that we registered above.
const handler = jest.fn((eMouseup, eMousedown) => {
  mouseupObject = eMouseup
  mousedownObject = eMousedown
})
const Component = {
  template: `
  <div>
    <div class="${OTHER_CLASS}">Hello</div>
    <div class="${TRIGGER}" v-click-outside="handler">${AXIOM}</div>
  </div>
`,
  setup() {
    return {
      handler,
    }
  },
}

const _mount = () => mount(Component, {
  global: {
    directives: {
      ClickOutside,
    },
  },
})

describe('Directives.vue', () => {
  beforeEach(() => {
    // clear the previously assigned event object
    mousedownObject = null
    mouseupObject = null

    handler.mockClear()
  })
  test('render test', () => {
    const wrapper = _mount()
    expect(wrapper.text()).toContain(AXIOM)
    expect(handler).toHaveBeenCalledTimes(0)

    wrapper.unmount()
  })

  // 测试指令是否生效(绑定的handler是否得到执行)
  test('should trigger handler', async () => {
    const wrapper = _mount()
    await wrapper.find(`.${TRIGGER}`).trigger('mousedown')
    await wrapper.find(`.${TRIGGER}`).trigger('mouseup')
    expect(handler).toHaveBeenCalledTimes(0)

    // 触发document的mousedown，mouseup事件，因为指令中，会监听这两个事件，然后调用handler
    const mousedown = document.createEvent('MouseEvents')
    mousedown.initMouseEvent('mousedown', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    document.dispatchEvent(mousedown)

    const mouseup = document.createEvent('MouseEvents')
    mouseup.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    document.dispatchEvent(mouseup)

    // here is the different part
    // we test the existence of the local variable.
    expect(mousedownObject).toBeDefined()
    expect(mouseupObject).toBeDefined()
  })
})
