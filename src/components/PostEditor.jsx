import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react';

const PostEditor = ({ editBody, setEditBody }) => {
  const editorRef = useRef(null);

  return (
    <Editor
      apiKey={process.env.REACT_APP_TinyCloud}
      onInit={(evt, editor) => (editorRef.current = editor)}
      initialValue='<p>Enter blog post here</p>'
      value={editBody}
      onEditorChange={(newValue, editor) => setEditBody(newValue)}
      init={{
        height: 300,
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
  );
};

export default PostEditor;
