import client from './client'
import * as authentication from '../lib/authentication'
import * as request from './request'
import {
  DEFAULT_OPTIONS,
  /* eslint-disable import/named */
  rewire$request,
  restore
  /* eslint-enable import/named */
} from './request'

describe('DEFAULT_OPTIONS', () => {
  it('should be properly configured', () => {
    expect(DEFAULT_OPTIONS).toStrictEqual({})
  })
})

describe('request', () => {
  it('should call client.request with an object with method property equal to method argument given', () => {
    const spy = jest.spyOn(client, 'request')

    const method = 'GET'

    request.request(method)

    expect(spy.mock.calls[0][0]).toHaveProperty('method', method)

    spy.mockRestore()
  })

  it('should call client.request with an object with url property equal to url argument given', () => {
    const spy = jest.spyOn(client, 'request')

    const url = 'http://api.com/path/to/resource'

    request.request(undefined, url)

    expect(spy.mock.calls[0][0]).toHaveProperty('url', url)

    spy.mockRestore()
  })

  it('should call client.request with an object with data property equal to options.data argument given', () => {
    const spy = jest.spyOn(client, 'request')

    const data = {
      dataProperty: 'dataValue'
    }

    const options = { data }

    request.request(undefined, undefined, options)

    expect(spy.mock.calls[0][0]).toHaveProperty('data', data)

    spy.mockRestore()
  })

  it('should call client with an object with params property equal to options.params argument given', () => {
    const spy = jest.spyOn(client, 'request')

    const params = {
      paramProperty: 'paramValue'
    }

    const options = { params }

    request.request(undefined, undefined, options)

    expect(spy.mock.calls[0][0]).toHaveProperty('params', params)

    spy.mockRestore()
  })

  describe('when authentication.getHeaderAccessToken return a authorization header with a valid token', () => {
    const token = 'hash-token'
    const header = {
      Authorization: `Bearer ${token}`
    }

    let stub

    beforeEach(() => {
      stub = jest
        .spyOn(authentication, 'getHeaderAccessToken')
        .mockReturnValue(header)
    })

    afterEach(() => {
      stub.mockRestore()
    })

    it('should call client with an object with headers property equal to an object merged with object returned by getHeaderAccessToken', () => {
      const spy = jest.spyOn(client, 'request')

      request.request()

      expect(spy.mock.calls[0][0].headers).toHaveProperty(
        'Authorization',
        header.Authorization
      )

      spy.mockRestore()
    })
  })

  describe('when request promise is success(resolve)', () => {
    it('should return response returned by promise', async () => {
      const data = {
        dataProperty: 'dataValue'
      }

      const res = {
        data: {
          data
        }
      }

      const stub = jest
        .spyOn(client, 'request')
        .mockReturnValue(Promise.resolve(res))

      await expect(request.request()).resolves.toStrictEqual(res)

      stub.mockRestore()
    })
  })

  describe('when request promise is failed(reject)', () => {
    it('should return error returned by promise', async () => {
      const data = {
        dataProperty: 'dataValue'
      }

      const err = {
        response: {
          data
        }
      }

      const stub = jest
        .spyOn(client, 'request')
        .mockReturnValue(Promise.reject(err))

      const options = {
        config: {
          handleError: undefined
        }
      }

      await expect(
        request.request(undefined, undefined, options)
      ).rejects.toStrictEqual(err)

      stub.mockRestore()
    })
  })
})

describe('get()', () => {
  it('should return request called with "GET", url and options arguments given', async () => {
    const data = {
      dataProperty: 'dataValue'
    }

    const res = {
      data: {
        data
      }
    }
    const url = 'http://api.com/path/to/resource'

    const options = {
      ...DEFAULT_OPTIONS,
      optionProperty: 'optionValue'
    }

    let spy

    rewire$request((spy = jest.fn().mockReturnValue(Promise.resolve(res))))

    await expect(request.get(url, options)).resolves.toEqual(res)

    expect(spy).toHaveBeenCalledWith('GET', url, options)

    spy.mockRestore()
    restore()
  })
})

describe('post()', () => {
  it('should return request called with "POST", url and an object merged with options arguments given and with a property data equal to data argument given', async () => {
    const data = {
      dataProperty: 'dataValue'
    }

    const res = {
      data: {
        data
      }
    }
    const url = 'http://api.com/path/to/resource'

    const options = {
      ...DEFAULT_OPTIONS,
      optionProperty: 'optionValue'
    }

    let spy

    rewire$request((spy = jest.fn().mockReturnValue(Promise.resolve(res))))

    await expect(request.post(url, data, options)).resolves.toEqual(res)

    expect(spy).toHaveBeenCalledWith('POST', url, {
      data,
      ...options
    })

    spy.mockRestore()
    restore()
  })
})

describe('put()', () => {
  it('should return request called with "PUT", url and an object merged with options arguments given and with a property data equal to data argument given', async () => {
    const data = {
      dataProperty: 'dataValue'
    }

    const res = {
      data: {
        data
      }
    }
    const url = 'http://api.com/path/to/resource'

    const options = {
      ...DEFAULT_OPTIONS,
      optionProperty: 'optionValue'
    }

    let spy

    rewire$request((spy = jest.fn().mockReturnValue(Promise.resolve(res))))

    await expect(request.put(url, data, options)).resolves.toEqual(res)

    expect(spy).toHaveBeenCalledWith('PUT', url, {
      data,
      ...options
    })

    spy.mockRestore()
    restore()
  })
})

describe('patch()', () => {
  it('should return request called with "PATCH", url and an object merged with options arguments given and with a property data equal to data argument given', async () => {
    const data = {
      dataProperty: 'dataValue'
    }

    const res = {
      data: {
        data
      }
    }
    const url = 'http://api.com/path/to/resource'

    const options = {
      ...DEFAULT_OPTIONS,
      optionProperty: 'optionValue'
    }

    let spy

    rewire$request((spy = jest.fn().mockReturnValue(Promise.resolve(res))))

    await expect(request.patch(url, data, options)).resolves.toEqual(res)

    expect(spy).toHaveBeenCalledWith('PATCH', url, {
      data,
      ...options
    })

    spy.mockRestore()
    restore()
  })
})

describe('del()', () => {
  it('should return request called with "DELETE", url and options arguments given', async () => {
    const data = {
      dataProperty: 'dataValue'
    }

    const res = {
      data: {
        data
      }
    }
    const url = 'http://api.com/path/to/resource'

    const options = {
      optionProperty: 'optionValue'
    }

    let spy

    rewire$request((spy = jest.fn().mockReturnValue(Promise.resolve(res))))

    await expect(request.del(url, options)).resolves.toEqual(res)

    expect(spy).toHaveBeenCalledWith('DELETE', url, {
      ...DEFAULT_OPTIONS,
      ...options
    })

    spy.mockRestore()
    restore()
  })
})
