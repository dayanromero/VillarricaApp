//import liraries
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

// create a component
const AuthContainer = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 200,
        alignItems: 'center'
    },
});

//make this component available to the app
export default AuthContainer;
