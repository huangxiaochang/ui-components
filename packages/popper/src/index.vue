
<script lang="ts">
import {
  defineComponent ,
  Fragment,
  h,
  Teleport,
  SetupContext,
  renderSlot,
  toDisplayString,
  withDirectives,
  onMounted,
  onBeforeUnmount,
  onActivated,
  onDeactivated,
} from 'vue'
import defaultProps from './use-popper/default-props'
import usePopper, { EmitType } from './use-popper/index'
import { renderPopper, renderTrigger, renderArrow } from './renderers'
import { ClickOutside } from '@hkust-ui/directives'

export default defineComponent({
  name: 'HkustPopper',
  props: defaultProps,
  setup(props, ctx: SetupContext<EmitType[]>) {
    const popperState = usePopper(props, ctx)

    // lifecycle
    const forceDestroy = () => popperState.doDestroy(true)
    // init a popper
    onMounted(popperState.initializePopper)
    onBeforeUnmount(forceDestroy)
    // init a popper
    onActivated(popperState.initializePopper)
    onDeactivated(forceDestroy)

    return popperState
  },
  render() {
    const {
      $slots,
      appendToBody,
      class: kls,
      style,
      effect,
      hide,
      onPopperMouseEnter,
      onPopperMouseLeave,
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave,
      popperClass,
      popperId,
      popperStyle,
      pure,
      showArrow,
      transition,
      visibility,
      stopPopperMouseEvent,
    } = this

    const isManual = this.isManualMode()

    const arrow = renderArrow(showArrow)

    const _t = $slots.trigger?.()

    const triggerProps = {
      'aria-describedby': popperId,
      class: kls,
      style,
      ref: 'triggerRef',
      ...this.events,
    }

    const trigger = isManual
      ? renderTrigger(_t, triggerProps)
      : withDirectives(renderTrigger(_t, triggerProps), [[ClickOutside, hide]])

    const popper = renderPopper(
      {
        effect,
        name: transition,
        popperClass,
        popperId,
        popperStyle,
        pure,
        stopPopperMouseEvent,
        onMouseenter: onPopperMouseEnter,
        onMouseleave: onPopperMouseLeave,
        onAfterEnter,
        onAfterLeave,
        onBeforeEnter,
        onBeforeLeave,
        visibility,
      },
      [
        renderSlot($slots, 'default', {}, () => {
          return [toDisplayString(this.content)]
        }),
        arrow,
      ],
    )

    return h(Fragment, null, [
      trigger,
      h(Teleport as any, {
        to: 'body',
        disabled: !appendToBody,
      }, [popper]),
    ])
  },
})
</script>
