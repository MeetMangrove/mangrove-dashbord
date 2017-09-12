import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

import Konami from 'react-konami'
import Block from 'src/components/Block/Block'

import linkQuery from 'src/graphql/Link/Query/getAllLinks.gql'

class RessourcesListContainer extends Component {
  static propTypes = {
    linkMisc: PropTypes.object,
    linkRetreat: PropTypes.object,
    linkSocial: PropTypes.object
  }

  static defaultProps = {
    linkMisc: {},
    linkSocial: {},
    linkRetreat: {}
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

    const { linkMisc, linkSocial, linkRetreat } = this.props

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
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child">
              {!linkMisc.loading &&
              linkMisc.allLinks.length > 0 && (
                <div className="columns">
                  <div className="column">
                    <Block links={linkMisc.allLinks} titleBlock="Retreat" />
                  </div>
                </div>
              )}
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child">
              {!linkRetreat.loading &&
              linkRetreat.allLinks.length > 0 && (
                <div className="columns">
                  <div className="column">
                    <Block links={linkRetreat.allLinks} titleBlock="Retreat" />
                  </div>
                </div>
              )}
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child">
              {!linkSocial.loading &&
              linkSocial.allLinks.length > 0 && (
                <div className="columns">
                  <div className="column">
                    <Block links={linkSocial.allLinks} titleBlock="Social" />
                  </div>
                </div>
              )}
            </article>
          </div>
        </div>
      </div>
    )
  }
}

export default graphql(linkQuery, { name: 'linkMisc', options: { variables: { type: 'Misc' } } })(
  graphql(linkQuery, { name: 'linkRetreat', options: { variables: { type: 'Retreat' } } })(
    graphql(linkQuery, { name: 'linkSocial', options: { variables: { type: 'Social' } } })(
      RessourcesListContainer
    )
  )
)
