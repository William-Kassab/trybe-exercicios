import logo from './logo.svg';
import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return (
      <ol>
        {Task('hello')}
      </ol>
    );
  }
}

export default App;
