import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/Home.js';
import QuestionScreen from './screens/Question.js';
import LoginScreen from './screens/Login.js';
import RegisterScreen from './screens/Register.js';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>),
      }
    },
    Question: {
      screen: QuestionScreen,
      navigationOptions: {
        tabBarLabel: 'Question',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-profile'} />
          </View>),
        activeColor: '#f60c0d',
        inactiveColor: '#f65a22',
        barStyle: { backgroundColor: '#f69b31' },
      }
    },
  },
  {
    initialRouteName: "Home",
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle: { backgroundColor: '#3BAD87' },
  },

);

const RootStack = createStackNavigator(
  {
  Login: {
    screen: LoginScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
  Main: {
    screen: TabNavigator
  },
},
  {
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(RootStack);

const App = () => {
  return <AppContainer />;
};

export default App;
