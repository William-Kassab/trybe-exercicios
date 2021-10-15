import React from "react";

class InputName extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (value.length === 0) error = 'Nada digitado'

    return (
      <label>Name:
        <input type="text" 
        name="name" 
        value={value} 
        onChange={handleChange}>
        </input>
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default InputName;