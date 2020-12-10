import store from './store'
import * as middlewares from './middlewares'
import * as resources from './resources'
import * as reducers from './reducers'
import * as reducks from './index'

describe('reducks', () => {
  it('should have a store property equal to store', () => {
    expect(reducks).toHaveProperty('store', store)
  })

  it('should have a middlewares property equal to middlewares', () => {
    expect(reducks).toHaveProperty('middlewares', middlewares)
  })

  it('should have a resources property equal to resources', () => {
    expect(reducks).toHaveProperty('resources', resources)
  })

  it('should have a reducers property equal to reducers', () => {
    expect(reducks).toHaveProperty('reducers', reducers)
  })
})
