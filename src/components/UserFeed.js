import React, { Component } from 'react';
import { connect } from 'react-redux'
import CurrentlyReading from './CurrentlyReading.js'
import UserLinks from './UserLinks.js'
import { changeCreateEventForm } from '../Redux/actions.js'

class UserFeed extends Component {

  submitNewEvent = (e) => {
    e.preventDefault()
    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
      body: JSON.stringify({
        name: e.target.name.value,
        address: e.target.address.value,
        city: e.target.city.value,
        state: e.target.state.value,
        zipcode: e.target.zipcode.value,
        date: e.target.date.value,
        time: e.target.time.value,
        description: e.target.description.value,
        host_id: this.props.user.id
      })
    }
    fetch('http://localhost:3000/events', options)
    .then(resp => resp.json())
    .then(resp => fetch('http://localhost:3000/user_events', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
      body: JSON.stringify({
        user_id: this.props.user.id,
        event_id: resp.id
      })
    }))
    this.formRef.reset()
  }

    changeFormClicked = () => {
      this.props.changeCreateEventForm()
    }

    renderForm() {
      return (
      <form ref={(el) => this.formRef = el} className="eventForm" onSubmit={(e) => this.submitNewEvent(e)}>
        <input placeholder="Name of Book Club" className="eventFormInput" type="text" name="name"/><br />
        <input placeholder="Address"className="eventFormInput" type="text" name="address"/><br />
        <input placeholder="City"className="eventFormInput"type="text" name="city"/><br />
        <input placeholder="State" className="eventFormInput" type="text" name="state"/><br />
        <input placeholder="Zip Code" className="eventFormInput" type="text" name="zipcode"/><br />
        <input placeholder="Date" className="eventFormInput" type="text" name="date" placeholder="mm/dd/yyyy"/><br />
        <input placeholder="Time" className="eventFormInput" type="text" name="time" placeholder="-- : -- am/pm"/><br />
        <textarea placeholder="Description" rows="4" cols="50" className="eventFormInput" type="text" name="description"></textarea><br />
        <input type="hidden" name="host"/>
        <input className="button" type="submit"/>
      </form>
      )
    }

  render() {
    return (
      <div>
        <UserLinks />
        <div className="currentlyreading">
          <button className="secondary-header feed-headings">Currently Reading</button>
          <CurrentlyReading />
          <button className="form-option secondary-header feed-headings" onClick={this.changeFormClicked}> Create New Book Club</button>
          {this.props.createEventForm && this.renderForm()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    createEventForm: state.createEventForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCreateEventForm: () => dispatch(changeCreateEventForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFeed)
