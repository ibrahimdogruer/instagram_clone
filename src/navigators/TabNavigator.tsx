import {Image, View} from 'react-native';
import {
  SvgHome,
  SvgHomeFilled,
  SvgReels,
  SvgReelsFilled,
  SvgSearch,
  SvgSearchFilled,
  SvgShopping,
  SvgShoppingFilled,
} from '../components/svg-icons';

import Home from '../screens/Home';
import Icon from '../components/icon';
import Profile from '../screens/Profile';
import React from 'react';
import Reels from '../screens/Reels';
import Search from '../screens/Search';
import Shop from '../screens/Shop';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#262626',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) return <SvgHomeFilled />;
            return <SvgHome />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) return <SvgSearchFilled />;
            return <SvgSearch />;
          },
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) return <SvgReelsFilled />;
            return <SvgReels />;
          },
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) return <SvgShoppingFilled />;
            return <SvgShopping />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                className={`w-6 h-6 border rounded-full ${
                  focused ? 'border-black' : 'border-transparent'
                }`}
                source={{
                  uri: 'https://randomuser.me/api/portraits/women/28.jpg',
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
