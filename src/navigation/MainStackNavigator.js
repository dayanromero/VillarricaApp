import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardMap from '../screens/DashboardMap';
import UserScreen from '../screens/UserScreen';
import NewUserScreen from '../screens/NewUserScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from '../core/theme';

const MainStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStackNavigator = ({navigation}) => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name='DashboardMap'
        component={DashboardMap}
        options={{
          title: '',
          headerShown: false
        }}
      />
      <MainStack.Screen
        name='UserScreen'
        component={UserScreen}
        options={{title:'Usuario'}}
      />
    </MainStack.Navigator>
  )
}

const SettingsStackNavigator = ({navigation}) => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name='NewUserScreen'
        component={NewUserScreen}
        options={{
          title:'Crear usuario',
          headerLeft: () => (
            <Icon.Button name='ios-menu' size={25}
              backgroundColor= 'black'
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
      <Drawer.Navigator initialRouteName='Inicio'>
        <Drawer.Screen name='Inicio' component={MainStackNavigator}/>
        <Drawer.Screen name='Crear usuario' component={SettingsStackNavigator} />
      </Drawer.Navigator>
  );
}

export default DrawerStackNavigator;