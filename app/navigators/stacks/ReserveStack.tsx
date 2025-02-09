import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BookingScreen from '../../screens/BookingScreen.tsx';
import BookingConfirmationScreen from '../../screens/BookingConfirmationScreen.tsx';

const Stack = createStackNavigator();

const ReserveStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'black',
        headerShown: false,
      }}>
      <Stack.Screen name="BookingScreen" component={BookingScreen} />
      <Stack.Screen
        name="BookingConfirmation"
        component={BookingConfirmationScreen}
      />
    </Stack.Navigator>
  );
};

export default ReserveStack;
