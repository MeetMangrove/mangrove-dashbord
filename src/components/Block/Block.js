import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BlockHeader from 'src/components/Block/BlockHeader'
import BlockContent from 'src/components/Block/BlockContent'

export default class Block extends Component {
  static propTypes = {
    links: PropTypes.array
  }

  static defaultProps = {
    links: []
  }

  componentDidMount() {}

  render() {
    const { links } = this.props
    return (
      <div>
        <BlockHeader />
        <BlockContent links={links} />
      </div>
    )
  }
}
