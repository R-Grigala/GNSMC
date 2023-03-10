import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import EqList from '../components/eqList/EqList';

const HomeScreen = () => {
  return (
    <View style={{flex:1}}>
      <View style={styles.content}>
        <Text style={styles.header}>მიმდინარე სეისმურობა</Text>
      </View>
      <View style={{flex:20}}>
        <EqList />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  content: {
    flex:1, 
    justifyContent: 'center', 
    alignItems: 'flex-start',
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    backgroundColor: 'rgba(0,0,0,0.3)', 
  },

  header: {
    flex: 1,
    color: 'rgba(122, 0, 2, 1)',
    marginLeft: 20,
    marginTop: 8,
    fontWeight: 'bold'
  },
});

export default HomeScreen;