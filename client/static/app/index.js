import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { AppContainer } from 'react-hot-loader';
import IndexApp from './containers'
import StoreConfig from './StoreConfig'
import './style.css';

const store = StoreConfig();

render(
  <AppContainer>
    <Provider store={store}>
      <IndexApp />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);


if(module.hot){
  console.log('Accepting the updated printMe module!');
  module.hot.accept();
}
