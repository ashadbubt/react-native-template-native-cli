// ./navigation/DrawerNavigator.js

import React from "react";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  HomeScreenStack,
  SettingScreenStack
} from './StackNavigator'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false
      }}
        drawerContentOptions={{
          activeTintColor: '#e91e63',
        }}>
          <Drawer.Screen
            name="Home"
            options={{drawerLabel: 'Home'}}
            component={HomeScreenStack}
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