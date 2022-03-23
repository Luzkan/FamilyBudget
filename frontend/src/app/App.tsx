import React from 'react';
import { Provider } from 'react-redux';
import LandingPage from '../pages/landing';
import configureStore from '../store';

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <LandingPage/>
  </Provider>
);

export default App;
