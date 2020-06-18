import cookie from 'cookie'

export const getAllCookies = () => {
  const cookies = cookie.parse(document.cookie)

  return cookies
}
