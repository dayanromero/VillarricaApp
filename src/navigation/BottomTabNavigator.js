import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import DashboardMap from '../screens/DashboardMap';
import NewUserScreen from '../screens/NewUserScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../core/theme';

const MainStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ({ navigation }) => (
    <Tab.Navigator
        initialRouteName='Inicio'
        activeColor='white'
    >
        <Tab.Screen
            name='Inicio'
            component={DashboardMap}
            options={{
                tabBarLabel: 'Inicio',
                tabBarColor: theme.colors.primary,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name='ios-home' color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen
            name='Agregar usuario'
            component={NewUserScreen}
            screenOptions={{
                headerShown: true,
            }}
            options={{
                tabBarLabel: 'Agregar usuario',
                tabBarColor: theme.colors.primary,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name='ios-person' color={color} size={size} />
                ),
            }}
        />
    </Tab.Navigator>
)

export default MainTabScreen;

const MainStackNavigator = ({ navigation }) => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <MainStack.Screen name="DashboardMap" component={DashboardMap} />
        </MainStack.Navigator>
    )
}

const SettingsStackNavigator = ({ navigation }) => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen
                name="SettingsStack"
                component={SettingsScreen}
                options={{
                    title: 'Settings',
                    headerLeft: () => (
                        <Icon.Button name='ios-menu' size={25}
                            backgroundColor={theme.colors.primary}
                            onPress={() => navigation.openDrawer()}
                        ></Icon.Button>
                    )
                }}
            />
        </SettingsStack.Navigator>
    )
}