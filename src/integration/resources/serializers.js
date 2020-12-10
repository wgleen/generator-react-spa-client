// eslint-disable-next-line import/prefer-default-export
export const application = (res = {}) => {
  const { data = {}, headers = {}, metadata = {} } = res

  return {
    data,
    headers,
    metadata
  }
}
