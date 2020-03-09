import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import QuestionContentScreen from './screens/QuestionContent.js';
import RecommendationScreen from './screens/Recommendation.js';
import IncommingScreen from './screens/Incomming.js';
import StartScreen from './screens/Start.js';
import LoadingScreen from './screens/Loading.js';
import QuestionScreen from './screens/Question.js';

const RecommendationStack = createStackNavigator(
  {
    Recommendation: {
      screen: RecommendationScreen,
      // navigationOptions: {
      //   headerTitleAlign: 'center',
      //   title: '추천 제품',
      //   headerStyle: {
      //     backgroundColor: '#FCE2E5',
      //   },
      //   headerTitleStyle: {
      //     fontWeight: '400',
      //   }
      // }
    }
  },
  {
    headerMode: 'none'
  }
)

const WaitingStack = createStackNavigator(
  {
    Waiting: {
      screen: LoadingScreen,
    },
    Recommendations: {
      screen: RecommendationStack,
    },
  },
  {
    headerMode: 'none'
  }
)

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
          fontWeight: '400',
          textAlign: 'center',
          flexGrow: 1,
          alignSelf: 'center',
        }
      }
    },
    QuestionContent: {
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
    Loading: {
      screen: WaitingStack,
      navigationOptions: {
        headerShown: false,
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
