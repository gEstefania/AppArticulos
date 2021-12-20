import {StyleSheet} from 'react-native';

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
    borderColor: '#ff9b04',
  },
  downloadCard:{
    flexDirection: 'row',
    borderRadius: 20,
    paddingHorizontal: 35,
    paddingVertical: 25,
    backgroundColor: '#ff9b04',
  },
  sectionTitle:{
    marginBottom: 10,
  },
});