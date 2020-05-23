//import liraries
import * as React from 'react';
import { StyleSheet } from 'react-native';
import LoginScreen from './screens/LoginScreen';

// create a component
const App = () => {
  return (
    <LoginScreen />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
