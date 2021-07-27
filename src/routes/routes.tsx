import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Search from '../screens/Search';
import Favorites from '../screens/Favorites';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Search" component={Search} />
    <Stack.Screen name="Favorites" component={Favorites} />

  </Stack.Navigator>
);

export default Routes;
