import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 20,
  },
  banner: {
    flex: 3,
    justifyContent: 'center',
    marginBottom: 20,
    padding: 20,
    borderRadius: 20,
  },
  bannerTitle: {
    maxWidth: 150,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  btnStep: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
  },
  circle: {
    width: 15,
    height: 15,
    margin: 10,
    borderRadius: 100,
  },
  btnText:{
    fontFamily: 'Poppins-Regular',
  },
});