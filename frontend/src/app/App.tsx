import React from 'react';
import { Provider } from 'react-redux';
import LandingPage from '../pages/landing';
import LoggedPage from '../pages/logged';
import configureStore from '../store';

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    {/* <LandingPage/> */}
    <LoggedPage/>
  </Provider>
);

export default App;
