import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import { AppContainer } from 'react-hot-loader';
import AppReducer from './reducers'
import IndexApp from './containers'

let store = createStore(AppReducer);

render(
  //<AppContainer>
    <Provider store={store}>
      <IndexApp/>
    </Provider>,
  //</AppContainer>,
  document.getElementById('app')
);
if(module.hot){
  module.hot.accept();
}