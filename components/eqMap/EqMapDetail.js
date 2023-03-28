import { StyleSheet, Text } from 'react-native';
import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { EQ_DATA } from '../../data/EqData';

const EqMapDetail = () => {
  return (
    <MapView 
        style={styles.mapview}
        initialRegion={{
        latitude: 42.0186,
        longitude: 43.9911,
        latitudeDelta: 10,
        longitudeDelta: 10,
        }}
        mapType="hybrid"
        showsMyLocationButton={false}
        showsUserLocation={false}
    >
      {EQ_DATA.map((eqEvent, index) => (
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
    flex:5,
  },
});

export default EqMapDetail;