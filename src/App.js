import React, { Component } from 'react';
import './App.css';
import CrudList from './components/crud-list.js';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <CrudList/>
      </div>
    );
  }
}

export default App;
