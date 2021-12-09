import { FlatList, Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles/topicScreen';

const topic = ({route, navigation}) => {
  const color = route.params.color;
  const dataList = route.params.data;
  console.log(dataList)
  const renderList = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Article", { title: item.name, color: color} )}
        style={[styles.btnArticle, {backgroundColor: color}]}
      >
        <Text style={styles.btnText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return(
    <View style={styles.mainContainer}>
      <Text style={styles.topicTitle}>Ayuda <Text style={{color: color}}>{route.params.title}</Text></Text>
      <ImageBackground
      resizeMode="cover"
      style={styles.imageBackground}
      source={require('../../../../assets/img/FBO-bannerSocial.jpg')}>
      <Text style={styles.imageText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      </ImageBackground>
      <FlatList
        data={dataList}
        renderItem={renderList}
        //keyExtractor={item => item.id}
        style={styles.bntList}
      />
    </View>
  )
}

export default topic;