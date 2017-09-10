import React, { Component } from 'react'
import BlockHeader from 'src/components/Block/BlockHeader'
import BlockContent from 'src/components/Block/BlockContent'

import Konami from 'react-konami'

class HomeContainer extends Component {
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)

    this.state = {
      rickroll: false
    }

    this.handleEasterEgg = this.handleEasterEgg.bind(this)
  }
  componentDidMount() {}

  handleEasterEgg() {
    this.setState({ rickroll: true })
  }

  render() {
    const { rickroll } = this.state
    return (
      <div>
        <Konami easterEgg={this.handleEasterEgg} />
        {rickroll && (
          <div className="whiteContainer">
            <span role="img" aria-label="fire">
              🔥
            </span>
            Konami code !!
          </div>
        )}

        <BlockHeader />
        <BlockContent />
      </div>
    )
  }
}

export default HomeContainer
