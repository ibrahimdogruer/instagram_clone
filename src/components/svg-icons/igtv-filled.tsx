import * as React from 'react';

import Svg, {Path, Rect} from 'react-native-svg';

const SvgIGTVFilled = ({size= 30, color = '#000', ...props}) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 5.454a6 6 0 0 0-6 6v7.745a6 6 0 0 0 6 6h7.745a6 6 0 0 0 6-6v-7.745a6 6 0 0 0-6-6H10.5ZM8.77 16.847l4.342-1.22v.96a1.5 1.5 0 0 0 2.026 1.405l4.712-1.762a1 1 0 0 0-.7-1.874l-4.038 1.51v-.898a1.5 1.5 0 0 0-1.905-1.444L8.23 14.92a1 1 0 1 0 .54 1.926Z"
      fill={color}
    />
    <Path
      d="m11.797 3.308 2.575 2.575 2.576-2.575"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default SvgIGTVFilled;
