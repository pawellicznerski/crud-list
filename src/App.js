import React, { Component } from 'react';
import './App.css';
import CrudList from './components/crud-list.js';
import {Provider} from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Provider store={store} >
            <CrudList/>
        </Provider>
      </div>
    );
  }
}

export default App;
