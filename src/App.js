import React, { Component } from 'react';
import './App.css';
import HoverMask from './hover_mask/HoverMask';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HoverMask text='CSS HOVER MASK' />
        </header>
      </div>
    );
  }
}

export default App;
