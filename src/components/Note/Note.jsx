import React, { Component } from 'react';
import './style.css';

 class Note extends Component {
  render() {
    return (
      <section className="card">
        <header className="card_header">
          <h3 className="card_title">Título</h3>
        </header>
        <p className="card_content">Escreva sua nota</p>
      </section>
    );
  }
}

export default Note;