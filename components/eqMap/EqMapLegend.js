import {SafeAreaView, StyleSheet, Dimensions, Image, View, Text } from 'react-native';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import themeContext from '../../theme/themeContext';

const EqMapLegend = () => {
    const theme = useContext(themeContext);
    const {t} = useTranslation();

  return (
    <SafeAreaView style={[styles.lg_container, {backgroundColor:theme.background}]}>
        <View style={styles.lg_content}>
            <Image 
                style={styles.lg_image} 
                source={require('../../assets/icons/Earthquake_gif.gif')}
            />
            <View style={styles.lg_textV}>
                <Text style={[{fontSize: 12}, {color:theme.color}]}> {t('selected')}</Text>
            </View>
        </View>
        <View style={styles.lg_content}>
            <Image style={styles.lg_image} source={require('../../assets/icons/Earthquake_red.png')}/>
            <View style={styles.lg_textV}>
                <Text style={[{ fontSize: 12 }, {color:theme.color}]}> {t('7_91_days')}</Text>
            </View>
        </View>
        <View style={styles.lg_content}>
            <Image style={styles.lg_image} source={require('../../assets/icons/Earthquake_yellow.png')}/>
            <View style={styles.lg_textV}>
                <Text style={[{ fontSize: 12 }, {color:theme.color}]}> {t('91_days')}</Text>
            </View>
        </View>
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