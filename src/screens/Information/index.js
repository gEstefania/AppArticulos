import { FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles/index';
import Card from './components/card';

const index = ({}) => {

  return(
    <View style={styles.mainContainer}>
      <Card title={'Social'} cardColor={'#e55773'}/> 
      <Card title={'Legal'} cardColor={'#5f40d5'}/> 
      <Card title={'Psicología'} cardColor={'#ff5f00'}/> 
    </View>
     
  )
  
}
export default index;