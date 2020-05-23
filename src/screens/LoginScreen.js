//import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../components/Input';

//import components
import Heading from '../components/Heading';
import Button from '../components/Button';
import TextButton from '../components/TextButton';
import Error from '../components/Error';

// create a component
const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Heading style={styles.title}>LOGIN</Heading>
            <Error error={'Hubo un error'} />
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
            <Button
                title={'Login'}
                style={styles.loginButton}
                onPress={()=> {}}
            />
            <TextButton
                title={'Olvide mi contraseña'}
            />
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
        marginVertical: 8,
        fontSize: 16
    },
    loginButton: {
        marginVertical: 8
    }
});

//make this component available to the app
export default LoginScreen;
