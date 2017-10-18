import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({target}) {
    console.log(target.value);
    this.setState({ term: target.value })
  }

  render() {
    return (
      <form className='input-group'>
        <input
          placeholder='Search for a city to add it to the Dashboard!'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Search</button>
        </span>
      </form>
    );
  }
}
