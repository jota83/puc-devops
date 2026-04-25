import { mount } from '@vue/test-utils'
import Login from '../src/views/Login.vue'

test('Login renderiza corretamente', () => {
  const wrapper = mount(Login)
  expect(wrapper.exists()).toBe(true)
})