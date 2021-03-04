import React, { Component } from 'react';
import AddForm from './components/AddForm';
import NotesList from './components/NotesList';
import './assets/App.css';

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
