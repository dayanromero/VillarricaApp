import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardMap from '../screens/DashboardMap';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from '../core/theme';

const MainStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStackNavigator = ({navigation}) => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="DashboardMap" component={DashboardMap}/>
    </MainStack.Navigator>
  )
}

const SettingsStackNavigator = ({navigation}) => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsStack"
        component={SettingsScreen}
        options={{
          title:'Settings',
          headerLeft: () => (
            <Icon.Button name='ios-menu' size={25}
              backgroundColor= {theme.colors.primary}
              onPress={()=>navigation.openDrawer()}
          ></Icon.Button>
          )
        }}
      />
    </SettingsStack.Navigator>
  )
}

const DrawerStackNavigator = ()=> {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainStackNavigator}/>
        <Drawer.Screen name="Settings" component={SettingsStackNavigator} />
      </Drawer.Navigator>
  );
}

export default DrawerStackNavigator;