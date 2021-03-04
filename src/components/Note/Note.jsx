import React, { Component } from 'react';
import './style.css';

 class Note extends Component {
  render() {
    return (
      <section className="card">
        <header className="card_header">
          <h3 className="card_title">{this.props.title}</h3>
        </header>
        <p className="card_content">{this.props.content}</p>
      </section>
    );
  }
}

export default Note;