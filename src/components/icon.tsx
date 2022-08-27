import {
  AntDesignIcon,
  EntypoIcon,
  EvilIconsIcon,
  FeatherIcon,
  FontAwesome5Icon,
  FontAwesome5ProIcon,
  FontAwesomeIcon,
  FontistoIcon,
  FoundationIcon,
  IoniconsIcon,
  MaterialCommunityIconsIcon,
  MaterialIconsIcon,
  OcticonsIcon,
  SimpleLineIconsIcon,
  ZocialIcon,
} from './vertor-icons';
import {Text, View} from 'react-native';

import React from 'react';

type IconType =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'FontAwesome5Pro'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial';

interface IconProps {
  type: IconType;
  name: string;
  color?: string;
  size?: number;
}

const Icon = ({
  type,
  name,
  color = 'black',
  size = 30,
  ...props
}: IconProps) => {
  return (
    <>
      {type === 'AntDesign' && (
        <AntDesignIcon name={name} color={color} size={size} {...props} />
      )}
      {type === 'Entypo' && (
        <EntypoIcon name={name} color={color} size={size} {...props} />
      )}
      {type === 'EvilIcons' && (
        <EvilIconsIcon name={name} color={color} size={size} {...props} />
      )}
      {type === 'Feather' && (
        <FeatherIcon name={name} color={color} size={size} {...props} />
      )}
      {type === 'FontAwesome' && (
        <FontAwesomeIcon name={name} color={color} size={size} {...props} />
      )}
      {type === 'FontAwesome5' && (
        <FontAwesome5Icon name={name} color={color} size={size} {...props} />
      )}
      {type === 'FontAwesome5Pro' && (
        <FontAwesome5ProIcon name={name} color={color} size={size} {...props} />
      )}
      {type === 'Fontisto' && (
        <FontistoIcon name={name} color={color} size={size} {...props} />
      )}
      {type === 'Foundation' && (
        <FoundationIcon name={name} color={color} size={size} {...props} />
      )}
      {type === 'Ionicons' && (
        <IoniconsIcon name={name} color={color} size={size} {...props} />
      )}
      {type === 'MaterialCommunityIcons' && (
        <MaterialCommunityIconsIcon
          name={name}
          color={color}
          size={size}
          {...props}
        />
      )}
      {type === 'MaterialIcons' && (
        <MaterialIconsIcon name={name} color={color} size={size} {...props} />
      )}
      {type === 'Octicons' && (
        <OcticonsIcon name={name} color={color} size={size} {...props} />
      )}
      {type === 'SimpleLineIcons' && (
        <SimpleLineIconsIcon name={name} color={color} size={size} {...props} />
      )}
      {type === 'Zocial' && (
        <ZocialIcon name={name} color={color} size={size} {...props} />
      )}
    </>
  );
};

export default Icon;
