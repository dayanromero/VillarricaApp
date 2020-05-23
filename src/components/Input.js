//import liraries
import React, { Component } from 'react';
import {  Text, StyleSheet, TextInput } from 'react-native';
//import { theme } from '../core/theme';

// create a component
const InputText = ({errorText, style, ...props}) => {
  return (
    <TextInput {...props} style={[styles.input, style]}>
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </TextInput>
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
export default InputText;
