import { mount } from '@vue/test-utils'
import Overlay from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('overlay.vue', () => {
  test('overlayClass test', () => {
    const wrapper = mount(Overlay, {
      slots: {
        default: AXIOM,
      },
      props: {
        overlayClass: 'foo',
      },
    })
    expect(wrapper.find('.foo')).toBeTruthy()
  })

})
