import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

// import css from './login.css'

export default class Login extends Component {
  static propTypes = {
    auth: PropTypes.object,
    history: PropTypes.object,
    requestLogin: PropTypes.object
  }

  static defaultProps = {
    auth: {},
    history: {},
    requestLogin: {}
  }

  constructor(props) {
    super(props)

    this.state = {
      isLoginLoading: false
    }

    this.handleClickLogin = this.handleClickLogin.bind(this)
  }

  handleClickLogin() {
    const email = this.emailInput.value
    const password = this.passwordInput.value
    console.log('email', email)
    console.log('password', password)
    if (email !== '' && password !== '') {
      this.setState({ isLoginLoading: true })
    }
  }

  render() {
    const { isLoginLoading } = this.state
    return (
      <div>
        <h3 className="title-login">You{"'"}re a Mangrove member? Log in here:</h3>
        <input
          className="input-login"
          name="email"
          placeholder="email"
          type="text"
          ref={email => {
            this.emailInput = email
          }}
        />
        <input
          className="input-login"
          placeholder="password"
          type="password"
          ref={password => {
            this.passwordInput = password
          }}
        />
        <div className="btn-login-wrapper">
          <button
            className={isLoginLoading ? 'btn-login align-center bar' : 'btn-login align-center'}
            onClick={this.handleClickLogin}
            size="lg"
          >
            {!isLoginLoading && <span>Log in</span>}
            {isLoginLoading && <div className="loader" />}
          </button>
        </div>
        <div className="forgot-password">
          <Link to="/login/forgot-password">Forgot password ?</Link>
        </div>
      </div>
    )
  }
}
