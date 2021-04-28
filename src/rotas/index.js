import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";

import Oficinas from '../telas/Oficinas';
import Detalhes from "../telas/OficinasDetalhe";
import Indicacoes from '../telas/Indicacoes';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function OficinaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Oficinas" component={Oficinas} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: cores.laranja,
          inactiveTintColor: cores.claro,
          activeBackgroundColor: cores.laranja,
          inactiveBackgroundColor: cores.azul,
          style: {
            height: 70,
          },
          labelStyle: {
            width: "100%",
            flex: 1,
            fontWeight: "bold",
            fontSize: 16,
            lineHeight: 21,
            marginTop: 3,
            paddingTop: 21,
            backgroundColor: cores.azul,
          },
          keyboardHidesTabBar: true,
        }}
      >
        <Tab.Screen name="Oficinas" component={OficinaStack} />
        <Tab.Screen name="Indicacoes" component={Indicacoes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export const cores = {
  azul: '#007fff',
  laranja: '#FABE50',
  claro: '#fff',
};