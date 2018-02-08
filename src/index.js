// Core react library for components (will not render to dom)
// need react-dom lib to render things to the dom
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
// Youtube api key
const API_KEY = 'AIzaSyDtWMSttWfPJL8GoEjwBIsIu1dQeNLiR24';



// Create a new component.  This should produce some html.
// This is a component class (not an instance)
// es6 arrow function
class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
// Take this components' generated HTML and put it in the DOM.
// Pass an instance (not the class itself) of the component to render it.
// Wrap it with <App /> or <App > <App /> to create an instance.
// ReactDOM.render takes two args (component and where in the html to put the comp)
ReactDOM.render(<App />, document.querySelector('.container'));
