import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginLeft: 10,
    paddingLeft: 20,
    paddingTop: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 50,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: '#ff9b04', 
    fontSize: 20,
  },
  btnCard: {
    width: 300,
    height: 400,
    padding: 20,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    elevation: 1,
  },
  cardTitle: {
    fontSize: 18,
    color: '#ff9b04', 
  },
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#ECF1FE',
  },
  descriptionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  infoContainer:{
    flex: 1,
    flexDirection: 'column',
  },
  icon: {
    width: 25,
    height: 25,
  },
  infoText:{
    fontSize: 12,
    color: '#ff9b04', 
  },
  row: {
    flexDirection: 'row',
  },
  columnText:{
    marginLeft: 10,
    justifyContent: 'center',
  },
});