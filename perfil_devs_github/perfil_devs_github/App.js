import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput,
  Pressable,
  Text,
} from 'react-native';
import * as Axios from 'axios';
import { styles } from './style';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      item: [],
    };
  }

  buscarUser = () => {
    Axios.get(`https://api.github.com/users/${this.state.user}`)
      .then((response) => {
        this.setState({ item: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        return console.log(error);
      });
  };

  render() {
    let img = '';
    if (this.state.item.avatar_url == undefined) {
      img =
        'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
    } else {
      img = this.state.item.avatar_url;
    }

    return (
      <View style={styles.container}>
        <Image source={{ uri: img }} style={{ width: 300, height: 300 }} />

        <Text>Digite seu Usuario</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu usuario do Github"
            onChangeText={(user) => this.setState({ user })}
            value={this.state.user}
          />
          <View>
            <Pressable style={styles.button} onPress={this.buscarUser}>
              <Text>OK</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.list}>
          <Text>Id: {this.state.item.id}</Text>
          <Text>Nome: {this.state.item.name}</Text>
          <Text>Repositórios: {this.state.item.public_repos}</Text>
          <Text>Criado em: {this.state.item.created_at}</Text>
          <Text>Seguidores: {this.state.item.followers}</Text>
          <Text>Seguindo: {this.state.item.following}</Text>
        </View>
      </View>
    );
  }
}

export default App;
