import React, { Component } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { styles } from "./style"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gasolina: '',
      alcool: '',
      result: ''
    };
    this.calc.bind(this);
  }

  calc = () => {
    const { gasolina, alcool } = this.state;
    let condicao = gasolina / alcool > 0.7;
    let resposta;
    if (condicao) {
      resposta = 'A gasolina é mais vantajosa'
    } else {
      resposta = 'O Alcool é mais vantajoso'
    }
    this.setState({
      result: resposta
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Álcool ou Gasolina?</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o preço do alcool"
          value={this.state.alcool}
          onChangeText={(alcool) => this.setState({ alcool })}
        />

        <TextInput style={styles.input}
          placeholder="Digite o preço da gasolina"
          value={this.state.gasolina}
          onChangeText={(gasolina) => this.setState({ gasolina })}
        />

        <Pressable onPress={() => this.calc()} style={[styles.button, styles.buttonBlue]}>
          <Text style={styles.buttonText}>Verificar</Text>
          <Text style={styles.result}>{this.state.result}</Text>
        </Pressable>

      </View>
    )
  }
}