export const request = (req) => {
  const newReq = { ...req }

  return newReq
}

export const responseSuccess = (res) => {
  const newRes = { ...res }

  return newRes
}

export const responseError = (err) => {
  const newErr = { ...err }

  return Promise.reject(newErr)
}
