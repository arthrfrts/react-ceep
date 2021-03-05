import React, { Component } from 'react';
import Note from '../Note';
import "./style.css";

class NotesList extends Component {
  render() {
    return (
      <ul className="notes-list">
        {this.props.notes.map((note, index) => {
          return (
            <li className="note" key={index}>
              <Note
                title={note.title}
                content={note.content}
                tag={note.tag}
                noteIndex={index}
                removeNote={this.props.removeNote} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NotesList;