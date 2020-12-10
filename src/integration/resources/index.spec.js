import * as serializers from './serializers'
import * as resources from './index'

describe('resources', () => {
  it('should have a serializers property equal to serializers', () => {
    expect(resources).toHaveProperty('serializers', serializers)
  })
})
