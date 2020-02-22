import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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
        headerTitleAlign: 'center',
        title: '추천 제품',
        headerStyle: {
          backgroundColor: '#FCE2E5',
        },
        headerTitleStyle: {
          fontWeight: '400',
          alignSelf: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          flex:1,
        }
      }
    }
  },
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
