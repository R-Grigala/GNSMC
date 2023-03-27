import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const EventDetail = () => {
    const route = useRoute()

    const { eqId, origin_time, ml, depth, description } = route.params

    return (
        <View style={styles.screen}>
            <View style={{ flex:1, borderBottomWidth: 0.8, flexDirection: 'row',  alignItems: 'center' }}>
                <View style={{ flex:1, flexDirection: 'column' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>დრო(UTC): </Text>
                </View>
                <View style={{ flex:1.5, flexDirection: 'column'}}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{origin_time}</Text>
                </View>
            </View>

            <View style={{flex:1, borderBottomWidth: 0.8, flexDirection: 'row'}}>

                <View style={{ flex:1, flexDirection: 'column'}}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>მაგნიტუდა(ML): </Text>
                </View>
                <View style={{ flex:1, flexDirection: 'column'}}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{ml}</Text>
                </View>

            </View>
            <View style={{flex:1, borderBottomWidth: 1, flexDirection: 'row'}}>

                <View style={{ flex:1, flexDirection: 'column'}}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold'}}>სიღრმე(კმ): </Text>
                </View>
                <View style={{ flex:1, flexDirection: 'column'}}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold'}}>{depth}</Text>
                </View>

            </View>
            <View style={{flex:2, flexDirection: 'row', alignItems: 'center'}}>

                <View style={{ flex:1, flexDirection: 'column'}}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold'}}>რეგიონი: </Text>
                </View>
                <View style={{ flex:2, flexDirection: 'column'}}>
                    <Text style={{ fontSize: 10, fontWeight: 'bold'}}>{description}</Text>
                </View>

            </View>
        </View>
    )
}
    
const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding:10,
        borderBottomWidth: 0.5
    },
    text: {
        fontSize:15
    },
    description: {
        fontSize: 15
    }
})

export default EventDetail;