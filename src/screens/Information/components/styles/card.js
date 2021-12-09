import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 50,
  },
  cardView: {
    width: 140,
    height: 140,
    marginRight: 15,
    marginTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    justifyContent: 'flex-end',
    borderRadius: 15,
  },
  titleSection: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ff5f00',
  },
  cardText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e55773',
  },
  cardTitle: {
    maxWidth: 80,
    fontWeight: '600',
    color: '#fff',
  },
});