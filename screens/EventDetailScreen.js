import { View, StyleSheet} from 'react-native'
import React from 'react'
import EqEventMap from '../components/eqMap/EqEventMap'
import EqDetail from '../components/eqDetail/EqDetail'

const EventDetailScreen = () => {
  return (
    <View style={styles.screen}>
        <View style={styles.eq_screen}>
            <EqDetail/>
        </View>
        <EqEventMap />
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

export default EventDetailScreen