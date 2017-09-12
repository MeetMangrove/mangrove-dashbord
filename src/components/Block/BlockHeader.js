import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import ClassNames from 'classnames'

import css from './BlockHeader.css'

export default class BlockHeader extends Component {
  static propTypes = {
    titleBlock: PropTypes.string
  }

  static defaultProps = {
    titleBlock: 'Links'
  }

  render() {
    const { titleBlock } = this.props
    return (
      <div className={css.blockHeader}>
        <div className={css.whiteBlockHeader}>
          <div className={ClassNames(css.titleBlockHeader)}>{titleBlock}</div>
        </div>
      </div>
    )
  }
}
