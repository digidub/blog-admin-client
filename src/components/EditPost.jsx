import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import CommentsList from './CommentsList';
import server from '../services';
import PostEditor from './PostEditor';

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
      <form>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          name='title'
          value={editTitle}
          onChange={handleTitleChange}
        />
        <label htmlFor='body'>Body:</label>
        <PostEditor editBody={editBody} setEditBody={setEditBody} />
        <input
          type='submit'
          value='save changes'
          onClick={handleSaveChanges}
        />
      </form>
      <CommentsList url={`${location.pathname}/comments`} />
    </div>
  );
};

export default EditPost;
