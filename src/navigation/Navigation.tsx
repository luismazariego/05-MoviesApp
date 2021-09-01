import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';
//routes
export type RootStackParams = {
  HomeScreen: undefined; //No need any parameter
  DetailScreen: Movie; //Needs movies info
}
const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,      
    }}>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='DetailScreen' component={DetailScreen} />
    </Stack.Navigator>
  );
}
