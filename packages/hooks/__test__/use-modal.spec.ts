import { ref, nextTick  } from 'vue'
import { EVENT_CODE } from '@hkust-ui/utils/aria'
import useModal from '../use-modal/index'

describe('use-modal', () => {
  test('work when ref value change', async () => {
    const visible = ref(false)

    const handleClose = jest.fn()
    useModal({
      handleClose,
    }, visible)
    expect(handleClose).not.toHaveBeenCalled()

    visible.value = true
    await nextTick()
    const event = new KeyboardEvent('keydown', {
      code: EVENT_CODE.esc,
    })
    document.dispatchEvent(event)
    expect(handleClose).toHaveBeenCalledTimes(1)

    visible.value = false
    await nextTick()
    document.dispatchEvent(event)
    expect(handleClose).toHaveBeenCalledTimes(1)
  })
})

