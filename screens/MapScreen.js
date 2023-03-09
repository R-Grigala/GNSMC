import { View, StyleSheet } from 'react-native'
import React from 'react';
import EqMap from '../components/eqMap/EqMap'

const MapScreen = () => {
  return (
    <View style={styles.screen}>
      <EqMap />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    
  }
})

export default MapScreen