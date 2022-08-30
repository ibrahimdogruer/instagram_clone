import * as React from 'react';

import Svg, {Path, SvgProps} from 'react-native-svg';

const SvgMenu = ({size= 30, color = '#000', ...props}) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M5.5 7.408h18M5.5 14.408h18M5.5 21.408h18"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default SvgMenu;
