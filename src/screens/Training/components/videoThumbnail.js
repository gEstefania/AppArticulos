import React from 'react';
import style from './styles/VideoThumbnail';
import {View} from 'react-native'
import Video from 'react-native-video';
//import {Icon} from 'react-native-elements';

const VideoThumbnail=()=>{
  // console.log(uri)
    return(
        <View style={style.containerItem}>
          <Video
            resizeMode="cover"
            //source={{uri: }}
            style={style.item}
          />
          <View style={style.containerIconItem}>
            
          </View>
        </View>
    )
}

export default VideoThumbnail;

/*<Icon
name="play-circle"
type="font-awesome-5"
size={48}
color="#fff"
/>*/