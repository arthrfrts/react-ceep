import React, { Component } from 'react';
import AddForm from './components/AddForm';
import NotesList from './components/NotesList';
import './assets/App.css';
import TagsList from './components/TagsList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: [],
      tags: [],
    };
  }

  createNote(title, content, tag) {
    const newNote = {title, content, tag};
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

  createTag(tagName) {
    const newTagsList = [...this.state.tags, tagName];
    const newState = {...this.state, tags: newTagsList};

    this.setState(newState);
  }

  render() {
    return (
      <main>
        <AddForm
          tags={this.state.tags}
          createNote={this.createNote.bind(this)} />
        <TagsList
          createTag={this.createTag.bind(this)}
          tags={this.state.tags} />
        <NotesList
          removeNote={this.removeNote.bind(this)}
          notes={this.state.notes} />
      </main>
    );
  }
}

export default App;
