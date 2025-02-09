import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import ReserveStack from './stacks/ReserveStack.tsx';
import EventsStack from './stacks/EventsStack.tsx';
import ProfileStack from './stacks/ProfileStack.tsx';
import MenuStack from './stacks/MenuStack.tsx';
import COLORS from '../styles/colors.ts';
import {isAndroid} from '../styles/constants.ts';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.activeTabColor,
          tabBarInactiveTintColor: COLORS.inActiveTabColor,
          tabBarStyle: {
            height: isAndroid ? 60 : 80,
            backgroundColor: COLORS.tabBarBg,
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            paddingTop: 4,
          },
        }}>
        <Tab.Screen
          name="MenuTab"
          component={MenuStack}
          options={{
            tabBarLabel: 'Shop',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../assets/tabs/pizza.png')}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: color,
                  resizeMode: 'contain',
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="ReserveTab"
          component={ReserveStack}
          options={{
            tabBarLabel: 'Reservation',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../assets/tabs/reserve.png')}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: color,
                  resizeMode: 'contain',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Contacts',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../assets/tabs/contact.png')}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: color,
                  resizeMode: 'contain',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="EventsTab"
          component={EventsStack}
          options={{
            tabBarLabel: 'Events',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../assets/tabs/serve.png')}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: color,
                  resizeMode: 'contain',
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
