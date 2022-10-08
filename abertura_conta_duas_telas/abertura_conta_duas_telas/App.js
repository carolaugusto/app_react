import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Home';
import Infos from './src/Infos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Abertura de Conta" component={Home} />
        <Stack.Screen name="Informações" component={Infos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
