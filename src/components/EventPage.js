import React from 'react'
import { connect } from 'react-redux'
import UserLinks from './UserLinks.js'
import CommentsContainer from './CommentsContainer.js'

const EventPage = (props) => {
  console.log(props)
  let usernames = props.club.users && props.club.users.map(user => <p key={user.id}> {user.first_name} {user.last_name} </p>)
  return (
    <div>
      <UserLinks />
      <div className="eventPageContainer">
        <div className="eventPagecol1">
          <h1>{props.club.name}</h1>
          <p>Host: {props.club.host && props.club.host.first_name}</p>
          <p><i className="far fa-calendar-alt"></i>  {props.club.date}</p>
          <p><i className="far fa-clock"></i>  {props.club.time}</p>
          <p><i className="fas fa-map-marker-alt"></i>  {props.club.address}, {props.club.city}, {props.club.state}, {props.club.zipcode}</p>
          <p>{props.club.description}</p>
          <div>Attendees: {usernames}</div>
        </div>
          <div className="eventPagecol2">
            <CommentsContainer />
          </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    club: state.club
  }
}

export default connect(mapStateToProps)(EventPage)
