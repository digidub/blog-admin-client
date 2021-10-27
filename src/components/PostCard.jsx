import React from 'react';

const PostCard = ({ body, title, author, posted }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{body}</div>
      <div>{author}</div>
      <div>{posted}</div>
    </div>
  );
};

export default PostCard;
