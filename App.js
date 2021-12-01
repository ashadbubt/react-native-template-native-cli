// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import 'react-native-gesture-handler';
import React from 'react';
import { useEffect } from 'react';
import {AppRegistry} from 'react-native';
import MainNavigator from './navigation/MainNavigator';
import messaging from '@react-native-firebase/messaging';

// messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//   console.log('Message handled in the background!', remoteMessage);
// });


export default App = () => {

  useEffect(() => {
      // Get the device token
      messaging()
        .getToken()
        .then(token => {
          console.log(token);
        });  
      // If using other push notification providers (ie Amazon SNS, etc)
      // you may need to get the APNs token instead for iOS:
      // if(Platform.OS == 'ios') { messaging().getAPNSToken().then(token => { return saveTokenToDatabase(token); }); }
  
      // Listen to whether the token changes
      return messaging().onTokenRefresh(token => {
        console.log(token);
        //saveTokenToDatabase(token);
      });
    }, []);

    useEffect(() => {

      messaging().subscribeToTopic("READYFORRIDE").then(()=>{
          console.log("Subscribed");
      })
      .catch(err=>{
          console.log(err);
      })

      const unsubscribe = messaging().onMessage(async remoteMessage => {        
        // Alert.alert('Hello');
        console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      });

    
    }, []);


  return (
    <MainNavigator></MainNavigator>    
  );
};

// function HeadlessCheck({ isHeadless }) {
//   if (isHeadless) {
//     // App has been launched in the background by iOS, ignore
//     return null;
//   }
//   return <App />;
// }
// AppRegistry.registerComponent('app', () => HeadlessCheck);

// import messaging from '@react-native-firebase/messaging';
//   