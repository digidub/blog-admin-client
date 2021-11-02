import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';
import server from '../services';

const PostsList = (props) => {
  const [posts, setPosts] = useState(null);
  const url = '/posts';

  useEffect(() => {
    server.fetchAll(url).then((data) => {
      console.log(data.posts);
      setPosts(data.posts);
    });
  }, []);

  const postsList = () =>
    posts.map((post) => {
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

  return <PostsTable>{posts && postsList()}</PostsTable>;
};

export default PostsList;

const PostsTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
