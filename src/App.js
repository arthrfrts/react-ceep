import React, { Component } from 'react';
import AddForm from './components/AddForm';
import NotesList from './components/NotesList';
import './assets/App.css';
import FiltersList from './components/FiltersList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: [],
      filters: [],
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

  removeNote(index) {
    let notesList = this.state.notes;

    notesList.splice(index, 1);

    this.setState({notes: notesList});
  }

  createFilter(filterName) {
    const newFiltersList = [...this.state.filters, filterName];

    const newState = {...this.state, filters: newFiltersList};

    this.setState(newState);
  }

  render() {
    return (
      <main>
        <AddForm filters={this.state.filters} createNote={this.createNote.bind(this)} />
        <FiltersList createFilter={this.createFilter.bind(this)} filters={this.state.filters} />
        <NotesList
          removeNote={this.removeNote.bind(this)}
          notes={this.state.notes} />
      </main>
    );
  }
}

export default App;
