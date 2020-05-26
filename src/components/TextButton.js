import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

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

export default TextButton;
