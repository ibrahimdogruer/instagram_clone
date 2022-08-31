import * as React from 'react';

import Svg, {Path, Rect} from 'react-native-svg';

const SvgReels = ({size = 29, color = '#000', ...props}) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 29 29"
    {...props}>
    <Rect
      x={4.5}
      y={4.927}
      width={20}
      height={20}
      rx={6}
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M5.246 10.038H23.754m-5.064-.524-1.222-2.095-1.047-1.746m-4.016 4.016-1.222-2.096-1.048-1.746"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="square"
    />
    <Path
      d="M12.096 14.674a1 1 0 0 1 1.48-.854l4.54 2.48a1 1 0 0 1 .02 1.744l-4.662 2.691a1 1 0 0 1-1.5-.89l.122-5.171Z"
      fill={color}
    />
  </Svg>
);

export default SvgReels;
