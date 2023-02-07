import React, { Component } from 'react';

class ReviewCard extends Component {

  renderStars() {
    const stars = []
      for (let i = 0; i < this.props.reviewObj.rating; i ++) {
      stars.push(<span key={i} className="fa fa-star checked"></span>);
    }
    return stars
 }

  render() {
    return (
    <div className="reviewcard">
      <img className="profileimage" alt={this.props.reviewObj.user.username} height="50" src={this.props.reviewObj.user.image}/>
      <p>{this.props.reviewObj.user.username}</p>
      <b><p>{this.props.reviewObj.book.title}</p></b>
      <p>{this.props.reviewObj.title}</p>
      <p>{this.renderStars()}</p>
      <p>{this.props.reviewObj.content}</p>
    </div>
    )
  }
}

export default ReviewCard
