import store from './store'

describe('store', () => {
  describe('store', () => {
    it('should be a valid store from redux', () => {
      expect(store).toHaveProperty('dispatch')
      expect(store).toHaveProperty('getState')
    })
  })
})
