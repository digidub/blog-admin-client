import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import CommentsList from './CommentsList';
import server from '../services';
import PostEditor from './PostEditor';
import Header from './Header';
import styled from 'styled-components';

const EditPost = () => {
  const location = useLocation();
  const { post } = location.state;
  const { title, body } = post;
  const [editTitle, setEditTitle] = useState(title);
  const [editBody, setEditBody] = useState(body);
  const [data, setData] = useState(null);
  const url = `${location.pathname}`;

  useEffect(() => {
    server.fetchPost(url).then((response) => setData(response));
  }, []);

  const handleTitleChange = (e) => {
    setEditTitle((editTitle) => e.target.value);
  };

  const handleSaveChanges = (e) => {
    const updatedPost = { ...data, title: editTitle, body: editBody };
    server.update(url, updatedPost).then((response) => console.log(response));
    e.preventDefault();
  };

  return (
    <div>
      <Header title='Edit Post' />
      <form>
        <TitleInput
          type='text'
          name='title'
          value={editTitle}
          onChange={handleTitleChange}
        />
        <PostEditor editBody={editBody} setEditBody={setEditBody} />
        <input
          type='submit'
          value='save changes'
          onClick={handleSaveChanges}
        />
      </form>
      <Header title='Comments' />
      <CommentsList url={`${location.pathname}/comments`} />
    </div>
  );
};

export default EditPost;

const TitleInput = styled.input`
  border: 1px solid #ccc;
  font-size: 20px;
  width: 98%;
  text-decoration: none;
  padding: 10px 0 10px 10px;
`;
