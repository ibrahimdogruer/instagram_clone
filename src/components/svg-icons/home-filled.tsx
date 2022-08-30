import * as React from 'react';

import Svg, {Path} from 'react-native-svg';

const SvgHomeFilled = ({size = 30, color = '#000', ...props}) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.708 25.271h-4.81a1 1 0 0 1-1-1v-8.807a1 1 0 0 1 .272-.685l9.127-9.697a1 1 0 0 1 1.457 0l8.952 9.512a1 1 0 0 1 .272.685v8.992a1 1 0 0 1-1 1h-4.984a1 1 0 0 1-1-1v-4.936s0-2.783-2.968-2.783c-3.492 0-3.318 2.783-3.318 2.783v4.936a1 1 0 0 1-1 1Z"
      fill={color}
    />
  </Svg>
);

export default SvgHomeFilled;
