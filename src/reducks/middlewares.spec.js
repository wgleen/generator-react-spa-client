import thunk from 'redux-thunk'
import multi from 'redux-multi'
import promise from 'redux-promise'
import * as middlewares from './middlewares'

describe('middlewares', () => {
  describe('rootMiddlewares', () => {
    it('should contain the thunk middleware', () => {
      expect(middlewares.rootMiddlewares).toContain(thunk)
    })

    it('should contain the multi middleware', () => {
      expect(middlewares.rootMiddlewares).toContain(multi)
    })

    it('should contain the promise middleware', () => {
      expect(middlewares.rootMiddlewares).toContain(promise)
    })
  })
})
