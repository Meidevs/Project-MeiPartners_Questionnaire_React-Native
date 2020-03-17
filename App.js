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
import Incomming1Screen from './screens/Incomming1.js';
import Incomming2Screen from './screens/Incomming2.js';
import LoadingScreen from './screens/Loading.js';
import QuestionScreen from './screens/Question.js';
import GraphsScreen from './screens/Graphs.js';
import cate0Screen from './screens/cate0.js';
import cate1Screen from './screens/cate1.js';
import cate2Screen from './screens/cate2.js';
import cate3Screen from './screens/cate3.js';
import cate4Screen from './screens/cate4.js';
import cate5Screen from './screens/cate5.js';
import cate6Screen from './screens/cate6.js';
import cate7Screen from './screens/cate7.js';
import SideMenu from './components/SideMenu.js';

const DrawerStack = createDrawerNavigator(
  {
    cate0: {
      screen: cate0Screen,
    },
    cate1: {
      screen: cate1Screen,
    },
    cate2: {
      screen: cate2Screen,
    },
    cate3: {
      screen: cate3Screen,
    },
    cate4: {
      screen: cate4Screen,
    },
    cate5: {
      screen: cate5Screen,
    },
    cate6: {
      screen: cate6Screen,
    },
    cate7: {
      screen: cate7Screen,
    },
  },
  {
    contentComponent: navigation => (<SideMenu {...navigation} />),
  },
)

const DrawerNavigation = createStackNavigator(
  {
    Graphs: {
      screen: GraphsScreen,
      navigationOptions: () => {
        return {
          headerTitle: () => <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row' }}><Text style={{ color: '#FF7BAC', fontSize: 20, fontWeight: '900' }}>SURVEY</Text></View>,
          headerLeft : () => null,
        }
      }
    },
    DrawerStack: {
      screen: DrawerStack
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <View style={{flex: 1, flexDirection: 'row' }}><Image source={require('./public/images/text2.png')} style={{flex : 1, width : width * 0.4, aspectRatio : 6.76}}/></View>,
        headerLeft: () => (
          <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}>
            <Image source={require('./public/images/option.png')} style={{ width: width * 0.12, aspectRatio: 1 }} />
          </TouchableOpacity>
        ),
        headerTitleStyle : {

        }
      }
    }
  }
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
