//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Error = ({error}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{error}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingVertical: 8
    },
    text: {
        color: 'red'
    }
});

//make this component available to the app
export default Error;
