import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';

import { styles } from './style';

class App extends Component {
  render() {
    const imageURL_01 =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtx8TOC501qAUmGzxD75u9jO8_zzJf_4piA&usqp=CAU';
    const imageURL_02 =
      'https://cdn.dooca.store/43397/products/zctuziolejs2mrjnowm6bmzlk6j54htstzrt_495x495+fill_ffffff+crop_center.jpg?v=1653574482';
    const imageURL_03 =
      'https://cdn.dooca.store/43397/products/20842103974_495x495+fill_ffffff+crop_center.jpg?v=1657637602';
    const imageURL_04 =
      'https://cdn.dooca.store/43397/products/swyamokxjvcrex5dr33poyfyeobyy6n3yijr_495x495+fill_ffffff+crop_center.jpg?v=1653578142';

    return (
      <View style={styles.container}>
        <Text style={styles.title}> Anúncio de Produtos </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={[styles.frame]}>
            <Image
              source={{ uri: imageURL_01 }}
              style={{ width: 200, height: 200 }}
            />
            <Text style={styles.text}> Produto 1</Text>
          </View>
          <View style={[styles.frame]}>
            <Image
              source={{ uri: imageURL_02 }}
              style={{ width: 200, height: 200 }}
            />
            <Text style={styles.text}> Produto 2</Text>
          </View>
          <View style={[styles.frame]}>
            <Image
              source={{ uri: imageURL_03 }}
              style={{ width: 200, height: 200 }}
            />
            <Text style={styles.text}> Produto 3</Text>
          </View>
          <View style={[styles.frame]}>
            <Image
              source={{ uri: imageURL_04 }}
              style={{ width: 200, height: 200 }}
            />
            <Text style={styles.text}> Produto 4</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default App;
