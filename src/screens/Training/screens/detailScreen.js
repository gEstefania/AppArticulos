import * as React from 'react';
import { View, Text, Image } from "react-native";
import styles from './styles/detailScreen';

const deatilScreen = ({route, navigation}) => {
    console.log(route)
    return (
        <View style={styles.mainContainer}>
            <View style={styles.titleCard}>
                <Text>{}</Text>
            </View>
            <View style={styles.detailCard}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img}/>
                </View>
                <View style={styles.nameCard}>
                    <Text style={styles.speakerText}>Ponente</Text>
                    <Text style={styles.nameSpeakerText}>Nombre Apellidos</Text>
                    <Text>Cargo</Text>
                </View>
            </View>
            <View style={styles.contentView}>
                <Text>Contenido</Text>
            </View>
        </View>
    )
}

export default deatilScreen;