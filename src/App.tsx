import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import TabNavigator from './navigators/TabNavigator';

const App = () => {
  return (
    <SafeAreaView className="flex-1">
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
