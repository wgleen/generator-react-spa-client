import * as interceptors from './interceptors'

describe('interceptors', () => {
  describe('request()', () => {
    it('should return the req argument given', () => {
      const req = {
        data: [],
        headers: {}
      }

      expect(interceptors.request(req)).toStrictEqual(req)
    })
  })

  describe('responseSuccess()', () => {
    it('should return the req argument given', () => {
      const req = {
        data: [],
        headers: {}
      }

      expect(interceptors.responseSuccess(req)).toStrictEqual(req)
    })
  })

  describe('responseError()', () => {
    it('should return the err argument given', async () => {
      const err = {
        name: 'Error test',
        stack: new Error('Error test')
      }

      await expect(interceptors.responseError(err)).rejects.toStrictEqual(err)
    })
  })
})
