import { View} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles/index';
import Card from './components/card';

const index = (props) => {
  return(
    <View style={styles.mainContainer}>
      <Card title={'Social'} cardColor={'#e55773'} navigation={props.navigation}/> 
      <Card title={'Legal'} cardColor={'#5f40d5'} navigation={props.navigation}/> 
      <Card title={'Psicología'} cardColor={'#ff5f00'} navigation={props.navigation}/> 
    </View>
  )
}
export default index;