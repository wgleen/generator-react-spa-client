import * as serializers from './serializers'

describe('serializers', () => {
  describe('application()', () => {
    it('should return an object properly configured', () => {
      const req = {
        headers: {
          headerProperty: 'header value'
        },
        data: {
          dataProperty: 'data value'
        },
        metadata: {
          metadataProperty: 'metadata value'
        },
        otherData: {
          otherProperty: 'other value'
        }
      }

      expect(serializers.application(req)).toStrictEqual({
        headers: {
          headerProperty: 'header value'
        },
        data: {
          dataProperty: 'data value'
        },
        metadata: {
          metadataProperty: 'metadata value'
        }
      })
    })
  })
})
