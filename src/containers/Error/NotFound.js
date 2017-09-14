import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Helmet from 'react-helmet'

import Rick from 'src/components/Icons/Rick'
import './NotFound.css'

class NotFound extends Component {
  static propTypes = {
    location: PropTypes.object
  }

  static defaultProps = {
    location: {}
  }

  render() {
    const { location } = this.props
    console.log(location.pathname)
    return (
      <div>
        <Helmet title="Page not Found" />
        <div className="bd-example">
          <section className="hero is-medium is-warning is-bold">
            <div className="hero-body">
              <div className="container">
                <div className="columns">
                  <div className="column">
                    <p className="title">404 Not Found</p>
                    <p className="subtitle">🙅‍🙅🙅🙅</p>
                  </div>
                  <div className="column">
                    <Rick />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default withRouter(NotFound)
