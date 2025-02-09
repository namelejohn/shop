import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/ProductListScreen.tsx';
import OrderScreen from '../../screens/OrderScreen.tsx';
import OrderSuccessScreen from '../../screens/OrderSuccessScreen.tsx';
import FavoriteListScreen from '../../screens/FavoriteListScreen.tsx';
import BonusScreen from '../../screens/RewardsScreen.tsx';

const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'black',
        headerShown: false,
      }}>
      <Stack.Screen name="Shop" component={HomeScreen} />
      <Stack.Screen name="Cart" component={OrderScreen} />
      <Stack.Screen name="Checkout" component={OrderSuccessScreen} />
      <Stack.Screen name="Favorites" component={FavoriteListScreen} />
      <Stack.Screen name="Bonuses" component={BonusScreen} />
    </Stack.Navigator>
  );
};

export default MenuStack;
