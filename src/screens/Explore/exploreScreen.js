import * as React from 'react';
import { View, Text } from "react-native";
import Swiper from "react-native-swiper";
import CardExplorer from './components/cardExplorer';
import styles from './styles/explorerScreen';

const exploreScreen = () => {
    return (
        <View style={styles.mainContainer}>
          <View style={styles.subContainer}>
            <Swiper
              index={0}
              loop= {true}
              controlsProps={{
                dotsTouchable: true,
                nextTitle: '',
                prevTitle: '',
              }}
              dotStyle= {styles.dotStyle}
              activeDotStyle= {styles.activeDotStyle}
            >
            <View style={styles.swiperContainer}>
              <Text style={styles.titleSlide}>Avances Médicos</Text>
            </View>
            <View style={styles.swiperContainer}>
                <Text style={styles.titleSlide}>Lorem Ipsum</Text>
            </View>
            <View style={styles.swiperContainer}>
                <Text style={styles.titleSlide}>Lorem Ipsum</Text>
            </View>
            <View style={styles.swiperContainer}>
                <Text style={styles.titleSlide}>Lorem Ipsum</Text>
            </View>
            </Swiper>
          </View>
        <CardExplorer/>
        </View>
    )
}

export default exploreScreen;