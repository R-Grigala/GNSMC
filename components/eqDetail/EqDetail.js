import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const EventDetail = () => {
    const route = useRoute()

    const { eqId, origin_time, ml, depth, description } = route.params

    return (
        <View style={styles.screen}>
            <Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Origin Time : </Text>{origin_time}
            </Text>
            <Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Magnitudes : </Text>{ml}
            </Text>
            <Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Depth : </Text>{depth}
            </Text>
            <Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Description : </Text>{description}
            </Text>
        </View>
    )
}
    
const styles = StyleSheet.create({
    screen: {
        padding:1
    },
    text: {
        fontSize:15
    },
    description: {
        fontSize: 15
    }
})

export default EventDetail;