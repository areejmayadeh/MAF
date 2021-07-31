import * as React from "react"
import Svg, { Path } from 'react-native-svg'

export const Tab_Home = (props) => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M10 21H3v-7h7v7zM21 21h-7v-7h7v7zM21 10h-7V3h7v7zM10 10H3V3h7v7z"
                fill={props.tintColor || "#7203FF"}
                fillOpacity={0.5}
                stroke="#7203FF"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
