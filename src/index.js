// Core react library for components (will not render to dom)
// need react-dom lib to render things to the dom
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
// Youtube api key
const API_KEY = 'AIzaSyDtWMSttWfPJL8GoEjwBIsIu1dQeNLiR24';



// Create a new component.  This should produce some html.
// This is a component class (not an instance)
// es6 arrow function
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
// onVideoSelect function will change the selectedVideo state
// we pass this call back to VideoList
// VideoList will then pass to VideoListItem
// VideoListItem will then call this function when an list item
// is clicked.
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}
        />
      </div>
    );
  }
}
// Take this components' generated HTML and put it in the DOM.
// Pass an instance (not the class itself) of the component to render it.
// Wrap it with <App /> or <App > <App /> to create an instance.
// ReactDOM.render takes two args (component and where in the html to put the comp)
ReactDOM.render(<App />, document.querySelector('.container'));
