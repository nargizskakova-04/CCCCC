import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/AntDesign';
import 'react-native-gesture-handler';
import {StyleSheet, SafeAreaView, View, Alert, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ScansScreen from './src/screens/ScanScreen';
import StoryScreen from './src/screens/storyscreen';
import ProfileScreen from './src/screens/ProfileScreen';
Icon.loadFont();

const LogoItem = () => {
  return(
    <View style={styles.logoContainer}>
      <Text style={styles.logoTitle}>Home</Text>
      <Icon name="appstore-o" size={25} color="black"/>
    </View>
  )
}


const App = () => {
  
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const HomeStack = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
        <Stack.Screen name="Scan" component={ScansScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Story" component={StoryScreen}/>
      </Stack.Navigator>
    )
   
  }
  
  

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#061a2b',
          inactiveTintColor: '#4a6d8c'
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconName;
            if(route.name === 'Scan'){
              iconName= 'scan1'
            }else if(route.name === 'Story'){
              iconName ='clockcircleo'
            }else if(route.name === 'Home'){
              iconName = 'appstore-o'  
            }
            else if(route.name === 'Profile'){
                iconName = 'smileo'  
              }
            return(
              <Icon name={iconName} color={color} size={size} />
            )
          }
        })}
      >
        <Tab.Screen name={'Scan'} component={ScansScreen}/>
        <Tab.Screen name={'Story'} component={StoryScreen}/>
        <Tab.Screen name={'Home'} component={HomeStack}/>
        <Tab.Screen name={'Profile'} component={ProfileScreen}/>


      </Tab.Navigator>
    </NavigationContainer>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },
  logoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default App;



