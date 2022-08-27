import Home from '../screens/Home';
import Profile from '../screens/Profile';
import React from 'react';
import Reels from '../screens/Reels';
import Search from '../screens/Search';
import Shop from '../screens/Shop';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
