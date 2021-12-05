import React from 'react';

import {
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationDrawerStructure} from './DrawerStructure'


import SettingScreen from '../screens/Setting';

import {BottomTabStack} from './TabNavigator'
const Stack = createStackNavigator();
const StackProfile = createStackNavigator();
// const NavigationDrawerStructure = (props) => {
//   //Structure for the navigatin Drawer
//   const toggleDrawer = () => {
//     //Props to open/close the drawer
//     props.navigationProps.toggleDrawer();
//   };

//   return (
//     <View style={{flexDirection: 'row'}}>
//       <TouchableOpacity onPress={() => toggleDrawer()}>
//         {/*Donute Button Image */}
//         <Image
//           source={{
//             uri:
//               'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
//           }}
//           style={{width: 25, height: 25, marginLeft: 5}}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

const getHeaderTitle = (route) => {
 
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';  
  // console.log(routeName);
  return routeName;
};

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="Home"
        component = { BottomTabStack  }  
        initialParams={{ initialRoute: "Home" }}       
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          headerTitleAlign: 'center',
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: 'black', //Set Header color
          },
          headerTintColor: 'yellow', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};


const ProfileScreenStack = ({navigation}) => {
  return (
    <StackProfile.Navigator initialRouteName="Profile">
      <StackProfile.Screen
        name="Profile"
        component={BottomTabStack}
        initialParams={{ initialRoute: "JobPool" }}    
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          headerTitleAlign: 'center',
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: 'black', //Set Header color
          },
          headerTintColor: 'yellow', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        })}
      />
      <StackProfile.Screen
        name="SettingScreen2"
        component={SettingScreen}
        options={{
          title: 'Setting', //Set Header Title
        }}
      />
    </StackProfile.Navigator>
  );
};

const SettingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        headerShown: false
      }}
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          title: 'Setting', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

export {HomeScreenStack,SettingScreenStack,ProfileScreenStack}