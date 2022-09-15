import React, { Component } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { styles } from "./style"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      height: 0,
      result: ""
    };

    this.setWeight = this.setWeight.bind(this);
    this.setHeight = this.setHeight.bind(this);
  }

  setWeight(text) {
    if (!parseFloat(text)) return alert('Digite um valor numérico valido')
    this.setState({ weight: parseFloat(text) });
  }

  setHeight(text) {
    if (!parseFloat(text)) return alert('Digite um valor numérico valido')
    this.setState({ height: parseFloat(text) });
  }

  calc() {
    if (!this.state.height || !this.state.weight) return alert("Preencha os campos corretamente")
    const height = this.state.height / 100;

    const imc = this.state.weight / (height * height);
    if (imc < 18.5) {
      this.setState({ result: `Abaixo do Peso (${imc.toFixed(2)})` })
    } else if (imc >= 18.6 && imc < 25) {
      this.setState({ result: `Peso Normal (${imc.toFixed(2)})` })
    } else if (imc >= 25 && imc < 30) {
      this.setState({ result: `Sobrepeso (${imc.toFixed(2)})` })
    } else if (imc >= 30 && imc < 35) {
      this.setState({ result: `Obesidade Grau I (${imc.toFixed(2)})` })
    } else if (imc >= 35 && imc < 39.9) {
      this.setState({ result: `Obesidade Grau II (${imc.toFixed(2)})` })
    } else if (imc >= 40) {
      this.setState({ result: `Obesidade Grau III (${imc.toFixed(2)})` })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cálculo de IMC</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o peso em kg"
          onChangeText={this.setWeight}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite a altura em cm"
          onChangeText={this.setHeight}
        />

        <Pressable onPress={() => this.calc()} style={[styles.button, styles.buttonColor]}>
          <Text style={styles.buttonText}>Calcular</Text>
        </Pressable>

        {
          this.state.result && <Text style={styles.result}> {this.state.result} </Text>
        }
      </View>
    );
  }
}

export default App;