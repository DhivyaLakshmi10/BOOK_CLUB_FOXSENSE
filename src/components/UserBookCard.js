import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserBookCard extends Component {
  state = {
    bookCardClicked: false,
    reviewFormClicked: false,
    categoryFormClicked: false,
    favorited: this.props.bookObj.favorited
  }

  handleClickedImage = () => {
    this.setState({
      bookCardClicked: !this.state.bookCardClicked
    })
  }

  handleReviewClicked = () => {
    this.setState({
      reviewFormClicked: !this.state.reviewFormClicked
    })
  }

  changeCategory = () => {
    this.setState({
      categoryFormClicked: !this.state.categoryFormClicked
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
      body: JSON.stringify({
        title: e.target.title.value,
        content: e.target.content.value,
        rating: e.target.rating.value,
        book_id: e.target.bookid.value,
        user_id: e.target.userid.value
      })
    }
    fetch('http://localhost:3000/reviews', options)
  }

  handleChangeCategory = (e, book) => {
    e.preventDefault()
    let user_book = this.props.user.user_books.filter(user_book => user_book.book_id === book.id)
    fetch(`http://localhost:3000/user_books/${user_book[0].id}`, {
      method: "PATCH",
      headers: {
           "Content-Type": "application/json"
        },
      body: JSON.stringify({
        status: e.target.category.value
      })
    })
  }


  changeFavorited = (obj) => {
    let new_favorite = !obj.favorited
    this.setState({
      favorited: new_favorite
    })
    fetch(`http://localhost:3000/books/${obj.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        favorited: new_favorite
      })
    })
  }

  renderReviewForm (){
    return (
      <div className="reviewform">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="inputfieldsreview"><input type="text" name="title" placeholder="Review Title"/><br /></div>
          <div className="inputfieldsreview"><textarea rows="4" cols="50" type="text" name="content" placeholder="Review content..."></textarea></div>
            <fieldset className="rating">
              <input type="radio" id="star5" name="rating" value="5" /><label className = "full" htmlFor="star5" title="Awesome - 5 stars"></label>
              <input type="radio" id="star4half" name="rating" value="4" /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
              <input type="radio" id="star4" name="rating" value="4" /><label className = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
              <input type="radio" id="star3half" name="rating" value="3" /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
              <input type="radio" id="star3" name="rating" value="3" /><label className = "full" htmlFor="star3" title="Meh - 3 stars"></label>
              <input type="radio" id="star2half" name="rating" value="2" /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
              <input type="radio" id="star2" name="rating" value="2" /><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
              <input type="radio" id="star1half" name="rating" value="1" /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
              <input type="radio" id="star1" name="rating" value="1" /><label className = "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
            </fieldset>
            <input type="hidden" name="userid" value={this.props.user.id}/><br />
            <input type="hidden" name="bookid" value={this.props.bookObj.id}/><br />
            <input className="button" type="submit"/>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div className="userbookcard">
        <img className="cardimage" onClick={() => this.handleClickedImage()} alt={this.props.bookObj.title} src={this.props.bookObj.image}/>
        <h4>{this.props.bookObj.title}</h4>
        <div>{this.state.favorited === true ? <i onClick={() => this.changeFavorited(this.props.bookObj)} className="fas fa-heart"></i> : <i onClick={() => this.changeFavorited(this.props.bookObj)} className="far fa-heart"></i>}</div>
          {this.state.bookCardClicked &&
          <div>
            <p>{this.props.bookObj.author}</p>
            <p>{this.props.bookObj.description}</p>
            <button className="button" onClick={() => this.props.deleteBook(this.props.bookObj)}>Delete Book</button>
            <button className="button" onClick={this.handleReviewClicked}>Leave a Review</button>
            <button className="button" onClick={this.changeCategory}>Change Category</button>
            {this.state.categoryFormClicked &&
              <form onSubmit={(e) => this.handleChangeCategory(e, this.props.bookObj)}>
                <select className="filter" name="category" >
                  <option value="read">Read</option>
                  <option value="want to read">Want to Read</option>
                  <option value="currently reading">Currently Reading</option>
                </select>
                <input className="button" type="submit" value="Submit" />
              </form>}
            <div>
              {this.state.reviewFormClicked ? this.renderReviewForm() : null}
            </div>
        </div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  }
}

export default connect(mapStateToProps)(UserBookCard)
