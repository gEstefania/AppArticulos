import { FlatList, Text, TouchableOpacity, View, Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles/stepScreen';

const stepScreen = () => {
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
            <TouchableOpacity style={styles.btnStep}>
                <View style={[styles.circle, {backgroundColor: '#5f40d5'}]}></View>
                <Text style={styles.btnText}>{item.name}</Text>
                <Image/>
            </TouchableOpacity>
        );
    };
    return(
        <View style={styles.mainContainer}>
            <View style={[styles.banner, {backgroundColor: '#5f40d5'}]}>
                <Text style={styles.bannerTitle}>Primeros pasos legales</Text>
            </View>
            <FlatList
            data={dataList}
            renderItem={renderList}
            />
        </View>
    )
}

export default stepScreen;