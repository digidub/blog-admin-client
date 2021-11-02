import React, { useEffect, useState } from 'react';
import CommentCard from './CommentCard';
import server from '../services';

const CommentsList = (props) => {
  const url = props.url;
  console.log(url);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    server.fetchAll(url).then((response) => {
      console.log(response);
      setComments(response);
    });
  }, []);

  const listComments = () =>
    comments.map((comment) => {
      return (
        <CommentCard
          id={comment._id}
          key={comment._id}
          body={comment.body}
          email={comment.email}
          datePosted={comment.datePosted}
          deleteFunction={deleteComment}
        />
      );
    });

  const deleteComment = (id) => {
    const commentUrl = `${url}/${id}`;
    console.log(commentUrl);
    server
      .remove(commentUrl)
      .then(
        setComments((comments) =>
          comments.filter((comment) => comment._id !== id)
        )
      );
  };

  if (comments?.length < 1) return <div>No Comments</div>;

  return <div>{comments && listComments()}</div>;
};

export default CommentsList;
