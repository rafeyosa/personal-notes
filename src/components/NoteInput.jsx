import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      maxTitleLength: 50,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const maxLength = this.state.maxTitleLength;
    const inputValue = event.target.value;

    if (inputValue.length <= maxLength) {
      this.setState(() => {
        return {
          title: inputValue,
        };
      });
    }
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);

    this.setState({
      title: "",
      body: "",
    });
  }

  render() {
    const remainingCharacters =
      this.state.maxTitleLength - this.state.title.length;
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitHandler}>
          <p className="note-input__title__char-limit">
            Sisa karakter: {remainingCharacters}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
            required
          />
          <textarea
            className="note-input__body"
            rows={10}
            placeholder="Tuliskan catatanmu di sini ..."
            value={this.state.body}
            onChange={this.onBodyChangeHandler}
            required
          />
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
