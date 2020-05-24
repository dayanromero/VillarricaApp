//import liraries
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

//import components
import Heading from '../components/Heading';
import Logo from '../components/Logo';
import Button from '../components/Button';
import TextButton from '../components/TextButton';
import AuthContainer from '../components/AuthContainer';
import { emailValidator, passwordValidator } from '../core/utils';
import InputText from '../components/InputText';
import { theme } from '../core/theme';

// create a component
const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const _onLoginPressed = () => {
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        }
        // navigation.navigate('DashboardMap');
    };

    return (
        <AuthContainer>
            <Logo />
            <Heading style={styles.title}>Login</Heading>
            <InputText
                style={styles.input}
                label="Correo electronico"
                returnKeyType="next"
                placeholder={'Correo electronico'}
                keyboardType={'email-address'}
                onChangeText={text => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <InputText
                style={styles.input}
                label="Contraseña"
                returnKeyType="done"
                placeholder={'Contraseña'}
                alue={password.value}
                onChangeText={text => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            <Button
                title={'Login'}
                style={styles.loginButton}
                onPress={_onLoginPressed}
            />
            <TextButton title={'Olvide mi contraseña'} />
        </AuthContainer>
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
        marginBottom: 14,
        color: theme.colors.primary,
    },
    input: {
        fontSize: 16
    },
    loginButton: {
        marginVertical: 8,
    },
    label: {
        color: theme.colors.secondary,
    },
});

//make this component available to the app
export default LoginScreen;
