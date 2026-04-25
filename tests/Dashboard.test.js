import { mount } from '@vue/test-utils'
import Dashboard from '../src/views/Dashboard.vue'

test('Dashboard renderiza', () => {
  const wrapper = mount(Dashboard)
  expect(wrapper.exists()).toBe(true)
})