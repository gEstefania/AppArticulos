import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles/videoScreen';
import Video from 'react-native-video';
import vid from './video.mp4';

const videoScreen = () => {
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
                    <Text>Paso 1</Text>
                    <Text>¿Cómo empezar?</Text>
                </View>
            </View>
            <View style={styles.descContainer}>
                <Text style={styles.sectionTitle}>Descripción</Text>
                <Text>autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</Text>
            </View>
            <View style={styles.resourceContainer}>
                <Text style={styles.sectionTitle}>Recursos</Text>
                <View style={styles.downloadCard}>
                    <View>
                        <Text>Guia Basica</Text>
                        <Text>PDF</Text>
                    </View>
                    <View>
                        <Image/>
                    </View>
                </View>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.sectionTitle}>Tareas</Text>
                <View style={styles.itemContainer}>
                    <Text>Descarga la guía básica</Text>
                </View>
            </View>

        </ScrollView>
    )
};

export default videoScreen;