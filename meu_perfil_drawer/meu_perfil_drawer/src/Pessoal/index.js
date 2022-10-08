import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles/styles';

export default function Pessoal() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Pessoal</Text>
      <Button title="Abrir menu" onPress={() => navigation.toggleDrawer()} />
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Dados Pessoais</Text>
        <Text style={styles.text}>{char} Ana Carolina Augusto</Text>
        <Text style={styles.text}>{char} 21 anos</Text>
        <Text style={styles.text}>{char} RM87820 </Text>
      </View>
    </View>
  );
}
