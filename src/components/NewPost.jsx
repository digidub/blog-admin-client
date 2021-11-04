import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TitleInput } from '../commonStyles';
import server from '../services';
import Header from './Header';
import Notification from './Notification';
import PostEditor from './PostEditor';

const NewPost = () => {
  const [editTitle, setEditTitle] = useState();
  const [editBody, setEditBody] = useState();
  const [editPublished, setEditPublished] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleTitleChange = (e) => {
    setEditTitle((editTitle) => e.target.value);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    const url = '/posts';
    const newPost = {
      title: editTitle,
      body: editBody,
      published: editPublished,
    };
    server
      .create(url, newPost)
      .then((newPost) => {
        setErrorMessage(null);
        setSuccessMessage(`${newPost.title} successfully saved`);
      })
      .catch((err) => {
        err.json().then((error) => {
          console.log(error);
          setErrorMessage(error.message);
        });
      });
  };

  const handleTogglePublished = (e) => {
    setEditPublished(!editPublished);
  };

  return (
    <div>
      {errorMessage && <Notification type='error' message={errorMessage} />}
      {successMessage && (
        <Notification type='success' message={successMessage} />
      )}
      <Header title='New Post' />
      <form>
        <TitleInput
          type='text'
          name='title'
          value={editTitle}
          onChange={handleTitleChange}
        />
        <PostEditor editBody={editBody} setEditBody={setEditBody} />
        <button onClick={handleSaveChanges}>Save Changes</button>
        <input
          type='checkbox'
          name='publish'
          onChange={handleTogglePublished}
        />
        <label htmlFor='publish'>Publish?</label>
      </form>
    </div>
  );
};

export default NewPost;

const SaveButton = styled(Link)`
  display: inline-block;
   padding: 0.2em 1.45em;
   margin: 0.1em;
   border: 0.15em solid #cccccc;
   box-sizing: border-box;
   text-decoration: none;
   font-family: 'Segoe UI', 'Roboto', sans-serif;
   font-weight: 400;
   color: #000000;
   background-color: #cccccc;
   text-align: center;
   position: relative;
  &:hover {
    border-color: #7a7a7a;
  }
`;
