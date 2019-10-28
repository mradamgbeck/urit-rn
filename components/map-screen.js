import React, { Component } from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import Styles from '../styles/styles'

const LATITUDE = 42.2080042;
const LONGITUDE = -83.5959087;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;

export default class MapScreen extends Component {
   constructor(props) {
      super(props);
      this.state = {
         latitude: LATITUDE,
         longitude: LONGITUDE,
         error: null
      };
   }
   componentDidMount() {
      navigator.geolocation.getCurrentPosition(
         position => {
            this.setState({
               latitude: position.coords.latitude,
               longitude: position.coords.longitude,
               error: null
            });
         },
         error => this.setState({ error: error.message }),
         { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 }
      );
   }
   render() {
      return (
         <View>
            <MapView
               region={{
                  latitude: this.state.latitude,
                  longitude: this.state.longitude,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA
               }}
               showsUserLocation={true}
               style={Styles.map} />
         </View>
      );
   }
}