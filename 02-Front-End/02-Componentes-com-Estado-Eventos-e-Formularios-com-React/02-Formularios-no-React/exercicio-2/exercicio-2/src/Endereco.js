import React from "react";

class Endereco extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>Endereço:
        <input name="endereco" type="text" maxLength="200" required value={value} onChange={handleChange}></input>
      </label>
    );
  }
}

export default Endereco;