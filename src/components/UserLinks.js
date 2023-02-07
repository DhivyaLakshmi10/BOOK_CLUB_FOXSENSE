import React from 'react';
import { Link } from 'react-router-dom'

const Userlinks = () => {
  return (
    <div className="container">
      <Link className="first after" to='/read'>
        <p className="userlinks">{"Books Read"}</p>
      </Link>
      <Link className="first after" to='/books-to-read'>
        <p className="userlinks">{"Reading List"}</p>
      </Link>
      <Link className="first after" to='/your-events'>
        <p className="userlinks">{"Your Book Clubs"}</p>
      </Link>
      <Link className="first after" to="/search-events" >
        <p className="userlinks"> Search Book Clubs </p>
      </Link>
      <Link className="first after" to="/reviews">
        <p className="userlinks"> Search Reviews </p>
      </Link>
      <Link className="first after" to="/search-books" >
        <p className="userlinks">Search Books</p>
      </Link>
    </div>
  )
}

export default Userlinks
