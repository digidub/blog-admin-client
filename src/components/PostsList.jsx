import React from 'react';
import useFetch from '../hooks/useFetch';

const PostsList = (props) => {
  const url = 'http://localhost:3000/posts';
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  const query = { url, options };
  const { loading, error, data } = useFetch(query);

  return (
    <div>
      {loading && <div>loading</div>}
      {error && <div>{error}</div>}
      {data && console.log(data)}
    </div>
  );
};

export default PostsList;
