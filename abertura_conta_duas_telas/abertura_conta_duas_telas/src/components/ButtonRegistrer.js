import React from 'react';
import { Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style'
 
export default function ButtonRegister(props){
  const navigation = useNavigation();
 
  const irInfos = () => {
    navigation.navigate('Informações', { ...props });
  }
 
  return(
    <Pressable 
      onPress={() => irInfos()} 
      style={[styles.button, styles.buttonColorido]}
    >
      <Text style={styles.buttonText}> Confirmar </Text>
    </Pressable>
  )
}