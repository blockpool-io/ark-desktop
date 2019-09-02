import { shallowMount } from '@vue/test-utils'
import QrMixin from '@/mixins/qr'

describe('Mixins > Qr', () => {
  let wrapper

  beforeEach(() => {
    const TestComponent = {
      name: 'TestComponent',
      template: '<div/>'
    }

    wrapper = shallowMount(TestComponent, {
      mixins: [QrMixin]
    })
  })

  describe('qr_getAddress', () => {
    it('should return an address from an uri string', () => {
      expect(wrapper.vm.qr_getAddress('bpl:BLVM4Zciodj5LQxN427C84zRLWd9EmBmix')).toEqual('BLVM4Zciodj5LQxN427C84zRLWd9EmBmix')
    })

    it('should return an address from a json object', () => {
      expect(wrapper.vm.qr_getAddress('{"a": "BLVM4Zciodj5LQxN427C84zRLWd9EmBmix"}')).toEqual('BLVM4Zciodj5LQxN427C84zRLWd9EmBmix')
    })

    it('should return an address from string', () => {
      expect(wrapper.vm.qr_getAddress('BLVM4Zciodj5LQxN427C84zRLWd9EmBmix')).toEqual('BLVM4Zciodj5LQxN427C84zRLWd9EmBmix')
    })

    it('should return undefined or the same string from an incorrect entry', () => {
      expect(wrapper.vm.qr_getAddress('bpl:address')).toEqual('bpl:address')
      expect(wrapper.vm.qr_getAddress('{"b": "address"}')).toBeUndefined()
      expect(wrapper.vm.qr_getAddress('asdf')).toEqual('asdf')
    })
  })

  describe('qr_getPassphrase', () => {
    it('should return a passphrase from a json object', () => {
      expect(wrapper.vm.qr_getPassphrase('{"passphrase": "this is a top secret passphrase"}')).toEqual('this is a top secret passphrase')
    })

    it('should return a passphrase from string', () => {
      expect(wrapper.vm.qr_getPassphrase('this is a top secret passphrase')).toEqual('this is a top secret passphrase')
    })

    it('should return undefined or the same string from an incorrect entry', () => {
      expect(wrapper.vm.qr_getPassphrase('{"asdf": "this is a top secret passphrase"}')).toBeUndefined()
      expect(wrapper.vm.qr_getPassphrase('asdf')).toEqual('asdf')
    })
  })
})
