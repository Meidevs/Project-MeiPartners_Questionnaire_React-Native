import React from 'react';
import {
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';

import QuestionContentScreen from './screens/QuestionContent.js';
import RecommendationScreen from './screens/Recommendation.js';
import Incomming1Screen from './screens/Incomming1.js';
import Incomming2Screen from './screens/Incomming2.js';
import LoadingScreen from './screens/Loading.js';
import QuestionScreen from './screens/Question.js';
import SideMenu from './components/SideMenu.js';


const DrawerStack = createDrawerNavigator(
  {
    Recommendation: {
      screen: RecommendationScreen,
    }
  },
  {
    contentComponent: ({ navigation }) => (
      <SideMenu navigation={navigation} />
    ),
  }
)

const DrawerNavigation = createStackNavigator(
  {
    DrawerStack: {
      screen: DrawerStack,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row' }}><Text>추천 상품</Text></View>,
          headerLeft: () => (
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}>
              <Image source={require('./public/images/option.png')} style={{ width: width * 0.12, aspectRatio: 1 }} />
            </TouchableOpacity>
          )
        }
      }
    }
  },
)

const WaitingStack = createStackNavigator(
  {
    Waiting: {
      screen: LoadingScreen,
    },
    DrawerStack: {
      screen: DrawerNavigation,
    },
  },
  {
    headerMode: 'none'
  }
)

const QuestionStack = createStackNavigator(
  {
    QuestionContent: {
      screen: QuestionContentScreen,

    },
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
    Incomming1: {
      screen: Incomming1Screen,
    },
    Incomming2: {
      screen: Incomming2Screen,
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
