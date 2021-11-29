import { FlatList, Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles/topicScreen';

const topic = ({title, titleColor}) => {
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
            <TouchableOpacity style={styles.btnArticle}>
                <Text style={styles.btnText}>{item.name}</Text>
            </TouchableOpacity>
        );
    };
    return(
        <View style={styles.mainContainer}>
          <Text style={styles.topicTitle}>Ayuda <Text style={{color: '#e55773'}}>Social</Text></Text>
          <ImageBackground
          resizeMode="cover"
          style={styles.imageBackground}
          source={require('../../../../assets/img/FBO-bannerSocial.jpg')}>
          <Text style={styles.imageText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
          </ImageBackground>
          <FlatList
          data={dataList}
          renderItem={renderList}
          style={styles.bntList}
          />
        </View>
    )
}

export default topic