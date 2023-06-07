import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react';
import EqMap from '../components/eqMap/EqMap'

const MapScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <EqMap />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    
  }
})

export default MapScreen