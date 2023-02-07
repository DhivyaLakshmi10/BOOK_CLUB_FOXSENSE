import React, { Component } from 'react';
import { connect } from 'react-redux'
import CommentCard from './CommentCard.js'
import { updateComments } from '../Redux/actions.js'

class CommentsContainer extends Component {

  componentDidMount() {
    fetch(`http://localhost:3000/events/${this.props.club.id}`)
      .then(resp => resp.json())
      .then(resp => {
        let reversed = resp.comments && resp.comments.reverse()
        this.props.updateComments(reversed)
        }
      )
    }

  postComment = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/comments', {
      method: "POST",
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
      body: JSON.stringify({
        content: e.target.content.value,
        user_id: this.props.user.id,
        event_id: this.props.club.id
      })
    })
    .then(resp => resp.json())
    .then(resp => {
      let copy = [resp, ...this.props.comments]
      this.props.updateComments(copy)
    })
  }

  render() {
    console.log(this.props)
    let commentCards = this.props.comments ? this.props.comments.map(comment => <CommentCard commentObj={comment} key={comment.id}/>) : null
    return (
      <div className="commentContainer">
        <form onSubmit={this.postComment}>
          <textarea rows="3" cols="90" type="text" name="content" placeholder="Write something..."></textarea><br />
          <input className="button" type="submit"/>
        </form>
        {commentCards}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    club: state.club,
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateComments: (comments) => dispatch(updateComments(comments)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)
