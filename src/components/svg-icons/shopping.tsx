import * as React from 'react';

import Svg, {Path, SvgProps} from 'react-native-svg';

const SvgShopping = ({size= 30, color = '#000', ...props}) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M5.342 11.751a3 3 0 0 1 2.995-2.824h12.326a3 3 0 0 1 2.995 2.824l.471 8.042a5 5 0 0 1-4.991 5.292H9.862a5 5 0 0 1-4.991-5.292l.471-8.042ZM10.834 8.815V7.07c0-1.735 1.563-3.142 3.492-3.142 1.928 0 3.492 1.407 3.492 3.142v1.746"
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M11.008 12.307s0 3.667 3.317 3.667c3.667 0 3.667-3.667 3.667-3.667"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default SvgShopping;
