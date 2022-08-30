import * as React from 'react';

import Svg, {Path, Rect} from 'react-native-svg';

const SvgIGTV = ({size= 30, color = '#000', ...props}) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect
      x={5.5}
      y={6.554}
      width={17.745}
      height={17.745}
      rx={5}
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="m8.5 15.984 4.977-1.397a.5.5 0 0 1 .635.481v1.62a.5.5 0 0 0 .675.468l4.713-1.763M11.797 3.408l1.868 1.869a1 1 0 0 0 1.414 0l1.869-1.869"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default SvgIGTV;
