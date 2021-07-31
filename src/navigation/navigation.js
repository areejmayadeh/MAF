import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text  } from 'react-native';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import {
  MFLogin,
  MFHome,
  MFGardenDetails
} from '../screens';
import { TabNavigator } from './tabNavigator';

const Stack = createStackNavigator()
const StackNavigator = ({ navigation, style }) => {
  return (
    <Animated.View style={[styles.stack, style]}>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
        }}>
        <Stack.Screen name="Tabs" component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Home" component={MFHome} />
        <Stack.Screen name="Login" component={MFLogin} />
        <Stack.Screen name="MFGardenDetails" component={MFGardenDetails} />
      </Stack.Navigator>
    </Animated.View>
  );
};

const Drawer = createDrawerNavigator();

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{alignItems: 'center'}}>
        <Text style={styles.drawerLblStyle}>Welcome to local garden!</Text>
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 10],
  });
  const animatedStyle = { borderRadius, transform: [{ scale }] };
  return (
    <LinearGradient style={styles.container} colors={['#0BCE83', '#0384fc']}>
      <Drawer.Navigator
        backBehavior="none"
        initialRouteName="Home"
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={styles.container}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}
        sceneContainerStyle={styles.scene}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}>
        <Drawer.Screen name="Screens">
          {(props) => <StackNavigator {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    backgroundColor: 'transparent',
  },
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: 'hidden',
  },
  drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
  drawerLblStyle: {
    fontSize: 30, 
    fontWeight: '700', 
    color: '#FFF', 
    marginTop: 60, 
    marginHorizontal: 20
  },
})

export { DrawerNavigator }