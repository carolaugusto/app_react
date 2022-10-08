import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/pages/Home';
import Pessoal from './src/pages/Pessoal';
import Experiencia from './src/pages/Experiencia';
import Formacao from './src/pages/Formacao';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'home',
  },
  Pessoal: {
    name: 'people',
  },
  Formacao: {
    name: 'layers-outline',
  },
  Experiencia: {
    name: 'bulb-outline',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Pessoal" component={Pessoal} />
        <Tab.Screen name="Formacao" component={Formacao} />
        <Tab.Screen name="Experiencia" component={Experiencia} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
