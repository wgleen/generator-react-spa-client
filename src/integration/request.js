import { merge } from 'lodash'
import * as authentication from '../lib/authentication'
import client from './client'

export const DEFAULT_OPTIONS = {}

export const request = async (method, url, options) => {
  const newHeaders = {
    ...options?.headers,
    ...authentication.getHeaderAccessToken()
  }

  try {
    const res = await client.request({
      method,
      url,
      data: options?.data,
      params: options?.params,
      headers: newHeaders
    })

    return res
  } catch (err) {
    return Promise.reject(err)
  }
}

export const get = (url, options) =>
  request('GET', url, merge({}, DEFAULT_OPTIONS, options))

export const post = (url, data, options) =>
  request(
    'POST',
    url,
    merge({}, DEFAULT_OPTIONS, {
      ...options,
      data
    })
  )

export const put = (url, data, options) =>
  request(
    'PUT',
    url,
    merge({}, DEFAULT_OPTIONS, {
      ...options,
      data
    })
  )

export const patch = (url, data, options) =>
  request(
    'PATCH',
    url,
    merge({}, DEFAULT_OPTIONS, {
      ...options,
      data
    })
  )

export const del = (url, options) =>
  request('DELETE', url, merge({}, DEFAULT_OPTIONS, options))
