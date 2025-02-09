import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyHeader from '../../components/MyHeader';
import BonusScreen from '../../screens/RewardsScreen.tsx';

const Stack = createStackNavigator();

const BonusStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'black',
        header: () => <MyHeader title={'Bonuses'} />,
      }}>
      <Stack.Screen name="Bonuses" component={BonusScreen} />
    </Stack.Navigator>
  );
};

export default BonusStack;
