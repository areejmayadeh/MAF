import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const Ic_Tick = (props) => {
    return (
        <Svg
            width={18}
            height={13}
            viewBox="0 0 18 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M17 1L6 12 1 7"
                stroke="#6C0EE4"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}