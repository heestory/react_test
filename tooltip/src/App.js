import React, { Component } from 'react';
import './App.css';
import Tooltip from "./Tooltip";

class App extends Component {
  render() {
    return (
      <div>
          <Tooltip text="The book is ">React quickly</Tooltip>
          was published in 2017
      </div>
    );
  }
}

export default App;
