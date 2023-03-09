import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { EQ_DATA } from '../../data/EqData';
import { useNavigation } from '@react-navigation/native';

const Map = () => {
  const navigation = useNavigation();
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
        showsMyLocationButton={true}
        showsUserLocation={true}
    >
      {EQ_DATA.map((event, index) => (
        <Marker 
          key={index} 
          coordinate={{
            latitude:event.latitude,
            longitude:event.longitude,
          }}
        >
          <Callout>
            <TouchableOpacity 
              onPress={()=> navigation.navigate(
                "EventDetailScreen", 
                {eqId: event.id, origin_time: event.origin_time, ml: event.ml, depth: event.depth, description: event.description}
              )}
              >
              <Text>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>დრო(UTC): </Text>{event.origin_time}
              </Text>
              <Text>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>გან/გრძ: </Text>{event.latitude} / {event.longitude}
              </Text>
              <Text>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>მაგნიტუდა: </Text>{event.ml}
              </Text>
              <Text>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>DEPTH: </Text>{event.depth}
              </Text>
            </TouchableOpacity>
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

export default Map