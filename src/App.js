import React, { Component } from 'react';
import './css/App.css';

import Header from './components/header'
import NewsContainer from './components/newsContainer'


class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        <NewsContainer />
      </div>
    );
  }
}

export default App;
