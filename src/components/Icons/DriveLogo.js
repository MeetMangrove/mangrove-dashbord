import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DriveLogo extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps = {
    width: 139,
    height: 120.4,
    className: ''
  }

  render() {
    const { width, height, className } = this.props
    return (
      <svg
        width={width || 139}
        height={height || 120.4}
        className={className || ''}
        viewBox="0 0 139 120.4"
      >
        <radialGradient
          id="a"
          cx="-254.82"
          cy="705.836"
          gradientTransform="scale(3.2644) rotate(30 1174.792 966.99)"
          gradientUnits="userSpaceOnUse"
          r="82.978"
        >
          <stop offset="0" stopColor="#4387fd" />
          <stop offset=".65" stopColor="#3078f0" />
          <stop offset=".91" stopColor="#2b72ea" />
          <stop offset="1" stopColor="#286ee6" />
        </radialGradient>
        <radialGradient
          id="b"
          cx="-254.817"
          cy="705.837"
          gradientTransform="scale(3.2644) rotate(30 1174.792 966.99)"
          gradientUnits="userSpaceOnUse"
          r="82.973"
        >
          <stop offset="0" stopColor="#ffd24d" />
          <stop offset="1" stopColor="#f6c338" />
        </radialGradient>
        <path d="M24.2 120.4L0 78.5 45.3 0l24.2 41.9z" fill="#0da960" />
        <path d="M24.2 120.4l24.2-41.9H139l-24.2 41.9z" fill="url(#a)" />
        <path d="M139 78.5H90.6L45.3 0h48.4z" fill="url(#b)" />
        <path d="M69.5 78.5H48.4l10.5-18.3-34.7 60.2z" fill="#2d6fdd" />
        <path d="M90.6 78.5H139L80.1 60.2z" fill="#e5b93c" />
        <path d="M58.9 60.2l10.6-18.3L45.3 0z" fill="#0c9b57" />
      </svg>
    )
  }
}
