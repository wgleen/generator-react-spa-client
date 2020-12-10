export const setAccessToken = (token) => {
  if (!token) return false

  return localStorage.setItem('accessToken', token)
}

export const getAccessToken = () => localStorage.getItem('accessToken')

export const removeAccessToken = () => localStorage.removeItem('accessToken')

export const getHeaderAccessToken = () => {
  const token = getAccessToken()

  const header = {}

  if (!token) return header

  header.Authorization = `Bearer ${token}`

  return header
}
