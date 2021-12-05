import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import ExploreScreen from '../screens/Explore';
import Chat from '../screens/Chat';
import JobPool from '../screens/JobPool';
import UpComming from '../screens/UpComming';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();
const BottomTabStack = ({ route, navigation }) => {
  // console.log(props);
  // console.log(route.params.initialRoute);
  // initialRoute.initialRoute
  return (
    <Tab.Navigator
      initialRouteName = {route.params.initialRoute}
      screenOptions={{
        headerShown:false,  
        tabBarActiveBackgroundColor:'black',
        tabBarInactiveBackgroundColor:'black',  
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'yellow',
        tabBarLabelStyle:{
          textAlign: 'center',
          fontSize: 16,
        }
      }}
      firstRoute = 'Upcomming'
      >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
             <Icon name="ios-person" size={30} color="#4F8EF7" />
          ),
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
        name="JobPool"
        component={JobPool}
        options={{
          tabBarLabel: 'JobPool',
          /*tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="settings"
              color={color}
              size={size}
            />
          ),*/
        }}
      />
      <Tab.Screen
        name="Upcomming"
        component={UpComming}
        options={{
          tabBarLabel: 'Upcomming',
          /*tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="settings"
              color={color}
              size={size}
            />
          ),*/
        }}
      />
       <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
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