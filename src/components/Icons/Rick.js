import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import css from './Rick.css'

export default class Rick extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps = {
    width: '278',
    height: '412',
    className: ''
  }

  render() {
    const { width, height, className } = this.props
    return (
      <svg
        width={width || '278'}
        height={height || '412'}
        className={className || ''}
        viewBox="0 0 278 412"
        className={css.rick}
      >
        <g fill="#A7D5E9" id={css.HAIR}>
          <path
            id={css.hair_y}
            d="M129.966 112.273l-42.593-10.497-8.697-46.657L75.77 2.28l40.124 34.495L147.592 72.1M119.8 179.04l-32.79 17.826-42.66-18.843L0 152.916l50.773-4.365 46.634.63"
          />
          <path
            id={css.hair_y}
            d="M131.765 183.62l-15.433 35.643-42.016.727-46.558-5.238 34.25-21.98 37.28-30.454"
          />
          <path
            id={css.hair_z}
            d="M137.984 185.114l.527 36.46-35.68 16.815-41.87 13.46 19.29-39.53 21.73-32.93m54.04-64.84L134.73 76.2 163 38.076 199.728 0l-2.29 100.14"
          />
          <path
            id={css.hair_y}
            d="M189.636 126.98l3.088-40.14 39.58-10.61 45.815-5.564-50.82 70.516m-125.77.65l-5.57-41.72-43.59-13.164-50.09-8.286 59.1 75.79"
          />
          <ellipse cx="141.909" cy="164.279" rx="75.171" ry="97" />
          <path
            id={css.hair_y}
            d="M148.856 170.087l34.746 26.78 41.915-22.263 43.14-30.64-51.98-9.898-47.38-2.79"
          />
          <path
            id={css.hair_y}
            d="M145.677 173.994l15.747 36.366 42.87.743 47.502-5.345-34.945-22.425-38.03-31.073"
          />
          <path
            id={css.hair_x}
            d="M146.91 168.13l-.536 37.06 36.274 17.093 42.564 13.683-19.61-40.18-22.088-33.468"
          />
        </g>
        <path
          fill="#DBD0C8"
          d="M165.68 281.61c0 14.348-8.957 21.037-20.003 21.037s-20-6.69-20-21.037 8.954-20.33 20-20.33 20.002 5.983 20.002 20.33z"
        />
        <path
          fill="#FFF"
          stroke="#6D6E71"
          d="M42.49 411.9s18.18-73.992 33.28-93.253c10.966-13.99 50.666-36.356 50.666-36.356s13.955 4.98 18.82 4.95c4.78-.02 19.442-5.06 19.442-5.06s37.27 17.5 47.376 32.7c12.617 18.97 29.952 96.63 29.952 96.63l-199.536.4z"
        />
        <path
          fill="#DBFEFE"
          stroke="#6D6E71"
          d="M177.348 411.763l-63.984.23 13.074-129.7s13.948 2.472 18.812 2.45c4.78-.02 19.45-2.57 19.45-2.57l12.648 129.59z"
        />
        <path fill="#FFF" d="M125.786 284.335L76.32 376.62l30.96 35.312 12.91-.122.162-.83" />
        <path
          fill="none"
          stroke="#6D6E71"
          d="M125.786 284.335L76.32 376.62l30.96 35.312 12.91-.122.162-.83z"
        />
        <path fill="#FFF" d="M165.703 284.335l48.464 92.178-30.958 35.273-12.92-.14-.16-.826" />
        <path
          fill="none"
          stroke="#6D6E71"
          d="M165.703 284.335l48.464 92.178-30.958 35.273-12.92-.14-.16-.826zm-83.547 101.21l-6.34 24.37m128.42-22.085l6.44 24.45"
        />
        <ellipse cx="75.77" cy="206.586" fill="#D4CABF" rx="12.5" ry="15.432" />
        <ellipse cx="207.761" cy="199.646" fill="#D4CABF" rx="12.5" ry="15.432" />
        <path
          fill="#DBD0C8"
          d="M205.73 173.435c0 69.013-28.2 101.188-62.984 101.188-34.785 0-62.983-32.175-62.983-101.188s28.2-97.792 62.983-97.792c34.785 0 62.983 28.78 62.983 97.792z"
        />
        <circle cx="111.681" cy="152.26" r="26.96" fill="#FFF" />
        <circle cx="172.637" cy="152.806" r="26.96" fill="#FFF" />
        <circle cx="172.637" cy="163.428" r="3.518" />
        <circle cx="111.681" cy="162.319" r="3.518" />
        <circle cx="111.681" cy="163.428" r="3.518" />
        <path
          fill="#D4CABF"
          d="M138.642 152.26c0 14.89-53.92 14.89-53.92 0s12.07-26.96 26.96-26.96 26.96 12.07 26.96 26.96zm60.955-.546c0 14.89-53.92 14.89-53.92 0s12.07-26.96 26.96-26.96 26.96 12.07 26.96 26.96z"
        />
        <path
          fill="#A7D5E9"
          id={css.eyebrow}
          d="M189.81 115.056a3.5 3.5 0 0 1-3.5 3.5l-81.27 3.003c-1.932 0-3.5-1.57-3.5-3.5 0-1.94 1.568-3.5 3.5-3.5l81.27-3.01c1.934 0 3.5 4.57 3.5 6.5v-3.01z"
        />
        <path
          fill="#e5ffd4"
          id={css.drool}
          d="M139.757 227.495c10.5 6 8 17.717 18 23.717.5-3.5-.5-8.5.5-12s4.5-6 5-10.5c-6.5-3-14.5-.498-21.5-1.498"
        />
        <path
          fill="#231F20"
          d="M121.41 104.77c13.445 1.28 28.06 2.906 41.165-1.277.765-.244.438-1.45-.332-1.205-12.978 4.142-27.51 2.502-40.834 1.232-.81-.077-.8 1.174 0 1.25zm10.314-5.32c7.48.975 14.65-.44 22.05-1.34.79-.097.8-1.348 0-1.25-7.398.898-14.58 2.313-22.05 1.34-.798-.104-.787 1.147 0 1.25zm-32.468 88.796c9.563 3.323 20.47 5.553 29.148-1.063.632-.482.01-1.568-.63-1.08-8.435 6.43-18.926 4.156-28.186.938-.763-.26-1.088.95-.332 1.21zm60.334-1.666c2.85.607 5.224 2.34 8.043 3.065 2.42.623 5.143.665 7.62.79 5.89.298 11.06-3.293 15.818-6.252.69-.424.06-1.506-.63-1.08-4.78 2.978-9.35 5.954-15.18 6.082-3.19.07-6.94-.36-9.85-1.605-1.93-.825-3.39-1.76-5.47-2.206-.784-.168-1.12 1.037-.33 1.205zm-26.69-7.914c0 5.56.245 11.116.952 16.633.595 4.64 1.373 11.41 5.578 14.35 4.398 3.07 8.467-3.45 9.62-6.71 2.79-7.91 1.81-17.06 1.768-25.28-.004-.81-1.254-.81-1.25 0 .032 6.16.26 12.29-.392 18.44-.406 3.83-1.24 8.11-3.84 11.1-2.205 2.53-5.21 2.16-6.978-.45-2.97-4.39-3.306-11.01-3.75-16.08-.35-4-.456-8.01-.457-12.02 0-.81-1.25-.81-1.25 0zm-28.643 51.42c12.44-.092 24.793-1.736 37.226-2.004 12.624-.27 25.157 1.896 37.774 2.004.807.007.806-1.243 0-1.25-11.976-.103-23.852-1.916-35.828-2.02-13.09-.11-26.09 1.922-39.18 2.02-.81.006-.81 1.256 0 1.25zm78.405-4.836c1.955.87 4.606 2.086 5.27 4.324.73 2.455-3.574 3.622-5.12 4.034-.778.207-.447 1.413.332 1.205 2.437-.648 5.953-1.815 6.09-4.836.133-2.918-3.795-4.853-5.94-5.807-.73-.323-1.367.754-.632 1.08zm-80.43-1.078c-2.42 1.077-5.725 2.794-5.94 5.806-.21 2.958 3.947 4.265 6.09 4.836.78.208 1.11-.998.333-1.205-1.766-.48-5.592-1.5-5.12-4.04.406-2.2 3.493-3.54 5.27-4.33.734-.33.097-1.41-.632-1.08z"
        />
      </svg>
    )
  }
}
