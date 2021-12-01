import 'react-native-gesture-handler';

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import ExploreScreen from '../screens/Explore';

const Tab = createBottomTabNavigator();
const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,       
      }}
      
      initialRouteName="HomeScreen"
      tabBarOptions={{       
        activeTintColor: 'white',
        inactiveTintColor: 'yellow',
        activeBackgroundColor:'black',
        inactiveBackgroundColor:'black',
        style: {
          backgroundColor: 'black',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 16,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home Screen',
          /*tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            />
          ),*/
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore Screen',
          /*tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="settings"
              color={color}
              size={size}
            />
          ),*/
        }}
      />
    </Tab.Navigator>
  );
};


export {BottomTabStack};