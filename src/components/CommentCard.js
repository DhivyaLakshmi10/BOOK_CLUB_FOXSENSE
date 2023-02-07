import React from 'react';

const CommentCard = (props) => {
    return (
      <div className="commentCard">
        <p>{props.commentObj.user.username}</p>
        <p className="commentdate"> {props.commentObj.readable_time} </p>
        <p>{props.commentObj.content}</p>
      </div>
    )
  }

export default CommentCard
