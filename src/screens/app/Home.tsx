import {
  SvgHeart,
  SvgLogo,
  SvgMessenger,
  SvgNewPost,
} from '../../components/svg-icons';
import {Text, TouchableOpacity, View} from 'react-native';

import React from 'react';

const Home = () => {
  return (
    <View className="flex-1 bg-white">
      {/* begin:: Header */}
      <View className="flex-row justify-between items-center h-9 px-4">
        <SvgLogo />

        <View className="flex-row space-x-5">
          <TouchableOpacity
            activeOpacity={0.6}
            className="w-7 h-7 justify-center items-center">
            <SvgNewPost size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            className="w-7 h-7 justify-center items-center">
            <SvgHeart size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            className="w-7 h-7 justify-center items-center">
            <SvgMessenger size={24} />
          </TouchableOpacity>
        </View>
      </View>
      {/* end:: Header */}

      {/* begin:: Stories */}
      <View>
        <Text>Stories</Text>
      </View>
      {/* end:: Stories */}
    </View>
  );
};

export default Home;
