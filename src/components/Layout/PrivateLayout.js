import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'

// import css from './PrivateLayout.css'

export default class PrivateLayout extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  static defaultProps = {}

  componentDidMount() {}

  render() {
    return (
      <div>
        <Header />
        <div className={ClassNames('section', 'container')}>
          <div className={ClassNames('')}>{this.props.children}</div>
        </div>
        <Footer />
      </div>
    )
  }
}
