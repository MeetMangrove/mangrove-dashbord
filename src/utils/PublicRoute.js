import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { graphql } from 'react-apollo'

import userQuery from 'src/graphql/Auth/Query/isLoggedIn.gql'

class PublicRoute extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    data: PropTypes.object,
    layout: PropTypes.func.isRequired
  }

  static defaultProps = {
    data: {
      user: {}
    }
  }

  componentDidMount() {}

  redirectisAuthenticated(layout, props, component) {
    const { data } = this.props
    if (!data.user) {
      return React.createElement(layout, props, React.createElement(component, props))
    }
    return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
  }

  render() {
    const { component, layout, ...rest } = this.props
    return (
      <Route {...rest} render={props => this.redirectisAuthenticated(layout, props, component)} />
    )
  }
}

export default graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(PublicRoute)
