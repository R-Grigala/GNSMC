import { StyleSheet, Text, Image} from 'react-native';
import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';

const EqEventMap = ({data}) => {

  const route = useRoute()

  const {latitude, longitude} = route.params

  return (
    <MapView 
        style={styles.mapview}
        initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 1,
        longitudeDelta: 1,
        }}
        mapType="standard"
        showsMyLocationButton={true}
        showsUserLocation={true}
    >
      {data.map((eqEvent, index) => (
        <Marker 
          key={index} 
          coordinate={{
            latitude:eqEvent.latitude,
            longitude:eqEvent.longitude,
          }} 
        >
          <Callout>
            <Text>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>დრო(UTC): </Text>{eqEvent.origin_time}
            </Text>
            <Text>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>გან/გრძ: </Text>{eqEvent.latitude} / {eqEvent.longitude}
            </Text>
            <Text>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>მაგნიტუდა: </Text>{eqEvent.ml}
            </Text>
            <Text>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>DEPTH: </Text>{eqEvent.depth}
            </Text>
          </Callout>
        </Marker>
      ))}
  </MapView>
  );
};

const styles = StyleSheet.create({

  mapview: {
    flex:10,
  },
  markerIcon: {
    width:20,
    height:20
  }
});

export default EqEventMap;