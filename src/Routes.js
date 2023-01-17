import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadScreen from './screens/LoadScreen.js';
import LandingScreen from './screens/LandingScreen.js';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Load" component={LoadScreen} />
      <Stack.Screen name="Landing" component={LandingScreen} />
    </Stack.Navigator>
  );
};
export default Routes;
