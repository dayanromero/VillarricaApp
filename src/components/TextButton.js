//import liraries
import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// create a component
const TextButton = ({title, style, onPress}) => {
    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 8
    },
    text: {
        color: 'grey',
        fontWeight: '500',
        fontSize: 16,
    }
});

//make this component available to the app
export default TextButton;
