import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router';
import CommentsList from './CommentsList';
import { Editor } from '@tinymce/tinymce-react';
import server from '../services';

const EditPost = () => {
  const { id } = useParams();
  const location = useLocation();
  const { post } = location.state;
  const { title, body } = post;
  const [editTitle, setEditTitle] = useState(title);
  const [editBody, setEditBody] = useState(body);
  const [data, setData] = useState(null);
  const editorRef = useRef(null);
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
        <Editor
          apiKey={process.env.REACT_APP_TinyCloud}
          onInit={(evt, editor) => (editorRef.current = editor)}
          value={editBody}
          onEditorChange={(newValue, editor) => setEditBody(newValue)}
          init={{
            height: 200,
            width: 600,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'undo redo | formatselect | ' +
              'bold italic backcolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style:
              'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          }}
        />
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
