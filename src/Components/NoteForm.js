// NoteForm.js
import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addNote(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Write a note"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
