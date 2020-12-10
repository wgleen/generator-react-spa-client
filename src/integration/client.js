import axios from 'axios'
import { merge } from 'lodash'
import config from '../config'
import * as interceptors from './interceptors'

const client = axios.create({
  baseURL: config.api.baseURL,
  timeout: config.api.timeout
})

client.defaults.headers.common = merge({}, client.defaults.headers.common, {
  'Content-Type': config.api.headers.contentType,
  'x-api-key': config.api.headers.XKey
})

client.interceptors.request.use(interceptors.request)

client.interceptors.response.use(
  interceptors.responseSuccess,
  interceptors.responseError
)

export default client
