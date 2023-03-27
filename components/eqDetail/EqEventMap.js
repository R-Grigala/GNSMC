import { StyleSheet, Text } from 'react-native';
import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';

const EqEventMap = () => {

  const route = useRoute()

  const {eqId, origin_time, ml, latitude, longitude, depth} = route.params

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
        <Marker 
          coordinate={{
            latitude:latitude,
            longitude:longitude,
          }} 
        >
          <Callout>
            <Text>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>დრო(UTC): </Text>{origin_time}
            </Text>
            <Text>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>გან/გრძ: </Text>{latitude} / {longitude}
            </Text>
            <Text>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>მაგნიტუდა: </Text>{ml}
            </Text>
            <Text>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>DEPTH: </Text>{depth}
            </Text>
          </Callout>
        </Marker>
  </MapView>
  );
};

const styles = StyleSheet.create({

  mapview: {
    flex:10,
  },
});

export default EqEventMap;