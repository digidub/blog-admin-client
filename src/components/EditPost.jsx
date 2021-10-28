import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router';

const EditPost = () => {
  const { id } = useParams();
  const location = useLocation();
  const { props } = location.state;
  const { title, body } = props;
  const [editTitle, setEditTitle] = useState(title);
  const [editBody, setEditBody] = useState(body);

  const handleTitleChange = (e) => {
    setEditTitle((editTitle) => e.target.value);
  };

  const handleBodyChange = (e) => {
    setEditBody((editBody) => e.target.value);
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
      </form>
    </div>
  );
};

export default EditPost;
