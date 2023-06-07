import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { formatData } from '../../utils/formatData';
import { useRoute } from '@react-navigation/native';

const NewsDetail = () => {
  const route = useRoute()

  const { urlImage, title, description, uploadTime } = route.params

  return (
    <SafeAreaView style={styles.container}>
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
            <Text style={styles.title} >{title}</Text>
          </View>
          
          {/* Description */}
          <Text style={styles.description}>{description}</Text>
          <View style={styles.data}>
              <View style={styles.date}>
              {/* Formatted Upload Time */}
              <Text style={styles.text}>{formatData(uploadTime)}</Text>
              </View>
          </View>
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
    }
})

export default NewsDetail;