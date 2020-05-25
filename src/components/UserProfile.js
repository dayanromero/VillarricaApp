import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { UserInfo, UserActivity } from '../screens';
import { theme } from '../core/theme';

const Tab = createMaterialTopTabNavigator();

export default function UserProfile() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: 'grey',
        activeBackgroundColor: 'black',
        tabStyle:{
          height: 60,
        },
        labelStyle: {
          fontSize: 18,
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name="UserInfo"
        component={UserInfo}
        options={{ title: 'Informacion'}}
      />
      <Tab.Screen
        name="UserActivity"
        component={UserActivity}
        options={{ title: 'Actividad'}}
      />
    </Tab.Navigator>
  );
}