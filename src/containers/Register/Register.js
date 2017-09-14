import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import LocalStorageManager from 'src/utils/LocalStorageManager'

import createUser from 'src/graphql/Auth/Mutation/CreateUser.gql'
import signinUser from 'src/graphql/Auth/Mutation/SigninUser.gql'
import userQuery from 'src/graphql/Auth/Query/isLoggedIn.gql'

class Register extends Component {
  static propTypes = {
    history: PropTypes.object,
    createUser: PropTypes.func,
    signinUser: PropTypes.func,
    data: PropTypes.object
  }

  static defaultProps = {
    history: {},
    createUser: () => {},
    signinUser: () => {},
    data: {}
  }

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  registerUser = () => {
    const { email, password } = this.state

    this.props
      .createUser({ variables: { email, password } })
      .then(() => {
        this.props
          .signinUser({ variables: { email, password } })
          .then(r => {
            LocalStorageManager.setUserToken(r.data.signinUser.token)
            this.props.history.push('/link')
          })
          .catch(e => {
            console.error(e)
            this.props.history.push('/')
          })
      })
      .catch(e => {
        console.error(e)
        this.props.history.push('/')
      })
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading</div>
    }

    return (
      <div className="w-100 pa4 flex justify-center">
        <div style={{ maxWidth: 400 }} className="">
          <input
            className="w-100 pa3 mv2"
            value={this.state.email}
            placeholder="Email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            className="w-100 pa3 mv2"
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={e => this.setState({ password: e.target.value })}
          />{' '}
          <button className="pa3 bg-black-10 bn dim ttu pointer" onClick={this.registerUser}>
            Log in
          </button>
        </div>
      </div>
    )
  }
}

export default graphql(createUser, { name: 'createUser' })(
  graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(
    graphql(signinUser, { name: 'signinUser' })(withRouter(Register))
  )
)
