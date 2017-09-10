import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Navbar } from 'reactstrap'

import MangroveLogo from 'src/components/Icons/MangroveLogo'

// import css from './Header.css'

export default class Header extends Component {
  componentDidMount() {}

  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-toggleable-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Hell
          </button>
          <Link className="navbar-brand link-header" to="/">
            <MangroveLogo className="logo" />
            Mangrove Dashboard
          </Link>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto" />
            <span className="navbar-text">
              <Link to="/login" className="link-login" />
            </span>
          </div>
        </nav>
      </header>
    )
  }
}
