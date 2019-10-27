import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MapScreen from './components/MapScreen';

export default class App extends Component {
  render() {
    return (
      <View >
        <Text>URIT</Text>
        <MapScreen />
      </View>
    );
  }
}


