import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';

export default ShowAlert = () => (
    Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
    )
);
        

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
