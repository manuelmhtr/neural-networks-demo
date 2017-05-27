import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './app.jsx';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  );
};

const startApp = () => {
  if (!module.hot) return render(App);

  module.hot.accept('./app.jsx', () => {
    render(App);
  });
};

startApp();
