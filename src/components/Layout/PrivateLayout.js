import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'

import './PrivateLayout.css'

export default class PrivateLayout extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  static defaultProps = {}

  componentDidMount() {}

  render() {
    return (
      <div className="fill">
        <Header />
        <div className="wrapper wrapper-private">{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}
