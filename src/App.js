// App.js
import React, { useState, useEffect } from 'react';
import './styles.css';
import Note from './Components/Notes';
import NoteForm from './Components/NoteForm';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const newNotes = [...notes, { text }];
    setNotes(newNotes);
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const updateNote = (index, newText) => {
    const newNotes = [...notes];
    newNotes[index].text = newText;
    setNotes(newNotes);
  };

  return (
    <div className="app">
      <h1>Notepad</h1>
      <NoteForm addNote={addNote} />
      <div className="notes-container">
        {notes.map((note, index) => (
          <Note key={index} index={index} note={note} deleteNote={deleteNote} updateNote={updateNote} />
        ))}
      </div>
    </div>
  );
};

export default App;
