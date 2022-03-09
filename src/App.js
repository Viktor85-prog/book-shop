import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setBooks } from './actions/books'
import axios from 'axios'
import HeadMenu from './components/menu/Menu'
import BookCard from './components/bookCard/BookCards'

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
      <div className='container'>
        <HeadMenu />
        <BookCard />
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
