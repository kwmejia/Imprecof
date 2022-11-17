import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { OrdersNoPendingScreen, OrdersScreen } from '../screens/';


const Tab = createMaterialTopTabNavigator();

export const TopTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="OrdersScreen" component={OrdersScreen} options={{ title: 'Pendientes' }} />
      <Tab.Screen name="OrdersNoPendingScreen" component={OrdersNoPendingScreen} options={{ title: 'asignados' }} />
    </Tab.Navigator>
  );
}