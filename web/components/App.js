import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="container-fluid">
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.array.isRequired
};

export default App;
