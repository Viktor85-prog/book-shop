import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setBooks } from './actions/books'
import axios from 'axios'
import { Menu } from 'semantic-ui-react'

// import books from './books.json'

class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props
    axios.get('/books.json')
      .then(({ data }) => {
        setBooks(data)

      })
  }
  render() {
    const { books, isReady } = this.props
    return (
      <div>
        <Menu>
          <Menu.Item
            name='browse'
            onClick={this.handleItemClick}
          >
            Browse
          </Menu.Item>

          <Menu.Item
            name='submit'
            onClick={this.handleItemClick}
          >
            Submit
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item
              name='signup'
              onClick={this.handleItemClick}
            >
              Sign Up
            </Menu.Item>

            <Menu.Item
              name='help'
              onClick={this.handleItemClick}
            >
              Help
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <ul>
          {!isReady ? 'Loading...' : books.map(book => (<li key={books.id}>
            <b>{book.title}</b> - {book.author}
          </li>))}
        </ul>
      </div>
    )

  }
}

const mapStateToProps = ({ books }) => ({
  books: books.items,
  isReady: books.isReady

})

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
