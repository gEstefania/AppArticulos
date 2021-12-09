import { FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles/articleScreen';

const article = ({route, navigation}) => {
  const color = route.params.color;
  const dataList = [
    {
      name: 'Lorem ipsum',
    },
    {
      name: 'Lorem ipsum',
    },
    {
      name: 'Lorem ipsum',
    },
    {
      name: 'Lorem ipsum',
    },
    {
      name: 'Lorem ipsum',
    },
    {
      name: 'Lorem ipsum',
    },
    {
      name: 'Lorem ipsum',
    },
    {
      name: 'Lorem ipsum',
    },
  ];

  const renderList = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Step", { title: item.name, color: color} )}
        style={[styles.btnSteps, {backgroundColor: color,}]}
      >
        <Text style={styles.btnText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return(
    <View style={styles.mainContainer}>
      <Text style={[styles.titleArticle, {color: color ,}]}>{route.params.title}</Text>
      <FlatList
        data={dataList}
        renderItem={renderList}
        //keyExtractor={item => item.id}
        numColumns={2}
        style={styles.btnList}
        columnWrapperStyle={{justifyContent: 'space-between'}}
      />
    </View>
  )
}

export default article;