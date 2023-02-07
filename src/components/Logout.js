import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logoutUser } from '../Redux/actions.js'
import { withRouter } from "react-router-dom"

class Logout extends Component {

  handleLogout = () => {
    localStorage.removeItem("token")
    this.props.logoutUser()
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <p onClick={this.handleLogout}>Logout</p>
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
    logoutUser: () => dispatch(logoutUser())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout))
