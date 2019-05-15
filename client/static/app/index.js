import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { AppContainer } from 'react-hot-loader';
import IndexApp from './containers'
import StoreConfig from './StoreConfig'
import './style.css';

let div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);
const mountNode = document.getElementById('app');

const store = StoreConfig();

render(
  <AppContainer>
    <Provider store={store}>
      <IndexApp />
    </Provider>
  </AppContainer>,
  mountNode
);


if(module.hot){
  console.log('Accepting the updated printMe module!');
  module.hot.accept();
}
