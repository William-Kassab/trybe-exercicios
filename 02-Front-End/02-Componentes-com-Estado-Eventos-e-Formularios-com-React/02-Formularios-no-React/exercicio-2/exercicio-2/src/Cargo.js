import React from "react";

class Cargo extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>Cargo:
        <textarea name="cargo" type="text" maxLength="40" required value={value} onChange={handleChange}></textarea>
      </label>
    );
  }
}
 
export default Cargo;