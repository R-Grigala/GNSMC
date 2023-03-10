import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { EQ_DATA } from '../../data/EqData';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const EqMap = () => {
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
                "MapDetailScreen", 
                {eqId: event.id, origin_time: event.origin_time, ml: event.ml, depth: event.depth, description: event.description}
              )}
              >
              <View style={{ flexDirection: 'row', alignItems: 'center', width:290, height:75}}>
                <Text style={{padding:0, margin:0}}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>დრო(UTC): </Text>{event.origin_time}
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{'\n'}გან/გრძ: </Text>{event.latitude} / {event.longitude}
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{'\n'}მაგნიტუდა: </Text>{event.ml}
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{'\n'}DEPTH: </Text>{event.depth}
                </Text>
                <View style={{marginBottom:18, marginTop:17,marginLeft:30}}>
                  <Ionicons name='alert-circle-outline' size={40} color='#4083ff'/>
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
    flex:5,
  },
  });

export default EqMap