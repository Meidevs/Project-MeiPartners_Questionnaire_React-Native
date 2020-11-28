import React from 'react';
import {
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('window');

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';

import QuestionContentScreen from './screens/QuestionContent.js';
import Incomming1Screen from './screens/Incomming1.js';
import Incomming2Screen from './screens/Incomming2.js';
import JunctionScreen from './screens/Junction.js';
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
import SideMenu from './components/SideMenu.js';

// DrawerStack has defaultNavigationOptions header style and DrawerStack get navigation information's from navigation parameter through DrawerNavigation;
// Each of cate0 - 6 Screens has specific view. Users move to different screen based on parameter from QuestionContent Result;
// contentComponent display SideMenu Component which render Drawer Content;
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
  },
  {
    contentComponent: navigation => (<SideMenu {...navigation} />),
  },
)

// DrawerNavigation has Graphs & DrawerStack;
// DrawerNavigation's Graphs Screen set own header style. But, DrawerStack has no information about header;
// So, DrawerStack has defaultNavigationOptions header style;
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
      }
    }
  }
)

// WaitingStack has Waiting & DrawerStack;
// Waiting Screen is view component which shows gif image during 3s. And Waiting Screen will be changed into DrawerNavigation's specific Screen;
// Drawer uses drawerNavigator which is supported bylibrary of React-Native ;
// headerMode : "None" means there is no Header;
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

// QuestionStack has QuestionContent, Question & Loading;
// QuestionContent Screen and Question Screen is view component which shows introduction of application;
// QuestionContent Screen shows 20 questions to users;
// Question Screen show type of cosmetics  to users based on what they answered;
// Loading is Waiting Stack which has Loading Screen & Drawer;
// navigationOptions parameter support specification of header in view;
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

// RootStack has Incomming1, Incomming2 & Main;
// Incomming1 - 2 Screen is view component which shows introduction of application;
// Main is QuestionStack which has other stacks;
// headerMode : "None" means there is no Header;
const RootStack = createStackNavigator(
  {
    Incomming1: {
      screen: Incomming1Screen,
    },
    Incomming2: {
      screen: Incomming2Screen,
    },
    Junction : {
      screen : JunctionScreen,
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
