import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WidgetPage from './pages/widgetPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Website Name</h1>
        </header>
        <WidgetPage/>
      </div>
    );
  }
}

export default App;
