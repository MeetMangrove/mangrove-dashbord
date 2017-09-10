import React from 'react'
import Moment from 'moment'

// import css from './Footer.css'

const Footer = () => (
  <footer className="footer">
    <div className="credits-footer">
      Made with{' '}
      <span role="img" aria-label="wine">
        🍷
      </span>{' '}
      in Paris - © {Moment().format('YYYY')}
    </div>
  </footer>
)

export default Footer
