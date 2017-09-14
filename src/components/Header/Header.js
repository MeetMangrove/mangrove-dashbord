import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ClassNames from 'classnames'
import MangroveLogo from 'src/components/Icons/MangroveLogo'
import { graphql } from 'react-apollo'

import css from './Header.css'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    const { showMenu } = this.state
    this.setState({ showMenu: !showMenu })
  }

  render() {
    const { showMenu } = this.state

    return (
      <div>
        <header>
          <nav className={ClassNames(css.header, 'navbar')}>
            <div className="navbar-brand">
              <Link className={ClassNames(css.logoLink, 'navbar-item')} to="/">
                <MangroveLogo className={ClassNames(css.logo)} width="37" />
                Mangrove Dashboard
              </Link>

              <div
                className={
                  showMenu ? (
                    ClassNames('navbar-burger', 'burger', 'is-active')
                  ) : (
                    ClassNames('navbar-burger', 'burger')
                  )
                }
                onClick={this.toggleMenu}
              >
                <span />
                <span />
                <span />
              </div>
            </div>

            <div
              className={
                showMenu ? ClassNames('navbar-menu', 'is-active') : ClassNames('navbar-menu')
              }
            >
              <div className="navbar-start">
                <div className="navbar-item">
                  <Link className={css.headerLink} to="/link">
                    Ressources
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link className={css.headerLink} to="/bookclub">
                    Bookclub
                  </Link>
                </div>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <Link className={css.headerLink} to="/register">
                    Register
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link className={css.headerLink} to="/login">
                    Login
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link className={css.headerLink} to="/logout">
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}
export default Header
