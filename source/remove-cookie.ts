import cookie from 'cookie'

export const removeCookie = (name: string) => {
  const options = { expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0 }

  document.cookie = cookie.serialize(name, '', options)

  return document.cookie
}
