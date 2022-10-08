import React, { Component } from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider'
import { styles } from './style'
import ButtonRegister from '../components/ButtonRegistrer';
 
class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: "",
      idade: "",
      opSexo: [
        { cod: 0, value: 'M', label: 'Masculino' },
        { cod: 1, value: 'F', label: 'Feminino' },
      ],
      sexo: 'M',
      opEscolaridade: [
        { cod: 0, value: 'EF', label: 'Ensino Fundamental' },
        { cod: 1, value: 'EM', label: 'Ensino Médio' },
        { cod: 2, value: 'ES', label: 'Ensino Superior' },
      ],
      escolaridade: 'EF',
      limitValue: 500,
      brasileiro: true
    };
    
    this.setNome = this.setNome.bind(this);
    this.setIdade = this.setIdade.bind(this);
  }
 
  setNome(text){
    this.setState({ nome: text });
  }

  setIdade(text){
    this.setState({ idade: text });
  }

  setSexo(value) {
    this.setState({ sexo: value })
  }

  setEscolaridade(value) {
    this.setState({ escolaridade: value })
  }

  setLimitValue(value) {
    this.setState({ limitValue: value })
  }

  setBrasileiro(state) {
    this.setState({ brasileiro: state })
  }

  render(){
    
    const sexoItems = this.state.opSexo.map(({ cod, value, label }) => {
      return <Picker.Item key={cod} value={value} label={label} />
    })

    const escolaridadeItems = this.state.opEscolaridade.map(({ cod, value, label }) => {
      return <Picker.Item key={cod} value={value} label={label} />
    })

    return(
      <View style={styles.container}>
        
        <View style={styles.containerInput}>
          <Text style={styles.label}>Nome: </Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            onChangeText={this.setNome}
          />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Idade: </Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua idade"
            onChangeText={this.setIdade}
          />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Sexo: </Text>
          <Picker 
            style={styles.input}
            selectedValue={this.state.sexo}
            onValueChange={(itemValue, itemIndex) => this.setSexo(itemValue)}
          >
            { sexoItems }
          </Picker>
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Escolaridade: </Text>
          <Picker 
            style={styles.input}
            selectedValue={this.state.escolaridade}
            onValueChange={(itemValue, itemIndex) => this.setEscolaridade(itemValue)}
          >
            { escolaridadeItems }
          </Picker>
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Limite: </Text>
          <Slider 
            style={styles.input}
            minimumValue={100}
            maximumValue={1000}
            step={10}
            onValueChange={value => this.setLimitValue(value)}
            value={this.state.limitValue}
          />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Brasileiro: </Text>
          <Switch 
            value={this.state.brasileiro}
            onValueChange={state => this.setBrasileiro(state)}
          />
        </View>
  
        <View style={styles.containerButton}>
          <ButtonRegister props={this.state} />
        </View>

      </View>
    );
  }
}
 
export default Home;