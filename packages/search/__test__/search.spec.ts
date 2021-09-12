import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Search from '../src/index.vue'
import { EVENT_CODE } from '@hkust-ui/utils/aria'

const AXIOM = 'Rem is the best girl'

const _mount = ({ slots, ...rest }: any) => {
  return mount(Search, {
    slots: {
      default: AXIOM,
      ...slots,
    },
    ...rest,
  })
}

describe('Search.vue', () => {
  test('render test', async () => {
    const wrapper = _mount({
      slots: {
        default: AXIOM,
      },
      props: {
        modelValue: true,
      },
    })
    await nextTick()
    expect(document.body.querySelector('.hkust-search__content').innerHTML).toEqual(AXIOM)
    wrapper.unmount()
  })

  test('close slot should work', async () => {
    const wrapper = _mount({
      slots: {
        default: AXIOM,
        close: '<div class="foo">close slot content</div>',
      },
      props: {
        modelValue: true,
      },
    })
    await nextTick()
    expect(document.body.querySelector('.foo').innerHTML).toEqual('close slot content')
    wrapper.unmount()
  })

  test('test appendToBody=false', async () => {
    const wrapper = _mount({
      slots: {
        default: AXIOM,
      },
      props: {
        appendToBody: false,
        modelValue: true,
      },
    })
    await nextTick()
    expect(document.body.querySelector('.hkust-search')).toBeFalsy()
    expect(wrapper.find('.hkust-search').exists()).toBe(true)
  })

  test('esc to close dialog', async () => {
    const wrapper = _mount({
      slots: {
        default: AXIOM,
      },
      props: {
        modelValue: true,
        closeOnpressEscape: true,
      },
    })
    await nextTick()
    const event = new KeyboardEvent('keydown', {
      code: EVENT_CODE.esc,
    })
    await document.dispatchEvent(event)
    expect((wrapper.vm as any).visible).toBe(false)
  })

  test('test click close btn to close dialog', async () => {
    const wrapper = _mount({
      slots: {
        default: AXIOM,
      },
      props: {
        modelValue: true,
        appendToBody: false,
      },
    })

    const closeBtn = wrapper.find('.hkust-search__close-btn')
    await closeBtn.trigger('click')
    expect((wrapper.vm as any).visible).toBe(false)
  })

  test('test click mask to close dialog', async () => {
    const wrapper = _mount({
      slots: {
        default: AXIOM,
      },
      props: {
        modelValue: true,
        appendToBody: false,
        closeOnClickModal: true,
      },
    })
    await nextTick()
    const contentWrap = wrapper.find('.hkust-search__content')
    await contentWrap.trigger('click')
    expect((wrapper.vm as any).visible).toBe(true)

    const mask = wrapper.find('.hkust-overlay')
    expect(mask.exists()).toBe(true)
    await mask.trigger('mousedown')
    await mask.trigger('mouseup')
    await mask.trigger('click')
    expect((wrapper.vm as any).visible).toBe(false)
  })

  test('test v-modal directive', async () => {
    let visible = true
    const wrapper = _mount({
      slots: {
        default: AXIOM,
      },
      props: {
        modelValue: visible,
        appendToBody: false,
        'onUpdate:modelValue': (val: boolean) => visible = val,
      },
    })
    expect((wrapper.vm as any).visible).toBe(true)
    ;(wrapper.vm as any).close()
    await nextTick()
    expect((wrapper.vm as any).visible).toBe(false)
    expect(visible).toBe(false)
  })
})

describe('Search.vue method', () => {
  test('test open and close method', async () => {
    const wrapper = _mount({
      slots: {
        default: AXIOM,
      },
      props: {
        modelValue: false,
        appendToBody: false,
      },
    })
    await nextTick()
    ;(wrapper.vm as any).open()
    await nextTick()
    expect((wrapper.vm as any).visible).toBe(true)
    ;(wrapper.vm as any).close()
    await nextTick()
    expect((wrapper.vm as any).visible).toBe(false)
  })
})

describe('life cycle', () => {
  test('should not close dialog when user cancel', async () => {
    const beforeClose = jest.fn().mockImplementation((close: (cancel: boolean) => void) => close(true))
    const wrapper = _mount({
      props: {
        beforeClose,
        modelValue: true,
        appendToBody: false,
      },
    })
    await nextTick()
    const closeBtn = wrapper.find('.hkust-search__close-btn')
    await closeBtn.trigger('click')
    expect(beforeClose).toHaveBeenCalled()
    expect((wrapper.vm as any).visible).toBe(true)
  })
  test('should close dialog when user not cancel', async () => {
    const beforeClose = jest.fn().mockImplementation((close: (cancel: boolean) => void) => close(false))
    const wrapper = _mount({
      props: {
        beforeClose,
        modelValue: true,
        appendToBody: false,
      },
    })
    await nextTick()
    const closeBtn = wrapper.find('.hkust-search__close-btn')
    await closeBtn.trigger('click')
    expect(beforeClose).toHaveBeenCalled()
    expect((wrapper.vm as any).visible).toBe(false)
  })

  test('should emit open and close event', async () => {
    const onOpen = jest.fn()
    const onClose = jest.fn()
    const wrapper = _mount({
      props: {
        onClose,
        onOpen,
        modelValue: true,
        appendToBody: false,
      },
    })
    await nextTick()
    expect(onOpen).toHaveBeenCalled()
    const closeBtn = wrapper.find('.hkust-search__close-btn')
    await closeBtn.trigger('click')
    expect(onClose).toHaveBeenCalled()
    expect((wrapper.vm as any).visible).toBe(false)
  })

  test('should open and close with delay', async () => {
    const wrapper = _mount({
      openDelay: 2000,
      closeDelay: 2000,
      modelValue: false,
    })
    expect((wrapper.vm as any).visible).toBe(false)

    await wrapper.setProps({
      modelValue: true,
    })

  //   expect((wrapper.vm as any).visible).toBe(false)
  //   jest.runOnlyPendingTimers()
  //   expect((wrapper.vm as any).visible).toBe(true)
  })
})

