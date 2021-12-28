import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/pages/Home';
import AgentScreen from './src/pages/Agent';
import WeaponScreen from './src/pages/Weapon';
import MapScreen from './src/pages/Map';

type RootStackParamList = {
  Home: undefined;
  Agent: {
    agent: object
  };
  Weapon: {
    weapon: object
  };
  Map: {
    map: object
  };
};

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Agent' component={AgentScreen} />
            <Stack.Screen name='Weapon' component={WeaponScreen} />
            <Stack.Screen name='Map' component={MapScreen} />
        </Stack.Navigator>

        <StatusBar style="auto" />
    </NavigationContainer>
  );
}