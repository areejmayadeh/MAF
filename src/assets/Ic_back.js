import * as React from "react"
import Svg, { Path } from 'react-native-svg'

export const Ic_back = (props) => {
    return (
        <Svg
            width={8}
            height={14}
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M7 13L1 7l6-6"
                stroke="#2D0C57"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
