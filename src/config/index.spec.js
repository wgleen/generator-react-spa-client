import config from './index'
import api from './api'
import site from './site'
import routes from './routes'

describe('config', () => {
  it('should have an property api equal to api config', () => {
    expect(config).toHaveProperty('api', api)
  })

  it('should have an property site equal to site config', () => {
    expect(config).toHaveProperty('site', site)
  })

  it('should have an property routes equal to routes config', () => {
    expect(config).toHaveProperty('routes', routes)
  })
})
