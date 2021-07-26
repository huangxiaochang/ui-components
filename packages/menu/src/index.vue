<template>
  <div class="hkust-menu">
    hello menu component
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MenuProps } from './menu-type'

export default defineComponent({
  name: 'HkustMenu',
  componentName: 'HkustMenu',
  props: {
    mode: {
      type: String,
      default: 'vertical',
    },
  },
  setup(props: MenuProps) {
    console.log(props)
  },
})
</script>
