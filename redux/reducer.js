const initialState = {
  auth: {},
  books: {
    read: [],
    wantToRead: [],
    currentlyReading: []
  },
  club: {},
  createEventForm: false,
  bookObjs: [],
  fetchedBooks: [],
  bookClubs: [],
  comments: [],
  reviews: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case('HANDLE_LOGIN'): {
      return {...state, auth: action.payload,
        books: {read: action.payload.user.read,
        wantToRead: action.payload.user.want_to_read,
        currently_reading: action.payload.user.currently_reading}
      }
    }
    case('HANDLE_LOGOUT'): {
      return {...state, auth: {},
        books: {
          read: {},
          wantToRead: {},
          currentlyReading: {}
          }
        }
      }
    case('GET_CURRENT_USER'): {
      return {...state, auth: action.payload,
         books: {
           read: action.payload.user.read,
           wantToRead: action.payload.user.want_to_read,
           currentlyReading: action.payload.user.currently_reading
          }
        }
      }
    case('CHANGE_CREATE_EVENT_FORM'): {
      return { ...state,
        createEventForm: !state.createEventForm
      }
    }
    case('UPDATE_BOOK_OBJS'): {
      return { ...state,
        bookObjs: action.payload
      }
    }
    case('UPDATE_USER_FROM_FETCH'): {
      return {...state,
        auth: {
          user: action.payload
      }
    }
  }
    case('FETCHED_BOOKS_FROM_API'): {
      return { ...state,
        fetchedBooks: action.payload
      }
    }
    case('FETCH_BOOK_CLUBS'): {
      return { ...state,
        bookClubs: action.payload
      }
    }
    case('CHANGE_EVENT'): {
      return {...state,
        club: action.payload.club
      }
    }
    case('UPDATE_COMMENTS'): {
      return {...state,
         comments: action.payload
       }
    }
    case('UPDATE_REVIEWS'): {
      return {...state,
         reviews: action.payload
       }
    }
    default:
      return state
  }
}

export default reducer
