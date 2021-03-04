import React, { Component } from 'react';
import AddForm from './components/AddForm';
import NotesList from './components/NotesList';
import './assets/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: []
    };
  }

  createNote(title, content) {
    const newNote = {title, content};
    const newNotesList = [...this.state.notes, newNote];
    const newState = {
      notes: newNotesList
    }

    this.setState(newState);
  }

  render() {
    return (
      <main>
        <AddForm createNote={this.createNote.bind(this)} />
        <NotesList notes={this.state.notes} />
      </main>
    );
  }
}

export default App;
