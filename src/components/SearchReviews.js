import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeSearchTerm } from '../Redux/actions.js'

class SearchReviews extends Component {

  state = {
    searchTerm: ""
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="searchbar">
        <div>
          <h2 className="secondary-header">Search reviews</h2>
          <input className="searchTerm" placeholder="Search by book title" onChange={this.changeHandler} value={this.state.searchTerm} type="text" name="searchTerm" />
          <button className="button" onClick={(title) => this.props.searchHandler(this.state.searchTerm)}>Search</button>
        </div>
      </div>
    )
  }
}

export default SearchReviews
