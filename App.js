import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/Home.js';
import QuestionScreen from './screens/Question.js';
import LoginScreen from './screens/Login.js';
import RegisterScreen from './screens/Register.js';
import QuestionContentScreen from './screens/QuestionContent.js';

const defaultNavigationOptions = ({navigation}) => {
  return {
    headerTitle: (
      <View style={{alignContent: 'center'}}>
        <Text>
          <Text style={{color: '#000000'}}>
            {navigation.state.routeName}
          </Text>
        </Text>
      </View>
    ),
    headerTitleStyle: {
      flexGrow: 1,
      textAlign: 'center',
    },
    headerStyle: {
      paddingHorizontal: 8,
      backgroundColor: '#ffffff',
    },
    headerRight: <View>
      <Text>Hi</Text>
    </View>,
  };
};
const MainStack = createStackNavigator (
  {
    Home : {
      screen : HomeScreen,
    },
    Question : {
      screen : QuestionScreen,
    },
    QuestionContent : {
      screen : QuestionContentScreen,
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
