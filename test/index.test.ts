/**
 * @jest-environment jsdom
 */

import { getAllCookies, getCookie, removeCookie, setCookie } from '../source'

beforeAll(() => {
  setCookie('cookie', 'my-cookie-value')
  setCookie('cookie2', 'my-cookie-value2')
})

test('get all cookies', () => {
  const data = getAllCookies()
  expect(data).toStrictEqual({
    cookie: 'my-cookie-value',
    cookie2: 'my-cookie-value2',
  })
})

test('get cookie', () => {
  const data = getCookie('cookie')
  expect(data).toStrictEqual('my-cookie-value')
})

test('remove cookie', () => {
  const data = removeCookie('cookie2')
  expect(data).toStrictEqual('cookie=my-cookie-value')
})

test('set cookie string', () => {
  const data = setCookie('new-cookie', 'my-new-cookie-value')
  expect(data).toBe('cookie=my-cookie-value; new-cookie=my-new-cookie-value')
})

test('set cookie object', () => {
  const data = setCookie('my-newest-cookie', { myCookie: 'my-cookie-value' })
  expect(data).toBe(
    'cookie=my-cookie-value; new-cookie=my-new-cookie-value; my-newest-cookie=%7B%22myCookie%22%3A%22my-cookie-value%22%7D'
  )
})
