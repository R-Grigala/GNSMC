import { StyleSheet } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const locations = [
  { latitude:  41.9211, longitude: 42.6545 },
  { latitude: 42.4861, longitude: 41.2193 },
  { latitude: 42.7463, longitude: 44.89 },
  { latitude: 41.965, longitude: 46.0151 },
  { latitude: 41.7155, longitude: 45.851 },
  { latitude: 42.592, longitude: 43.4471 },
  { latitude: 43.2536, longitude: 41.4971 },
  { latitude: 41.33, longitude: 46.3945 },
  { latitude: 41.5056, longitude: 45.0466 },
  { latitude:  41.143, longitude: 43.9198 },
];

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
      {locations.map((location, index) => (
        <Marker key={index} coordinate={location} />
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