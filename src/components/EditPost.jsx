import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { AuthContext } from '../AuthContext';
import CommentsList from './CommentsList';

const EditPost = () => {
  const { id } = useParams();
  const location = useLocation();
  const { props } = location.state;
  const { title, body } = props;
  const [editTitle, setEditTitle] = useState(title);
  const [editBody, setEditBody] = useState(body);
  const [auth] = useContext(AuthContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = `http://localhost:3000${location.pathname}`;
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    async function fetchPost() {
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
    console.log('mounting');
    fetchPost();
  }, []);

  const handleTitleChange = (e) => {
    setEditTitle((editTitle) => e.target.value);
  };

  const handleBodyChange = (e) => {
    setEditBody((editBody) => e.target.value);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: editTitle, body: editBody }),
    };
    fetch(`${location.pathname}`, options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
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
        <textarea name='body' value={editBody} onChange={handleBodyChange} />
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
