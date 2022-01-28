import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Station, ListStation, Craft} from './screens';
import {Image, NativeBaseProvider} from 'native-base';

const profile_inactive = require('./assets/icon_profile_inactive.png');
const station_inactive = require('./assets/icon_station_inactive.png');
const Tab = createBottomTabNavigator();

function BottomNavbar() {
  return (
    <NativeBaseProvider>
      <Tab.Navigator>
        <Tab.Screen
          name="Station"
          component={StackStationNavigator}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image source={station_inactive} size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image source={profile_inactive} size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        {/* <Tab.Screen name="Profile" component={Profile}/> */}
      </Tab.Navigator>
    </NativeBaseProvider>
  );
}

const StackStation = createStackNavigator();

function StackStationNavigator() {
  return (
    <StackStation.Navigator>
      <StackStation.Screen
        name="Station"
        component={Station}
        options={{headerShown: false}}
      />
      <StackStation.Screen
        name="ListStation"
        component={ListStation}
        options={{headerShown: false}}
      />
      <StackStation.Screen
        name="Craft"
        component={Craft}
        options={{headerShown: false}}
      />
    </StackStation.Navigator>
  );
}

export {BottomNavbar, StackStationNavigator};
