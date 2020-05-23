//import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../components/Input';

//import components
import Heading from '../components/Heading';
import Botton from '../components/Botton';

// create a component
const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Heading style={styles.title}>LOGIN</Heading>
            <Input 
                style={styles.input}
                placeholder={'Email'}
                keyboardType={'email-address'}
            />
            <Input 
                style={styles.input}
                placeholder={'Password'}
                secureTextEntry
            />
            <Botton title={'Login'} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 120,
        alignItems: 'center',
    },
    title: {
        marginBottom: 16
    },
    input: {
        marginVertical: 8
    }
});

//make this component available to the app
export default LoginScreen;
