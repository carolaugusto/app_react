import React from 'react';
import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View>
      <Text
        style={{
          color: '#000',
          fontSize: 47,
          marginTop: 100,
          marginBottom: 25,
        }}>
        Home- Arraste para lado para acessar o menu Drawer
      </Text>
    </View>
  );
}
