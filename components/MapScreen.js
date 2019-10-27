import React, { Component } from 'react'
import { StyleSheet, Dimensions, Text, View } from 'react-native'
import MapView from 'react-native-maps'
import Styles from './styles/styles'

export default class MapScreen extends Component {
   render() {
      return (
            <View>
               <MapView style={Styles.map}/>
            </View>
      );
   }
}