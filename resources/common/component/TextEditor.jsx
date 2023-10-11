import React, { useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TextEditor({ text, setText, height = 500 }) {
  const editorRef = useRef(null);

  const handleText = e => {
    if (editorRef.current) {
      setText(editorRef.current?.getContent())
    }
  }

  return (
    <>
      <Editor
        apiKey='9u3v7hits4bsnde0wfll95hrlmguq1ai0dj4st4ufa8syejj'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={text}
        onBlur={handleText}
        init={{
          height: 500,
          menubar: true,
          language: 'fr_FR',
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
    </>
  );
}