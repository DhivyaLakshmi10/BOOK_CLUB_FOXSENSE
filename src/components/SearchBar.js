import React, { Component } from 'react';

class SearchBar extends Component {
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
          <h2 className="secondary-header">Search books</h2>
          <input className="searchTerm" onChange={this.changeHandler} placeholder="Search by title, author or subject" value={this.state.searchTerm} type="text" name="searchTerm" />
          <button className="button" onClick={() => this.props.searchHandler(this.state.searchTerm)}>Search</button>
        </div>
      </div>
    )
  }
}

export default SearchBar
