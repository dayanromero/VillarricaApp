import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Screens
import DashboardMap from '../screens/Dashboard/DashboardMap';
import UserScreen from '../screens/User/UserScreen';
import NewUserScreen from '../screens/NewUser/NewUserScreen';
import NewZone from '../screens/NewZone/NewZone';
import EditUserScreen from '../screens/UpdateUser/EditUserScreen';

//Utilities
import { theme } from '../core/theme';
import SideMenuContent from './SideMenuContent';

const MainStack = createStackNavigator();
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
         <MainStack.Screen
            name="crearCiudadano"
            component={NewUserScreen}
            options={{ title: 'Crear ciudadano' }}
         />
         <MainStack.Screen
            name="crearZona"
            component={NewZone}
            options={{ title: 'Crear Zona' }}
         />
      </MainStack.Navigator>
   );
};

const DrawerStackNavigator = () => {
   return (
      <Drawer.Navigator
         initialRouteName="Inicio"
         drawerContent={(props) => <SideMenuContent {...props} />}>
         <Drawer.Screen name="inicio" component={MainStackNavigator} />
      </Drawer.Navigator>
   );
};

const styles = StyleSheet.create({
   edit: {
      fontSize: 17,
      marginRight: 10,
      fontWeight: '500',
   },
});

export default DrawerStackNavigator;
