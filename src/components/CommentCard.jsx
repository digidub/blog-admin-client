import React from 'react';

const CommentCard = (props) => {
  return (
    <div>
      <p>{props.body}</p>
      <p>{props.email}</p>
      <p>{props.datePosted}</p>
    </div>
  );
};

export default CommentCard;
