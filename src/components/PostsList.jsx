import React from 'react';
import useFetch from '../hooks/useFetch';
import PostCard from './PostCard';

const Loading = () => <p>Loading...</p>;

const Error = (error) => <p>Oops! Something went wrong: {error}</p>;

const Data = ({ posts }) => {
  console.log(posts);
  return posts.map((post) => {
    return (
      <PostCard
        key={post._id}
        body={post.body}
        title={post.title}
        author={post.author.username}
        posted={post.datePosted}
      />
    );
  });
};

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
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && <Data posts={data.posts} />}
    </div>
  );
};

export default PostsList;
