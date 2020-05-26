//import liraries
import React, {memo} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput as Input} from 'react-native-paper';
import {theme} from '../core/theme';

// create a component
const InputText = ({errorText, style, ...props}) => (
  <View style={styles.container}>
    <Input
      style={[styles.input, style]}
      selectionColor={theme.colors.secondary}
      underlineColor="transparent"
      theme={{colors: {primary: theme.colors.secondary}}}
      mode="outlined"
      {...props}
    />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 6,
  },
  input: {
    backgroundColor: theme.colors.backg,
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

//make this component available to the app
export default memo(InputText);
