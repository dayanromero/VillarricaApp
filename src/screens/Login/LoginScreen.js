import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from './actions';
import { StyleSheet } from 'react-native';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import TextButton from '../../components/Button/TextButton';
import AuthContainer from '../../components/AuthContainer';
import { emailValidator, passwordValidator } from '../../core/utils';
import InputText from '../../components/Input/InputText';
import { theme } from '../../core/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class LoginScreen extends Component {
    state = {
        email: { value: '', error: '' },
        password: { value: '', error: '' },
    };

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
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if (emailError || passwordError) {
            this.setState({
                email: { ...email, error: emailError },
                password: { ...password, error: passwordError },
            });
            return;
        }
        let username = email.value;
        let pass = password.value;
        
        this.props.loginUser(username, pass);
        //console.log('user data', email.value, password.value)
    };

    render() {
        const { email, password } = this.state;
        // console.log('PROPS', this.props)
        return (
            <AuthContainer>
                <Icon
                                name="account-circle-outline"
                                style={styles.icon}
                            />
                <Heading style={styles.title}>Villarrica App Login</Heading>
                <InputText
                    style={styles.input}
                    label="Correo electronico"
                    returnKeyType="next"
                    placeholder={'Correo electronico'}
                    keyboardType={'email-address'}
                    onChangeText={(text) => this.setEmail(text)}
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
    icon: {
        width: 120,
        height: 120,
        textAlign: 'center',
        fontSize: 120,
        color: theme.colors.secondary,
    },
});

const mapStateToProps = (state) => {
    const { loading, data, error } = state.login;
   return {
      data,
      loading,
      error,
   };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (username, password) => {
            return dispatch(authenticateUser(username, password));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
