import React, { Component } from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import Styles from '../styles/styles'

export default class MapScreen extends Component {
   render() {
      return (
            <View>
               <MapView 
               showsUserLocation={true} 
               style={Styles.map}/>
            </View>
      );
   }
}