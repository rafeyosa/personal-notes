import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  if (notes.length > 0) {
    return (
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))}
      </div>
    );
  }

  return <p className="notes-list__empty-message">Tidak ada catatan</p>;
}

export default NoteList;
