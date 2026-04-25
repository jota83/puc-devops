import { mount } from '@vue/test-utils'
import Home from '../src/views/Home.vue'

test('Home renderiza corretamente', () => {
  const wrapper = mount(Home)
  expect(wrapper.exists()).toBe(true)
})