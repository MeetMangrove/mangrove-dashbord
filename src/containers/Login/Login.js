import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'

import LocalStorageManager from 'src/utils/LocalStorageManager'

import LoginComponent from 'src/components/Login/Login'

import signinUser from 'src/graphql/Auth/Mutation/SigninUser.gql'
import userQuery from 'src/graphql/Auth/Query/isLoggedIn.gql'

class Login extends Component {
  static propTypes = {
    history: PropTypes.object,
    signinUser: PropTypes.func,
    data: PropTypes.object
  }

  static defaultProps = {
    history: {},
    signinUser: () => {},
    data: {}
  }

  constructor(props) {
    super(props)

    this.loginUser = this.loginUser.bind(this)
  }

  loginUser = (email, password) => {
    this.props
      .signinUser({ variables: { email, password } })
      .then(response => {
        LocalStorageManager.setUserToken(response.data.signinUser.token)
        this.props.history.push('/link')
      })
      .catch(e => {
        console.error(e)
      })
  }

  render() {
    return <LoginComponent requestLogin={this.loginUser} />
  }
}

export default graphql(signinUser, { name: 'signinUser' })(
  graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(withRouter(Login))
)
