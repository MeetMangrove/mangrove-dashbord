import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { Link, withRouter } from 'react-router-dom'
import ClassNames from 'classnames'

import createLink from 'src/graphql/Link/Mutation/CreateLink.gql'

import getEnumTypeLink from 'src/graphql/Link/Query/getEnumTypeLink.gql'
import getEnumIconLink from 'src/graphql/Link/Query/getEnumIconLink.gql'

class RessourceEditContainer extends Component {
  static propTypes = {
    history: PropTypes.object,
    link: PropTypes.object,
    createLink: PropTypes.func,
    enumTypeLink: PropTypes.object,
    enumIconLink: PropTypes.object,
    mathc: PropTypes.object
  }

  static defaultProps = {
    history: {},
    link: {},
    createLink: () => {},
    enumTypeLink: {},
    enumIconLink: {},
    match: {}
  }

  constructor(props) {
    super(props)

    this.handleSubmitRessource = this.handleSubmitRessource.bind(this)
  }

  handleSubmitRessource(e) {
    e.preventDefault()

    const link = {
      title: this.titleInput.value,
      url: this.urlInput.value,
      description: this.descriptionInput.value,
      type: this.categoryInput.value,
      icon: this.iconInput.value
    }

    this.props
      .createLink({
        variables: {
          title: link.title,
          url: link.url,
          description: link.description,
          type: link.type,
          icon: link.icon
        }
      })
      .then(linkId => {
        this.props.history.push('/link?refresh')
      })
  }

  render() {
    const { enumTypeLink, enumIconLink } = this.props

    return (
      <div>
        <h1 className="title">New Ressources</h1>
        <h2 className="subtitle">Add</h2>
        <hr />
        <form onSubmit={this.handleSubmitRessource}>
          <div className="columns">
            <div className="column is-half is-offset-3">
              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    name="title"
                    ref={title => {
                      this.titleInput = title
                    }}
                    placeholder="Title of your link"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Url</label>
                <div className="control">
                  <input
                    ref={url => {
                      this.urlInput = url
                    }}
                    className="input is-medium"
                    type="text"
                    name="title"
                    placeholder="Url"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <textarea
                    ref={description => {
                      this.descriptionInput = description
                    }}
                    className="textarea is-medium"
                    placeholder="Description ressources"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Link's Category</label>
                <div className="control">
                  <div className="select">
                    <select
                      name="category"
                      ref={category => {
                        this.categoryInput = category
                      }}
                      className={ClassNames(
                        enumIconLink.loading ? ('is-medium', 'is-loading') : 'is-medium'
                      )}
                    >
                      {!enumTypeLink.loading &&
                        enumTypeLink.__type.enumValues.map(type => (
                          <option key={type.name} value={type.name}>
                            {type.name}
                          </option>
                        ))}
                      {enumTypeLink.loading && <option>Loading type...</option>}
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Link's Icon</label>
                <div className="control">
                  <div className="select">
                    <select
                      ref={icon => {
                        this.iconInput = icon
                      }}
                      name="icon"
                      className={ClassNames(
                        enumIconLink.loading ? ('is-medium', 'is-loading') : 'is-medium'
                      )}
                    >
                      {!enumIconLink.loading &&
                        enumIconLink.__type.enumValues.map(type => (
                          <option key={type.name} value={type.name}>
                            {type.name}
                          </option>
                        ))}
                      {enumIconLink.loading && <option>Loading type...</option>}
                    </select>
                  </div>
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary">Submit</button>
                </div>
                <div className="control">
                  <Link className="button is-link" to="/link">
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default graphql(createLink, { name: 'createLink' })(
  graphql(getEnumTypeLink, { name: 'enumTypeLink' })(
    graphql(getEnumIconLink, { name: 'enumIconLink' })(withRouter(RessourceEditContainer))
  )
)
