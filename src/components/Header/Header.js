import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ClassName from 'classnames'
import MangroveLogo from 'src/components/Icons/MangroveLogo'

import css from './Header.css'

export default class Header extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <header>
          <nav className={ClassName(css.header, 'navbar')}>
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <MangroveLogo />
                Mangrove Dashboard
              </Link>

              <div className="navbar-burger burger" data-target="navMenubd-example">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div id="navMenubd-example" className="navbar-menu">
              <div className="navbar-start">
                <div className="navbar-item">
                  <Link to="/link">Ressources</Link>
                </div>
                <div className="navbar-item">
                  <Link to="/bookclub">Bookclub</Link>
                </div>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <Link to="/register">Register</Link>
                </div>
                <div className="navbar-item">
                  <Link to="/login">Login</Link>
                  <Link to="/logout">Logout</Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}
