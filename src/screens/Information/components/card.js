import { FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles/card';

const card = ({title, cardColor, navigation}) => {
  const dataList = [
    {
      name: 'Conceptos básicos',
    },
    {
      name: 'Conceptos básicos',
    },
    {
      name: 'Conceptos básicos',
    },
    {
      name: 'Conceptos básicos',
    },
    {
      name: 'Conceptos básicos',
    },
  ];

  const renderList = ({item}) => {
    return (
      <TouchableOpacity
      onPress={() => navigation.navigate("Article", { title: item.name, color: cardColor} )}
        style={[styles.cardView, {backgroundColor: cardColor}]}
      >
        <Text style={styles.cardTitle}>{item.name}</Text>
      </TouchableOpacity>
        
    );
  };

  return(
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
      <Text style={styles.titleSection}>{title}</Text>
        <TouchableOpacity
        onPress={() => navigation.navigate("Topic", { title: title, color: cardColor, data: dataList} )}
        >
          <Text style={[styles.cardText, {color: cardColor}]}>Ver todo</Text>
        </TouchableOpacity>
      </View>
        <FlatList
          horizontal
          data={dataList}
          renderItem={renderList}
          //keyExtractor={item => item.id}
        />
    </View>
  )
}

export default card;