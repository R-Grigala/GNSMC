import { StyleSheet, Text, Image} from 'react-native';
import React, {useEffect, useState, useCallback}from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { formatData } from '../../utils/formatData';
import { useRoute } from '@react-navigation/native';
import { eqColor } from '../../utils/utils';

const EqMapDetail = ({data}) => {

  // Get latitude and longitude from the route params
  const route = useRoute()
  const {eqId, latitude, longitude} = route.params

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
      showsMyLocationButton={false}
      showsUserLocation={false}
    >
      {values.map((eqEvent, index) => (
        <Marker 
          key={index} 
          coordinate={{
            latitude:eqEvent.latitude,
            longitude:eqEvent.longitude,
          }}
        >
          {/* Display the earthquake icon */}
          <Image
            style={styles.markerIcon}
            source={{
              uri: eqColor(eqId, eqEvent.origin_time, eqEvent.id),
            }}
          />
          <Callout
            style={styles.callout}
          >
            {/* Display earthquake details */}
            <Text>
              <Text style={styles.text}>დრო(UTC):  </Text>{formatData(eqEvent.origin_time)}
            </Text>
            <Text>
              <Text style={styles.text}>გან/გრძ: </Text>{eqEvent.latitude} / {eqEvent.longitude}
            </Text>
            <Text>
              <Text style={styles.text}>მაგნიტუდა: </Text>{eqEvent.ml}
            </Text>
            <Text>
              <Text style={styles.text}>DEPTH: </Text>{eqEvent.depth}
            </Text>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({

  mapview: {
    flex: 5,
  },
  markerIcon: {
    width: 30,
    height: 30,
  },
  callout: {
    width: 230,
    margin: 10,
  },
  text: {
    fontSize: 15, fontWeight: 'bold' 
  }
});

export default EqMapDetail;