import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from './store'
import {Provider} from 'react-redux'
import Routing from './routes';

ReactDOM.render(
  <Provider store={store}>
    <Routing/>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
