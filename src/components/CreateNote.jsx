import React from "react";

function CreateNote(props) {
  const [note, setNote] = React.useState(props.currentNote);
  React.useEffect(() => {
    setNote(props.currentNote);
  }, [props.currentNote]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.updateNotes(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="glass">
      <form className="create-note">
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button type="submit" onClick={submitNote}>
          {props.btnTxt}
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
