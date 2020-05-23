//import liraries
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './navigation/AuthStackNavigator';

const RootStack = createStackNavigator();

// create a component
const App = () => {
  return (
    <NavigationContainer>
        <RootStack.Navigator 
          screenOptions={{
            headerShown: false,
          }}>
            <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
        </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
