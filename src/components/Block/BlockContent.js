import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import ClassNames from 'classnames'

import TwitterLogo from 'src/components/Icons/TwitterLogo'
import FacebookLogo from 'src/components/Icons/FacebookLogo'
import SlackLogo from 'src/components/Icons/SlackLogo'
import SnapChatLogo from 'src/components/Icons/SnapchatLogo'
import DriveLogo from 'src/components/Icons/DriveLogo'
import TrelloLogo from 'src/components/Icons/TrelloLogo'

import css from './BlockContent.css'

export default class BlockContent extends Component {
  static propTypes = {
    links: PropTypes.array
  }

  static defaultProps = {
    links: []
  }

  componentDidMount() {}

  render() {
    const { links } = this.props

    return (
      <div className={ClassNames(css.listContentWrapper)}>
        {links &&
          links.map(link => (
            <div key={link.id} className={ClassNames(css.listContentItemWrapper)}>
              <div className={ClassNames(css.listContentItemContent, 'content')}>
                {link.icon === 'Slack' && (
                  <SlackLogo className={css.listContentItemLogo} width="29" height="29" />
                )}
                {link.icon === 'Facebook' && (
                  <FacebookLogo className={css.listContentItemLogo} width="29" height="29" />
                )}
                {link.icon === 'Trello' && (
                  <TrelloLogo className={css.listContentItemLogo} width="29" height="29" />
                )}
                {link.icon === 'Twitter' && (
                  <TwitterLogo className={css.listContentItemLogo} width="28" height="23" />
                )}
                {link.icon === 'Snapchat' && (
                  <SnapChatLogo className={css.listContentItemLogo} width="29" height="29" />
                )}
                {link.icon === 'Drive' && (
                  <DriveLogo className={css.listContentItemLogo} width="29" height="29" />
                )}
                <a href={link.url}>{link.title}</a>
              </div>
            </div>
          ))}
      </div>
    )
  }
}
