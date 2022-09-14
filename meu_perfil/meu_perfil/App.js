import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  containerLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50
  },
  frame: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(100, 100, 100, .1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInfos: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 30,
    paddingBottom: 5,
    marginBottom: 10,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  text: {
    fontSize: 16,
    color: '#333'
  }
})
 
const App = () => {
  const char = '-'

  return(
    <ScrollView>
      <View style={styles.containerLogo}>
        <View style={styles.frame}>
          <Image 
            source={{ uri: 'http://1.bp.blogspot.com/-tXPzPpu4pVE/Us2hzeWonQI/AAAAAAAAMJA/MG-VX7666to/s1600/42.png' }}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Dados Pessoais</Text>
        <Text style={styles.text}>{char} Ana Carolina Augusto</Text>
        <Text style={styles.text}>{char} 21 anos</Text>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Formação</Text>
        <Text style={styles.text}>{char} FIAP - Defesa Cibernética </Text>
        <Text style={styles.text}>{char} FIAP - Sistemas para a Internet </Text>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Experiência</Text>
        <Text style={styles.text}>{char} Jovem Aprendiz em Infraestrutura</Text>
        <Text style={styles.text}>{char} Jovem Aprendiz em Desenvolvimento</Text>
        <Text style={styles.text}>{char} Estagiária em Desenvolvimento</Text>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Projetos</Text>
        <Text style={styles.text}>{char} 4Special: Jogos para crianças com necessidades especiais</Text>
        <Text style={styles.text}>{char} Vector: Aplicativo com autenticação de voz</Text>
      </View>
    </ScrollView>
  )
}
 
export default App;
