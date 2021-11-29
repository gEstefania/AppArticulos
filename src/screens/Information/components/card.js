import { FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles/card';

const card = ({title, cardColor}) => {
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
          <View style={[styles.cardView, {backgroundColor: cardColor}]}>
            <Text style={styles.cardTitle}>{item.name}</Text>
          </View>
            
        );
    };

    return(
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
          <Text style={styles.titleSection}>{title}</Text>
            <TouchableOpacity>
              <Text style={[styles.cardText, {color: cardColor}]}>Ver todo</Text>
            </TouchableOpacity>
          </View>
            <FlatList
              data={dataList}
              renderItem={renderList}
              horizontal
            />
        </View>
        

    )
}

export default card;