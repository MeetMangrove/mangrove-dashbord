import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import LocalStorageManager from 'src/utils/LocalStorageManager'

class Logout extends Component {
  static propTypes = {
    history: PropTypes.object
  }

  static defaultProps = {
    history: {}
  }

  componentDidMount() {
    LocalStorageManager.removeUserToken()
    LocalStorageManager.clearLocalStorage()
    this.props.history.push('/login')
  }

  render() {
    return <div />
  }
}

export default withRouter(Logout)
