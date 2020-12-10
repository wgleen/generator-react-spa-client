import api from './index'

describe('api config', () => {
  it('should be properly configured', () => {
    expect(api).toStrictEqual({
      baseURL: process.env.API_BASE_URL,
      timeout: process.env.API_TIMEOUT,
      headers: {
        contentType: process.env.API_HEADERS_CONTENT_TYPE,
        XKey: process.env.API_HEADERS_X_KEY
      }
    })
  })
})
