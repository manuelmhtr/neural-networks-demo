import React, { Component } from 'react';

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOk: null,
      answer: null
    };
  }

  onYes() {
    this.setState({ isOk: true });
  }

  onNo() {
    this.setState({ isOk: false });
  }

  getAnswerButtons() {
    const { isOk } = this.state || {};
    const yesBtnClassName = `btn ${isOk === true ? 'btn-success' : 'btn-default'}`;
    const noBtnClassName = `btn ${isOk === false ? 'btn-danger' : 'btn-default'}`;

    return (
      <div>
        <div className="col-sm-12">
          <h4>¿El resultado es correcto?</h4>
        </div>
        <div className="col-sm-12">
          <div className="btn-group btn-group-justified" role="group" aria-label="...">
            <div className="btn-group btn-group-lg" role="group">
              <button type="button" className={yesBtnClassName} onClick={this.onYes.bind(this)}>Sí</button>
            </div>
            <div className="btn-group btn-group-lg" role="group">
              <button type="button" className={noBtnClassName} onClick={this.onNo.bind(this)}>No</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getCorrectAnswerInput() {
    const { isOk } = this.state || {};

    if (isOk !== false) return null;

    return (
      <div>
        <div className="col-sm-12 margin-top-2x">
          <h4>Escribe la respuesta corrrecta</h4>
        </div>
        <div className="col-sm-12">
          <input className="form-control input-lg" placeholder="Usa un número o una letra" />
        </div>
      </div>
    );
  }

  getSubmitButton() {
    const { isOk } = this.state || {};
    const hasValue = isOk === true || isOk === false;

    if (!hasValue) return null;

    return (
      <div className="col-sm-12 margin-top-2x">
        <button
          type="button"
          className="btn btn-lg btn-primary btn-block"
          onClick={this.onYes.bind(this)}
        >
          Enviar
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="row result">
        <div className="col-sm-12">
          <h3>Resultado:</h3>
        </div>

        {this.getAnswerButtons()}

        {this.getCorrectAnswerInput()}

        {this.getSubmitButton()}
      </div>
    );
  }
}
