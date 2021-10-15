import React from "react";

class Select extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>Select:
        <select name="select" value={value} onChange={handleChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>  
    );
  }
}

export default Select;