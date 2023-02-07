import React, { Component } from 'react';
import { signUpAndFetch } from '../Redux/actions.js'
import { connect } from 'react-redux'

class SignUp extends Component {

  handleSubmit = (e) => {
    this.props.history.push(`/userfeed`);
  }

  render() {
    return (
      <div className="signuppage">
      <div className="signupform">
        <form onSubmit={this.handleSubmit}>
          <h2 className="secondary-header">Sign Up</h2>
          <input type="text" name="firstname" placeholder="first name"/><br />
          <input type="text" name="lastname" placeholder="last name"/><br />
          <input type="text" name="city" placeholder="city"/><br />
          <input type="text" name="state" placeholder="state"/><br />
          <input type="text" name="image" placeholder="profile image url"/><br />
          <input type="text" name="username" placeholder="username"/><br />
          <input type="text" name="password" placeholder="password"/><br />
          <input className="button" type="Submit" placeholder="Username"/>
        </form>
      </div>
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
    signUpAndFetch: (e) => dispatch(signUpAndFetch(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
