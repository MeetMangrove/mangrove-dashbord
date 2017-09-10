import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

// import TwitterLogo from 'src/components/Icons/TwitterLogo'
// import FacebookLogo from 'src/components/Icons/FacebookLogo'
// import SlackLogo from 'src/components/Icons/SlackLogo'
// import SnapChatLogo from 'src/components/Icons/SnapchatLogo'
// import DriveLogo from 'src/components/Icons/DriveLogo'
// import TrelloLogo from 'src/components/Icons/TrelloLogo'

import css from './BlockContent.css'

export default class BlockContent extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className={css.blockContent}>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={4} lg="12" />
        </Grid>
      </div>
    )
  }
}
