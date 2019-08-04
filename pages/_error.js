import React from 'react'

class Error extends React.Component {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render () {
    return (
      <p>
        {this.props.statusCode
          ? `یک خط در سمت سرور رخ داده است : ${this.props.statusCode}`
          : 'یک خطا در سمت مرورگر شما رخ داده است' }
      </p>
    )
  }
}

export default Error
