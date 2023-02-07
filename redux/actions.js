export const handleLogin = (user) => ({type: 'HANDLE_LOGIN', payload: {user}})
export const logoutUser = () => ({type: 'HANDLE_LOGOUT'})
export const getCurrentUser = (user) => ({type: 'GET_CURRENT_USER', payload: {user}})
export const changeCreateEventForm = () => ({type: 'CHANGE_CREATE_EVENT_FORM'})
export const updateBookObjs = (books) => ({type: 'UPDATE_BOOK_OBJS', payload: books})
export const updateUserFromFetch = (user) => ({type: 'UPDATE_USER_FROM_FETCH', payload: user})
export const fetchedBookFromApi = (books) => ({type: 'FETCHED_BOOKS_FROM_API', payload: books})
export const fetchBookClubs = (clubs) => ({type: 'FETCH_BOOK_CLUBS', payload: clubs})
export const updateComments = (comments) => ({type: 'UPDATE_COMMENTS', payload: comments})
export const updateReviews = (reviews) => ({type: 'UPDATE_REVIEWS', payload: reviews})
export const changeEvent = (club) => ({type: 'CHANGE_EVENT', payload: {club}})

export const loginAndFetch = (e) => {
  return (dispatch) => {
    return loginFetch(e)
    .then(json => dispatch(handleLogin(json.user)) && localStorage.setItem("token", json.jwt))
  }
}

export const signUpAndFetch = (e) => {
  return (dispatch) => {
    return signUpFetch(e)
    .then(json => dispatch(handleLogin(json.user)) && localStorage.setItem("token", json.jwt))
  }
}

export const setAndFetchUser = (token) => {
  return (dispatch) => {
    return fetchingCurrentUser(token)
    .then(json => dispatch(getCurrentUser(json.user)))
  }
}

export const loginFetch = (e) => {
  return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: e.target.username.value,
          password: e.target.password.value
        }
      })
    }).then(resp => resp.json())
}

export const signUpFetch = (e) => {
  return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
        first_name: e.target.firstname.value,
        last_name: e.target.lastname.value,
        city: e.target.city.value,
        state: e.target.state.value,
        image: e.target.image.value,
        username: e.target.username.value,
        password: e.target.password.value
      }
      })
    }).then(resp => resp.json())
}

export const fetchingCurrentUser = (token) => {
  return fetch('http://localhost:3000/profile', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(resp => resp.json())
}
