import React from "react";

function NoteItemAction({ id, isArchived, onDelete, onArchive }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Hapus
      </button>
      <button className="note-item__archive-button" onClick={() => onArchive(id)}>
        {isArchived ? "Pindahkan" : "Arsipkan"}
      </button>
    </div>
  );
}

export default NoteItemAction;
