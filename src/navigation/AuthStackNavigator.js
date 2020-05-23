//import liraries
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//import components
import LoginScreen from '../screens/LoginScreen';
import DashboardMap from '../screens/DashboardMap';

const AuthStack = createStackNavigator();

// create a component
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
        <AuthStack.Screen name={'LoginScreen'} component={LoginScreen} />
        <AuthStack.Screen name={'DashboardMap'} component={DashboardMap} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
