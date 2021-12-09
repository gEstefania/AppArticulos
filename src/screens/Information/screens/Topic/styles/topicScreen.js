import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 30,
  },
  topicTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#ff9b04'
  },
  imageBackground: {
    width: '100%',
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginVertical: 20,
  },
  imageText: {
    color: '#fff',
    maxWidth: '65%',
    padding: 30,
  },
  bntList: {
    marginTop: 10,
  },
  btnArticle: {
    flex: 0.20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    borderRadius: 25,
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '800',
    textTransform: 'uppercase',
  },
});