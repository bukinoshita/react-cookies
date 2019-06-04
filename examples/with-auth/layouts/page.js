// Packages
import React, { PureComponent } from 'react'

class Page extends PureComponent {
  render() {
    const { children } = this.props

    return (
      <main>
        <div>{children}</div>

        <style global jsx>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'SF UI Display', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif';
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
          }

          body {
            background-color: #000;
            font-family: ;
            color: #fff;
          }
        `}</style>

        <style jsx>{`
          main {
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            align-items: center;
            min-height: 100vh;
          }

          div {
            width: 100%;
          }
        `}</style>
      </main>
    )
  }
}

export default Page
