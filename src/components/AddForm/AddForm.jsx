import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './style.css';

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.title = '';
    this.content = '';
  }

  _handleTitleChange(e) {
    this.title = e.target.value;
  }

  _handleTextChange(e) {
    this.content = e.target.value;
  }

  _createNote(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.createNote(this.title, this.content);
  }s
  
  render() {
    return (
      <form className="add-note-form"
        onSubmit={this._createNote.bind(this)}>
        <input
          type="text" 
          placeholder="Título"
          onChange={this._handleTitleChange.bind(this)} />
        <textarea 
          placeholder="Escreva sua nota"
          onChange={this._handleTextChange.bind(this)} />
        <button type="submit">Criar nota</button>
      </form>
    );
  }
}

export default AddForm;