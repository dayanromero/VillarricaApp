import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './navigation/AuthStackNavigator';
import DrawerStackNavigator from './navigation/MainStackNavigator';
import Loading from './components/Loading/Loading';

const RootStack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(false);

  function renderScreens() {
    if (loading) {
      return <RootStack.Screen name={'Loading'} component={Loading} />;
    }
    return user ?
      <RootStack.Screen name={'MainStack'} component={DrawerStackNavigator} />
      :
      <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
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
