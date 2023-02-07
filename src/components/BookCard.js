import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateUserFromFetch, updateBookObjs } from '../Redux/actions.js'

class BookCard extends Component {

  addBookToList = (e, bookObj) => {
    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
      body: JSON.stringify({
        title: this.props.bookObj.volumeInfo.title,
        author: this.props.bookObj.volumeInfo.authors[0],
        description: this.props.bookObj.volumeInfo.description,
        image:  this.props.bookObj.volumeInfo.imageLinks.thumbnail,
      })
    }
      fetch('http://localhost:3000/books', options)
      .then(resp => resp.json())
      .then(book => fetch('http://localhost:3000/user_books', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
        body: JSON.stringify({
          status: "want to read",
          book_id: book.id,
          user_id: this.props.user.id,
        })
      }))
        .then(resp => resp.json())
        .then(resp => {
          this.props.updateUserFromFetch(resp.user)
          const ids = resp.user.want_to_read.map(user_book => user_book.book_id)
          let books = resp.user.books.filter(book => ids.includes(book.id))
          this.props.updateBooks(books)
        }
      )
    }

  render() {
    return (
      <div className="searchbookcard">
        <img className="searchbookimage" alt={this.props.bookObj.volumeInfo.title} src={this.props.bookObj.volumeInfo.imageLinks === undefined ? null : this.props.bookObj.volumeInfo.imageLinks.thumbnail}/>
        <p> {this.props.bookObj.volumeInfo.title} </p>
        <p> {this.props.bookObj.volumeInfo.authors} </p>
        <p> {this.props.bookObj.volumeInfo.description} </p>
        <button className="button" onClick={(e) => this.addBookToList(e, this.props.bookObj)}>ADD BOOK</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    bookObjs: state.bookObjs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserFromFetch: (user) => dispatch(updateUserFromFetch(user)),
    updateBooks: (books) => dispatch(updateBookObjs(books))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookCard)
