import cookie from 'cookie'

export type CookieOptions = {
  expire?: number | Date
  maxAge?: number
  domain?: string
  path?: string
  secure?: boolean
  httpOnly?: boolean
}

export const setCookie = (name: string, value: unknown, options: CookieOptions = {}) => {
  const rawCookie: any = {}
  rawCookie[name] = value

  if (typeof value === 'object') {
    rawCookie[name] = JSON.stringify(value)
  }

  document.cookie = cookie.serialize(name, rawCookie[name], options)

  return document.cookie
}
