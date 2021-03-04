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
              <Note title={note.title} content={note.content} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NotesList;