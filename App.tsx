import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider } from 'react-query';

import HomeScreen from './src/pages/Home';
import AgentScreen from './src/pages/Agent';
import WeaponScreen from './src/pages/Weapon';
import MapScreen from './src/pages/Map';
import { RootStackParamList } from './src/types/navigationTypes';

const queryClient = new QueryClient();

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
              <Stack.Screen name='Home' component={HomeScreen} />
              <Stack.Screen name='Agent' component={AgentScreen} />
              <Stack.Screen name='Weapon' component={WeaponScreen} />
              <Stack.Screen name='Map' component={MapScreen} />
          </Stack.Navigator>

          <StatusBar style="auto" />
      </NavigationContainer>
      </QueryClientProvider>
  );
}