import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import {PrimaryText, SecondaryText} from '@common';
import styles from './styles/videoScreen';
import Video from 'react-native-video';
import vid from './video.mp4';

const VideoScreen = () => {
    //const video = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    return(
        <ScrollView style={styles.mainContainer}>
            <View style={styles.videoContainer}>
                <Video
                    resizeMode="cover"
                    source= {vid}
                    //source={{uri: video }}
                    paused={true}
                    style={styles.videoSize}
                    controls={true}
                />
                <View style={styles.videoTitle}>
                    <PrimaryText>Paso 1</PrimaryText>
                    <SecondaryText>¿Cómo empezar?</SecondaryText>
                </View>
            </View>
            <View style={styles.descContainer}>
                <PrimaryText style={styles.sectionTitle}>Descripción</PrimaryText>
                <SecondaryText>autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</SecondaryText>
            </View>
            <View style={styles.resourceContainer}>
                <PrimaryText style={styles.sectionTitle}>Recursos</PrimaryText>
                <View style={styles.downloadCard}>
                    <View>
                        <SecondaryText color={'#fff'} type={'Bold'} style={styles.text}>Guía Basica</SecondaryText>
                        <SecondaryText color={'#fff'} type={'Bold'}>PDF</SecondaryText>
                    </View>
                    <View>
                        <Image/>
                    </View>
                </View>
            </View>
            <View style={styles.taskContainer}>
                <PrimaryText style={styles.sectionTitle}>Tareas</PrimaryText>
                <View style={styles.itemContainer}>
                    <SecondaryText>Descarga la guía básica</SecondaryText>
                </View>
            </View>
        </ScrollView>
    )
};

export default VideoScreen;