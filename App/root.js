import React from 'react';
import { render } from 'react-dom';
import Root from './Containers/index';
import reducer from './Reducers/main'
import configureStore from './Store/store.config';

const store = configureStore(reducer);

render(
  <Root store={store} />,
  document.getElementById('app')
)

