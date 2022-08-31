import * as React from 'react';

import Svg, {Path, Rect} from 'react-native-svg';

const SvgNewPost = ({size = 29, color = '#000', ...props}) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 29 29`}
    {...props}>
    <Rect
      x={4.5}
      y={4.408}
      width={20}
      height={20}
      rx={5}
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M14.365 8.898v11m-5.5-5.5h11"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default SvgNewPost;
