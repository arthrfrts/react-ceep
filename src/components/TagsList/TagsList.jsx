import React, { Component } from 'react';
import './style.css';

class TagsList extends Component {

  _handleInputEvent(e) {
    const tagName = e.target.value;
    
    if (e.keyCode === 13) {
      this.props.createTag(tagName);
    }
  }

  render() {
    return (
      <nav>
        <ul>
          {this.props.tags.map((tag, index) => {
            return <li key={index}>{tag}</li>
          })}
        </ul>

        <input type="text" placeholder="Adicionar categoria" onKeyUp={this._handleInputEvent.bind(this)} />
      </nav>
    );
  }
}

export default TagsList