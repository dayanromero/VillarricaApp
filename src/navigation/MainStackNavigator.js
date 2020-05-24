import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardMap from '../screens/DashboardMap';

const MainStack = createStackNavigator()

const MainStackNavigator = () => {

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
        <MainStack.Screen name={'DashboardMap'}>
          {() => (
            <MainStack.Navigator
              screenOptions={{
              headerShown: false,
            }}>
              <MainStack.Screen name={'Map'} component={DashboardMap} />
            </MainStack.Navigator>
          )}
          
        </MainStack.Screen>
    </MainStack.Navigator>
  );
}

export default MainStackNavigator;