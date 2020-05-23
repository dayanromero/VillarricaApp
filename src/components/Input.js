//import liraries
import React, { Component } from 'react';
import {  StyleSheet, TextInput } from 'react-native';

// create a component
const InputText = ({style, ...props}) => {
  return (
    <TextInput {...props} style={[styles.input, style]} />
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
});

//make this component available to the app
export default InputText;
