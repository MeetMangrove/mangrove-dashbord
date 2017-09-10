import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MangroveLogo extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps = {
    width: '53',
    height: '22',
    className: ''
  }

  render() {
    const { width, height, className } = this.props
    return (
      <svg
        width={width || '53'}
        height={height || '22'}
        className={className || ''}
        viewBox="0 0 53 22"
      >
        <path
          d="M.43.099c1.011 9.796 8.598 17.856 18.723 20.533V.1H.431zm33.119 0v20.62c10.284-2.591 18.02-10.72 19.04-20.62h-19.04zm-12.59 0v20.948c1.435.28 2.91.46 4.422.518h.068V.099h-4.49zm6.295 0v21.466h.385c1.4-.055 2.77-.213 4.105-.459V.1h-4.49z"
          fillRule="nonzero"
          fill="#FFF"
        />
      </svg>
    )
  }
}
