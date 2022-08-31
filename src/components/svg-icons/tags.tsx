import * as React from 'react';

import Svg, {Circle, Path} from 'react-native-svg';

const SvgTags = ({size = 29, color = '#000', ...props}) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 29 29"
    {...props}>
    <Path
      d="M4.5 7.713a1 1 0 0 1 1-1h6.114a2 2 0 0 0 1.422-.594l1.556-1.575 1.446 1.539a2 2 0 0 0 1.457.63H23.5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16Z"
      stroke={color}
      strokeWidth={2}
    />
    <Circle cx={14.5} cy={13.635} r={3.5} stroke={color} strokeWidth={2} />
    <Path
      d="M12.219 19.963h4.906a4 4 0 0 1 4 4v.75H8.219v-.75a4 4 0 0 1 4-4Z"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);

export default SvgTags;
