// Packages
const cookie = require('cookie')

const getCookie = name => {
  const cookies = cookie.parse(document.cookie)
  const value = cookies && cookies[name]
  const hasToParse = Boolean((value && value[0] === '{') || value[0] === '[')

  return hasToParse ? JSON.parse(value) : value
}

module.exports = getCookie
