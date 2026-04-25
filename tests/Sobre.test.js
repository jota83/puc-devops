import { mount } from '@vue/test-utils'
import Sobre from '../src/views/Sobre.vue'

test('Sobre renderiza', () => {
  const wrapper = mount(Sobre)
  expect(wrapper.exists()).toBe(true)
})