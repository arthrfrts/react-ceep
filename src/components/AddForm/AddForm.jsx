import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './style.css';

class AddForm extends Component {
  render() {
    return (
      <form className="add-note-form">
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota" />
        <button type="submit">Criar nota</button>
      </form>
    );
  }
}

export default AddForm;