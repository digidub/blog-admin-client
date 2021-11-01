import React from 'react';
import useFetch from '../hooks/useFetch';
import CommentCard from './CommentCard';

const Loading = () => <p>Loading...</p>;

const Error = (error) => <p>Oops! Something went wrong: {error}</p>;

const Data = (props) => {
  console.log(props);
  return props.data.map((comment) => {
    return (
      <CommentCard
        id={comment._id}
        key={comment._id}
        body={comment.body}
        email={comment.email}
        posted={comment.datePosted}
      />
    );
  });
};

const CommentsList = (props) => {
  const url = props.url;
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  const query = { url, options };
  const { loading, error, data } = useFetch(query);

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && <Data data={data} />}
    </div>
  );
};

export default CommentsList;
