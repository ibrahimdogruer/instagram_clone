import * as React from 'react';

import Svg, {Mask, Path, Rect} from 'react-native-svg';

const SvgGrid = ({size = 29, color = '#000', ...props}) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 29 29"
    {...props}>
    <Mask id="a" fill="#fff">
      <Rect x={4.5} y={4.408} width={20} height={20} rx={1} />
    </Mask>
    <Rect
      x={4.5}
      y={4.408}
      width={20}
      height={20}
      rx={1}
      stroke={color}
      strokeWidth={4}
      mask="url(#a)"
    />
    <Path
      d="M11.51 5.686v17.535m6.005-17.535v17.535m5.733-11.819H5.858m0 6.006h17.39"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);

export default SvgGrid;
