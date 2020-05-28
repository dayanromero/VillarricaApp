import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './navigation/AuthStackNavigator';
import DrawerStackNavigator from './navigation/MainStackNavigator';
import Loading from './components/Loading/Loading';

const RootStack = createStackNavigator();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: true,
            loading: false,
        };
    }

    renderScreens() {
      const {user, loading}= this.state;
        if (loading) {
            return <RootStack.Screen name={'Loading'} component={Loading} />;
        }
        return user ? (
            <RootStack.Screen
                name={'MainStack'}
                component={DrawerStackNavigator}
            />
        ) : (
            <RootStack.Screen
                name={'AuthStack'}
                component={AuthStackNavigator}
            />
        );
    }

    render() {
        return (
            <NavigationContainer>
                <RootStack.Navigator screenOptions={{ headerShown: false }}>
                    {this.renderScreens()}
                </RootStack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
