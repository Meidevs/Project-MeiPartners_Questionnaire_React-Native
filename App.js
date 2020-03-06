import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import QuestionContentScreen from './screens/QuestionContent.js';
import RecommendationScreen from './screens/recommendation.js';
import IncommingScreen from './screens/Incomming.js';
import StartScreen from './screens/Start.js';

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
        }
      }
    }
  },
)

const RootStack = createStackNavigator(
  {
    Incomming: {
      screen: IncommingScreen,
    },
    Start: {
      screen: StartScreen,
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
