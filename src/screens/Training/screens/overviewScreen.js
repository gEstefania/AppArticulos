import * as React from 'react';
import { View, Text, Image } from "react-native";
import styles from './styles/overviewScreen';

const overviewScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.summaryContainer}>
                <View style={styles.row}>
                    <Image source={require('../../../assets/img/icons/home.jpg')} style={styles.icon}/>
                    <View style={styles.columnText}>
                        <Text style={styles.infoText}>6 videos</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <Image source={require('../../../assets/img/icons/home.jpg')} style={styles.icon}/>
                    <View style={styles.columnText}>
                        <Text style={styles.infoText}>40 minutos</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <Image source={require('../../../assets/img/icons/home.jpg')} style={styles.icon}/>
                    <View style={styles.columnText}>
                        <Text style={styles.infoText}>2,122 inscritos</Text>
                    </View>
                </View>
            </View>
            <View style={styles.descContainer}>
                <Text>Aprenderemos a</Text>
                <Text>autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</Text>
            </View>
        </View>
    )
}

export default overviewScreen;