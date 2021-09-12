import { Ref, watch } from 'vue'
import { on } from '@hkust-ui/utils/dom'
import { EVENT_CODE } from '@hkust-ui/utils/aria'

interface ModalInstance {
  handleClose: () => void
}

const modalStack: ModalInstance[] = []

export default (
  instance: ModalInstance,
  visibleRef: Ref<boolean>,
) => {
  watch(() => visibleRef.value, val => {
    if (val) {
      modalStack.push(instance)
    } else {
      modalStack.splice(
        modalStack.findIndex(modal => modal === instance),
        1,
      )
    }
  })
}

function closeModal(ev: KeyboardEvent) {
  if (modalStack.length === 0) return
  if (ev.code === EVENT_CODE.esc) {
    ev.stopPropagation()
    const topModal = modalStack[modalStack.length - 1]
    topModal.handleClose()
  }
}

on(document, 'keydown', closeModal)
