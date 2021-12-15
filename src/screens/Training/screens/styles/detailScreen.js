import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  titleCard:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
    borderRadius: 18,
    backgroundColor: '#ECF1FE',
  },
  detailCard: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 20,
  },
  imgContainer: {
    flex: 1,
  },
  img:{
    width: '100%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: '#ECF1FE',
  },
  nameCard:{
    flex: 3,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  speakerText:{
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
  },
  nameSpeakerText:{
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  contentView: {
    flex: 4,
  },
});