import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardMap from '../screens/Dashboard/DashboardMap';
import UserScreen from '../screens/User/UserScreen';
import NewUserScreen from '../screens/NewUser/NewUserScreen';
import EditUserScreen from '../screens/NewUser/EditUserScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../core/theme';
import SideMenuContent from './SideMenuContent';

const MainStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStackNavigator = ({ navigation }) => {
   return (
      <MainStack.Navigator>
         <MainStack.Screen
            name="DashboardMap"
            component={DashboardMap}
            options={{
               title: '',
               headerShown: false,
            }}
         />
         <MainStack.Screen
            name="UserScreen"
            component={UserScreen}
            options={{
               title: 'Usuario',
               headerRight: () => (
                  <TouchableOpacity
                     name="menu"
                     size={30}
                     color={theme.colors.primary}
                     backgroundColor="white"
                     onPress={() => navigation.navigate('EditUserScreen')}>
                     <Text style={styles.edit}>Editar</Text>
                  </TouchableOpacity>
               ),
            }}
         />
         <MainStack.Screen
            name="EditUserScreen"
            component={EditUserScreen}
            options={{ title: 'Editar Usuario' }}
         />
      </MainStack.Navigator>
   );
};

const SettingsStackNavigator = ({ navigation }) => {
   return (
      <SettingsStack.Navigator>
         <SettingsStack.Screen
            name="NewUserScreen"
            component={NewUserScreen}
            options={{
               title: 'Crear usuario',
               headerLeft: () => (
                  <Icon.Button
                     name="menu"
                     size={30}
                     color={theme.colors.primary}
                     backgroundColor="white"
                     onPress={() => navigation.openDrawer()}></Icon.Button>
               ),
            }}
         />
      </SettingsStack.Navigator>
   );
};

const DrawerStackNavigator = () => {
   return (
      <Drawer.Navigator
         initialRouteName="Inicio"
         drawerContent={(props) => <SideMenuContent {...props} />}>
         <Drawer.Screen name="inicio" component={MainStackNavigator} />
         <Drawer.Screen
            name="crear-usuario"
            component={SettingsStackNavigator}
         />
      </Drawer.Navigator>
   );
};

const styles = StyleSheet.create({
   edit: {
      fontSize: 17,
      marginRight: 10,
      fontWeight:'500'
   },
});

export default DrawerStackNavigator;
