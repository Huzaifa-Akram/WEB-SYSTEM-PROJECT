import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ title: "", content: "" });
  const [buttonText, setButtonText] = useState("Add");
  const [editIndex, setEditIndex] = useState(null);

  const customNoteContainerStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "15px",
    boxShadow:
      "0 0 15px rgba(255, 255, 255, 0.1),0 0 20px rgba(173, 216, 230, 0.3), 0 0 20px rgba(173, 216, 230, 0.5)",
    backdropFilter: "blur(10px)",
    margin: "50px auto",
  };

  function updateNotes(newNote) {
    if (editIndex !== null) {
      setNotes((previousNotes) => {
        const updatedNotes = [...previousNotes];
        updatedNotes[editIndex] = newNote;
        return updatedNotes;
      });
      setEditIndex(null);
      setButtonText("Add");
    } else {
      setNotes((previousNotes) => {
        return [...previousNotes, newNote];
      });
    }
    setCurrentNote({ title: "", content: "" });
  }

  function deleteNote(id) {
    setNotes((previousNotes) => {
      return previousNotes.filter((noteitem, index) => {
        return index !== id;
      });
    });
  }

  function editNote(id) {
    const noteToEdit = notes[id];
    setCurrentNote(noteToEdit);
    setButtonText("Edit");
    setEditIndex(id);
  }

  return (
    <>
      <Navbar />
      <CreateNote
        updateNotes={updateNotes}
        btnTxt={buttonText}
        currentNote={currentNote}
      />
      <div
        className="noteContainer"
        style={notes.length > 0 ? customNoteContainerStyle : {}}
      >
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              title={note.title}
              content={note.content}
              id={index}
              onDelete={deleteNote}
              onEdit={editNote}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
