import React, { Component } from 'react';
import Note from '../Note';
import "./style.css";

class NotesList extends Component {
  render() {
    return (
      <ul className="notes-list">
        {Array.of("Trabalho", "Trabalho", ' Estudos').map((category, index) => {
          return (
            <li className="note" key={index}>
              <Note />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NotesList;