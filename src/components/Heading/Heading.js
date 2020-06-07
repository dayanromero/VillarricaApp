import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Heading = ({children, style, ...props}) => {
    return (
        <Text {...props} style={[styles.text, style]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default Heading;
