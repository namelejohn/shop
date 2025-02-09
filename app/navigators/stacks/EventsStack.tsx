import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EventMenuScreen from '../../screens/EventOptionsScreen';
import EventScreen from '../../screens/EventDetailsScreen';

const Stack = createStackNavigator();

const EventsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'black',
        headerShown: false,
      }}>
      <Stack.Screen name="EventMenu" component={EventMenuScreen} />
      <Stack.Screen name="EventDetail" component={EventScreen} />
    </Stack.Navigator>
  );
};

export default EventsStack;
