// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator'

const MainNavigator = () => {
  return (
    <NavigationContainer>
        <DrawerNavigator></DrawerNavigator>
    </NavigationContainer>
  );
};

export default  MainNavigator;

// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/



