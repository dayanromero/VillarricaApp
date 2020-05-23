//import liraries
import React, { memo } from 'react';
import { Text, StyleSheet } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { theme } from '../core/theme';

// create a component
const InputText = ({errorText, style, ...props}) => {
  return (
    <Input
      {...props}
      style={[styles.input, style]}
      selectionColor={theme.colors.primary}
      underlineColor="transparent"
      mode="outlined"
      >
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </Input>
  );
};

// define your styles
const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
    borderColor: '#000000',
  },
  error: {
    fontSize: 14,
    color: 'red',
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

//make this component available to the app
export default memo(InputText);
