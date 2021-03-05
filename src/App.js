import React, { Component } from 'react';
import AddForm from './components/AddForm';
import NotesList from './components/NotesList';
import './assets/App.css';
import TagsList from './components/TagsList';
import Tag from './data/Tag';
import Notes from './data/Notes';

class App extends Component {
  constructor() {
    super();

    this.tags = new Tag();
    this.notes = new Notes();
  }

  render() {
    return (
      <main>
        <AddForm
          tags={this.tags.items}
          createNote={this.notes.addNote} />
        <TagsList
          createTag={this.tags.add}
          tags={this.tags.items} />
        <NotesList
          removeNote={this.notes.removeNote}
          notes={this.notes.items} />
      </main>
    );
  }
}

export default App;
