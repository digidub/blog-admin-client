import React, { useState } from 'react';
import { TitleInput } from '../commonStyles';
import server from '../services';
import Header from './Header';
import PostEditor from './PostEditor';

const NewPost = () => {
  const [editTitle, setEditTitle] = useState();
  const [editBody, setEditBody] = useState();

  const handleTitleChange = (e) => {
    setEditTitle((editTitle) => e.target.value);
  };

  const handleSaveChanges = (e) => {
    const url = '/posts';
    server.create(url, editTitle, editBody);
    e.preventDefault();
  };

  return (
    <div>
      <Header title='New Post' />
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
    </div>
  );
};

export default NewPost;
