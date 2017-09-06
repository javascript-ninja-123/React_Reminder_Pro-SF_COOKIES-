import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import FORM from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className='row text-center'>
            <div className='col-sm-12'>
              <FORM />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
