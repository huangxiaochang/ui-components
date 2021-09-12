<template>
  <div
    class="hkust-overlay"
    :class="props.overlayClass"
    :style="overlayStyle"
    @click="handleClick"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { OverlayProps } from './overlay-types'

export default defineComponent({
  name: 'HkustOverlay',
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
    vague: { // 是否需要模糊背景
      type: Boolean,
      default: true,
    },
    blur: {
      type: String,
      default: '2px',
    },
    mode: {
      type: String as PropType<'fixed' | 'absolute'>,
      default: 'fixed',
    },
    backgroundColor: String,
  },
  emits: ['click'],
  setup(props: OverlayProps, { emit }) {

    // computed
    const overlayStyle = computed(() => {
      return {
        zIndex: props.zIndex,
        backgroundColor: props.backgroundColor || '',
        position: props.mode,
        backdropFilter: `blur(${props.vague ? props.blur : '0'})`,
      }
    })

    // method
    const handleClick = (ev: Event) => {
      emit('click', ev)
    }

    return {
      props,
      overlayStyle,

      handleClick,
    }
  },
})
</script>
