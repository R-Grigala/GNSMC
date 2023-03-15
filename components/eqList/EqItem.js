import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const EqItem = ({eqId, origin_time, ml, latitude, longitude, depth, description}) => {

  const navigation = useNavigation();

  const getColor = () => {

    if (ml > 5) {
      return '#ff0000';
    } else if (ml > 4) {
      return '#ff7b00';
    } else if (ml > 3) {
      return '#aa00ff';
    }else {
      return '#000'
    }

  };

  return (

    <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("EventDetailScreen", {eqId, origin_time, ml, depth, description})}>
      <View style={{ flexDirection: 'column', width: '100%', height:75}}>
        <View style={{flex:2, flexDirection: 'row', alignItems: 'center'}}>

          <View style={{flex: 1.3, flexDirection:'column'}}>

            <View style={styles.content}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#7d7d7d' }}>დრო(UTC):</Text>
              </View>
              <View style={{flex: 2, alignItems: 'center'}}>
                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{origin_time}</Text>
              </View>
            </View>

            <View style={styles.content}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#7d7d7d' }}>გან/გრძ(°C):</Text>
              </View>
              <View style={{flex: 2, alignItems: 'center'}}>
                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{latitude} / {longitude}</Text>
              </View>
            </View>

          </View>

          <View style={{flex: 1, alignItems: 'center'}}>

            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{ fontSize: 9, fontWeight: 'bold'}}>მაგნიტუდა(ML):</Text>
            </View>
            <View style={{flex: 1.9}}>
              <Text style={[styles.mlContent, { color: getColor() }]}>{ml}</Text>
            </View>

          </View>

        </View>

        <View style={{ flex:1, flexDirection: 'row', alignItems: 'center', alignContent: 'center'}}>
          <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#7d7d7d' }}>რეგიონი :</Text>
                </View>
                <View style={{flex: 4, alignItems: 'center'}}>
                  <Text style={{ fontSize: 8, fontWeight: 'bold'}}>{description}</Text>
                </View>
              </View>
          </View>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex:1,
    borderWidth: 1.2,
    borderColor: 'black',
    padding: 5,
  },
  content: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5
  },
  mlContent: {
    fontSize: 28,
    fontWeight: 'bold',
  }
})

export default EqItem;