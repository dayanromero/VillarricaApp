//import liraries
import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// create a component
const Botton = ({title, style, onPress}) => {
    return (
        <TouchableOpacity style={[styles.container, style]}>
            <Text>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 8
    },
    text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    }
});

//make this component available to the app
export default Botton;
