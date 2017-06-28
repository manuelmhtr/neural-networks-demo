import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

class Row extends Component {
  render() {
    const { input } = this.props;
    const squares = input.map((value, index) => {
      return (<Square input={value} key={`square${index}`} />);
    });

    return (
      <div className="row">
        {squares}
      </div>
    );
  }
}

Row.propTypes = {
  input: PropTypes.array.isRequired
};

export default Row;
