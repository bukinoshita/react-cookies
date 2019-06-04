// Packages
import React, { Component } from 'react'
import Router from 'next/router'

// Layouts
import Page from '../layouts/page'

// Services
import { retrieveCookie } from '../services/cookies'

class Dashboard extends Component {
  constructor() {
    super()

    this.state = { cookie: '' }
  }

  componentDidMount() {
    const cookie = retrieveCookie()

    if (cookie) {
      return this.setState({ cookie })
    }

    Router.push('/')
  }

  render() {
    const { cookie } = this.state

    return (
      <Page>
        <h1>Your token</h1>
        <span>{cookie}</span>

        <style jsx>{`
          h1 {
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
            letter-spacing: 4px;
            font-weight: 300;
            margin-bottom: 32px;
          }

          span {
            word-break: break-all;
            text-align: center;
            display: block;
            font-size: 11px;
            opacity: 0.5;
            line-height: 16px;
          }
        `}</style>
      </Page>
    )
  }
}

export default Dashboard
