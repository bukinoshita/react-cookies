# react-cookies

> Load and save cookies with React

## Install

```bash
$ yarn add react-cookies
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

MIT © [Bu Kinoshita](https://bukinoshita.com)
