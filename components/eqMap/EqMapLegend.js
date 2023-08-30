import {SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, Image, View, Text } from 'react-native'
import React, { useContext } from 'react'
import { getUrl } from '../../utils/utils';
import { useTranslation } from 'react-i18next';
import themeContext from '../../theme/themeContext';

const EqMapLegend = ({onRefresh}) => {
    const theme = useContext(themeContext);
    const {t} = useTranslation();

  return (
    <SafeAreaView style={[styles.lg_container, {backgroundColor:theme.background}]}>
        <View style={styles.lg_content}>
            <Image style={styles.lg_image} source={{ uri: `${getUrl()}/images/Earthquake_gif.gif`}}/>
            <View style={styles.lg_textV}>
                <Text style={[{fontSize: 12}, {color:theme.color}]}> {t('selected')}</Text>
            </View>
        </View>
        <View style={styles.lg_content}>
            <Image style={styles.lg_image} source={{ uri: `${getUrl()}/images/Earthquake_red.png`}}/>
            <View style={styles.lg_textV}>
                <Text style={[{ fontSize: 12 }, {color:theme.color}]}> {t('7_91_days')}</Text>
            </View>
        </View>
        <View style={styles.lg_content}>
            <Image style={styles.lg_image} source={{ uri: `${getUrl()}/images/Earthquake_yellow.png`}}/>
            <View style={styles.lg_textV}>
                <Text style={[{ fontSize: 12 }, {color:theme.color}]}> {t('91_days')}</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.lg_touchable} onPress={onRefresh}>
            <Image 
                style={[styles.lg_icon, {tintColor:theme.refreshColor}]}
                source={
                    require('../../assets/icons/refresh-circle-outline.png')
                }
            />
        </TouchableOpacity>

    </SafeAreaView>
  )
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    lg_container:{
        flex: 1,
        flexDirection: 'row',
    },
    lg_content:{
        flex:1,
        marginLeft: 15,
        flexDirection: 'row',  
        alignItems: 'center'
    },
    lg_image:{
        width: width * 0.06,
        height: width * 0.06,
    },
    lg_textV:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    lg_touchable:{
        flex:0.6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    lg_icon: {
        width: 35, 
        height: 35, 
    }
})

export default EqMapLegend;