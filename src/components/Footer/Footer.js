import React from 'react'
import Moment from 'moment'

// import css from './Footer.css'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          Made with{' '}
          <span role="img" aria-label="wine">
            🍷
          </span>{' '}
          in Paris - © {Moment().format('YYYY')}.
        </p>
        <p>
          <a className="icon" href="https://github.com/jgthms/bulma">
            <i className="fa fa-github" />
          </a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
