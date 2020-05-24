//import liraries
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//import components
import LoginScreen from '../screens/LoginScreen';


const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();

// create a component
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
        <AuthStack.Screen name={'LoginScreen'}>
          {() => (
            <LoginStack.Navigator
              screenOptions={{
              headerShown: false,
            }}>
              <LoginStack.Screen name={'Login'} component={LoginScreen} />
            </LoginStack.Navigator>
          )}
          
        </AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
