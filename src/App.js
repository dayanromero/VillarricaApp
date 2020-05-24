//import liraries
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './navigation/AuthStackNavigator';
import MainStackNavigator from './navigation/MainStackNavigator';
import SplashScreen from './screens/SplashScreen';

const RootStack = createStackNavigator();

// create a component
const App = () => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);

  function renderScreens() {
    if (loading) {
      return <RootStack.Screen name={'Splash'} component={SplashScreen} />;
    }
    return user ? (
      <RootStack.Screen name={'MainStack'} component={MainStackNavigator} />
    ) : (
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
      );
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {renderScreens()}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
