import {StyleSheet} from 'react-native';
import {Colors} from '@common';

export default StyleSheet.create({
  mainContainer:{
    flex: 1,
    paddingHorizontal: 20,
  },
  videoContainer:{
    flex: 2,
    marginBottom: 30,
  },
  videoSize:{
    width: '100%',
    height: 300,
  },
  videoTitle:{
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  descContainer:{
    flex: 1,
    marginBottom: 30,
  },
  resourceContainer:{
    flex: 1,
    marginBottom: 30,
  },
  taskContainer:{
    flex: 1,
    marginBottom: 30,
  },
  itemContainer:{
    padding: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.CORPORATE_ORANGE,
  },
  downloadCard:{
    flexDirection: 'row',
    borderRadius: 20,
    paddingHorizontal: 35,
    paddingVertical: 25,
    backgroundColor: Colors.CORPORATE_ORANGE,
  },
  sectionTitle:{
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
  }
});