import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renderiza quando minha propriedade msg é passada', () => { //Test block.
    const msg = 'esta é a minha mensagem de teste'
    const wrapper = shallowMount(HelloWorld, {   //Component Mount.
      props: {msg}
    })
    expect(wrapper.text()).toMatch(msg)   //Assertion.
  })
})
