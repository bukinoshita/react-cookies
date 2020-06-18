import cookie from 'cookie'

export const getCookie = (name: string) => {
  const cookies = cookie.parse(document.cookie)
  const value = cookies && cookies[name]
  const hasToParse = Boolean((value && value[0] === '{') || value[0] === '[')

  return hasToParse ? JSON.parse(value) : value
}
