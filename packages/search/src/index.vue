<template>
  <teleport to="body" :disabled="!appendToBody">
    <hkust-overlay
      v-show="visible"
      :append-to-body="false"
      :vague="vague"
      background-color="rgba(0,0,0,0.7)"
      @click="handleModalClick"
    >
      <div class="hkust-search">
        <slot name="close">
          <i class="hkust-icon-searchclose hkust-search__close-btn" @click="handleClose"></i>
        </slot>
        <div class="hkust-search__content" @click="preventEvent">
          <slot>
            <input
              type="text"
              class="hkust-search__input"
              :placeholder="inputPlaceholder"
              @input="handleInput"
            >
            <button class="hkust-search__btn" @click="handleConfirm">{{ confirmButtonText }}</button>
          </slot>
        </div>
      </div>
    </hkust-overlay>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, watch } from 'vue'
import { SearchProps } from './search-types'
import HkustOverlay from '@hkust-ui/overlay'
import useModal from '@hkust-ui/hooks/use-modal'

export default defineComponent({
  name: 'HkustSearch',
  components: {
    HkustOverlay,
  },
  props: {
    overlayClass: {
      type () {
        return [String , Object, Array]
      },
    },
    zIndex: {
      type: Number,
      default: 2000,
    },
    backgroundColor: String,
    blur: {
      type: String,
      default: '2px',
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    confirmButtonText: {
      type: String,
      default: '搜寻',
    },
    inputPlaceholder: {
      type: String,
      default: '请输入搜寻项目',
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    appendToBody: {
      type: Boolean,
      default: true,
    },
    beforeClose: {
      type: Function as PropType<() => null>,
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    closeOnpressEscape: {
      type: Boolean,
      default: true,
    },
    closeDelay: Number,
    openDelay: Number,
    vague: {
      type: Boolean,
      default: true,
    },

  },
  emits: ['update:modelValue', 'confirm', 'input', 'close', 'open'],
  setup(props: SearchProps, { emit }) {

    // ref
    const visible = ref(false)
    const closeTimer = ref<TimeoutHandle | null>(null)
    const openTimer = ref<TimeoutHandle | null>(null)

    // watch
    watch(() => props.modelValue, newVal => {
      if (newVal) {
        open()
      } else {
        close()
      }
    })

    // method
    const handleConfirm = (ev: Event) => {
      emit('confirm', ev)
    }
    const handleInput = (ev: Event) => {
      emit('input', ev)
    }

    const open = () => {
      clearTimeout(closeTimer.value)
      clearTimeout(openTimer.value)
      if (props.openDelay) {
        console.log('----')
        openTimer.value = setTimeout(() => {
          openTimer.value = null
          doOpen()
          console.log('====')
        }, props.openDelay)
      } else {
        doOpen()
      }
    }
    const doOpen = () => {
      visible.value = true
      emit('open')
    }

    const close = (shouldCancel = false) => {
      if (shouldCancel) return
      clearTimeout(closeTimer.value)
      clearTimeout(openTimer.value)
      if (props.closeDelay) {
        closeTimer.value = setTimeout(() => {
          closeTimer.value = null
          doClose()
        }, props.closeDelay)
      } else {
        doClose()
      }
    }
    const doClose = () => {
      visible.value = false
      emit('close')
      emit('update:modelValue', false)
    }
    const handleClose = () => {
      if (props.beforeClose) {
        props.beforeClose(close)
      } else {
        close()
      }
    }
    const handleModalClick = () => {
      if (props.closeOnClickModal) {
        handleClose()
      }
    }
    const preventEvent = (ev: Event) => {
      ev.preventDefault()
      ev.stopPropagation()
    }

    // esc to close dialog
    if (props.closeOnpressEscape) {
      useModal({
        handleClose,
      }, visible)
    }


    // lifecycle
    onMounted(() => {
      if (props.modelValue) {
        open()
      }
    })

    return {
      visible,

      open,
      close,
      handleConfirm,
      handleInput,
      handleClose,
      handleModalClick,
      preventEvent,
    }
  },
})
</script>
