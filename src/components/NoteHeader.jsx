import React from "react";

function NoteHeader({ searchText, onSearchChange }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          value={searchText}
          onChange={onSearchChange}
          type="text"
          placeholder="Cari catatan ..."
        />
      </div>
    </div>
  );
}

export default NoteHeader;
