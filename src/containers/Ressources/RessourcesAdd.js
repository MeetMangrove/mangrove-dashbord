import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

import createLink from 'src/graphql/Link/Mutation/createLink.gql'

class RessourcesAddContainer extends Component {
  static propTypes = {
    data: PropTypes.object
  }

  static defaultProps = {
    data: {}
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    const { allLinks, loading } = this.props.data

    return <div>New Ressources</div>
  }
}

export default graphql(linkQuery)(RessourcesListContainer)
