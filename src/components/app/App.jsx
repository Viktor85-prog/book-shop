import React, { Component } from 'react';
import axios from 'axios'
import HeadMenu from '../../containers/HeadMenu'
import BookCard from '../bookCard/BookCards'
import './app.css';


class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props
    axios.get('/books.json')
      .then(({ data }) => {
        setBooks(data)

      })
  }
  render() {
    const { books, isReady, setSearchQuery } = this.props
    debugger
    return (
      <div className='container'>
        <HeadMenu setSearchQuery={setSearchQuery} />
        <div className='flexContainer'>
          {!isReady ? 'Loading...' : books.map((book, i) => (
            <BookCard key={i} {...book} />
          ))
          }
        </div>
      </div>
    )

  }
}

export default App;
