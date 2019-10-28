import { StyleSheet, Dimensions } from 'react-native'

export default Styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'deeppink',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  titleView: {
    backgroundColor: 'navy',
    justifyContent: 'center',
    height: 30,
    marginTop: 23
  }
}); 