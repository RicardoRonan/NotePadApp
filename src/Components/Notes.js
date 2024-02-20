import React, { useState } from 'react';

const Note = ({ note, index, deleteNote, updateNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(note.text);

  const handleUpdate = () => {
    updateNote(index, updatedText);
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          <p>{note.text}</p>
          <button onClick={() => setIsEditing(true)} className='edit-btn'>Edit</button>
          <button onClick={() => deleteNote(index)}className='delete-btn'>Delete</button>
        </>
      )}
    </div>
  );
};

export default Note;
