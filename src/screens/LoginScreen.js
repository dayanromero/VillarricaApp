//import liraries
import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../components/Input';

//import components
import Heading from '../components/Heading';
import Button from '../components/Button';
import TextButton from '../components/TextButton';
import Error from '../components/Error';
import AuthContainer from '../components/AuthContainer';
import { emailValidator, passwordValidator } from '../core/utils';
import AuthContext from '../context/AuthContext';


// create a component
const LoginScreen = ({navigation}) => {
    //const { login } = React.useContext(AuthContext);

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
      navigation.navigate('DashboardMap');
    };

    return (
        <AuthContainer>
            <Heading style={styles.title}>LOGIN</Heading>
            <Error error={'Hubo un error'} />
            <Input 
                style={styles.input}
                label="Email"
                returnKeyType="next"
                placeholder={'Email'}
                keyboardType={'email-address'}
                onChangeText={text => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <Input 
                style={styles.input}
                label="Password"
                returnKeyType="done"
                placeholder={'Password'}
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
            <TextButton
                title={'Olvide mi contraseña'}
            />
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
