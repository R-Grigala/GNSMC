import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { useRoute } from '@react-navigation/native';
import themeContext from '../../theme/themeContext';
import { useTranslation } from 'react-i18next';

const EventDetail = () => {
    const {t} = useTranslation();
    const theme = useContext(themeContext);
    const route = useRoute()

    const { origin_time, ml, depth, description } = route.params

    return (
        <View style={[styles.screen, {backgroundColor: theme.background}, {borderColor:theme.color}]}>
            <View style={[{ flex:1, borderBottomWidth: 0.8, flexDirection: 'row',  alignItems: 'center' }, {borderColor:theme.color}]}>
                <View style={{ flex:1, flexDirection: 'column' }}>
                    <Text style={[{ fontSize: 15, fontWeight: 'bold' }, {color:theme.color}]}>{t('time_UTC')}</Text>
                </View>
                <View style={{ flex:1.5, flexDirection: 'column'}}>
                    <Text style={[{ fontSize: 15, fontWeight: 'bold' }, {color:theme.color}]}>{origin_time}</Text>
                </View>
            </View> 

            <View style={[{flex:1, borderBottomWidth: 0.8, flexDirection: 'row'}, {borderColor:theme.color}]}>

                <View style={{ flex:1, flexDirection: 'column'}}>
                    <Text style={[{ fontSize: 15, fontWeight: 'bold' }, {color:theme.color}]}>{t('magnitude')}</Text>
                </View>
                <View style={{ flex:1, flexDirection: 'column'}}>
                    <Text style={[{ fontSize: 15, fontWeight: 'bold' },{color:theme.color}]}>{ml}</Text>
                </View>

            </View>
            <View style={[{flex:1, borderBottomWidth: 1, flexDirection: 'row'}, {borderColor:theme.color}]}>

                <View style={{ flex:1, flexDirection: 'column'}}>
                    <Text style={[{ fontSize: 15, fontWeight: 'bold'}, {color:theme.color}]}>{t('depth_km')}</Text>
                </View>
                <View style={{ flex:1, flexDirection: 'column'}}>
                    <Text style={[{ fontSize: 15, fontWeight: 'bold'}, {color:theme.color}]}>{depth}</Text>
                </View>

            </View>
            <View style={{flex:2, flexDirection: 'row', alignItems: 'center'}}>

                <View style={{ flex:1, flexDirection: 'column'}}>
                    <Text style={[{ fontSize: 15, fontWeight: 'bold'}, {color:theme.color}]}>{t('region')}</Text>
                </View>
                <View style={{ flex:2, flexDirection: 'column'}}>
                    <Text style={[{ fontSize: 10, fontWeight: 'bold'}, {color:theme.color}]}>{description}</Text>
                </View>

            </View>
        </View>
    )
}
    
const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding:10,
        borderBottomWidth: 0.5,
    },
    text: {
        fontSize:15
    },
    description: {
        fontSize: 15
    }
})

export default EventDetail;