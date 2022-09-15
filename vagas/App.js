import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Card from './src/Card'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: 1,
          title: 'Estagiário de Desenvolvimento',
          salary: 'R$ 1.500',
          jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          contact: '+55 (11) 00000-0000'
        },
        {
          id: 2,
          title: 'Especialista de Dados',
          salary: 'R$ 9.000',
          jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          contact: '+55 (11) 00000-0000'
        },
        {
          id: 3,
          title: 'P.O',
          salary: 'R$ 7.500',
          jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          contact: '+55 (11) 00000-0000'
        },
        {
          id: 4,
          title: 'Analista de Sistemas JR',
          salary: 'R$ 4.500',
          jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          contact: '+55 (11) 00000-0000'
        },
        {
          id: 5,
          title: 'QA SR',
          salary: 'R$ 7.000',
          jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          contact: '+55 (11) 00000-0000'
        },
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Vagas de Emprego TI </Text>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card data={item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
  title: {
    color: 'green',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10
  }
})

export default App;