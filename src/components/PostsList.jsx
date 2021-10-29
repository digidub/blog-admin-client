import React from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import PostCard from './PostCard';

const Loading = () => <p>Loading...</p>;

const Error = (error) => <p>Oops! Something went wrong: {error}</p>;

const Data = ({ posts }) => {
  console.log(posts);
  return posts.map((post) => {
    return (
      <PostCard
        id={post._id}
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
  const url = '/posts';
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  const query = { url, options };
  const { loading, error, data } = useFetch(query);

  return (
    <PostsTable>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && <Data posts={data.posts} />}
    </PostsTable>
  );
};

export default PostsList;

const PostsTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
