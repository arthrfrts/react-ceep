import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './style.css';

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.title = '';
    this.content = '';
    this.tag = 'Sem categoria';
  }

  _handleTitleChange(e) {
    this.title = e.target.value;
  }

  _handleContentChange(e) {
    this.content = e.target.value;
  }

  _handleTagChange(e) {
    e.stopPropagation();
    this.tag = e.target.value;
  }

  _createNote(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.createNote(this.title, this.content, this.tag);
  }s
  
  render() {
    return (
      <form className="add-note-form"
        onSubmit={this._createNote.bind(this)}>
        <select onChange={this._handleTagChange.bind(this)}>
          <option>Sem categoria</option>
          {this.props.tags.map((tag) => {
            return <option>{tag}</option>
          })}
        </select>
        <input
          type="text" 
          placeholder="Título"
          onChange={this._handleTitleChange.bind(this)} />
        <textarea 
          placeholder="Escreva sua nota"
          onChange={this._handleContentChange.bind(this)} />
        <button type="submit">Criar nota</button>
      </form>
    );
  }
}

export default AddForm;