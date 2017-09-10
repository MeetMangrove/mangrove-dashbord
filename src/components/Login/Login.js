import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassName from 'classnames'

import { Link } from 'react-router-dom'

import css from './login.css'

export default class Login extends Component {
  static propTypes = {
    requestLogin: PropTypes.func
  }

  static defaultProps = {
    requestLogin: () => {}
  }

  constructor(props) {
    super(props)

    this.state = {
      isLoginLoading: false
    }

    this.handleClickLogin = this.handleClickLogin.bind(this)
  }

  handleClickLogin(e) {
    e.preventDefault()

    const email = this.emailInput.value
    const password = this.passwordInput.value

    if (email !== '' && password !== '') {
      this.setState({ isLoginLoading: true })
      setTimeout(() => {
        this.props.requestLogin(email, password)
      }, 300)
    }
  }

  render() {
    const { isLoginLoading } = this.state
    return (
      <div>
        <form onSubmit={this.handleClickLogin}>
          <h3 className={css.titleLogin}>You{"'"}re a Mangrove member? Log in here:</h3>
          <input
            className={css.inputLogin}
            name="email"
            placeholder="email"
            type="text"
            ref={email => {
              this.emailInput = email
            }}
          />
          <input
            className={css.inputLogin}
            placeholder="password"
            type="password"
            ref={password => {
              this.passwordInput = password
            }}
          />
          <div className={css.btnLoginWrapper}>
            <button
              className={
                isLoginLoading ? (
                  ClassName(css.btnLogin, css.alignCenter, css.bar)
                ) : (
                  ClassName(css.btnLogin, css.alignCenter)
                )
              }
              size="lg"
            >
              {!isLoginLoading && <span>Log in</span>}
              {isLoginLoading && <div className={css.loader} />}
            </button>
          </div>
        </form>
        <div className={css.forgotPassword}>
          <Link to="/login/forgot-password">Forgot password ?</Link>
        </div>
      </div>
    )
  }
}
