import * as React from "react"
import Svg, { Path, G } from 'react-native-svg'

export const Tab_User = (props) => {
    return (
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        {...props}
      >
        <Path d="M12 18a3 3 0 110 6 3 3 0 010-6zm0-9a3 3 0 110 6 3 3 0 010-6zm0-9a3 3 0 110 6 3 3 0 010-6z" 
        fill={props.tintColor || "#9586A8"}/>
      </Svg>
    )
}
