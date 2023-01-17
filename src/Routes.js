import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadScreen from './screens/LoadScreen.js';
import LandingScreen from './screens/LandingScreen.js';
import HomeScreen from './screens/HomeScreen.js';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Load" component={LoadScreen} />
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default Routes;
