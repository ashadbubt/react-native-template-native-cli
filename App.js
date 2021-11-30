// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import 'react-native-gesture-handler';
import * as React from 'react';
import MainNavigator from './navigation/MainNavigator';
const App = () => {
  return (
    <MainNavigator></MainNavigator>
    // <NavigationContainer>
    //     <DrawerNavigator></DrawerNavigator>
    // </NavigationContainer>
  );
};

export default App;

// import messaging from '@react-native-firebase/messaging';
//   useEffect(() => {
//     // Get the device token
//     messaging()
//       .getToken()
//       .then(token => {
//         console.log(token);
//       });

//     // If using other push notification providers (ie Amazon SNS, etc)
//     // you may need to get the APNs token instead for iOS:
//     // if(Platform.OS == 'ios') { messaging().getAPNSToken().then(token => { return saveTokenToDatabase(token); }); }

//     // Listen to whether the token changes
//     return messaging().onTokenRefresh(token => {
//       console.log(token);
//       //saveTokenToDatabase(token);
//     });
//   }, []);
//   useEffect(() => {
//     const unsubscribe = messaging().onMessage(async remoteMessage => {
      
//       Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
//     });

//     return unsubscribe;
//   }, []);