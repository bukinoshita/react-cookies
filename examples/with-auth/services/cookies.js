// Packages
import { setCookie, getAllCookies, removeCookie } from 'react-cookies'

const COOKIE_NAME = 'react-cookies-with-auth'

export const saveCookie = value => {
  const expires = new Date()
  expires.setDate(expires.getDate() + 14)

  return setCookie(COOKIE_NAME, value, { expires })
}

export const deleteCookie = () => {
  removeCookie(COOKIE_NAME)
}

export const retrieveCookie = () => {
  const cookies = getAllCookies()
  if (Object.keys(cookies).length > 0) {
    return cookies && cookies[COOKIE_NAME] && cookies[COOKIE_NAME]
  }

  return false
}
