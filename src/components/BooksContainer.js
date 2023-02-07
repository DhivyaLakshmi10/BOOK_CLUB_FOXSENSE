import React, { Component } from 'react';
import { connect } from 'react-redux'
import SearchBar from './SearchBar.js'
import BookCard from './BookCard.js'
import UserLinks from './UserLinks.js'
import { fetchedBookFromApi } from '../Redux/actions.js'

class BooksContainer extends Component {

  searchHandler = (search) => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=' + search)
      .then(resp => resp.json())
      .then(data => this.props.fetchedBookFromApi(data.items))
    }

  render() {
    let bookCards = this.props.fetchedBooks.map(book => <BookCard key={book.id} bookObj={book}/>)
    return (
      <div>
        <UserLinks />
        <SearchBar searchHandler={this.searchHandler}/>
        {bookCards}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetchedBooks: state.fetchedBooks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchedBookFromApi: (books) => dispatch(fetchedBookFromApi(books))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer)
