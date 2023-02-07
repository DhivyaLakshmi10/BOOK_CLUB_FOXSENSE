import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserLinks from './UserLinks.js'
import SearchEvents from './SearchEvents.js'
import EventCard from './EventCard.js'
import { fetchBookClubs } from '../Redux/actions.js'


class EventsContainer extends Component {

  searchHandler = (search) => {
    fetch('http://localhost:3000/events')
    .then(resp => resp.json())
    .then(clubs => {
      let new_clubs = clubs.filter(club => club.zipcode === search)
      this.props.fetchBookClubs(new_clubs)
    })
  }

  render() {
    let clubCards = this.props.bookClubs.map(club => <EventCard clubObj={club} key={club.id}/>)
    return (
      <div>
        <UserLinks />
        <SearchEvents searchHandler={this.searchHandler}/>
        {clubCards}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bookClubs: state.bookClubs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookClubs: (clubs) => dispatch(fetchBookClubs(clubs)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
