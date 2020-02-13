

import { render } from 'react-dom';

const Tab = createMaterialBottomTabNavigator();

export default class MyTabs extends React.Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91e63"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="Feed"
          component={MainScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={QuestionScreen}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

