//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

// create a component
const Heading = ({children, style, ...props}) => {
    return (
        <Text {...props} style={styles.text}>
            {children}
        </Text>
    );
};

// define your styles
const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
    },
});

//make this component available to the app
export default Heading;
