import * as React from "react"
import Svg, { Path } from 'react-native-svg'

 export const Ic_Cart = (props) =>  {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.286 4.167h14.286l-1.43 8.571H5.715L4.286 4.167zM7.143 17.5a.952.952 0 100-1.905.952.952 0 000 1.905zM15.714 17.5a.952.952 0 100-1.905.952.952 0 000 1.905zM4.286 4.167H1.429"
        stroke={props.tintColor || "#fff"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
