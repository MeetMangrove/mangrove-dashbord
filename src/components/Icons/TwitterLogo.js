import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TwitterLogo extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps = {
    width: '300.00006',
    height: '244.18703',
    className: ''
  }

  render() {
    const { width, height, className } = this.props
    return (
      <svg
        width={width || '300.00006'}
        height={height || '244.18703'}
        className={className || ''}
        viewBox="0 0 300.00006 244.18703"
      >
        <path
          d="M94.719 243.187c112.46 0 173.956-93.168 173.956-173.956 0-2.647-.054-5.28-.173-7.903A124.323 124.323 0 0 0 299 29.668c-10.955 4.87-22.744 8.147-35.11 9.625 12.623-7.569 22.314-19.543 26.885-33.817a122.61 122.61 0 0 1-38.824 14.84C240.794 8.433 224.911 1 207.322 1c-33.763 0-61.144 27.38-61.144 61.132 0 4.798.537 9.465 1.586 13.94C96.948 73.517 51.89 49.188 21.738 12.194a60.978 60.978 0 0 0-8.278 30.73c0 21.212 10.793 39.938 27.207 50.893a60.69 60.69 0 0 1-27.69-7.647c-.01.257-.01.507-.01.781 0 29.61 21.076 54.332 49.052 59.934a61.22 61.22 0 0 1-16.122 2.152c-3.934 0-7.766-.387-11.49-1.103C42.19 172.227 64.76 189.904 91.52 190.4c-20.925 16.402-47.287 26.17-75.937 26.17-4.929 0-9.798-.28-14.584-.846 27.059 17.344 59.19 27.464 93.722 27.464"
          fill="#1da1f2"
        />
      </svg>
    )
  }
}
