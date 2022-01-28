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
import {Image, NativeBaseProvider} from 'native-base';
import {BottomNavbar} from './CustomNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

// const Tab = createBottomTabNavigator();
// const profile_inactive = require('./assets/icon_profile_inactive.png');
// const station_inactive = require('./assets/icon_station_inactive.png');

// export default function App() {
//   return (
//     <NativeBaseProvider>
//       <NavigationContainer>
//         <Tab.Navigator screenOptions={{headerShown: false}}>
//           <Tab.Screen
//             name="Home"
//             component={Home}
//             options={{
//               tabBarIcon: ({size, color}) => (
//                 <Image source={profile_inactive} size={size} color={color} />
//               ),
//               headerShown: false,
//             }}
//           />
//           <Tab.Screen
//             name="Settings"
//             component={Station}
//             options={{
//               tabBarIcon: ({size, color}) => (
//                 <Image source={station_inactive} size={size} color={color} />
//               ),
//               headerShown: false,
//             }}
//           />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </NativeBaseProvider>
//   );
// }
