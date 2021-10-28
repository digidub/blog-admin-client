import React, { useState, useContext } from 'react';
import { useLocation, useParams } from 'react-router';
import { AuthContext } from '../AuthContext';

const EditPost = () => {
  const { id } = useParams();
  const location = useLocation();
  const { props } = location.state;
  const { title, body } = props;
  const [editTitle, setEditTitle] = useState(title);
  const [editBody, setEditBody] = useState(body);
  const [auth] = useContext(AuthContext);

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
        Authorization: `Bearer ${auth}`,
      },
      body: JSON.stringify({ title: editTitle, body: editBody }),
    };
    fetch(`http://localhost:3000${location.pathname}`, options)
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
    </div>
  );
};

export default EditPost;
