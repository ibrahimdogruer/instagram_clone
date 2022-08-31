import * as React from 'react';

import Svg, {Path} from 'react-native-svg';

const SvgSearch = ({size = 29, color = '#000', ...props}) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 29 29"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.17 12.761a7.834 7.834 0 1 1-15.67 0 7.834 7.834 0 0 1 15.67 0Zm-1.624 7.626a9.793 9.793 0 0 1-6.211 2.209c-5.432 0-9.835-4.403-9.835-9.835 0-5.431 4.403-9.834 9.835-9.834 5.431 0 9.834 4.403 9.834 9.834a9.793 9.793 0 0 1-2.21 6.211l5.284 5.284a1 1 0 1 1-1.414 1.414l-5.283-5.284Z"
      fill={color}
    />
  </Svg>
);

export default SvgSearch;
