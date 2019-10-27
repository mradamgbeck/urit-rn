import React, { Component } from 'react'
import { StyleSheet, Dimensions, Text, View } from 'react-native'
import MapView from 'react-native-maps'

const Styles = StyleSheet.create({
   map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
   }
})

export default class MapScreen extends Component {
   render() {
      return (
            <View>
               <MapView style={Styles.map}/>
            </View>
      );
   }
}