import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
const SvgComponent = (props: any) => (
  <Svg xmlns={require('../../asset/svg/home-icon.svg')} width={48} height={10} {...props}>
    <Path fill="#000000ff" fillRule="evenodd" d="M0 0h48v1H0z" />
  </Svg>
)
export default SvgComponent