import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'isomorphic-fetch'
import ClassNames from 'classnames'

export default class BookclubSearchContainer extends Component {
  static propTypes = {
    search: PropTypes.object
  }

  static defaultProps = {
    search: {}
  }

  constructor(props) {
    super(props)

    this.state = {
      isSearchLoading: false,
      query: '',
      results: []
    }

    this.handleSearchInput = this.handleSearchInput.bind(this)
  }

  handleSearchInput(e) {
    e.preventDefault()
    this.setState({ query: this.inputSearch.value })
    this.searchApiBook()
  }

  searchApiBook() {
    const { isSearchLoading } = this.state
    if (!isSearchLoading) {
      this.setState({ isSearchLoading: true, results: [] })

      const { query } = this.state
      window
        .fetch(
          `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(
            query
          )}&printType=books&orderBy=newest&maxResults=39`
        )
        .then(data => data.json())
        .then(res => {
          this.setState({ isSearchLoading: false, results: res.items || [] })
          console.log(this.state)
        })
        .catch(res => {
          this.setState({ isSearchLoading: false, results: [] })
        })
    }
  }

  render() {
    const { isSearchLoading, results } = this.state
    return (
      <div>
        <div className="field">
          <div
            className={
              isSearchLoading ? (
                ClassNames('control', 'is-large', 'is-loading')
              ) : (
                ClassNames('control', 'is-large')
              )
            }
          >
            <form onSubmit={this.handleSearchInput}>
              <input
                className={ClassNames('input', 'is-large')}
                type="text"
                ref={input => {
                  this.inputSearch = input
                }}
                placeholder="Search Book"
              />
              <button type="submit" className="button is-primary">
                Search
              </button>
            </form>
          </div>
        </div>
        {!isSearchLoading &&
        results && (
          <div className="columns">
            {results.length &&
              results.map((key, result) => (
                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img
                          src={`https://books.google.com/books/content/images/frontcover/${result.id}?fife=w300-rw`}
                          alt="Book image"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">{result.volumeInfo.title}</p>
                          <p className="subtitle is-6">
                            {result.volumeInfo.authors.map(author => <span>{author}</span>)}
                          </p>
                        </div>
                      </div>

                      <div className="content">
                        {result.volumeInfo.description}
                        <time dateTime="2016-1-1">{result.volumeInfo.publishedDate}</time>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    )
  }
}
