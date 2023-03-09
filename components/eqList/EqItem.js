import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const EqItem = ({id, origin_time, ml, depth, description}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("EqMap", {eqId: id, origin_time, ml, depth, description})}>
      <Text>დრო(UTC)</Text>
      <Text>{origin_time}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex:1,
    borderWidth: 1,
    borderColor: '#c5c5c5',
    borderRadius: 10,
    marginVertical: 5,
    padding: 30,
  }
})

export default EqItem;