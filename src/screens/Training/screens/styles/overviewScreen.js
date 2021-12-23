import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  summaryContainer:{
    flex: 1,
    backgroundColor: 'rgba(255, 155, 4, 0.5)', //se va a sustituir por una imagen.
    marginBottom: 30,
    padding: 30,
    borderRadius: 30,
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row',
  },
  columnText:{
    marginLeft: 20,
    justifyContent: 'center',
  },
  descContainer: {
    flex: 2,
  },
});