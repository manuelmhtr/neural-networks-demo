import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Square extends Component {
  render() {
    const { input } = this.props;
    const className = `square ${input ? 'active' : ''}`;

    return (
      <div className={className} />
    );
  }
}

Square.propTypes = {
  input: PropTypes.number.isRequired
};

export default Square;
