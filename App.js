import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MapScreen from './components/map-screen';
import { Styles } from './styles/styles'

export default class App extends Component {
  render() {
    return (
      <View style={Styles.titleView}>
        <Text style={Styles.title}>URIT</Text>
        <MapScreen />
      </View>
    );
  }
}


