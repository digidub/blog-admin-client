import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';
import server from '../services';
import Header from './Header';

const PostsList = (props) => {
  const [posts, setPosts] = useState(null);
  const url = '/posts';

  useEffect(() => {
    server.fetchAll(url).then((data) => {
      console.log(data);
      setPosts(data);
    });
  }, []);

  const listPosts = () =>
    posts.map((post) => {
      return (
        <PostCard
          id={post._id}
          key={post._id}
          body={post.body}
          title={post.title}
          author={post.author.username}
          posted={post.datePosted}
          published={post.published}
          deleteFunction={deleteFunction}
          togglePublished={togglePublished}
        />
      );
    });

  const deleteFunction = (id) => {
    const postUrl = `/posts/${id}`;
    server
      .remove(postUrl)
      .then(setPosts((posts) => posts.filter((post) => post._id !== id)));
  };

  const togglePublished = (id) => {
    const post = posts.find((p) => p._id === id);
    const updatedPost = { ...post, published: !post.published };
    const postUrl = `/posts/${id}`;
    server.update(postUrl, updatedPost).then((returnedPost) => {
      setPosts(posts.map((post) => (post._id !== id ? post : updatedPost)));
    });
  };

  return (
    <div>
      <Header title='Posts' />
      <PostsTable>{posts && listPosts()}</PostsTable>
    </div>
  );
};

export default PostsList;

const PostsTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
