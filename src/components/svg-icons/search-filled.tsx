import * as React from 'react';

import Svg, {Path, SvgProps} from 'react-native-svg';

const SvgSearchFilled = ({size= 30, color = '#000', ...props}) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.568 12.143a6.835 6.835 0 1 1-13.67 0 6.835 6.835 0 0 1 13.67 0Zm-1.022 7.933a9.79 9.79 0 0 1-5.813 1.901c-5.431 0-9.834-4.403-9.834-9.835 0-5.431 4.403-9.834 9.834-9.834 5.432 0 9.835 4.403 9.835 9.835a9.79 9.79 0 0 1-1.9 5.812l5.328 5.329a1.5 1.5 0 1 1-2.122 2.12l-5.328-5.328Z"
      fill={color}
    />
  </Svg>
);

export default SvgSearchFilled;
