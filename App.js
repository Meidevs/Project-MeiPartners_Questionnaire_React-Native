import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import LoginScreen from './screens/Login.js';
import MainScreen from './screens/Main.js';
import RegisterScreen from './screens/Register';

const RootStack = createStackNavigator(
  {
    Login : {
      screen : LoginScreen,
    },
    Main : MainScreen,
    Resgister : RegisterScreen,
  },
  {
    headerMode : 'none',
  },
);

const AppContainer = createAppContainer(RootStack);

const App = () => {
  return <AppContainer />;
};

export default App;
