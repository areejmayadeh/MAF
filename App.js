import React from 'react';
import { Provider } from "react-redux"

import { store } from './src/redux/store';
import { MainStackNavigator } from './src/navigation/navigation';

const App = () =>  {
  return (
    <Provider store={store}>
      <MainStackNavigator/>
    </Provider>   
  );
};

export default App;
