import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, {useEffect, useState, useCallback}from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { formatData } from '../../utils/formatData';
import { eqColor } from '../../utils/utils';

const EqMap = ({data}) => {

  const navigation = useNavigation();

  const [values, setValues] = useState([]);
  // Sort the data array by origin_time in descending order
  const valuesCallback = useCallback(() => {
      if (data && data.length > 0) {
          const sortedData = [...data].sort(
            (a, b) => new Date(b.origin_time) - new Date(a.origin_time)
          );
          setValues(sortedData);
      }
  }, [data, setValues]);

  useEffect(() => {
      valuesCallback();
  }, [valuesCallback]);

  const handleMarkerPress = (event) => {
    navigation.navigate('MapDetailScreen', {
      eqId: event.id,
      origin_time: event.origin_time,
      ml: event.ml,
      latitude: event.latitude,
      longitude: event.longitude,
      depth: event.depth,
      description: event.description,

    });
  };

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
      {values.map((eqEvent, index) => (
        <Marker 
          key={index} 
          coordinate={{
            latitude: eqEvent.latitude,
            longitude: eqEvent.longitude,
          }}
        >
          <Image
            style={styles.markerIcon}
            source={{
              uri: eqColor(eqEvent.origin_time),
          }}
          />
          <Callout onPress={() => handleMarkerPress(eqEvent)}>
            <TouchableOpacity >
              <View style={{ flexDirection: 'row', alignItems: 'center', width: 290, height: 75 }}>
                <Text style={{ padding: 0, margin: 0 }}>
                  {/* Display earthquake details */}
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>დრო(UTC): </Text>{formatData(eqEvent.origin_time)}
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{'\n'}გან/გრძ: </Text>{eqEvent.latitude} / {eqEvent.longitude}
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{'\n'}მაგნიტუდა: </Text>{eqEvent.ml}
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{'\n'}DEPTH: </Text>{eqEvent.depth}
                </Text>
                <View style={{ marginBottom: 18, marginTop: 17, marginLeft: 30 }}>
                  {/* Display alert icon */}
                  <Ionicons name='alert-circle-outline' size={40} color='#4083ff' />
                </View>
              </View>
            </TouchableOpacity>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  mapview: {
    flex: 1,
  },
  markerIcon: {
    width: 30,
    height: 30,
  }
});

export default EqMap;
