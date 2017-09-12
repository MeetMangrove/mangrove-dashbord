import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

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
      <div className={ClassNames('column', 'is-half', 'is-offset-one-quarter')}>
        <form onSubmit={this.handleClickLogin}>
          <h3 className={css.titleLogin}>You{"'"}re a Mangrove member? Log in here:</h3>
          <div className="columns">
            <div className="column is-10 is-offset-1 ">
              <div className="control has-icons-left is-large is-loading">
                <input
                  className="input is-large"
                  name="email"
                  placeholder="email"
                  type="text"
                  ref={email => {
                    this.emailInput = email
                  }}
                />
                <span className="icon is-medium is-left">
                  <i className="fa fa-envelope" />
                </span>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1 ">
              <div className="control has-icons-left is-large is-loading">
                <input
                  className="input is-large"
                  placeholder="password"
                  type="password"
                  ref={password => {
                    this.passwordInput = password
                  }}
                />
                <span className="icon is-medium is-left">
                  <i className="fa fa-envelope" />
                </span>
              </div>
            </div>
          </div>
          <div className="bd-more-loves">
            <p className="bd-more-loves-container">
              <a className="button is-medium is-danger bd-rainbow" href="http://bulma.io/love/">
                <span>
                  See more <strong>love</strong> 🤗
                </span>
              </a>
            </p>
          </div>
          <div className={css.btnLoginWrapper}>
            <button
              className={
                isLoginLoading ? (
                  ClassNames(css.btnLogin, css.alignCenter, css.bar)
                ) : (
                  ClassNames(css.btnLogin, css.alignCenter)
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
