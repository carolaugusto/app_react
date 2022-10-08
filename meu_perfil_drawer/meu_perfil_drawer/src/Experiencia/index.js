import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles/styles';

export default function Experiencia() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Experiencia</Text>
      <Button title="Abrir menu" onPress={() => navigation.toggleDrawer()} />
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Experiencia</Text>
        <Text style={styles.text}>{char} Jovem Aprendiz em Infraestrutura</Text>
        <Text style={styles.text}>
          {char} Jovem Aprendiz em Desenvolvimento .NET
        </Text>
        <Text style={styles.text}>
          {char} Estagiaria em Desenvolvimento .NET
        </Text>
      </View>
    </View>
  );
}
