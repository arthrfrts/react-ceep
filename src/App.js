import React, { Component } from 'react';
import AddForm from './components/AddForm';
import NotesList from './components/NotesList';

class App extends Component {
  render() {
    return (
      <main>
        <AddForm />
        <NotesList />
      </main>
    );
  }
}

export default App;
