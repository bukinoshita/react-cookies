// Packages
const cookie = require('cookie')

const setCookie = (name, value, options) => {
  const rawCookie = {}
  rawCookie[name] = value

  if (typeof value === 'object') {
    rawCookie[name] = JSON.stringify(value)
  }

  document.cookie = cookie.serialize(name, rawCookie[name], options)

  return document.cookie
}

module.exports = setCookie
