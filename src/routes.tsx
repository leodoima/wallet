import React from 'react';
import { View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: "#bf94ff",
          borderTopWidth: 0,
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20
        },
        labelStyle: {
          fontFamily: 'roboto_400',
          fontSize: 11,
          marginTop: 5,
        },
        inactiveTintColor: "#000",
        activeTintColor: "#bf94ff"
      }}
    >
      <Screen 
        name="Following" 
        component={Home} 
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Ionicons
                name="md-heart"
                size={size}
                color={focused ? "#bf94ff": "#fff"} />
            )
          }
        }}
      />
      <Screen 
        name="Discover" 
        component={Home}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="compass-outline"
                size={size}
                color={focused ? "#bf94ff": "#fff"} />
            )
          }
        }}
      />
      <Screen 
        name="Browse" 
        component={Home} 
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Ionicons
                name="md-browsers"
                size={size}
                color={focused ? "#bf94ff": "#fff"} />
            )
          }
        }}
      />
      <Screen 
        name="Esports" 
        component={Home} 
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="trophy-outline"
                size={size}
                color={focused ? "#bf94ff" : "#fff"} />
            )
          }
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
