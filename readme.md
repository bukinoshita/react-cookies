# react-cookies [![Build Status](https://travis-ci.org/bukinoshita/react-cookies.svg?branch=master)](https://travis-ci.org/bukinoshita/react-cookies)

> Load and save cookies with React

### ⚠️ If you're looking for [react-cookies@0.1.1](https://github.com/bukinoshita/react-cookies/tree/v0.1.1). ⚠️

## Install

```bash
$ yarn add react-cookies
```

## Quick start

```js
// Packages
import React from 'react'
import { setCookie, getCookie, removeCookie } from 'react-cookies'

class Example extends Component {
  componentDidMount() {
    setCookie('my-cookie', 'my-cookie-value', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    })

    getCookie('my-cookie')

    removeCookie('my-cookie')
  }

  render() {
    return <h1>My example</h1>
  }
}
```

## API

### .setCookie(name, value, [options])

Set a cookie.

#### name

The cookie name

Type: `string`<br />
Required

#### value

The cookie value

Type: `any`<br />
Required

#### options

Support all the cookie options from the [RFC 6265](https://tools.ietf.org/html/rfc6265#section-4.1.2.1).

Type: `object`<br />

- [expire](https://tools.ietf.org/html/rfc6265#section-4.1.2.1): Indicates the maximum lifetime of the cookie represented as the date and time
- [maxAge](https://tools.ietf.org/html/rfc6265#section-4.1.2.2): Indicates the maximum lifetime of the cookie represented as the number of seconds
- [domain](https://tools.ietf.org/html/rfc6265#section-4.1.2.3): Specifies those hosts to which the cookie will be sent
- [path](https://tools.ietf.org/html/rfc6265#section-4.1.2.4): The scope of each cookie is limited to a set of paths
- [secure](https://tools.ietf.org/html/rfc6265#section-4.1.2.5): Limits the scope of the cookie to "secure" channels (where "secure" is defined by the user agent)
- [httpOnly](https://tools.ietf.org/html/rfc6265#section-4.1.2.6): Limits the scope of the cookie to HTTP requests

### .getCookie(name)

Get a cookie.

#### name

The cookie name.

Type: `string`<br />
Required

### .removeCookie(name)

Remove a cookie.

#### name

The cookie name.

Type: `string`<br />
Required

### .getAllCookies()

Get all cookies.

## License

[MIT](https://github.com/bukinoshita/react-cookies/blob/master/license) &copy; Bu Kinoshita
