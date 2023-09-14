import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { formatNewsData } from '../../utils/formatData';
import { useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import themeContext from '../../theme/themeContext';

const NewsDetail = () => {
  const {t} = useTranslation();
  const theme = useContext(themeContext);
  const route = useRoute()

  const MoreInfo = ()=> {
    Linking.openURL('https://ies.iliauni.edu.ge/')
  }

  const { urlImage, title, description, uploadTime } = route.params

  return (
    <SafeAreaView style={[styles.container, {backgroundColor:theme.background}]}>
      <ScrollView>
        <View style={styles.viewimg}>
          {/* Image */}
          <Image source={{
              uri: urlImage
            }} 
            style={styles.image}
          />
        </View>
        <View style={{padding: 15}}>
          {/* Title */}
          <View style={styles.viewtext}>
            <Text style={[styles.title, {color:theme.color}]} >{title}</Text>
          </View>
          
          {/* Description */}
          <Text style={[styles.description, {color:theme.color}]}>{description}</Text>
          <View style={styles.data}>
              <View style={styles.date}>
                {/* Formatted Upload Time */}
                <Text style={styles.text}>{formatNewsData(uploadTime)}</Text>
              </View>
          </View>
          <TouchableOpacity style={styles.moreView}  onPress={MoreInfo}>
            <Text style={[styles.moreText, {color:theme.color}]}>{t('moreInfo')}</Text>
            <View style={[styles.moreView, {marginBottom:20}]}>
              <Text style={[styles.moreText, {color:'red'}]}>ies.iliauni.edu.ge</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    image:{
      height: 200,
      width: '100%',
    },
    title:{
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 10,
    },
    description:{
      fontSize: 16,
      fontWeight: '400',
      marginTop: 10,
    },
    data:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      alignItems: 'center',
    },
    date:{
      flex:1,
      alignItems: 'flex-end',
    },
    text:{
      textAlign: 'right',
      color: '#e63946',
      fontWeight: 'bold',
      fontSize: 15,
    },
    viewimg: {
      flex:1,
      marginBottom:10,
      borderTopWidth: 1,
      borderBottomWidth: 3,
    },
    viewtext: {
      flex: 1,
      marginBottom:10,
      borderBottomWidth: 1.5,
    },
    moreView:{
      marginTop:20,
      alignItems:'center',
      justifyContent:'center'
    },
    moreText:{
      fontSize:13,
      fontWeight:'bold'
    }
})

export default NewsDetail;