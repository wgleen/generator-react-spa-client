import {
  /* eslint-disable import/named */
  rewire$getAccessToken,
  restore
  /* eslint-enable import/named */
} from './index'
import * as authentication from './index'

describe('authentication', () => {
  describe('setAccessToken()', () => {
    describe('when token argument is not defined', () => {
      it('should return false', () => {
        expect(authentication.setAccessToken()).toBeFalse()
      })
    })

    describe('when token argument is defined', () => {
      const token = 'hash-token'

      it('should set a item into localStorage with name equal to "accessToken" and value equal to token argument', () => {
        localStorage.removeItem('accessToken')

        authentication.setAccessToken(token)

        expect(localStorage.getItem('accessToken')).toEqual(token)

        localStorage.removeItem('accessToken')
      })
    })
  })

  describe('getAccessToken()', () => {
    it('should return the "accessToken" item into localStorage', () => {
      const token = 'hash-token'

      localStorage.setItem('accessToken', token)

      expect(authentication.getAccessToken()).toEqual(token)

      localStorage.removeItem('accessToken')
    })
  })

  describe('removeAccessToken()', () => {
    it('should remove the "accessToken" item into localStorage', () => {
      localStorage.setItem('accessToken', 'hash-token')

      authentication.removeAccessToken()

      expect(localStorage.getItem('accessToken')).toBeNull()
    })
  })

  describe('getHeaderAccessToken()', () => {
    describe('when getAccessToken return null', () => {
      beforeEach(() => {
        rewire$getAccessToken(jest.fn().mockReturnValue(null))
      })

      afterEach(() => {
        restore()
      })

      it('should return an empty object', () => {
        expect(authentication.getHeaderAccessToken()).toEqual({})
      })
    })

    describe('when getAccessToken return a token', () => {
      const token = 'hash-token'

      beforeEach(() => {
        rewire$getAccessToken(jest.fn().mockReturnValue(token))
      })

      afterEach(() => {
        restore()
      })

      it('should return an object with a Authorization property equal to "Bearer" plus token', () => {
        expect(authentication.getHeaderAccessToken()).toEqual({
          Authorization: `Bearer ${token}`
        })
      })
    })
  })
})
