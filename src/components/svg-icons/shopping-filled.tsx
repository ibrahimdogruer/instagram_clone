import * as React from 'react';

import Svg, {Path, SvgProps} from 'react-native-svg';

const SvgShoppingFilled = ({size = 29, color = '#000', ...props}) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 29 29"
    {...props}>
    <Path
      d="M11.232 8.197V6.45c0-1.736 1.563-3.143 3.492-3.143s3.492 1.407 3.492 3.143v1.746"
      stroke={color}
      strokeWidth={2}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.735 7.308a4 4 0 0 0-3.993 3.766l-.471 8.042a6 6 0 0 0 5.99 6.35h9.275a6 6 0 0 0 5.99-6.35l-.471-8.042a4 4 0 0 0-3.994-3.766H8.735Zm2.671 3.38a1 1 0 0 1 1 .996v.016l.005.082c.005.076.015.19.036.33.043.285.127.648.285.998.158.348.374.652.667.867.282.208.692.378 1.325.378.741 0 1.231-.182 1.565-.405.34-.226.579-.535.749-.875.171-.344.262-.7.309-.978a3.515 3.515 0 0 0 .043-.4v-.014a1 1 0 0 1 2 .006h-1 1V11.716a3.33 3.33 0 0 1-.01.203 5.505 5.505 0 0 1-.554 2.052 4.217 4.217 0 0 1-1.428 1.645c-.697.465-1.583.74-2.674.74-1.027 0-1.86-.288-2.511-.767-.64-.472-1.046-1.085-1.303-1.654a5.854 5.854 0 0 1-.44-1.523 5.92 5.92 0 0 1-.064-.697v-.024l1-.001h-1a1 1 0 0 1 1-1Z"
      fill={color}
    />
  </Svg>
);

export default SvgShoppingFilled;
