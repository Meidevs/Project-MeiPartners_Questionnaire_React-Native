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
import RecommendationScreen from './screens/recommendation.js';

const QuestionStack = createStackNavigator(
  {
    Question: {
      screen: QuestionContentScreen,
      navigationOptions: {
        title: '설문지',
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitleStyle: {
          fontWeight: '400',
          textAlign: 'center',
          flexGrow: 1,
          alignSelf: 'center',
        }
      }
    },
    Recommendation: {
      screen: RecommendationScreen,
      navigationOptions: {
        title: '상품 추천',
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitleStyle: {
          fontWeight: '400',
          textAlign: 'center',
          flexGrow: 1,
          alignSelf: 'center',
        }
      }
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
    Login: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
    Main: {
      screen: QuestionStack
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
