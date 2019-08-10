import WalletService from '../../../src/renderer/services/wallet'

describe('Services > Wallet', () => {
  describe('generating a passphrase and address', () => {
    it('will throw an error the first time for some reason', () => {
      const passphrase = 'one video jaguar gap soldier ill hobby motor bundle couple trophy smoke'
      try {
        WalletService.getAddress(passphrase, 25)
      } catch (ex) {
        expect(ex.message).toContain('randomBytes')
      }
    })

    it('should work in English', () => {
      const passphrase = 'one video jaguar gap soldier ill hobby motor bundle couple trophy smoke'
      const address = 'BAH22ft7nX6VbYbmf9PMdss28Lu9AZ91Gp'
      expect(WalletService.getAddress(passphrase, 25)).toEqual(address)
    })

    it('should work in Chinese (Traditional)', () => {
      const passphrase = '苗 雛 陸 桿 用 腐 爐 詞 鬼 雨 爾 然'
      const address = 'BRQgTpWA8XRw7PsfYCnAzDu6Cbc5eNB9BJ'
      expect(WalletService.getAddress(passphrase, 25)).toEqual(address)
    })

    it('should work in French', () => {
      const passphrase = 'galerie notoire prudence mortier soupape cerise argent neurone pommade géranium potager émouvoir'
      const address = 'BTZcWAyvyyh1dAo9dWATjbS5KNbEYyReLR'
      expect(WalletService.getAddress(passphrase, 25)).toEqual(address)
    })

    it('should work in Italian', () => {
      const passphrase = 'mucca comodo imbevuto talismano sconforto cavillo obelisco quota recupero malinteso gergo bipede'
      const address = 'B869M5wkeX3VFEAuwB2Q1GKfZwVHX5w5Qt'
      expect(WalletService.getAddress(passphrase, 25)).toEqual(address)
    })

    it('should work in Japanese', () => {
      const passphrase = 'うかべる　くすりゆび　ひさしぶり　たそがれ　そっこう　ちけいず　ひさしぶり　ていか　しゃちょう　けおりもの　ちぬり　りきせつ'
      const address = 'BQ9tLBwE8FhiXkBg33GemRpfeYAsNMWGVX'
      expect(WalletService.getAddress(passphrase, 25)).toEqual(address)
    })

    it('should work in Korean with initially decomposed characters', () => {
      const passphrase = '변명 박수 사건 실컷 목적 비용 가능 시골 수동적 청춘 식량 도망'
      const address = 'B4ZuosnZVCMDqy2dmbxAu5tnADNt1ZpK1B'
      expect(WalletService.getAddress(passphrase, 25)).toEqual(address)
    })

    it('should work in Korean without decomposing', () => {
      const passphrase = '변명 박수 사건 실컷 목적 비용 가능 시골 수동적 청춘 식량 도망'
      const address = 'B4ZuosnZVCMDqy2dmbxAu5tnADNt1ZpK1B'
      expect(WalletService.getAddress(passphrase, 25)).toEqual(address)
    })

    it('should work in Spanish', () => {
      const passphrase = 'cadena cadáver malla etapa vista alambre burbuja vejez aéreo taco rebaño tauro'
      const address = 'BMsRvqPftVh76hJWz6LXFy2yzivTL2jAGv'
      expect(WalletService.getAddress(passphrase, 25)).toEqual(address)
    })
  })

  describe('validateUsername', () => {
    it('should work OK', () => {
      const username = 'example'
      expect(WalletService.validateUsername(username)).toEqual({
        passes: true,
        errors: []
      })
    })

    it('should not be empty', () => {
      const username = ''
      expect(WalletService.validateUsername(username)).toEqual({
        passes: false,
        errors: [{ type: 'empty' }]
      })
    })

    it('should admit 20 characters at most', () => {
      const username = 'asdf1234asdf1234asdf1234'
      expect(WalletService.validateUsername(username)).toEqual({
        passes: false,
        errors: [{ type: 'maxLength' }]
      })
    })

    it('should not admit uppercase characters', () => {
      const username = 'eXamPLe'
      expect(WalletService.validateUsername(username)).toEqual({
        passes: false,
        errors: [{ type: 'invalidFormat' }]
      })
    })

    it('should admit only alphanumeric characters and some symbols', () => {
      expect(WalletService.validateUsername('a!5@$&_.')).toEqual({
        passes: true,
        errors: []
      })

      expect(WalletService.validateUsername('~ll')).toEqual({
        passes: false,
        errors: [{ type: 'invalidFormat' }]
      })

      expect(WalletService.validateUsername('a#')).toEqual({
        passes: false,
        errors: [{ type: 'invalidFormat' }]
      })

      expect(WalletService.validateUsername('a%0')).toEqual({
        passes: false,
        errors: [{ type: 'invalidFormat' }]
      })

      expect(WalletService.validateUsername('(a)')).toEqual({
        passes: false,
        errors: [{ type: 'invalidFormat' }]
      })

      expect(WalletService.validateUsername('a}a{')).toEqual({
        passes: false,
        errors: [{ type: 'invalidFormat' }]
      })

      expect(WalletService.validateUsername('a[a]')).toEqual({
        passes: false,
        errors: [{ type: 'invalidFormat' }]
      })

      expect(WalletService.validateUsername('a+a')).toEqual({
        passes: false,
        errors: [{ type: 'invalidFormat' }]
      })

      expect(WalletService.validateUsername('a-a')).toEqual({
        passes: false,
        errors: [{ type: 'invalidFormat' }]
      })
    })
  })
})
