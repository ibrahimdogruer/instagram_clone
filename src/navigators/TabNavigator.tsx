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

import Home from '../screens/app/Home';
import Profile from '../screens/app/Profile';
import React from 'react';
import Reels from '../screens/app/Reels';
import Search from '../screens/app/Search';
import Shop from '../screens/app/Shop';
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
            if (focused) return <SvgHomeFilled size={30} />;
            return <SvgHome size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) return <SvgSearchFilled size={30} />;
            return <SvgSearch size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) return <SvgReelsFilled size={30} />;
            return <SvgReels size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) return <SvgShoppingFilled size={30} />;
            return <SvgShopping size={30} />;
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
                className={`w-[25px] h-[25px] border rounded-full ${
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
