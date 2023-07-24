import {SafeAreaView, StyleSheet, Dimensions, Image, View } from 'react-native'
import React from 'react'
import { getUrl } from '../../utils/utils';

const EqMapLegend = () => {
  return (
    <SafeAreaView style={styles.lg_container}>
        <View></View>
        <Image style={styles.lg_image} source={{ uri: `${getUrl()}/images/Earthquake_gif.gif`}}/>

    </SafeAreaView>
  )
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    lg_container:{
        flex:1, flexDirection: 'column',  alignItems: 'center' 
    },
    lg_image:{
        width: width * 0.07,
        height: width * 0.07,
    }
})

export default EqMapLegend;