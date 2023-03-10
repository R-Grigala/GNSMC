import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const EqItem = ({eqId, origin_time, ml, depth, description}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("EventDetailScreen", {eqId, origin_time, ml, depth, description})}>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height:75}}>
        <View style={{flex: 1.2, flexDirection:'column'}}>
          <View style={{flex: 1, backgroundColor: 'blue'}}></View>
          <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
          <View style={{flex: 1, backgroundColor: 'green'}}></View>
        </View>
        <View style={{flex: 1, backgroundColor: 'darkorange'}}>
          <View style={{flex: 1, backgroundColor: 'black'}}></View>
          <View style={{flex: 1.9, backgroundColor: 'red'}}></View>
        </View>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex:1,
    borderWidth: 0.5,
    borderColor: '#c5c5c5',
    // borderRadius: 10,
    // marginVertical: 5,
    padding: 5,
  }
})

export default EqItem;