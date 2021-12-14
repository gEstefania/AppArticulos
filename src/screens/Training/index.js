import { View, Image, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles/index';

const index = () => {
  const dataList = [
    {
      name: 'Desde cero',
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
      <TouchableOpacity style={styles.btnCard}>
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <Text style={styles.cardTitle}>{item.name}</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.row}>
              <Image source={require('../../assets/img/icons/home.jpg')} style={styles.icon}/>
              <View style={styles.columnText}>
                <Text style={styles.infoText}>6 videos</Text>
              </View>
            </View>
            <View style={styles.row}>
              <Image source={require('../../assets/img/icons/home.jpg')} style={styles.icon}/>
              <View style={styles.columnText}>
                <Text style={styles.infoText}>40 minutos</Text>
              </View>
            </View>
            <View style={styles.row}>
              <Image source={require('../../assets/img/icons/home.jpg')} style={styles.icon}/>
              <View style={styles.columnText}>
                <Text style={styles.infoText}>2,122 inscritos</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text>Autem vel eum iriuere dolor in hendreit in vulpurate velit</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return(
    <View style={styles.mainContainer}>
      <Image/>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>#Construcciones</Text>
        <Text>Ver todo</Text>
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

export default index;