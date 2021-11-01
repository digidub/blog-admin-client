import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const NewPost = () => {
  const [editTitle, setEditTitle] = useState();
  const [editBody, setEditBody] = useState();
  const [data, setData] = useState(null);
  const editorRef = useRef(null);

  const handleTitleChange = (e) => {
    setEditTitle((editTitle) => e.target.value);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: editTitle, body: editBody }),
    };
    fetch(`/posts`, options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
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
      <Editor
        apiKey={process.env.REACT_APP_TinyCloud}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue='<p>Enter blog post here</p>'
        value={editBody}
        onEditorChange={(newValue, editor) => setEditBody(newValue)}
        init={{
          height: 500,
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
      <input type='submit' value='save changes' onClick={handleSaveChanges} />
    </div>
  );
};

export default NewPost;
