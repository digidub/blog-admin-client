import React, { useEffect, useState } from 'react';
import CommentCard from './CommentCard';
import server from '../services';

const CommentsList = (props) => {
  const url = props.url;
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
        />
      );
    });

  if (comments?.length < 1) return <div>No Comments</div>;

  return <div>{comments && listComments()}</div>;
};

export default CommentsList;
