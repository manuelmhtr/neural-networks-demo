import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

class Grid extends Component {
  render() {
    const { input } = this.props;
    const rows = input.map((value, index) => {
      return (<Row input={value} key={`row${index}`} />);
    });

    return (
      <div className="grid">
        {rows}
      </div>
    );
  }
}

Grid.propTypes = {
  input: PropTypes.array.isRequired
};

export default Grid;
