import { View, StyleSheet} from 'react-native';
import React from 'react';
import EqMapDetail from '../components/eqMap/EqMapDetail';
import EqDetail from '../components/eqDetail/EqDetail';

const MapDetailScreen = () => {
  return (
    <View style={styles.screen}>
        <View style={styles.eq_screen}>
            <EqDetail val={'blue'}/>
        </View>
        <EqMapDetail />
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    eq_screen :{
      flex:1,
    }
  })

export default MapDetailScreen;