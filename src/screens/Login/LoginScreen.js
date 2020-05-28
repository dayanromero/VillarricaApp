import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';

import { StyleSheet } from 'react-native';
import Heading from '../../components/Heading/Heading';
import Logo from '../../components/Logo';
import Button from '../../components/Button/Button';
import TextButton from '../../components/Button/TextButton';
import AuthContainer from '../../components/AuthContainer';
import { emailValidator, passwordValidator } from '../../core/utils';
import InputText from '../../components/Input/InputText';
import { theme } from '../../core/theme';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: { value: '', error: '' },
            password: { value: '', error: '' },
        };
    }

    setEmail = (text) => {
        this.setState({
            email: { value: text, error: '' },
        });
    };

    setPassword = (text) => {
        this.setState({
            password: { value: text, error: '' },
        });
    };

    _onLoginPressed = () => {
        const { email, password } = this.state;
        console.log('mail', email.value)
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if (emailError || passwordError) {
            this.setState({
                email: { ...email, error: emailError },
                password: { ...password, error: passwordError },
            });
            return;
        }
        this.props.getData('94537619');
    };
    
    render() {
        console.log('data', this.props);

        const { email, password } = this.state;
        return (
            <AuthContainer>
                <Logo />
                <Heading style={styles.title}>Login</Heading>
                <InputText
                    style={styles.input}
                    label='Correo electronico'
                    returnKeyType='next'
                    placeholder={'Correo electronico'}
                    keyboardType={'email-address'}
                    onChangeText={(text) => this.setEmail(text)}
                    error={!!email.error}
                    errorText={email.error}
                    autoCapitalize='none'
                    autoCompleteType='email'
                    textContentType='emailAddress'
                    keyboardType='email-address'
                />
                <InputText
                    style={styles.input}
                    label='Contraseña'
                    returnKeyType='done'
                    placeholder={'Contraseña'}
                    value={password.value}
                    onChangeText={(text) => this.setPassword(text)}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry
                />
                <Button
                    title={'Login'}
                    style={styles.loginButton}
                    onPress={this._onLoginPressed}
                />
                <TextButton title={'Olvide mi contraseña'} />
            </AuthContainer>
        );
    }
}

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
        fontSize: 16,
    },
    loginButton: {
        marginVertical: 8,
    },
    label: {
        color: theme.colors.secondary,
    },
});

const mapStateToProps = (state) => {
    return {
        dataUser: state.login.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getData: (id) => {
            return dispatch(fetchData(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
