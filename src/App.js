//import liraries
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './navigation/AuthStackNavigator';
import { AuthContext } from './context/AuthContext';

const RootStack = createStackNavigator();

// create a component
const App = () => {
  const auth = {};

  // React.useMemo(
  //   factory: () => ({
  //     login: () => {
  //       console.log('Login')
  //     },
  //     logout: () => {
  //       console.log('Logout')
  //     },
  //   }),
  //   inputs: [],
  // );

  return (
    <AuthContext.Provider value={auth} >
      <NavigationContainer>
          <RootStack.Navigator 
            screenOptions={{
              headerShown: false,
            }}>
              <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
          </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;