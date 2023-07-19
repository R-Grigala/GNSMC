import { StyleSheet, Text, Image, Dimensions} from 'react-native';
import React, {useEffect, useState}from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { formatData } from '../../utils/formatData';
import { useRoute } from '@react-navigation/native';
import { eqColor } from '../../utils/utils';

const EqMapDetail = ({data}) => {

  // Get latitude and longitude from the route params
  const route = useRoute()
  const {eqId, latitude, longitude} = route.params

  const [values, setValues] = useState([]);
  // Sort the data array by origin_time in ascending order
  useEffect(() => {
      if (data && data.length > 0) {
          const sortedData = [...data].sort(
            (a, b) => new Date(a.origin_time) - new Date(b.origin_time)
          );
          setValues(sortedData);
      }
  }, [data]);

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

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mapview: {
    flex: 4, // Take 4 part of the available height
    width: width, // Take the full width of the screen
    height: height, // Take the full height of the screen
  },
  markerIcon: {
    width: width * 0.07, // Adjust the width based on the screen width (10% of the screen width)
    height: width * 0.07, // Adjust the height based on the screen width (10% of the screen width)
  },
  callout: {
    width: width * 0.6, // Adjust the width based on the screen width (80% of the screen width)
    margin: 10,
  },
  text: {
    fontSize: width * 0.04, // Adjust the font size based on the screen width (3% of the screen width)
    fontWeight: 'bold',
  },
});

export default EqMapDetail;