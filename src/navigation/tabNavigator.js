import 'react-native-gesture-handler';
import React from 'react';
import {
    View,
    processColor,
    Platform,
    Dimensions
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from "react-redux";

import {
    Tab_Home,
    Ic_Cart,
    Tab_User
} from '../assets'
import {
    MFHome,
    MFLogin,
    MFCart,
    MFUser
} from '../screens';

const Tab = createBottomTabNavigator();

const TabBarOptions = (props) => {
    let { focused, ICON } = props;
    let color = focused ? '#7203FF': '#9586A8'
    return (
            <View> 
                <ICON tintColor={Platform.OS == 'ios' ? processColor(color) : color}/>
            </View>
    )
}

const TabNavigator = ({ navigation, route }) => {
    const {
        isAuthenticated
    } = useSelector(state => state.Auth);
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                allowFontScaling: false,
                style: {
                    height: '10%',
                    paddingVertical: Platform.OS == 'ios' ? 16 : 0,
                    paddingLeft: 24,
                    paddingRight: 12,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 3.84,
                    elevation: 5,
                },
                tabStyle: {
                    width: Dimensions.get('screen').width / 8,
                    paddingVertical: Platform.OS == 'ios' ? 0 : 16,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={MFHome}
                options={{
                    tabBarIcon: ({ focused }) => TabBarOptions({ focused, label: 'tabHome', ICON: Tab_Home }),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={MFCart}
                options={{
                    tabBarIcon: ({ focused }) => TabBarOptions({ focused, label: 'tabSearch', ICON: Ic_Cart })
                }}
            />
            <Tab.Screen
                name="Auth"
                component={isAuthenticated ?  MFUser : MFLogin}
                options={{
                    tabBarIcon: ({ focused }) => TabBarOptions({ focused, label: 'tabFavourite', ICON: Tab_User })
                }}
            />
        </Tab.Navigator>
    );
}

export { TabNavigator }