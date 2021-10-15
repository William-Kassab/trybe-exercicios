import React from "react";

class Name extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>Nome:
        <input name="name" type="text" maxLength="40" required value={value.toUpperCase()} onChange={handleChange}></input>
      </label>
    );
  }
}

export default Name;