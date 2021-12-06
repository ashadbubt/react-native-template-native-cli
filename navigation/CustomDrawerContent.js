
import React from 'react';
import {View,Text,StatusBar,TouchableOpacity,Image } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
  
  export default function CustomDrawerContent(props) {
    return (
      // <View>
      //   <Text>Hello</Text>
      // </View>
      <View style={{flex:1}}>
          <View style={[styles.viewStyle,styles.headerStyle]}>
              <TouchableOpacity style={styles.userImageView} >
                  <Image 
                      source={{ uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}
                      style={styles.imageStyle}
                  />
              </TouchableOpacity>   
              <View style={styles.headerTextStyle}>                 
                  <Text style={styles.ProfileNameStyle}>Ashad</Text>
              </View>
              {/* <View style={styles.iconViewStyle}>
                  <Icon 
                      name='mail-read'
                      type='octicon'
                      color='yellow'
                      size={16}
                  />
                  <Text style={styles.emailStyle}>{userEmail?userEmail.toLowerCase():""}</Text>
              </View> */}
          
          </View>
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View>
          <Text>Our Custom</Text>
        </View>
      </View>
    );
  }
  const styles = {
    headerStyle:{
      marginTop:0,
    },
    viewStyle:{
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        height:180,
        paddingTop:Platform.OS=='ios'?20:StatusBar.currentHeight,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative',
        flexDirection:'column'
    },
    textStyle:{
        fontSize:20,
        color:'yellow'
    },
    headerTextStyle:{
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 10
    },
    iconStyle:{
       
    },
    userImageView: {
        width: 84,
        height: 84,
        borderRadius: 50,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    ProfileNameStyle:{
        fontWeight: 'bold', 
        color: 'yellow', 
        fontSize: 15
    },
    iconViewStyle:{
        width:150,
        justifyContent: 'center', 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: 4
    },
    emailStyle:{
        color: 'yellow',
        fontSize: 13,
        marginLeft: 4,
        textAlign:'center'
    },
    imageStyle:{        
        width: 80, 
        height:80
    }
}