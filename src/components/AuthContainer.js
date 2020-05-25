import * as React from 'react';
import {View, StyleSheet} from 'react-native';

const AuthContainer = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 200,
    alignItems: 'center',
  },
});

export default AuthContainer;
