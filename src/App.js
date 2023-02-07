import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import NavBar from './Components/NavBar.js'
import SignUp from './Components/SignUp.js'
import Login from './Components/Login.js'
import HomePage from './Components/HomePage.js'
import UserFeed from './Components/UserFeed.js'
import BooksContainer from './Components/BooksContainer.js'
import EventsContainer from './Components/EventsContainer.js'
import UserWantToRead from './Components/UserWantToRead.js'
import UserRead from './Components/UserRead.js'
import UserEventsContainer from './Components/UserEventsContainer.js'
import ReviewContainer from './Components/ReviewContainer.js'
import { connect } from 'react-redux'
import { setAndFetchUser } from './Redux/actions.js'
import EventPage from './Components/EventPage.js'
class App extends Component {

  componentDidMount () {
    const token = localStorage.getItem('token')
    if (token) {
      this.props.setAndFetchUser(token)
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp} />
          <Route path="/userfeed" component={UserFeed} />
          <Route path="/read" component={UserRead} />
          <Route path="/books-to-read" component={UserWantToRead} />
          <Route path="/your-events" component={UserEventsContainer} />
          <Route path="/search-events" component={EventsContainer} />
          <Route path='/search-books' component={BooksContainer} />
          <Route path='/reviews' component={ReviewContainer} />
          <Route path='/event-page' component={EventPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAndFetchUser: (token) => dispatch(setAndFetchUser(token))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
