import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class EmptyLayout extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  static defaultProps = {}

  componentDidMount() {}

  render() {
    return <div>{this.props.children}</div>
  }
}
