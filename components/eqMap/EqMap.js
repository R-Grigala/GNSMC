import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { formatData } from '../../utils/formatData';
import { eqColor } from '../../utils/utils';
import { useTranslation } from 'react-i18next';

const EqMap = ({data}) => {

  const {t} = useTranslation();
  const navigation = useNavigation();

  const handleMarkerPress = (event) => {
    navigation.navigate('MapDetailScreen', {
      eqId: event.id,
      origin_time: formatData(event.origin_time),
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
      {data.map((eqEvent, index) => (
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
              uri: eqColor(null, eqEvent.origin_time, eqEvent.id),
          }}
          />
          <Callout onPress={() => handleMarkerPress(eqEvent)}>
            <TouchableOpacity >
              <View style={styles.callout}>
                <Text style={styles.textBox}>
                  {/* Display earthquake details */}
                  <Text style={styles.text}>{t('time_UTC')}</Text>{formatData(eqEvent.origin_time)}
                  <Text style={styles.text}>{'\n'}{t('lat_long')} </Text>{eqEvent.latitude} / {eqEvent.longitude}
                  <Text style={styles.text}>{'\n'}{t('magnitude')} </Text>{eqEvent.ml}
                  <Text style={styles.text}>{'\n'}{t('depth_km')} </Text>{eqEvent.depth}
                </Text>
                <View style={{ marginBottom: 18, marginTop: 17, marginLeft: 30 }}>
                  {/* Display alert icon */}
                  <Image 
                    style={{width: 40, height: 40, tintColor: '#4083ff'}}
                    source={
                        require('../../assets/icons/alert-circle-outline.png')
                      }
                  />
                </View>
              </View>
            </TouchableOpacity>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  mapview: {
    flex: 1,
  },
  markerIcon: {
    width: width * 0.07, // Adjust the width based on the screen width (7% of the screen width)
    height: width * 0.07, // Adjust the height based on the screen width (7% of the screen width)
  },
  callout: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.75, // Adjust the width based on the screen width (75% of the screen width)
    height: width * 0.2, // Adjust the height based on the screen width (20% of the screen width)
  },
  textBox: {
    padding:0,
    margin:0,
  },
  text: {
    fontSize: width * 0.04, // Adjust the font size based on the screen width (3% of the screen width)
    fontWeight: 'bold',
  },
});

export default EqMap;
