import { StyleSheet, Text, Image} from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
import { formatData } from '../../utils/formatData';
import { eqColor } from '../../utils/utils';
import { useTranslation } from 'react-i18next';

const EqEventMap = ({data}) => {

  const {t} = useTranslation();

  // Get latitude and longitude from the route params
  const route = useRoute()
  const {eqId, latitude, longitude} = route.params

  return (
    <MapView 
      style={styles.mapview}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 1,
        longitudeDelta: 1,
      }}
      mapType="hybrid"
      showsMyLocationButton={false}
      showsUserLocation={false}
    >
      {data.map((eqEvent, index) => (
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
              <Text style={styles.text}>{t('time_UTC')}  </Text>{formatData(eqEvent.origin_time)}
            </Text>
            <Text>
              <Text style={styles.text}>{t('lat_long')} </Text>{eqEvent.latitude} / {eqEvent.longitude}
            </Text>
            <Text>
              <Text style={styles.text}>{t('magnitude')}  </Text>{eqEvent.ml}
            </Text>
            <Text>
              <Text style={styles.text}>{t('depth_km')}  </Text>{eqEvent.depth}
            </Text>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({

  mapview: {
    flex: 10,
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

export default EqEventMap;
