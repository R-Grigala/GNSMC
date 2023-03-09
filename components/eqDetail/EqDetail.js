import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const EventDetail = () => {
    const route = useRoute()

    const { eqId, origin_time, ml, depth, description } = route.params

    return (
        <View style={styles.screen}>
          <Text style={styles.text}>Origin Time : {origin_time}</Text>
          <Text style={styles.text}>Magnitudes : {ml}</Text>
          <Text style={styles.text}>Depth : {depth}</Text>
          <Text style={styles.description}>Description : {description}</Text>
        </View>
    )
}
    
const styles = StyleSheet.create({
    screen: {
        padding:1
    },
    text: {
        fontSize: 15
    },
    description: {
        fontSize: 15
    }
})

export default EventDetail;