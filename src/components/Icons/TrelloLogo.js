import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TrelloLogo extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps = {
    width: 200,
    height: 200,
    className: ''
  }

  render() {
    const { width, height, className } = this.props
    return (
      <svg
        width={width || 200}
        height={height || 200}
        className={className || ''}
        viewBox="0 0 200 200"
      >
        <g fill="none" fillRule="evenodd">
          <rect fill="#0079BF" width="200" height="200" rx="25" />
          <rect fill="#FFF" x="113" y="26" width="61" height="87.5" rx="12" />
          <rect fill="#FFF" x="26" y="26" width="61" height="137.5" rx="12" />
        </g>
      </svg>
    )
  }
}
