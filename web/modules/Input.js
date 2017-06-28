import React, { Component } from 'react';
import Grid from '../components/Grid';

const gridValue = [
  [0, 0, 1, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0]
];

export default class Input extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <h3>Entrada:</h3>
        </div>
        <div className="col-sm-12">
          <Grid input={gridValue} />
        </div>
      </div>
    );
  }
}
