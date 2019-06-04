// Packages
import React, { Component } from 'react'
import Router from 'next/router'

// Layouts
import Page from '../layouts/page'

// Services
import api from '../services/api'
import { saveCookie, retrieveCookie } from '../services/cookies'

class Login extends Component {
  constructor() {
    super()

    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    const cookie = retrieveCookie()

    if (cookie) {
      return Router.push('/dashboard')
    }
  }

  async onSubmit(e) {
    e.preventDefault()

    const { token } = await api()

    if (token) {
      saveCookie(token)
      return Router.push('/dashboard')
    }
  }

  render() {
    return (
      <Page>
        <h1>Login</h1>

        <form onSubmit={this.onSubmit}>
          <input type="email" placeholder="Your email" />
          <button type="submit">Log in</button>
        </form>

        <style jsx>{`
          h1 {
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
            letter-spacing: 4px;
            font-weight: 300;
            margin-bottom: 32px;
          }

          input {
            width: 100%;
            font-size: 16px;
            border-radius: 4px;
            padding: 16px;
            border: none;
            background-color: rgba(255, 255, 255, 0.075);
            outline: none;
            color: #fff;
          }

          button {
            width: 100%;
            display: block;
            border-radius: 4px;
            text-align: center;
            font-size: 12px;
            text-transform: uppercase;
            padding: 14px;
            font-weight: 500;
            letter-spacing: 2px;
            margin-top: 16px;
            cursor: pointer;
            box-shadow: 0 2px 6px rgba(255, 255, 255, 0.075);
          }
        `}</style>
      </Page>
    )
  }
}

export default Login
