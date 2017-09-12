import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BlockHeader from 'src/components/Block/BlockHeader'
import BlockContent from 'src/components/Block/BlockContent'

export default class Block extends Component {
  static propTypes = {
    links: PropTypes.array,
    titleBlock: PropTypes.string
  }

  static defaultProps = {
    links: [],
    titleBlock: 'Links'
  }

  componentDidMount() {}

  render() {
    const { links, titleBlock } = this.props
    return (
      <div>
        <BlockHeader titleBlock={titleBlock} />
        <BlockContent links={links} />
      </div>
    )
  }
}
