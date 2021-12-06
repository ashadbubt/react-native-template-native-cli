// ./navigation/DrawerNavigator.js

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  HomeScreenStack,
  SettingScreenStack,
  ProfileScreenStack  
} from './StackNavigator'
import UpComming from "../screens/UpComming";
import CustomDrawerContent from './CustomDrawerContent';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown:false,
      drawerStyle: {
        backgroundColor: 'black',
      },
      drawerActiveTintColor:"white",
      drawerInactiveTintColor:"white"
    }}
    
     drawerContent={props =><CustomDrawerContent {...props}/> } >
          <Drawer.Screen
            name="HomeD"           
            options={{drawerLabel: 'Home'}}
            component= {HomeScreenStack} 
          />
          <Drawer.Screen
            name="ProfileD"
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