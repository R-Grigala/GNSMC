import { View, Text } from 'react-native'
import React from 'react'
import EqList from '../components/eqList/EqList';

const HomeScreen = () => {
  return (
    <View style={{flex:1}}>
      <Text style={{flex:1}}>Earthquakes Events</Text>
      <View style={{flex:20}}>
        <EqList />
      </View>
    </View>
  )
}

export default HomeScreen;