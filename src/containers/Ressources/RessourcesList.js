import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

import Konami from 'react-konami'
import Block from 'src/components/Block/Block'

import linkQuery from 'src/graphql/Link/Query/getAllLinks.gql'

class RessourcesListContainer extends Component {
  static propTypes = {
    data: PropTypes.object
  }

  static defaultProps = {
    data: {}
  }

  constructor(props) {
    super(props)

    this.state = {
      rickroll: false
    }

    this.handleEasterEgg = this.handleEasterEgg.bind(this)
  }

  componentDidMount() {}

  handleEasterEgg() {
    this.setState({ rickroll: true })
  }

  render() {
    const { rickroll } = this.state

    const { allLinks, loading } = this.props.data

    return (
      <div>
        <Konami easterEgg={this.handleEasterEgg} />
        {rickroll && (
          <div className="whiteContainer">
            <span role="img" aria-label="fire">
              🔥
            </span>
            Konami code !!
          </div>
        )}
        {!loading &&
        allLinks && (
          <div className="columns">
            <div className="column">
              <Block links={allLinks} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default graphql(linkQuery)(RessourcesListContainer)
