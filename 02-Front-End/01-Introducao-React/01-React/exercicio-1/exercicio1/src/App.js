import logo from './logo.svg';
import './App.css';
import React from 'react';

const arr = ['compromisso1', 'compromisso2', 'compromisso3', 'compromisso4']

const Task = (value) => {
  return value.map((values) => <li>{values}</li>);
}

class App extends React.Component {
  render() {
    return (
      <ol>
        {Task(arr)}
      </ol>
    );
  }
}

export default App;

/*1 - Crie uma lista de tarefas simples*/
