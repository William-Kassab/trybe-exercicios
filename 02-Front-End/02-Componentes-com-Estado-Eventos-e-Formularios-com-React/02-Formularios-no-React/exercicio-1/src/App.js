import './App.css';
import React from 'react'
import Select from './Select';
import InputName from './InputName';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      select: 1,
      name: '',
      checkBox: false,
      hobbies: '',
    };
  }  
    
  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form className="form">

          <Select value={this.state.select} handleChange={this.handleChange} />

          <InputName value={this.state.name} handleChange={this.handleChange} />

          <label>Checkbox:
            <input type="checkbox" name="checkBox" value={this.state.checkBox} onChange={this.handleChange}></input>
          </label>

          <label>Hobbies:
            <textarea type="text" name="hobbies" value={this.state.hobbies} onChange={this.handleChange}>
            </textarea>
          </label>
        </form>
      </div>
    );
  }
}

export default App;
