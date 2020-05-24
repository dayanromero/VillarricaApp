import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardMap from '../screens/DashboardMap';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="DashboardMap" component={DashboardMap} />
    </MainStack.Navigator>
  )
}
export default MainStackNavigator;