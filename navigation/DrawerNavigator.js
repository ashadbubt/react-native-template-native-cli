// ./navigation/DrawerNavigator.js

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  HomeScreenStack,
  SettingScreenStack,
  ProfileScreenStack  
} from './StackNavigator'
import UpComming from "../screens/UpComming";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        activeTintColor: '#e91e63',
      }}
       >
          <Drawer.Screen
            name="Home"           
            options={{drawerLabel: 'Home'}}
            component= {HomeScreenStack} 
          />
          <Drawer.Screen
            name="Profile"
            options={{drawerLabel: 'Job Pool'}}
            component={ProfileScreenStack}
          />
          
          <Drawer.Screen
            name="Setting"
            options={{drawerLabel: 'Setting'}}
            component={SettingScreenStack}
          />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;