import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {
  SvgHeart,
  SvgLogo,
  SvgMessenger,
  SvgNewPost,
} from '../../components/svg-icons';

import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import stories from '../../../data/stories';

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
      <View className="py-3 border-b-[0.5px] border-[#dadada]">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {stories.map((story, i) => (
            <View key={story.id} className="w-[67px] mx-2">
              <LinearGradient
                colors={['#DE0046', '#F7A34B']}
                className="w-[65px] h-[65px] justify-center items-center rounded-full mb-2">
                <Image
                  className="w-[60px] h-[60px] rounded-full border-[3px] border-white"
                  source={{
                    uri: story.user.avatar,
                  }}
                />
              </LinearGradient>
              <Text className='text-xs' numberOfLines={1}>{story.user.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* end:: Stories */}
    </View>
  );
};

export default Home;
