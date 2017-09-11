import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import css from './BlockHeader.css'

export default class BlockHeader extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className={css.blockHeader}>
        <div className={css.whiteBlockHeader}>
          <div className={css.titleBlockHeader}>Links</div>
        </div>
      </div>
    )
  }
}
