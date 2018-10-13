import React, { Component } from 'react';
import './css/App.css';

import Header from './components/header'

import { getNews } from './utils/api.js'

class App extends Component {

  componentDidMount() {
    getNews()
    .then(console.log)
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
