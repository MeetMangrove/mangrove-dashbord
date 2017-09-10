import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import MangroveLogo from 'src/components/Icons/MangroveLogo'

import css from './Header.css'

export default class Header extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <header className={css.header}>
          <nav className={(css.navbar, css.navbarToggleableMd)}>
            <Link className={(css.navbarBrand, css.linkHeader)} to="/">
              <MangroveLogo className={css.logo} />
              Mangrove Dashboard
            </Link>
            <div className={(css.collapse, css.navbarCollapse)} id="navbarText">
              <span className={css.navbarText}>
                <Link to="/login" className={css.linkLogin} />
              </span>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}
