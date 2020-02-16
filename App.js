import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';

import ProfileScreen from './screens/Home.js';
import QuestionScreen from './screens/Question.js';
import ReadyScreen from './screens/Ready.js';
import LoginScreen from './screens/Login.js';
import RegisterScreen from './screens/Register.js';
import QuestionContentScreen from './screens/QuestionContent.js';

const QuestionStack = createStackNavigator(
  {
    Question: {
      screen: QuestionScreen,
      navigationOptions: {
        title: '설문지',
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          flexGrow: 1,
          alignSelf: 'center',
        }
      }
    },
    QuestionContent: {
      screen: QuestionContentScreen,
    }
  },
)

const MainStack = createMaterialBottomTabNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
    Questionnaire: {
      screen: QuestionStack,
    },
  },
  {
    initialRouteName: 'Profile',
    activeColor: '#E43D7A',
    inactiveColor: '#E43D7A',
    barStyle: { backgroundColor: '#ffffff' },
  }
)

const RootStack = createStackNavigator(
  {
    Ready: {
      screen: ReadyScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Main: {
      screen: MainStack
    },
  },
  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);

const App = () => {
  return <AppContainer />;
};

export default App;
