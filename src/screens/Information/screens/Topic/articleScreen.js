import { FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles/articleScreen';


const article = () => {
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
            <TouchableOpacity style={[styles.btnSteps, {backgroundColor: '#5f40d5',}]}>
                <Text style={styles.btnText}>{item.name}</Text>
            </TouchableOpacity>
        );
    };
    return(
        <View style={styles.mainContainer}>
            <Text style={[styles.titleArticle, {color: '#5f40d5',}]}>Beneficios Fiscales</Text>
            <FlatList
            data={dataList}
            renderItem={renderList}
            numColumns={2}
            style={styles.btnList}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            />
        </View>
    )
}

export default article;