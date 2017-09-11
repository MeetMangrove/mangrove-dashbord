import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FacebookLogo extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps = {
    width: '266.893',
    height: '266.895',
    className: ''
  }

  render() {
    const { width, height, className } = this.props
    return (
      <svg
        width={width || '266.893'}
        height={height || '266.895'}
        className={className || ''}
        viewBox="0 0 266.893 266.895"
      >
        <path
          fill="#3C5A99"
          d="M248.082 262.307c7.854 0 14.223-6.369 14.223-14.225V18.812c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857 0-14.224 6.367-14.224 14.224v229.27c0 7.855 6.366 14.225 14.224 14.225h229.27z"
        />
        <path
          fill="#FFF"
          d="M182.409 262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261 3.127-18.935 19.275-18.935l20.596-.009V45.045c-3.562-.474-15.788-1.533-30.012-1.533-29.695 0-50.025 18.126-50.025 51.413v28.684h-33.585v38.895h33.585v99.803h40.166z"
        />
      </svg>
    )
  }
}
