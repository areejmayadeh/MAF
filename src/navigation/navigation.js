import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  MFLogin,
  MFHome,
  MFGardenDetails
} from '../screens';
import { TabNavigator } from './tabNavigator';

const Stack = createStackNavigator()
const StackNavigator = ({ navigation, route }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: "white",
        headerBackTitleVisible: false,
      }}
      initialRouteName="Tabs"
    >
      <Stack.Screen name="Tabs" component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Home" component={MFHome} />
      <Stack.Screen name="Login" component={MFLogin} />
      <Stack.Screen name="MFGardenDetails" component={MFGardenDetails} />
    </Stack.Navigator>
  );
}

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export { MainStackNavigator }