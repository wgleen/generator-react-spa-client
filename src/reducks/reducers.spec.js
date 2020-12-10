import { configureStore } from '@reduxjs/toolkit'
import * as reducers from './reducers'
import * as middlewares from './middlewares'

describe('reducers', () => {
  describe('rootReducer', () => {
    const store = configureStore({
      reducer: reducers.rootReducer,
      middlewares: middlewares.rootMiddlewares
    })

    const state = store.getState()

    it('should be an object', () => {
      expect(state).toBeObject()
    })
  })
})
