import { throws } from 'assert';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { repeater : '' }
  handleRepeater = (event) => {
    this.setState({repeater : event.target.value})
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.handleRepeater} />
        <p className="repeater">{this.state.repeater}</p>
      </div>
    );
  }
}

export default App;
