import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeEvent, updateUserFromFetch, updateUserFromJoin } from '../Redux/actions.js'

class EventCard extends Component {

  joinEvent = (e, obj) => {
    fetch('http://localhost:3000/user_events', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: this.props.user.id,
        event_id: obj.id
      })
    })
    .then(resp => resp.json())
    .then(resp => this.props.updateUserFromFetch(resp.user))
  }

  leaveEvent = (e, obj) => {
    let user_event = obj.user_events.filter(user_event => user_event.user_id === this.props.user.id)
    if (user_event.length !== 0) {
        let id = user_event[0].id
        console.log(id)
        fetch(`http://localhost:3000/user_events/${id}`, {
          method: "DELETE",
          headers: {
               "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(resp => this.props.updateUserFromFetch(resp))
    }
  }

  render() {
    console.log(this.props.clubObj)
    let ids = this.props.user.user_events === undefined ? null : this.props.user.user_events.map(user_event => user_event.event_id)
    return (
    <div className="searcheventcard">
      {ids.includes(this.props.clubObj.id) ? <button className="button" onClick={(e) => this.leaveEvent(e, this.props.clubObj)}>Leave Event</button> : <button className="button" onClick={(e) => this.joinEvent(e, this.props.clubObj)}>Join Event!</button>}
      <Link to='/event-page'><h4 onClick={() => this.props.changeEvent(this.props.clubObj)}>{this.props.clubObj.name}</h4></Link>
      <p><i className="far fa-calendar-alt"></i>  {this.props.clubObj.date}</p>
      <p><i className="far fa-clock"></i>  {this.props.clubObj.time}</p>
      <p>{this.props.clubObj.description}</p>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeEvent: (club) => dispatch(changeEvent(club)),
    updateUserFromFetch: (user) => dispatch(updateUserFromFetch(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCard)
