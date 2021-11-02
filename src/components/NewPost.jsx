import React, { useState } from 'react';
import server from '../services';
import PostEditor from './PostEditor';

const NewPost = () => {
  const [editTitle, setEditTitle] = useState();
  const [editBody, setEditBody] = useState();
  const [data, setData] = useState(null);

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
      <label htmlFor='title'>Title:</label>
      <input
        type='text'
        name='title'
        value={editTitle}
        onChange={handleTitleChange}
      />
      <PostEditor editBody={editBody} setEditBody={setEditBody} />
      <input type='submit' value='save changes' onClick={handleSaveChanges} />
    </div>
  );
};

export default NewPost;
