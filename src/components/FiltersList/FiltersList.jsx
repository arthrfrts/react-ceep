import React, { Component } from 'react';
import './style.css';

class FiltersList extends Component {

  _handleInputEvent(e) {
    const filterName = e.target.value;
    
    if (e.keyCode === 13) {
      this.props.createFilter(filterName);
    }
  }

  render() {
    return (
      <nav>
        <ul>
          {this.props.filters.map((filter, index) => {
            return <li key={index}>{filter}</li>
          })}
        </ul>

        <input type="text" placeholder="Adicionar categoria" onKeyUp={this._handleInputEvent.bind(this)} />
      </nav>
    );
  }
}

export default FiltersList