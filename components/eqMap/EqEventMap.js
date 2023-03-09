import { StyleSheet } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { EQ_DATA } from '../../data/EqData';

const Map = () => {
  return (
    <MapView 
        style={styles.mapview}
        initialRegion={{
        latitude: 42.0186,
        longitude: 43.9911,
        latitudeDelta: 10,
        longitudeDelta: 10,
        }}
        mapType="standard"
        showsMyLocationButton={true}
        showsUserLocation={true}
    >
      {EQ_DATA.map((eqEvent, index) => (
        <Marker 
          key={index} 
          coordinate={{
            latitude:eqEvent.latitude,
            longitude:eqEvent.longitude,
          }} 
        />
      ))}
  </MapView>
  );
};

const styles = StyleSheet.create({

  mapview: {
    flex:5,
  },
  });

export default Map