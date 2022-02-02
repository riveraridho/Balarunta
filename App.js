/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SignIn, SignUp, NamePet, Home, Station, Craft} from './screens';
import {BottomNavbar} from './CustomNavigator';

import firebase from '@react-native-firebase/app';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const firebaseConfig = {
  apiKey: 'AIzaSyBFOcVQ-Js2lW7m8lMItqH4QdDGsmg4kqM',
  authDomain: 'balarunta-v2.firebaseapp.com',
  databaseURL: 'https://balarunta-v2.firebaseio.com',
  projectId: 'balarunta-v2',
  storageBucket: 'balarunta-v2.appspot.com',
  messagingSenderId: '1069689751901',
  appId: '1:1069689751901:web:6e0ebd82f47444d5d0c0b4',
  measurementId: 'G-KRJ1VPLJ7Q',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const App = () => {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="HomeBottomNavbar">
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NamePet"
            component={NamePet}
            options={{headerShown: false}}
          />
          <Stack.Screen name="HomeBottomNavbar" component={BottomNavbar} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

export default App;
