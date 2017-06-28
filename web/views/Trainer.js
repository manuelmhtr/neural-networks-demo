import React, { Component } from 'react';
import Input from '../modules/Input';
import Result from '../modules/Result';

export default class Trainer extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h4>Introducción a las redes neuronales</h4>
        </div>
        <div className="col-xs-12">
          <div className="row">
            <div className="col-sm-6">
              <Input />
            </div>
            <div className="col-sm-6 col-md-4">
              <Result />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
