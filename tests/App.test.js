import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

test('App monta corretamente', () => {
  const wrapper = mount(App, {
    global: {
      stubs: ['router-link', 'router-view']
    }
  })

  expect(wrapper.exists()).toBe(true)
})