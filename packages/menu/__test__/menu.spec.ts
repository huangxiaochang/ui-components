import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'

import { sleep } from '@hkust-ui/utils/test-util'

import Menu from '../src/index.vue'
import MenuItem from '../src/menuItem.vue'
import Submenu from '../src/submenu.vue'

import { RegisterMenuItem } from '../src/menu-type'

const _mount = (template: string, options = {}) => {
  return mount({
    components: {
      'hkust-menu': Menu,
      'hkust-menu-item': MenuItem,
      'hkust-submenu': Submenu,
    },
    template,
    ...options,
  })
}

describe('menu', () => {
  test('create', async () => {
    const wrapper = _mount(`
      <hkust-menu>
        <hkust-menu-item index="1" ref="item1">Contact us</hkust-menu-item>
        <hkust-menu-item index="2" ref="item2">About us</hkust-menu-item>
      </hkust-menu>
    `)
    const item1 = await wrapper.findComponent({ ref: 'item1' })
    const item2 = await wrapper.findComponent({ ref: 'item2' })
    await item1.trigger('click')
    await nextTick()
    expect(item1.classes()).toContain('is-active')
    await item2.trigger('click')
    await nextTick()
    expect(item2.classes()).toContain('is-active')
  })

  test('test color', async () => {
    const wrapper = _mount(`
      <hkust-menu
      default-active="2"
      background-color="#f00"
      text-color="#000"
      active-text-color="#0f0"
      hover-background-color="#00f"
      >
        <hkust-menu-item index="1" ref="item1">Contact us</hkust-menu-item>
        <hkust-menu-item index="2" ref="item2">About us</hkust-menu-item>
      </hkust-menu>
    `)
    const rootEl = wrapper.vm.$el
    const item1 = await wrapper.findComponent({ ref: 'item1' })
    const item2 = await wrapper.findComponent({ ref: 'item2' })
    const item1El = item1.vm.$el
    const item2El = item2.vm.$el

    expect(rootEl.style.backgroundColor).toEqual('rgb(255, 0, 0)')
    expect(item2El.style.backgroundColor).toEqual('rgb(255, 0, 0)')
    expect(item1El.style.color).toEqual('rgb(0, 0, 0)')
    expect(item2El.style.color).toEqual('rgb(0, 255, 0)')
    await item1.trigger('mouseenter')
    await nextTick()
    expect(item1El.style.backgroundColor).toEqual('rgb(0, 0, 255)')

  })

  test('test menu item click', async () => {
    const wrapper = _mount(`
      <hkust-menu
      default-active="2"
      background-color="#f00"
      text-color="#000"
      active-text-color="#0f0"
      hover-background-color="#00f"
      >
        <hkust-menu-item index="1" @click="handleItemClick" ref="item1">Contact us</hkust-menu-item>
        <hkust-menu-item index="2" ref="item2">About us</hkust-menu-item>
      </hkust-menu>
    `, {
      data() {
        return {
          clickCount: 0,
        }
      },
      methods: {
        handleItemClick(item: RegisterMenuItem) {
          expect(item).toMatchObject({
            index: '1',
            indexPath: ['1'],
          })
          this.clickCount++
        },
      },
    })
    const rootEl = wrapper.vm.$el
    const item1 = await wrapper.findComponent({ ref: 'item1' })
    const item2 = await wrapper.findComponent({ ref: 'item2' })
    const item1El = item1.vm.$el
    const item2El = item2.vm.$el

    expect(rootEl.style.backgroundColor).toEqual('rgb(255, 0, 0)')
    expect(item2El.style.backgroundColor).toEqual('rgb(255, 0, 0)')
    expect(item1El.style.color).toEqual('rgb(0, 0, 0)')
    expect(item2El.style.color).toEqual('rgb(0, 255, 0)')
    await item1.trigger('click')
    await nextTick()
    expect(item1El.style.color).toEqual('rgb(0, 255, 0)')
    expect(item2El.style.color).toEqual('rgb(0, 0, 0)')
    expect((wrapper as any).vm.clickCount).toEqual(1)
  })

  test('test menu item disable', async () => {
    const wrapper = _mount(`
      <hkust-menu>
        <hkust-menu-item index="1" @click="handleItemClick" :disabled="true" ref="item1">Contact us</hkust-menu-item>
        <hkust-menu-item index="2" ref="item2">About us</hkust-menu-item>
      </hkust-menu>
    `, {
      data() {
        return {
          clickCount: 0,
        }
      },
      methods: {
        handleItemClick(item: RegisterMenuItem) {
          expect(item).toMatchObject({
            index: '1',
            indexPath: ['1'],
          })
          this.clickCount++
        },
      },
    })
    const item1 = await wrapper.findComponent({ ref: 'item1' })

    await item1.trigger('click')
    await nextTick()
    expect(item1.classes()).toContain('is-disabled')
    expect((wrapper as any).vm.clickCount).toEqual(0)
  })

  test('test open and close method', async () => {
    const wrapper = _mount(`
      <hkust-menu ref="menu">
        <hkust-submenu index="submenu_1" ref="submenu">
          <template #title>
            <span>Contact-About</span>
          </template>
          <hkust-menu-item index="1" ref="item1">Contact us</hkust-menu-item>
          <hkust-menu-item index="2" ref="item2">About us</hkust-menu-item>
        </hkust-submenu>
        <button @click="openSubmenu" id="open_btn">open</button>
        <button @click="closeSubmenu" id="close_btn">close</button>
      </hkust-menu>
    `, {
      methods: {
        openSubmenu() {
          this.$refs.menu.open('submenu_1')
        },
        closeSubmenu() {
          this.$refs.menu.close('submenu_1')
        },
      },
    })
    const submenu = await wrapper.findComponent({ ref: 'submenu' })
    const openBtn = await wrapper.find('#open_btn')
    const closeBtn = await wrapper.find('#close_btn')

    await openBtn.trigger('click')
    await nextTick()
    expect(submenu.classes()).toContain('is-opened')
    expect((submenu.vm as any).opened).toBeTruthy()
    await closeBtn.trigger('click')
    await nextTick()
    expect((submenu.vm as any).opened).toBeFalsy()
    expect(submenu.classes()).not.toContain('is-opened')
  })
})

describe('submenu', () => {
  test('background', async () => {
    const wrapper = _mount(`
      <hkust-menu
      default-active="2"
      background-color="#f00"
      text-color="#000"
      active-text-color="#0f0"
      hover-background-color="#00f"
      >
        <hkust-submenu
          ref="sub_1"
          index="sub1"
          background-color="#ff0"
        >
          <template #title>
            <span>Contact-About</span>
          </template>
          <hkust-menu-item index="1" ref="item1">Contact us</hkust-menu-item>
          <hkust-menu-item index="2" ref="item2">About us</hkust-menu-item>
        </hkust-submenu>
        <hkust-submenu
          ref="sub_2"
          index="sub2"
        >
          <template #title>
            <span>Contact-About</span>
          </template>
          <hkust-menu-item index="1" ref="item1">Contact us</hkust-menu-item>
          <hkust-menu-item index="2" ref="item2">About us</hkust-menu-item>
        </hkust-submenu>
      </hkust-menu>
    `)

    const item1 = await wrapper.findComponent({ ref: 'sub_1' }).find('.hkust-menu')
    const item2 = await wrapper.findComponent({ ref: 'sub_2' }).find('.hkust-menu')

    expect(item1.attributes('style')).toContain('background-color: rgb(255, 255, 0)')
    expect(item2.attributes('style')).toContain('background-color: rgb(255, 0, 0)')
  })

  test('default open', async () => {
    const wrapper = _mount(`
      <hkust-menu :default-openeds="defaultOpeneds">
        <hkust-submenu
          ref="sub_1"
          index="sub1"
          background-color="#ff0"
        >
          <template #title>
            <span>Contact-About</span>
          </template>
          <hkust-menu-item index="1" ref="item1">Contact us</hkust-menu-item>
          <hkust-menu-item index="2" ref="item2">About us</hkust-menu-item>
        </hkust-submenu>
        <hkust-submenu
          ref="sub_2"
          index="sub2"
        >
          <template #title>
            <span>Contact-About</span>
          </template>
          <hkust-menu-item index="1" ref="item1">Contact us</hkust-menu-item>
          <hkust-menu-item index="2" ref="item2">About us</hkust-menu-item>
        </hkust-submenu>
      </hkust-menu>
    `, {
      data() {
        return {
          defaultOpeneds: ['sub1', 'sub2'],
        }
      },
    })

    const item1 = await wrapper.findComponent({ ref: 'sub_1' })
    const item2 = await wrapper.findComponent({ ref: 'sub_2' })
    await nextTick()
    expect(item1.classes()).toContain('is-opened')
    expect(item2.classes()).toContain('is-opened')
    const menu = wrapper.vm as any
    menu.defaultOpeneds = ['sub2']
    await nextTick()
    expect(item2.classes()).toContain('is-opened')
    expect(item1.classes()).toContain('is-opened')
  })

  test('test disabled', async () => {
    const wrapper = _mount(`
      <hkust-menu>
        <hkust-submenu
          ref="sub_1"
          index="sub1"
          disabled
        >
          <template #title>
            <span >Contact-About</span>
          </template>
          <hkust-menu-item index="1" ref="item1">Contact us</hkust-menu-item>
          <hkust-menu-item index="2" ref="item2">About us</hkust-menu-item>
        </hkust-submenu>
      </hkust-menu>
    `)
    const submenu = await wrapper.findComponent({ ref: 'sub_1' })
    await submenu.trigger('click')
    await nextTick()
    expect(submenu.classes().includes('is-opened')).toBeFalsy()
  })

  test('horizontal mode', async () => {
    const wrapper = _mount(`
      <hkust-menu mode="horizontal">
        <hkust-submenu
          ref="sub_1"
          index="sub1"
        >
          <template #title>
            <span >Contact-About</span>
          </template>
        </hkust-submenu>
      </hkust-menu>
    `)
    const submenu = await wrapper.findComponent({ ref: 'sub_1' })
    expect(wrapper.classes()).toContain('hkust-menu--horizontal')
    submenu.trigger('mouseenter')
    await sleep(500)
    expect(
      document.body
        .querySelector('body [role="tooltip"]')
        .getAttribute('style'),
    ).not.toContain('display: none')
    submenu.trigger('mouseleave')
    await sleep(500)
    expect(
      document.body
        .querySelector('body [role="tooltip"]')
        .getAttribute('style'),
    ).toContain('display: none')
  })
})

