import client from './client'
import * as resources from './resources'
import * as request from './request'
import * as integration from './index'
import integrationDefault from './index'

describe('integration', () => {
  it('should have a resources property equal to resources', () => {
    expect(integration).toHaveProperty('resources', resources)
  })

  it('should have a request property equal to request', () => {
    expect(integration).toHaveProperty('request', request)
  })

  it('should be equal to client', () => {
    expect(integrationDefault).toEqual(client)
  })
})
