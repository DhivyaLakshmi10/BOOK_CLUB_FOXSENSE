import React from 'react';
import { connect } from 'react-redux'
import UserLinks from './UserLinks.js'
import EventCard from './EventCard.js'

const UserEventsContainer = (props) => {
  let clubCards = props.user && props.user.events.map(club => <EventCard key={club.id} clubObj={club}/> )
  return (
    <div>
      <UserLinks />
      <h2 className="secondary-header user-tab-headers">Your Book Clubs</h2>
      {clubCards}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(UserEventsContainer)
