import * as React from 'react';

import Svg, {Path} from 'react-native-svg';

const SvgHome = ({size = 30, color = '#000', ...props}) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.31 25.89H5.5a1 1 0 0 1-1-1v-8.807a1 1 0 0 1 .272-.685L13.899 5.7a1 1 0 0 1 1.456 0l8.953 9.512a1 1 0 0 1 .271.686v8.992a1 1 0 0 1-1 1h-4.984a1 1 0 0 1-1-1v-4.937s0-2.782-2.968-2.782c-3.492 0-3.318 2.782-3.318 2.782v4.937a1 1 0 0 1-1 1Z"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);

export default SvgHome;
