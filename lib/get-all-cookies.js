// Packages
const cookie = require('cookie')

const getAllCookies = () => {
  const cookies = cookie.parse(document.cookie)

  return cookies
}

module.exports = getAllCookies
