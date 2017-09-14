import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

class PublicRoute extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    layout: PropTypes.func.isRequired
  }

  static defaultProps = {}

  componentDidMount() {}

  redirectisAuthenticated(layout, props, component) {
    return React.createElement(layout, props, React.createElement(component, props))
  }

  render() {
    const { component, layout, ...rest } = this.props
    return (
      <div>
        <Route {...rest} render={props => this.redirectisAuthenticated(layout, props, component)} />
      </div>
    )
  }
}

export default PublicRoute
