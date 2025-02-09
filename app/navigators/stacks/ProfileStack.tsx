import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GetInTouchScreen from '../../screens/GetInTouchScreen';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'black',
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={GetInTouchScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
