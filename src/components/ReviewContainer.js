import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReviewCard from './ReviewCard.js'
import UserLinks from './UserLinks.js'
import SearchReviews from './SearchReviews.js'
import { updateReviews } from '../Redux/actions.js'

class ReviewContainer extends Component {

  searchHandler = (search) => {
    fetch('http://localhost:3000/reviews')
    .then(resp => resp.json())
    .then(reviews => {
      let reviews_new = reviews.filter(review => review.book.title.toLowerCase().includes(search.toLowerCase()))

      this.props.updateReviews(reviews_new)
    })
  }

  render() {
    let reviewCards = this.props.reviews.map(review => <ReviewCard key={review.id} reviewObj={review} />)
    return (
    <div>
      <UserLinks />
      <SearchReviews searchHandler={this.searchHandler}/>
      {reviewCards}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateReviews: (reviews) => dispatch(updateReviews(reviews)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer)
