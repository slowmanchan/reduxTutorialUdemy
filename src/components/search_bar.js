import React, { Component } from 'react'
// class based component
// start with functional comp. first and then refactor
// to class based comp. (if you need more functionanilty
// )
class SearchBar extends Component {
  // all js objects have a constructor function
  // is called first when new instance is initialized
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  // render is called evertime setState is called
  // rerendering things (like <input /> s)
  render() {

    return (
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={e => this.setState({ ...this.state, term: e.target.value })}
        />

      </div>
    );
  }


  // handle user input with an event handler (eg onChange)
  // html elements emit an event object when user does something
  // wrap jsx with {this.onInputChange}
}

export default SearchBar;
