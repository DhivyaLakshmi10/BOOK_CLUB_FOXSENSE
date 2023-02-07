import React, { Component } from 'react';
import '../App.css';
import Logout from './Logout.js'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar extends Component {

  renderLogoutButton = () => {
    return <Link to='/'><li><Logout /></li></Link>
  }

  renderLoginButton = () => {
    return <Link to='/login'><li>Login</li></Link>
  }

  renderSignUpButton = () => {
    return <Link to='/signup'><li>Sign Up</li></Link>
  }

  renderProfileImage = () => {
    return <Link to='/userfeed'><li><img className="profileimage" height="50" src={this.props.user && this.props.user.image} alt="Avatar"/></li></Link>
  }

  render() {
    return (
      <div className="navBar">
        <ul>
          <Link to='/'><h1 className="logo">Dhivya's Finds <img className="book-icon" height="35" src="https://img.icons8.com/ios/50/000000/literature.png"/></h1></Link>
          {this.props.user && this.renderProfileImage()}
          {this.props.user ? this.renderLogoutButton() : this.renderLoginButton()}
          {!this.props.user && this.renderSignUpButton()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(NavBar)
