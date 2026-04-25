import { mount } from '@vue/test-utils'
import Contato from '../src/views/Contato.vue'

test('Contato possui texto', () => {
  const wrapper = mount(Contato)
  expect(wrapper.text().length).toBeGreaterThan(0)
})