import routes from './index'

describe('routes config', () => {
  describe('root', () => {
    it('should return an object with root.path prop equal to "/"', () => {
      expect(routes).toHaveProperty('root.path', '/')
    })
  })
})
