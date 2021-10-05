import React from 'react';
import PropTypes from 'prop-types';

class PokeInfos extends React.Component {
  render() {
    const {poke: {name, type, averageWeight, image}} = this.props;
    return (
      <div>
        <p className="pokemon-names">{name}</p>
        <p className="pokemon-types">Type: {type}</p>
        <p className="pokemon-weight">Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        <img src={image} className="pokemon-img"></img>
      </div>
    );
  }
}

PokeInfos.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string
}

export default PokeInfos;