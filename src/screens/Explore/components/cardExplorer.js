import * as React from 'react';
import { View, Text, TouchableOpacity } from "react-native"
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles/cardExplorer';

const cardExplorer = () => {
  const dataList = [
    {
      name: 'Destacados',
    },
    {
      name: 'Etiquetas',
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
      <TouchableOpacity style={styles.btnCard}>
        <Text style={styles.cardTitle}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return(
    <View style={styles.mainContainer}>
      <Text>Recomendado</Text>
      <FlatList
        horizontal
        data={dataList}
        renderItem={renderList}
        //keyExtractor={item => item.id}
        style={styles.cardsList}
      />
    </View>
  )
}
export default cardExplorer;